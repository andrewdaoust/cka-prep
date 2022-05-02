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

Using `kubectl create` we can quickly deploy an application to the cluster. We have looked at the Pods created running the application `nginx`. If we look closer though, we will see a Deployment was created, whcih manages RepliceSets, which in turn control the Pod.

#### Deployment

This is a controller that manges the sate of ReplicaSets.  This higher level control give more flexibility for upgrades and administration.  Unless there is a good reason not to, use a Deployment.


#### ReplicaSet

These orchestrate the life cycles and updates of Pods.  ReplicaSets are new versinos of Replication Controllers, the only difference being selector support.


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

