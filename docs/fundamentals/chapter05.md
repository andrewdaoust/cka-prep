---
id: chapter05
title: APIs and Access
---

## Course Reading

### Learning objectives

- Understand the API REST based architecture
- Work with annotations
- Understanding simple pod templates
- Using `kubectl` with greater verbosity to troubleshoot
- Separating cluster resources using namespacing


### API access

Kubernetes has a powerful REST API that is the heart of it's architecture.  Knowing how to find the endpoints for resources and understandong how the API changes between versions is vitally important for administrative tasks.  Starting at v1.16, the API no longer honors depreciated objects.

As was discusses in [the last section](./chapter04.md) the __kubeapi-server__ is the main agent for communication within and outside the cluster.  A `curl` query to the API will expose current groups.  These groups can have different versions which mature independently of one another. They follow a domain name format, with many reserved such as single word domains, the empty group, and anything with a `.k8s.io` ending.


### RESTful

`kubectl` work through making API calls for you through typical HTTP verbs.  You could also interact with the cluster externally using `curl` as long as you pass the appropriate certs and keys.

```bash
curl --cert userbob.pem --key userBob-key.pem \  
  --cacert /path/to/ca.pem \   
  https://k8sServer:6443/api/v1/pods
```

Thi ability to impersonate other users/groups allows for manual override of authentication which can be useful in debugging authorization policies for other groups of users.


### Checking access

Security will be discussed later but for now, it can be helpful to check current authorization of both administrators as well as other users.  Here are some examples:

```bash
kubectl auth can-i create deployments
```

Using the `auth can-i` subcommand we can check for what functionality a user has. In this case we would be checking if the user issuing the command with `kubectl` can create deployments in the `default` namespace. The API will return with a `yes` or `no`.

```bash
kubectl auth can-i create deployments --as bob
```

This time around we are checking if the user `bob`, by passing the username with the `--as` flag, can create deployments in the `default` namespace.

```bash
kubectl auth can-i create deployments --as bob  --nmespace developer
```

Again we check if the user `bob` can create deployments, this time in the `developer` namespace by also passing the `--namespace` flag.

Currently, there are three APIs that can be applied to set who/what can be queried:
- `SelfSubjectAccessReview` - Access review for any user, helpful for delegating to others
- `LocalSubjectReview` - Review is restricted to a namespace
- `SelfSubjectRulesReview` - A review showing allowed actions for a user withing a particular namespace

You can also use 

```bash
kubectl auth reconcile -f <YAML file>
```

to check to see if the necessary permissions exist to create the object specified in the file.  No output indicates the creation is allowed.


### Optimistic currency

API calls to Kubernetes must use the default serialization of JSON.  There are experimental features that use Google's protobuf serialization.  Even hrough we often work in YAML files, they are converted to and from JSON fr the API calls.

Kubernetes uses `resourceVersion` to determine API updates and implement optimistic currency., i.e. objects do not get locked from read time to write time of the object.  Kubernetes handles this by first checking the `resourceVersion` and if the number has been changed a `409 CONFLICT` error is returned.  The `resourceVersion` is backed by the `modifiedIndex` parameter in etcd.  It is unique to the namespace, kind, and server.  Any operations that do not change an object do not change the `resourceVersion`, for example `WATCH` and `GET`s.


### Using annotations

In Kubernetes labels are used to work with object or collections of objects.

Annotations on the otherhand serve as a way to add metadata to objects that is useful outside of Kubernetes.  Similar to labels, they are key-value pairs.  They also can hold more information and information that is more human readable than labels.

Some use cases of annotations:
- Timestamps
- Pointer to related objects in other ecosystems, e.g. a link to view logging externally or to a repo containing the source code of the object
- Developer email who created object
- Friendly description of object

Any of the uses for annotations is information that could sit elsewhere in some other database but allowing for them increases flexibilty and allows for better integration of management and deployment tools.

Some examples of how to annotate Pods in a namespace, overwrite it for a Pod, and then delete the annotation on that Pod:

```bash
kubectl annotate pods --all description='Production Pods' -n prod
kubectl annotate --overwrite pod webpod description="Old Production Pods" -n prod
kubectl -n prod annotate pod webpod description-
```


### Simple pod

Remember that a Pod is the smallest object we can work with in Kubernetes.  A pod can contain a single container, or multiple, often with the primary application container and some number of supporting ones.

Here is an example of a simple YAML Pod manifest:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: firstpod
spec:
  containers:
  - image: nginx
    name: stan
```

Notice the `apiVersion`, which is how Kubernetes tracks the _optimistic currency_. There is also the `kind` field to specify which kind of object is being defined in the manifest.  Then there is the `metadata` field to define any metadata for thr Pod with at least a `name`. Here is where you can add `labels` and `annotations` as well.  Finally is the `spec` field where you define what will run and any parmeters. This contains any definitions for `containers` that the Pod will contain, among some other possible definitions.

`kubectl create` can be used to create Pods in Kubernetes.

```bash
kubectl create -f simple.yaml
kubectl get pods
kubectl get pod firstpod -o yaml
kubectl get pod firstpod -o json
```

Once the deployment is created, you can check its status with the `get pods` sub commands and list the Pod definitions to the terminal with `get pods <pod name> -o <format>`.


### Manage API resources with `kubectl`

