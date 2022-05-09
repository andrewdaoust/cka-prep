---
id: chapter06
title: API Objects
---

## Course Reading

### Learning objectives

- Explore API versions
- Discuss rapid change and development
- Deploy and configure an application using a Deployment
- Examine primitives for a self-healing application
- Scale an application


### Overview

This chapter will cover API objects.  We will learn about resources in the `v1` API group. Objects move from `alpha` to `beta` and then finally to `v1` once they are considered stable.

DaemonSets ensure a Pod for every node.  StatefulSets stick a container to a node and act like a deployment.  These have both progressed to `apps/v1` stability. Jobs and CronJobs have reached `batch/v1` stability.

Role-Based Access Control (RBAC), which is essential to security, went from `v1alpha` to `v1` stability in one release cycle.

Because Kubernetes is such a fast moving project, it is important to keep track of changes. Any changes could be important to ongoing administration of the cluster.

New feature tracking for Kubernetes can be found in [this repo](https://github.com/kubernetes/enhancements).

Release notes can be found by reading through the change logs in the Kubernetes repo [here](https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG). You can also search and filter through change logs on [this site](https://relnotes.k8s.io/).

:::important
Starting in `v1.16`, depreciated API object versions respond with an error rather than being accepted. This is an important change from past behavior.
:::


### `v1` API group

The `v1` API group is no longer a single group, but a collection of groups for each main object category.

So far, through the lab exercises, we have seen a few objects from the `v1` group.  Here's a recap of some of them:

#### Node

A `node` represents a machine, either virtual or physical, that is part of the Kubernetes cluster. Using `kubectl get nodes` will retrieve information about them. Scheduling on nodes can be turned on and off with `kubectl uncordon` and `kubectl cordon`, respectively.


#### Service account

`serviceaccounts` provide an identifier for running processes in a Pod to access the kube-apiserver and perform actions that it is granted to do.


#### Resource Quota

`resourcequotas` are useful tools that allow you to define quotas per namespace.  An example would be if you want a namespace to only run a certain number of Pods, you can define a `resourcequotas` manifest, create it with `kubectl` and Kubernetes will then enforce the quota.


#### Endpoint

Generally, `endpoints` are not managed by the administrator.  They represent the set of IPs for Pods matching a `service`. They come in handy when you want to check that a service actually matches running Pods. If the endpoint is empty, that means there are no matching Pods and something is probably wrong with the service definition.


### Discovering API groups

Each group name can be appended to the API URL to see details for that group.  For example, you could drill down to find specifics of the `apiregistration.k8s.io` group with `https://k8scp:6443/apis/apiregistration.k8s.io/v1`.

```json
{
  "kind": "APIResourceList",
  "apiVersion": "v1",
  "groupVersion": "apiregistration.k8s.io/v1",
  "resources": [
    {
      "name": "apiservices",
      "singularName": "",
      "namespaced": false,
      "kind": "APIService",
      "verbs": [
        "create",
        "delete",
        "deletecollection",
        "get",
        "list",
        "patch",
        "update",
        "watch"
      ],
      "categories": [
        "api-extensions"
      ],
      "storageVersionHash": "<omitted>"
    },
    {
      "name": "apiservices/status",
      "singularName": "",
      "namespaced": false,
      "kind": "APIService",
      "verbs": [
        "get",
        "patch",
        "update"
      ]
    }
  ]
}
```

If you followed this, you would see just one resource, called `apiservices`. IF it looks like it is listed twice, the lower is the status.  You'll also notice there are different verbs for each. Another entry is if the object is namespaced, or restricted to only one namespace.  In this case it is not.

To get a list of all the API groups you can run

```bash
curl --cert ./client.pem --key ./client-key.pem --cacert ./ca.pem https://k8scp:6443/apis
```

and you'll see a response something like

```json
{
  "kind": "APIGroupList",
  "apiVersion": "v1",
  "groups": [
    {
      "name": "apiregistration.k8s.io",
      "versions": [
        {
          "groupVersion": "apiregistration.k8s.io/v1",
          "version": "v1"
        }
      ],
      "preferredVersion": {
        "groupVersion": "apiregistration.k8s.io/v1",
        "version": "v1"
      }
    },
    ...
}
```

You can `curl` each URI to get more information on each like which verbs are available and other characteristics.


### Deploying an application

Using `kubectl create` we can quickly deploy an application to the cluster. We have looked at the Pods created running the application `nginx`. If we look closer though, we will see a Deployment was created, which manages ReplicaSets, which in turn control the Pod.

#### Deployment

This is a controller that manges the sate of ReplicaSets.  This higher level control give more flexibility for upgrades and administration.  Unless there is a good reason not to, use a Deployment.


#### ReplicaSet

These orchestrate the life cycles and updates of Pods.  ReplicaSets are new versions of Replication Controllers, the only difference being selector support.


#### Pod

As mentioned ad nauseam, these are the smallest unit that can be managed and interacted with in Kubernetes.  They run the application container and possibly any support containers.


### DaemonSets

DaemonSets are controllers that ensure Pods of the same type run on every cluster node.  When a new node is added to the cluster, a Pod that is the same sa all the others is started.  When the node is removed from the cluster, the DaemonSet ensures the Pod is deleted.  

DaemonSets are most often used for logging, metrics, and security Pods. They can also be configured to avoid nodes.

As usual, you get all the normal CRUD operation with `kubectl`

```bash
kubectl get daemonsets
kubectl get ds
```

### StatefulSets

A StatefulSet is an API object to manage stateful applications.  Pods deployed using StatefulSets use the same podSpec but they differ from a Deployment in that StatefulSets consider each Pod as unique and provides ordering in the deployment of Pods.  To track each Pod as a unique object, the controllers create an identity for the Pod composing of stable storage, stable network identity, and an ordinal.  This identity remains with the node, regardless of which node the Pod is running on at a given time.

By default, the deployment scheme is sequential, starting at 0 (e.g. `app-0`, `app-1`, `app-2`, etc).  The next Pod is not launched until the previous reaches a running, steady state, not in parallel.

Since Kubernetes v1.9, StatefulSets have been stable.


### Autoscaling

In the autoscaling group, there is the __Horizontal Pod Autoscaler (HPA)__.  They automatically scale Replication Controllers, ReplicaSets, or Deployments to meet the target CPU usage (50% by default). The kubelet checks the usage every 30 seconds and the usage is retrieved by a Metrics Server API call every minute. The HPA checks the Metrics Server every 30 seconds as well.  If a Pod is added or removed, the HPA waits 3 minutes.  Other metrics are retrievable through REST calls. The autoscaler does not collect the metrics, but instead makes use of the aggregated information to increase and decrease replicas to match configuration.

The __Cluster Autoscaler (CA)__ adds and removes cluster nodes. This is based on inability to deploy Pods or low utilization on a node for at least 10 minutes. Using the CA allows for dynamic request of resources from the cloud provider and minimizes cost for nodes not being used.  If using the CA, nodes should be added and removed with `cluster-autoscaler-` commands. Scale up and down is checked every 10 seconds and decisions are made every 10 minutes.  If a scale down fails, the group is rechecked after 3 minutes, with the failing node being eligible in 5.  The time to allocate a new node is mostly dependent on the cloud provider.

There is another project, the __Vertical Pod Autoscaler__, which will adjust the amount of CPU and memory requested by Pods. This is still under development.


### Jobs

Jobs are part of the `batch` API group and are used to run a defined number of Pods to completion. If a Pod fails, it is restarted until the number of completions is met.

Jobs can be seen as a way to do batch processing in Kubernetes but it can also be used for one-off Pods.  A Job spec will have a parallelism and completion key, and if omitted they are set to 1. If present, the parallelism number determines the number of Pods that can run concurrently. The completion number will set the number of Pods that need to run successfully for the Job to be considered complete. There are several patterns of implementation for Jobs, like traditional work queues.

Here is a simple example of a Job config:

```yaml title="job.yaml"
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
```

There are also Cronjobs, which work similar to Linux jobs and use the same time syntax. Because there are cases where a job could not run during a time period, or because it could run twice, the requested Pod should be idempotent. An optional `.spec.concurrencyPolicy` can be supplied to determine how to handle existing jobs if the time segment expires.  If it is set to `Allow` (which is the default), another concurrent job will be run. If it is set to `Forbid` the current job continues and the new job is skipped. If `Replace` is the value, the current job is cancelled and a new one takes its place.


### RBAC

The `rbac.authorization.k8s.io` group has four important resources:
- ClusterRole
- Role
- ClusterRoleBinding
- RoleBinding

They are used for Role-based access control (RBAC). These resources allow us to define Roles in the cluster and associate users with the roles.  For example, we could create roles with some of the following permissions:

- Read-only access to Pods in a specific namespace
- Access to create deployments, but not services

We will come back to RBAC when we discuss security.


## Lab Exercises

### Lab 6.1 - RESTful API access

This lab will continue focusing on access to the cp of the cluster. One authentication method is the use of a `Bearer token`.  We'll work with one and also deploy a local proxy for application-level Kubernetes API access.

We'll again us `curl` to make insecure API requests.  We need to find the IP and port, and then the token so we can retrieve the cluster data using REST calls. By default, most of the information is restricted, but changes to the authentication policy can allow more access.

1. First we will find the IP and port number. On the cp node, run

```bash
kubectl config view
```

and at the top you should see something like 

```yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://k8scp:6443
  name: kubernetes
```

2. Next we will find the bearer token. We can do this by listing secrets in all namespaces or just the default one.

```bash
kubectl get secrets -A
kubectl get secrets
```

Listing the secrets in all namespaces you will see a secret for each of the cluster's controllers.

Now we can look at the details of the secret in the `default` namespace.

```bash
kubectl describe secret default-token-<postfix>
```

Now extract the token from the `token` field from the `describe` output.

```bash
export token=$(kubectl describe secret default-token-<postfix> | grep ^token | cut -f7 -d ' ')
echo $token
```

3. Now we can test to try and get basic information from the cluster.

```bash
curl https://k8scp:6443/apis --header "Authorization: Bearer $token" -k
```

We use the `-k` flag to avoid passing a cert.

Now try the API v1 group endpoint.

```bash
curl https://k8scp:6443/api/v1 --header "Authorization: Bearer $token" -k
```

This should return successfully. Now try to list the namespaces on the cluster.

```bash
curl https://k8scp:6443/api/v1/namespaces --header "Authorization: Bearer $token" -k
```

This should fail with an error. The error message tells us the request was seen as `system:serviceaccount` which does not have RBAC authorization to list all namespaces in the cluster.

```json
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {},
  "status": "Failure",
  "message": "namespaces is forbidden: User \"system:serviceaccount:default:default\" cannot list resource \"namespaces\" in API group \"\" at the cluster scope",
  "reason": "Forbidden",
  "details": {
    "kind": "namespaces"
  },
  "code": 403
}
```

4. Pods also can make use of included certs. They are automatically made available in `/var/run/secrets/kubernetes.io/serviceaccount/` on the Pod filesystem.  We will deploy a simple Pod and then we can confirm the token file on the container is the same as what we set in thr `token` variable.

```bash
kubectl run -it busybox --image=busybox --restart=Never
```

Then on the shell of the container run

```bash
ls /var/run/secrets/kubernetes.io/serviceaccount/
cat /var/run/secrets/kubernetes.io/serviceaccount/token
exit
```

Then delete to Pod to free up resources.

```bash
kubectl delete pod busybox
```


### Lab 6.2 - Using the proxy

Now we will access the API vis a proxy.  The proxy can run on a node or from within a Pod using a sidecar. We will deploy a proxy listening on a loopback address  and then use `curl` to access the cluster. 

For troubleshooting, if `curl` works, but not from outside the cluster, we have narrowed down the issue to authentication/authorization and not issues further down in the API ingestion process.

First, we can view how to use the `proxy` command in `kubectl`.

```bash
kubectl proxy --help
```

And then we can actually create the proxy and set it to the background.  make note of the process ID so we can stop it later.

```bash
kubectl proxy --api-prefix=/ &
```

:::note
The process ID will be the first line of the response followed by the endpoint for the endpoint that proxy will be listening on. In this example, it is `18050`

```bash
[1] 18050
Starting to serve on 127.0.0.1:8001
```
:::

Now we can use `curl` as we did before in the last lab section, this time without the token.

```bash
curl http://127.0.0.1:8001/api/
curl http://127.0.0.1:8001/api/v1/namespaces
```

Notice that this time, when you `curl` the endpoint to  list the namespaces, it works. This is because the proxy is making the request on our behalf and has the correct permissions.

Finally we can turn the proxy down using the process ID we took note of before.

```bash
kill 18050
```


### Lab 6.3 - Working with Jobs

#### Create a Job

While most API objects are deployed so that they are continually available, sometimes you may have ones that you want to run a set number of times (a `Job`), or on a regular basis (a `CronJob`).

First lets create a Job.  This one is very simple, as it just sleeps for three seconds then stops.

```
vim job.yaml
```

```yaml title="job.yaml"
apiVersion: batch/v1
kind: Job
metadata:
  name: sleepy
spec:
  template:
    spec:
      containers:
      - name: resting
        image: busybox
        command: ["/bin/sleep"]
        args: ["3"]
      restartPolicy: Never
```

```bash
kubectl create -f job.yaml
kubectl get job
kubectl describe job sleepy
kubectl get job sleepy -o yaml
```
If you run the `get jobs` command fast enough you will see it has not completed yet. Wait 3 seconds, and you should see the `COMPLETIONS` change to `1/1`.

The if you look at the config info for the job, we can see the three main parameters that affect how a Job will run.  In the output you should see `backoffLimit`, `completions`, and `parallelism` fields.  Let's delete the existing Job as it will just continue to `AGE` in a completed state.

```bash
kubectl delete job sleepy
```

Now let's edit the `job.yaml` file. Within the `spec` section, add a line for that says `completions: 5`. Edit the YAML with `vim`, it should look like this:

```yaml title="job.yaml"
apiVersion: batch/v1
kind: Job
metadata:
  name: sleepy
spec:
  completions: 5   # <-- Add this line
  template:
    spec:
      containers:
      - name: resting
        image: busybox
        command: ["/bin/sleep"]
        args: ["3"]
      restartPolicy: Never
```

This will make the Job need to complete 5 times before it is completed.

```bash
kubectl create -f job.yaml
kubectl get jobs.batch
kubectl get pods
```

If you continue to run `get pods` you will see more `sleepy` pods come up as the previous ones complete until all 5 are completed. If you continue to run `get jobs` you will see `COMPLETIONS` start as `0/5` and end at `5/5`.

Then delete the job again.

```bash
kubectl delete job sleepy
```

Next we will add the `parallelism` parameter to the yaml spec file and recreate the job again. Again, edit the YAML with vim, it should look like this

```yaml title="job.yaml"
apiVersion: batch/v1
kind: Job
metadata:
  name: sleepy
spec:
  completions: 5   
  parallelism: 2   # <-- Add this line
  template:
    spec:
      containers:
      - name: resting
        image: busybox
        command: ["/bin/sleep"]
        args: ["3"]
      restartPolicy: Never
```

Then create the Job.

```bash
kubectl create -f job.yaml
kubectl get jobs
kubectl get pods
```

This time when you `get pods` you will see 2 `sleepy` Pods are running concurrently. When you `get jobs` you should again see it start at `0/5` and end in `5/5` `COMPLETIONS`.

Now let's add the `activeDeadlineSeconds` to the job spec and set it to `15`.  The Job and all Pods will now run for 15 seconds, then stop.  We will also increase the sleep time to 5 so it doesn't expire on it's own.

```bash
vim job.yaml
```

```yaml title="job.yaml"
apiVersion: batch/v1
kind: Job
metadata:
  name: sleepy
spec:
  completions: 5   
  parallelism: 2   
  activeDeadlineSeconds: 15  # <-- Add this line
  template:
    spec:
      containers:
      - name: resting
        image: busybox
        command: ["/bin/sleep"]
        args: ["5"]   # <-- Update this line
      restartPolicy: Never
```

Then delete the Job and recreate it.

```bash
kubectl delete job sleepy
kubectl create -f job.yaml
kubectl get jobs
```

You should see the Job run and get to `3/5` or `4/5` completions within the 15 second allowed runtime and then see it ages without any more completions.

Get the YAML output for the job and take a look at the `status` section at the bottom.

```bash
kubectl get job sleepy -o yaml
```

```yaml
status:
  conditions:
  - lastProbeTime: "2022-05-09T14:54:54Z"
    lastTransitionTime: "2022-05-09T14:54:54Z"
    message: Job was active longer than specified deadline
    reason: DeadlineExceeded
    status: "True"
    type: Failed
  failed: 1
  startTime: "2022-05-09T14:54:39Z"
  succeeded: 4
  uncountedTerminatedPods: {}
```

See the the Job failed due to `DeadlineExceeded` because the `Job was active longer than specified deadline`.

Finally delete the Job.

```bash
kubectl delete jobs.batch sleepy
```


#### Create a CronJob

CronJobs create watch loops to then create Jobs on your behalf when the time is true.  To start let's copy our `job.yaml` file and then edit it in `vim`.

```bash
cp job.yaml cronjob.yaml
vim cronjob.yaml
```

```yaml title="cronjob.yaml"
apiVersion: batch/v1beta1  # Update to v1beta1 from v1
kind: CronJob              # Update to CronJob kind
metadata:
  name: sleepy
spec:
  schedule: "*/2 * * * *"  # Gets a Linux style cronjob syntax
  jobTemplate:             # New jobTemplate and spec fields. Existing template tabbed in twice below the new spec field
    spec:
      template:
        spec:
          containers:
          - name: resting
            image: busybox
            command: ["/bin/sleep"]
            args: ["5"]
          restartPolicy: Never
```

Now let's create the job. It will take 2 minutes for the CronJob to generate a new Job.

```bash
kubectl create -f cronjob.yaml
kubectl get cronjobs.batch
kubectl get jobs.batch
```

You should see the CronJob has not run yet and not Jobs have been created if you run the `get` commands before the 2 minute mark.

Wait two minutes and run the `get` commands again.

You should see the `LAST SCHEDULE` change and a list of complete jobs for them, respectively.

Now let's change the CronJob to terminate any Jobs that run for more than 10 seconds and make the `sleep` run for 30 seconds to ensure it fails.

```bash
vim cronjob.yaml
```

```yaml title="cronjob.yaml"
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: sleepy
spec:
  schedule: "*/2 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          activeDeadlineSeconds: 10  # Added this line
          containers:
          - name: resting
            image: busybox
            command: ["/bin/sleep"]
            args: ["30"]   # Updated to 30 seconds
          restartPolicy: Never
```

Then delete the CronJob and recreate it and run through the get commands like before.

```bash
kubectl delete cronjob sleepy
kubectl create -f cronjob.yaml
kubectl get cronjobs.batch
kubectl get jobs.batch
```

You should see that the Jobs never hit a complete state.

Delete the CronJob once you are done.

```bash
kubectl delete cronjob sleepy
```


## Knowledge check

- All API versions should __not__ be considered stable
- __Deployments__ are the suggested object for deploying and scaling applications
- The following is Kubernetes objects from smallest to largest: __Container, Pod, ReplicaSet, Deployment__
- A DaemonSet runs __one__ Pod per node
- Deployments handle scaling of an application based on administrative config.  __Horizontal Pod Autoscaling__ scales resources based on CPU usage (50% by default)
- Jobs and CronJobs belong to the __batch__ API group
