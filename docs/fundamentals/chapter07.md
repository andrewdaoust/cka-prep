---
id: chapter07
title: Managing State with Deployments
---

## Course Reading

### Learning objectives

- Discuss Deployment configuration details
- Scale Deployments up and down
- Implement rolling updates and rollback
- Use Labels to select various objects


### Overview

When you run `kubectl run`, the default controller is a Deployment. This chapter focuses more in detail in the configuration of them.  Deployments, like other objects, can be defined in YAML or JSON, and when added to the cluster, a ReplicaSet and Pod will be created automatically.  

Deployment settings can be changed via an update which will create a new ReplicaSet which will then create new Pods. Updates can be applied as a block change or via a rolling update. Most updates can be configured by editing the YAML file defining the object and then running a `kubectl apply`. A `kubectl edit` can also be used to modify the in-use config.  Previous ReplicaSet versions are kept in case a rollback is needed.

This section also focuses on labels. These are essential for Kubernetes administration, but they are not an API resource.  Labels are user defined key-value pairs attached to resources stored in the object metadata.  Tey can be used to query or select resources in the cluster, which allows for flexible and complex management. Since labels are arbitrary, you can select all resources that share a label value without having to figure out what kind or how many of these resources exist.


### Deployments

Deployments came about as enhanced versions of ReplicaControllers (RC). ReplicaControllers ensure a specified number of Pod replicas are running at any one time.  They also give the ability to perform rolling updates, however all updates are managed on the client side, which is problematic if the client loses connection which can leave the cluster in an unplanned state.

To avoid these issues Deployments were introduced in the `apps/v1` API group.  They allow for server-side updates to Pods at specified rates.  Deployments can be used for canary and other deployment patterns. A Deployment generates a ReplicaSet, which offer more selection features than ReplicaControllers. One example is `matchExpressions`.

You can create a Deployment from an existing image with `kubectl` like so

```bash
kubectl create deployment dev-web --image=nginx
```


### Object relationship

