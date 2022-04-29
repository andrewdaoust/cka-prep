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

Kubernetes has a powerful REST API that is the heart of it's architecture.  Knowing how to find the endpoints for resources and understanding how the API changes between versions is vitally important for administrative tasks.  Starting at v1.16, the API no longer honors depreciated objects.

As was discusses in [the last section](./chapter04.md) the __kube-apiserver__ is the main agent for communication within and outside the cluster.  A `curl` query to the API will expose current groups.  These groups can have different versions which mature independently of one another. They follow a domain name format, with many reserved such as single word domains, the empty group, and anything with a `.k8s.io` ending.


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
kubectl auth can-i create deployments --as bob  --namespace developer
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

API calls to Kubernetes must use the default serialization of JSON.  There are experimental features that use Google's protobuf serialization.  Even though we often work in YAML files, they are converted to and from JSON fr the API calls.

Kubernetes uses `resourceVersion` to determine API updates and implement optimistic currency., i.e. objects do not get locked from read time to write time of the object.  Kubernetes handles this by first checking the `resourceVersion` and if the number has been changed a `409 CONFLICT` error is returned.  The `resourceVersion` is backed by the `modifiedIndex` parameter in etcd.  It is unique to the namespace, kind, and server.  Any operations that do not change an object do not change the `resourceVersion`, for example `WATCH` and `GET`s.


### Using annotations

In Kubernetes labels are used to work with object or collections of objects.

Annotations on the other hand serve as a way to add metadata to objects that is useful outside of Kubernetes.  Similar to labels, they are key-value pairs.  They also can hold more information and information that is more human readable than labels.

Some use cases of annotations:
- Timestamps
- Pointer to related objects in other ecosystems, e.g. a link to view logging externally or to a repo containing the source code of the object
- Developer email who created object
- Friendly description of object

Any of the uses for annotations is information that could sit elsewhere in some other database but allowing for them increases flexibility and allows for better integration of management and deployment tools.

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

Notice the `apiVersion`, which is how Kubernetes tracks the _optimistic currency_. There is also the `kind` field to specify which kind of object is being defined in the manifest.  Then there is the `metadata` field to define any metadata for thr Pod with at least a `name`. Here is where you can add `labels` and `annotations` as well.  Finally is the `spec` field where you define what will run and any parameters. This contains any definitions for `containers` that the Pod will contain, among some other possible definitions.

`kubectl create` can be used to create Pods in Kubernetes.

```bash
kubectl create -f simple.yaml
kubectl get pods
kubectl get pod firstpod -o yaml
kubectl get pod firstpod -o json
```

Once the deployment is created, you can check its status with the `get pods` sub commands and list the Pod definitions to the terminal with `get pods <pod name> -o <format>`.


### Manage API resources with `kubectl`

All objects in Kubernetes are exposed via RESTful API calls so that they can be managed with HTTP, JSON, or XML (although typically it is HTTP).  Object states can be changed with the standard HTTP verbs.

`kubectl` exposes information for the REST calls it is making if you increase the verbosity.  This will include additional logging like the `curl` commands being made behind the scenes. Max verbosity is `10`.

```bash
kubectl --v=10 get pods firstpod
kubectl --v=10 delete pods firstpod
```

If you ran the first command above, you would see the HTTP method as `XGET` and when running the second you would see it change to `XDELETE`.


### Access from outside the cluster

Instead of using `kubectl` you could use `curl` to make changes to the cluster.

The basic server configuration (with omitted TLS cert info) can be found using 

```bash
kubectl config view
```

