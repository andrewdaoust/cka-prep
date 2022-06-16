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

```yaml
...
  containers:
  - name: alphacont
    image: busybox
    volumeMounts:
    - mountPath: /alphadir
      name: sharevol
  - name: betacont
    image: busybox
    volumeMounts:
    - mountPath: /betadir
      name: sharevol
  volumes:
  - name: sharevol
    emptyDir: {} 
```

The snipping from the YAML above would produce a Pod named `exampleA` that has two containers both with access to a volume, `sharevol`. An `emptyDir` or `hostPath` could both easily be used here since both require no additional setup.

If the Pod was created and then the following commands are run

```bash
kubectl exec -it exampleA -c betacont -- touch /betadir/foobar
kubectl exec -it exampleA -c alphacont -- ls -l /alphadir
```

you should see a `foobar` file in the `alphadir` even though the other container wrote the data.  The containers have immediate access to any data the either of them write to the shared volume, and there is nothing stopping them from overwriting each others data. Locking or versioning of the data written by the containers must be considered and implemented into the containerized application to avoid issues with corrupted data.


### Persistent volumes and claims

A persistent volume (pv) is another storage abstraction used to give data a lifetime that exceeds that of a Pod. Pods define a volume that used the type `persistentVolumeClaim` (`pvc`). The pvc has various parameters to define the size and the type of backend storage, known as the `StorageClass`.  The cluster then attached the `persistentVolume`.  The cluster will dynamically use volumes that are available, irrespective of the storage type, allowing the claims to use ay backend storage.

#### Phases of persistent storage

__Provisioning__ of the persistent volumes can take a few forms. For example, they could be defined ahead of time by the administrator of the cluster, or they might dynamically be created, say by a request from a cloud provider.

A __binding__ operation occurs when a watch loop see a new PVC, which contains the storage size, access request, and optionally, a `StorageClass`.  The controller locates a PV that matches this request, or it may have to wait for the `StorageClass` provisioner to create a new one.  The PV must meet the requested storage size, but it could contain more if only larger PV are available.

__Use__ of the PV begins when the volume is mounted to a Pod and continues through the lifetime of that Pod.

When the Pod is done with the volume and an API request is sent, the PVC is deleted and the volume is said to be __released__.  The volume remains in the same state from when the claim was deleted until it available to a new claim.  The data on the volume is retained depending on the defined `persistentVolumeReclaimPolicy`.

Volumes are __reclaimed__ when one of three options happen:

- A __retain__, which keeps the data and allows the admin to handle the storage and data.
- A __delete__, removing the API object and the associated storage.
- A __recycle__, which runs a `rm -rf /mountpoint` and then makes the volume available to a new claim.  With dynamic provisioning reaching good stability, this is intended to be depreciated.


Like with other API object, PVs and PVCs can be viewed and described with `kubectl`.

```bash
kubectl get pv
kubectl get pvc
```


### Persistent Volume

Here is a basic example of a PV declaration that uses a `hostPath` as the storage type.

```yaml
kind: PersistentVolume
apiVersion: v1
metadata:
  name: 10Gpv01
  labels: 
    type: local 
spec:
  capacity: 
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  hostPath:
    path: "/somepath/data01"
```

Each storage type has its own configuration settings.  An example would be a Ceph or GE Persistent Disk that already exists, so it would not need to be configured and would just need to be claimed from the provider.

