---
id: chapter08
title: Volumes and Data
---

## Course Reading

### Learning objectives

- Understand and create persistent volumes
- Configure persistent volume claims
- Manage volume access modes
- Deploy applications with persistent data storage
- Discuss dynamic provisioning of storage
- Configure secrets and ConfigMaps


### Overview

Traditionally container engines do not offer storage that outlasts the container, since the container is seen as transient.  This could potentially lead to data loss or the need for complex data storage schemes.

In Kubernetes, __volumes__ share the lifetime of a Pod, not the containers in them.  If a container terminates, the next one still has the data. Volumes are directories, sometimes pre-populated, that is made available to the containers in a Pod.  Volume creation, backend storage, and the data/contents is dependent on the type of volume, of which there are many, which you can [read about here](https://kubernetes.io/docs/concepts/storage/volumes/#volume-types), each with different configuration and dependencies.

There is an effort to adopt the Container Storage Interface (CSI) to reach an industry standard interface for container orchestration to allow access to arbitrary storage systems. Currently, all volume plug-ins are "in-tree", meaning they are built with the Kubernetes source code. A swap to an "out-of-tree" model means 3rd-parties just need to develop their own driver to allow their plugin to be containerized, replacing the Flex plugin which has major security concerns.

Sometimes you may also want the storage to have a lifetime that exceeds a Pod as well, and for this __persistent volumes__ are used.  These allow volumes to out live Pods, and then be claimed by Pods with a Persistent Volume Claim. If one Pod is terminated, another one can come along and claim the persistent volume.

Two API object previously seen to pass data to Pods are ConfigMaps (for non-encoded data) and Secrets (for encoded data). These two object let you easily pass things like SSH keys, passwords, or configuration to the Pods, just to name a few use cases.


### Introducing volumes

![object relationship](./img/ch08-volumes.png)

Volumes can be defined in podSpec and where they are made available.  Each volume configuration requires a name, type, and mount point.One volume can be made available to multiple containers within the Pod, and this can be used as method of communication between containers.  Volumes can also be made available to multiple Pods, and each Pod has access to write to the volume.  Volumes have no concurrency checking, so the potential for corruption when enabling a volume for access from multiple Pods is high unless there is an outside mechanism to lock changes when others are in progress.

An access mode is part of the Pod request. As a request, more access may be granted, but not less, and an exact match is attempted to be made.  The cluster groups all the volumes from the requested mode and sorts from smallest to largest.  The claim is then checked against the list for the mode until one of sufficient size is found.  There are three access modes.:

- __ReadWriteOnce__ allows read-write by a single node
- __ReadOnlyMany__ allows read only access by multiple nodes
- __ReadWriteMany__ allows read-write access by multiple nodes

Two Pods on the same node can write to a volume that has a ReadWriteOnce access mode, but a Pod on another node would not become ready if trying to attach to that volume due to a `FailedAttachVolume` error.

When a volume is requested, the local kubelet run the `kubelet_pods.go` script to get a map of all the devices, determine and create mount points for containers, and then create the symlink on the host node file system to associate the storage to the container.  The API server requests the storage from the `StorageClass` plugin.

If a request for a StorageClass was not made, only the parameters for access mode and size will be used. The volume could come from any of the storage options available, there is no configuration to determine which of the available will be used.


### Volume spec

On of many types of storage options in Kubernetes is the `emptyDir`. The kubelet creates a directory in the container, but does not mount any storage.  Any data is written to the shared container space, and as a result is not persistent. When a Pod is destroyed, the data is deleted with the container.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
  - image: k8s.gcr.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /cache
      name: cache-volume
  volumes:
  - name: cache-volume
    emptyDir: {}
```

The YAML above creates a single container Pod with a volume, named `cache-volume`, which would be created in the `/cache` directory in the container.


### Volume types

There are quite a few different volume type that can be used, some using local storage, others using networked resources.

For GCE, AWS, and Azure, there were the `gcePersistentDisk`, `awsElasticBlockStore`, and `azureDisk` and `azureFile`, all of these not being depreciated, replaced with new out-of-tree plugins being in alpha or beta that use the new CSI features.

There are `emptyDir` and `hostPath` volumes which are easy to use. The `emptyDir` was already discussed. The `hostPath` volume type mounts a resource from the host node filesystem. The resource could be a directory, file socket, character, or block device.  The resource must already exist on the host to be used, and there are two types, `DirectoryOrCreate` and `FileOrCreate`, which create the resource on the host and then use them if they do not exist already.

For scenarios with multiple readers a network file system (`nfs`) or a Internet Small Computer System Interface (`iscsi`) are easy choices.

For multiple writers good choices are `rdb` for a block storage option, or `cephfs` or `glusterfs` if either are configured on the cluster.

All available volume types can be read about on the official [Kubernetes docs page](https://kubernetes.io/docs/concepts/storage/volumes/).

The CSI allows for more flexibility and decoupling plugins from the Kubernetes source code. It exists so that arbitrary plugins can be exposed more easily in the future.


### Shared volume example