Running this command will show config pulled from `~/.kube/config`.  In the [previous section](./chapter05.md#manage-api-resources-with-kubectl), if you ran the command with additional verbosity, you'd see something like `Config loaded from file ~/.kube/config` in the logging.

Without the cert authority, key, and cert from the kube config file, only insecure `curl` commands would work, which severly limits how much you can interact with the cluster.  In the upcoming lab we will use `curl` and TLS to access the cluster.


### `~/.kube/config`

Here's an example of a section of a `~/.kube/config` file:

```yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdF.....
    server: https://10.128.0.3:6443 ;
    name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: LS0tLS1CRUdJTib.....
    client-key-data: LS0tLS1CRUdJTi....
```

Here is what each major section is.

#### `apiVersion`

Similar to other objects in Kubernetes, this field instructs the kube-apiserver where to assign the data.

#### `clusters`

Contains the name of the cluster and where to send API requests. The sub-field `certificate-authority-data` is also passed to authenticate requests made by `curl`.

#### `contexts`

This field allows for easy access to multiple clusters, and potentially by multiple users, in one configuration file.  It can be used to set the `namespace`, `user`, or `cluster`.

#### `current-context`

Shows what cluster and user `kubectl` commands will go to. These can be passed on a per command basis.

#### `kind`

Every object in Kubernetes has a `kind` set. In this case, the `kind` of object is `Config`.

#### `preferences`

Not currently used in the example above, but it can used for optional settings of `kubectl`, like colorizing outputs.

#### `users`

Nicknames for associated client credentials, such as key and certs, usernames and passwords, or a token.

A token and username/password are mutually exclusive and can be set up via `kubectl config set-credentials`.


### Namespaces

_Namespace_ is a term used both for the feature of the Linux kernel and Kubernetes the allows for segregation of resources.  In the case of the Linus kernel, it is segregating system resources, while in Kubernetes it is the segregation of API objects.

Every call to the API includes a namespace, and it uses the `default` namespace if one is not specified: `https://<Cluster IP>:6443/api/v1/namespaces/default/pods`

Four namespace are created along with the cluster.

1. __`default`__ - Where resources are assumed unless otherwise specified.
2. __`kube-node-lease`__ - Namespace for worker node lease information to be stored.
3. __`kube-public`__ - Namespace that is readable by all, even ones not authenticated.  General information about the cluster is included in this namespace.
4. __`kube-system`__ - Namespace for infrastructure pods.

If you want to see resources in all namespaces, the `--all-namespaces` option can be passed with the `kubectl` command.


### Working with namespaces

You can view the list of namespaces with

```bash
kubectl get ns
```

To create a new one you can do

```bash
kubectl create ns mynspace
```

You can describe a namespace like other objects

```bash
kubectl describe ns mynspace
```

The config in YAML format for the namespace can be viewed with

```bash
kubectl get ns/mynspace -o yaml
```

And you can delete a namespace with

```bash
kubectl delete ns/mynspace
```

Once a namespace is created, it can be referencing in YAML when defining other objects.

```yaml
apiVersion: V1
kind: Pod
metadata:
    name: redis
    namespace: mynspace
...
```


### API resources with `kubectl`

Here is a list of all objects that are exposed by `kubectl`.  Expect this list to change as Kuberentes continues to mature.

- `all`
- `certificatesigningrequests` or `csr`
- `clusterrolebindings`
- `clusterroles`
- `clusterroles` which is only available to federation apiservers
- `componentstatuses` or `ca`
- `configmaps` or `cm`
- `controllerrevisions`
- `cronjobs`
- `customresourcedefinition` or `crd`
- `daemonsets` or `ds`
- `deployments` or `deploy`
- `endpoints` or `ep`
- `events` or `ev`
- `horizontalpodautoscalers` or `hpa`
- `ingresses` or `ing`
- `jobs`
- `limitranges` or `limits`
- `namespaces` or `ns`
- `networkpolicies` or `netpol`
- `node` or `no`
- `persistentvolumeclaims` or `pvc`
- `persistentvolumes` or `pv`
- `poddisruptionbudgets` or `pdb`
- `podpreset`
- `pods` or `po`
- `podsecuritypolicies` or `psp`
- `podtemplates`
- `replicasets` or `rs`
- `replicationcontrollers` or `rc`
- `resourcequotas` or `quota`
- `rolebindings`
- `roles`
- `secrets`
- `serviceaccounts` or `sa`
- `services` or `svc`
- `statefulsets`
- `storageclasses`


### Additional resource methods

On top of basic resource management, certain objects have some other extremely helpful endpoints in the API.  For example, the logs of a container, `exec`ing into a container, or watching for changes.

```bash
curl --cert /tmp/client.pem --key /tmp/client-key.pem \
  --cacert /tmp/ca.pem -v XGET \
  https://<Cluster IP>:6443/api/v1/namespaces/default/pods/firstpod/log
```

Equivalently with `kubectl` would be

```bash
kubectl logs firstpod
```

Some other calls that can be made are

```bash
GET /api/v1/namespaces/{namespace}/pods/{name}/exec
GET /api/v1/namespaces/{namespace}/pods/{name}/log
GET /api/v1/watch/namespaces/{namespace}/pods/{name}
```


### Swagger and OpenAPI

The Kubernetes API was built using a Swagger specification. This has been evolving towards the OpenAPI initiative, which is extremely useful so you can autogenerate client code.  All stable resource definitions are in the docs site.  The API groups can be browsed in a Swagger UI on the [OpenAPI specification page](https://swagger.io/specification/).


### API maturity

Using API groups and versions allow development to continue without changes to existing groups and allows for easier growth and splitting work among different teams.

Use of JSON and Protobuf serialization will follow the same release guidelines.

#### Alpha

This is denoted with `alpha` in the version name. These features are often still buggy and disabled by default. These features can also change or altogether disappear without notice. Backward compatibility is not guaranteed either. These features should only be used on test clusters that are rebuilt often.

#### Beta

Denoted with `beta` in the version name.  These features are more well tested and are enabled by default. It also ensures backward compatibility will be tested going forward but hasn't been tested and adopted widely enough to be considered stable.

#### Stable

Stable releases have no designator, just the version number. Currently, the only stable version is `v1`.


## Lab Exercises

### Lab 5.1 - Configuring TLS access

#### Overview

`kubectl` makes calls to the Kubernetes API for you, but you could do the same using `curl` or a golang client with the correct TLS keys. Making calls to the _kube-apiserver_ get or set PodSpec, or desired state. If thr request is a new state the control plane will update the cluster until the desired state is met by the current state.

API requests must pass their information as JSON. `kubectl` converts YAML into JSON when making the API request. There are many settings in the API request but there must be the `apiVersion`, `kind`, `metadata`, and `spec` included to declare what kind of object to create. The `spec` field depends on the type of object being created.

First view the `kubectl` configuration file.

```bash
less $HOME/.kube/config
```

Notice, the `certificate-authority-data`, `client-certificate-data` and `client-key-data` fields in the file.  These are what we want to extract so we can use `curl` directly to interact with the API.

Next we will want to extract the keys to variables.

```bash
export client=$(grep client-cert $HOME/.kube/config |cut -d" " -f 6)
export key=$(grep client-key-data $HOME/.kube/config |cut -d " " -f 6)
export auth=$(grep certificate-authority-data $HOME/.kube/config |cut -d " " -f 6)
```

You can then write these to the console to make sure they were extracted properly with `echo` like so:

```bash
echo $client
echo $key
echo $auth
```

Then we will decode each of these so we can use them with `curl`.

```bash
echo $client | base64 -d - > ./client.pem
echo $key | base64 -d - > ./client-key.pem
echo $auth | base64 -d - > ./ca.pem
```

To decode the base64 string, we first write the string to standard output with `echo`. This is then piped into the `base64` command in decode mode (`-d`) taking the input from standard output (by passing `-`) and then redirect the output to a `pem` file.

Next get the API server URL from the config file.

```bash
kubectl config view | grep server
```

Now we can use `curl` to interact with the API.

```bash
curl --cert ./client.pem \
  --key ./client-key.pem \
  --cacert ./ca.pem
  https://<ClusterIP>:6443/api/v1/pods
```

And you should receive a large JSON response. Now create a JSON file to create a new Pod.

```bash
vim curlpod.json
```

and it should contain

```json
{
  "kind": "Pod",
  "apiVersion": "v1",
  "metadata": {
    "name": "curlpod",
    "namespace": "default",
    "labels": {
      "name": "examplepod"
    }
  },
  "spec": {
    "containers": [
      {
        "name": "nginx",
        "image": "nginx",
        "ports": [ {"containerPort": 80} ]
      }
    ]
  }
}
```

Now we will send an `XPOST` with `curl` to create the Pod with this JSON.

```bash
curl --cert ./client.pem \
  --key ./client-key.pem \
  --cacert ./ca.pem
  https://<ClusterIP>:6443/api/v1/namespaces/default/pods \
  -XPOST -H'Content-Type: application/json' -d@curlpod.json
```

You can then verify the pod is `Running` with 

```bash
kubectl get pods
```

### Lab 5.2 - Explore API calls

Once way to see what commands are doing is with `strace`.

To use it, prefix your command with it.

```bash
strace kubectl get nodes
```

The information is cached, so running the command multiple times may cause some slightly variation to the outputs. Near the end is a call to the `openat` function. Find the path that is being passed to the function and `cd` to its parent directory.

```bash
cd $HOME/.kube/cache/discovery/
ls
```

You'll see the another subdirectory names after the hostname and the port like `k8scp_6443`. Change into it and list the directories contents and you'll see there are more subdirectories with configuration info for Kubernetes.

```bash
cd k8scp_6443
ls
```

You can list out all the subfiles as well with

```bash
find .
```

Now let's view the objects in `v1` of the API.  

```bash
python3 -m json.tool v1/serverresources.json
```

For each object type, or `kind` you can view the list of `verbs` or actions that can be used. Under each resource type, you'll see if the object has any `shortNames` which makes using them in the command line easier.

For example, `endpoints` resources have a short name of `ep` so the following commands are equivalent

```bash
kubectl get endpoints
kubectl get ep
```

Notice there are 37 different resource types in the v1 file we are looking at.

```bash
python3 -m json.tool v1/serverresources.json | grep kind
```

Looking in other files you can find some more

```bash
python3 -m json.tool apps/v1/serverresources.json | grep kind
```

Don't forget to delete the `curlpod` to free up the system resources.

```bash
kubectl delete po curlpod
```

## Knowledge check

- Kubernetes uses a RESTful API-driven architecture, accepting standard HTTP verbs
- __Annotations__ allow for metadata to be included with an object that may be helpful outside the Kubernetes object interaction
- __`apiVersion`__, __`kind`__, __`metadata`__, and __`spec`__ bust be included in a pod template
- __`--all-namespaces`__ should be appended to commands to affect every namespace with `kubectl`
- Objects are __not__ restricted to a single namespace
- 