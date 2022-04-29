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

#### Service account

#### Resource Quota

#### Endpoint