PVs are not namespaced objects, but PVCs are. Stable as of v1.18, Raw Block Volumes are allowed to be statically provisioned, supporting a handful of different volume plugins, which you can find [an up-to-date list of here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#raw-block-volume-support).

Locally attached storage is also a stable feature, often used as a part of distributed file systems or for databases.


### Persistent Volume Claim

Once a PV has been created in the cluster, a manifest for a claim can be written and the claim used by a Pod definition.  In the Pod, the volume is a `persistentVolumeClaim`.

```yaml title={Persistent Volume Claim manifest}
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: myclaim
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 8GI
```

```yaml title={Pod manifest using PVC}
...
  spec:
    containers:
    ...
    volumes:
    - name: test-volume
      persistentVolumeClaim:
        claimName: myclaim
```

That example is rather simple. A more complex configuration might look like

```yaml title={Complex PVC usage}
...
  volumeMounts:
  - name: Cephpd
    mountPath: /data/rbd
  volumes:
  - name: rbdpd
    rbd:
      monitors:
      - '10.19.14.22:6789'
      - '10.19.14.23:6789'
      - '10.19.14.24:6789'
      pool: k8s
      image: client
      fsType: ext4
      readOnly: true
      user: admin
      keyring: /etc/ceph/keyring
      imageformat: "2"
      imagefeatures: "layering"
```


### Dynamic provisioning

Using persistent volumes and abstracting that storage with a claim were very powerful, but it originally required an administrator to create them.  Starting in Kubernetes v1.4, dynamic provisioning was added so that a cluster could request storage from an external, pre-configured source.  

The `StorageClass` API resources lets admins define a persistent volume provisioner. This is of a certain type with storage specific configuration.  Once created, users can request a claim from the `StorageClass`, and the API fills this via auto-provisioning. The resource will be reclaimed as configured by the provider.  Common choices from dynamic storage are AWS and GCE, and there are other options like a Ceph cluster or iSCSI.

This is an example of an AWS `StorageClass` using gp2 storage:

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: gp2
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
```


### Using Rook for storage orchestration

Rook is a project that allows for orchestration of storage by multiple providers. As with other agents within Kubernetes, Rook uses custom resource definitions (CRD) and a custom operator to handle the provisioning of storage according to backend storage type.  Currently several storage providers are supported, such as Ceph, Cassandra, and Network File System (NFS).

You can learn more about the project [here](https://rook.io/).


### Secrets

For data you don't want readable to the naked eye, like a password, you can use secrets. Secret API resources can take this data and encode or encrypt it so it is not easily readable.

You can create, get, and delete secrets like so:

```bash
kubectl create secret generic --help
kubectl create secret generic mysql --from-literal=password=root
kubectl get secrets
kubectl delete secret mysql
```

Secrets are not encrypted by default, but instead are base64 encoded. To encrypt secrets you must create an `EncryptionConfiguration` with a key and proper identity.  Then the kube-apiserver needs to have the `--encryption-provider-flag` enabled to a previously configured provider (e.g. `aescbc` or `ksm`). Once enabled, every secret must be recreated since the encryption happens on the write.

You can have multiple keys, each is tried during decryption.  The first key of the first provider is used to encrypt secrets. To rotate them, create a new key, restart all kube-apiserver processes, and then recreate all secrets.

The encoded string in the secret can be viewed with `kubectl`.  The secret is decoded and saved as a string to file, which can be used as an environment variable or in a new directory, similar to how a volume is mounted.

Secrets can be made manually with a manifest as well by pasting the encoded string into the manifest.  Here is an example:

```bash
echo LFTr@1n | base64
vim secret.yaml
```

```yaml title={secret.yaml}
apiVersion: v1
kind: Secret
metadata:
  name: lf-secret
data:
  password: TEZUckAxbgo=
```

where the output of the `echo` command is entered as the `password` value.


### Using secrets via environment variables

You can configure a secret as an environment variable for a Pod in a manifest like so:

```yaml
...
  spec:
    containers:
    - image: mysql:5.5
      name: dbpod
      env:
      - name: MYSQL_ROOT_PASSWORD
        valueFrom:
          secretKeyRef:
            name: mysql
            key: password
```

There is not a limit to the number of secrets used, but a secret can only be up to 1 MB in size.  Secrets, just like any other API object, takes up memory, so with large numbers you can deplete memory on a node.

Secrets are stored in `tmpfs` storage on the host node, and only get sent to the host Pod.  All volumes that a Pod request must exist before containers are started, secrets are no different.


### Mounting secrets as volumes

Secrets can also be mounted as files using volume definitions.  The mount path contains a file with the name of the secret.

```yaml
...
  spec:
    containers:
    - image: busybox
      command:
        - sleep
        - "3600"
      volumeMounts:
      - mountPath: /mysqlpassword
        name: mysql
      name: busy
    volumes:
    - name: mysql
        secret:
          secretName: mysql
```

Once the Pod is up and running, you can verify a secret is accessible with

```bash
kubectl exec -it busybox -- cat /mysqlpassword/password
```


### Portable data with ConfigMaps

ConfigMaps are similar to secrets, but the data they contain is not encoded.  ConfigMaps decouple a container image from their configuration artifacts (and this fits well with Kubernetes model of decoupling). Data is stored as key-value pairs or plain configuration files of any format, and it can come from a collection of files or all files in a directory. ConfigMaps can also be populated from a literal value.

Here's an example of how you might use a ConfigMap.  Assume you have a YAML (or any other file type) configuration file on your local machine. You can create a `configmap` object that contains this data. The `data` section of the ConfigMap will contain the configuration when you view the object.

```bash
kubectl get configmap envyaml -o yaml
```

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: envyaml
data:
  env.yaml: |
    ...
```

ConfigMaps are consumed in multiple ways:

- Pod environment variables from one or many ConfigMaps
- For Pod commands
- Populate a volume, or add ConfigMap data to specific path within a volume
- Set file names and access modes in a volume
- Use by system components or controllers


### Using ConfigMaps

Like secrets, Configmaps must exist prior to use (unless they are marked as optional) and are namespace dependent.

Let's first look at the use case of setting an environment variable. The manifest defining the Pods will use a `valueFrom` key and a `configMapKeyRef` value to get the data from the ConfigMap.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: envar-demo
spec:
  containers:
  - name: envar-demo-container
    env:
    - name: ENVIRON_VAR_VALUE
      valueFrom:
        configMapKeyRef:
          name: some-config
          value: someconfig.how
```

Now let's look at creating a volume with a ConfigMap.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-volunes
spec:
  volumes:
  - name: config-volume
    configMap:
      name: some-config
```


## Lab Exercises

### Lab 8.1 - Create a ConfigMap

