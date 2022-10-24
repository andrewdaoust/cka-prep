---
id: chapter13
title: Logging and Troubleshooting
---

import { Terminal } from '@site/src/components/Terminal';

## Course Reading

### Learning objectives

- Understand Kubernetes doesn't have integrated logging yet
- Learn what external tools are used to aggregate logs
- Learn basic troubleshooting flow
- Discuss the use of side-cars for in-pod logs


### Overview

Because Kubernetes depends on API calls, it is sensitive to networking issues.  Standard Linux tools can be the best for debugging issues on a cluster. If the pod you are trying to troubleshoot does not have a shell, you may need to deploy a sidecar container in that pod that has a shell to debug. DNS configuration tools like `dig` are a good start, but as issues become more complex you may need to install more powerful tools like `tcpdump`.

Large and diverse clusters have can become difficult to track, so it is essential to be able to monitor.  By monitoring we mean being able to collect the most important metrics about cluster health, like CPU, memory, and disk usage, as well as network bandwidth. Above that, we may also want to monitor the key aspects of the application deployed in the cluster.

The Metric Server can be installed on the cluster to expose a standard API which can be consumed by other agents. Once installed the endpoint can be found on the cp node at `/apis/metrics/k8s.io/`.

Logging the activity across all nodes is also not something currently built into Kubernetes. For this, something like [Fluentd](https://www.fluentd.org/) is useful to implement a unified logging layer on the cluster.  Having an aggregated logging layer can allow for better visualization of a potential issue and gives the ability to globally search logs from the cluster.  This is a good place to start looking if networking issues aren't the root cause.

Another options is [Prometheus](https://prometheus.io/), which combines logging, metrics, and alerting capabilities. Prometheus also integrates well with dashboarding tools like [Grafana](https://grafana.com/grafana/).

There are also a handful of very useful commands withing `kubectl` to help in troubleshooting issues across the cluster.


### Basic troubleshooting steps

Troubleshoot should start with the obvious. If there are errors coming from the command line, those should be addressed first. The symptoms of the issue will often determine the next steps if troubleshooting continues past the first things checked.  Often it is a good idea to debug from the running container as long as it has a shell that can be accessed, typically by running 

<Terminal lines={
  [
    {
      text: "kubectl exec -it <pod_name> -- /bin/sh"
    },
  ]
} />

If the pod is running, it is good to check the logs with 

<Terminal lines={
  [
    {
      text: "kubectl logs <pod_name>"
    },
  ]
} />

This will give the standard output of the running container. If you have no logs, you may want to deploy a sidecar to generate and handle logs.  

The next step would usually be networking, which would include DNS firewalls, and general connectivity.  This is done with the traditional Linux tools to debug networking issues.

If networking was not the root cause, then security may be the next thing to check. RBAC (which is discussed later), SELinux, and AppArmor are all common issues, especially with network-centric applications.

Newer Kubernetes features allow for auditing on the kube-apiserver, which is useful for viewing actions after API calls have been accepted.

In summary, the general troubleshooting flow is:

- Errors in the command line
- Pod logs and status
- Network troubleshooting in the pod's container
- Checking node logs to ensure enough resources are available
- Security (RBAC, SELinux, AppArmor)
- API calls to and from the API
- Enable kube-apiserver auditing
- Networking issues between nodes (DNS and firewall)
- cp node controllers (controlling pods in a pending or errored state)


### Ephemeral containers

Added in v1.16 (beta as of v1.23, and stable as of v1.25), Kubernetes allow for a container to be added to an already running pod.  This allows us to deploy a fully-featured container to an existing pod so we do not need to terminate and re-create. This is helpful, especially if the issue is intermittent or difficult to reproduce.

Ephemeral container are added via the `ephemeralcontainers` handler via API call, not via the podSpec.  Therefore, `kubectl edit` cannot be used.

Instead you could use a `kubectl attach` to join an existing process in the container.  This may be helpful instead of a `kubectl exec`.  The functionality depend on the process being attached to.

You can deploy a new ephemeral container with `kubectl debug`.


### Cluster start sequence

Cluster startup beings with systemd (when originally built with `kubeadm`, may use another method for other initialization tools).  You can use `systemctl status kubelet.service` to see the current state and which configuration files are used to run the kubelet. The service uses the `/etc/systemd/kubelet.service.d/10-kubeadm.conf` to start-up the kubelet.

The service status shows `/var/lib/kubelet/config.yaml` as the configuration file use to set certain setting of the kubelet binary.  One important setting is the `staticPodPath` which specifies where the kubelet will ready every YAML file to start a pod.  By default it is set to `/etc/kubernetes/manifests/`.  Adding a yaml file here can be useful for troubleshooting the scheduler, as any request to the scheduler should create that pod.

Four default YAMLs start the base pods necessary for the kube-apiserver, etcd, kube-controller-manager, and kube-scheduler.

Once these four are up and running, the rest of the configured objects are created.


### Monitoring

Monitoring can be summarized as collecting metrics from the infrastructure and applications running on it.

Kubernetes used to use the now depreciated [Heapster](https://github.com/kubernetes-retired/heapster).  Instead, Kubernetes now has an integrated metrics server, which once set up, exposes a standard API for other agent to leverage.  Custom metrics can also be exposed and used. Once example might be an autoscaler using a custom metric to determine when a new node needs to be scaled.

Tools like Prometheus, OpenTelemetry, and Jaegar are often used for these use cases.


### Using `krew`

`kubectl` has the ability to be extended with plugins.  Plugins cannot override existing `kubectl` commands or add subcommands to them.  Declaration of namespace or container must come after the plugin name, for example:

<Terminal lines={
  [
    {
      text: "kubectl sniff some-pod -c primary-container -n different-namespace"
    },
  ]
} />

One of the best ways to discover and install new plugins is with `krew`, which is a plugin manager for `kubectl`.  You can find out more about installing it on the [`krew` Github repo](https://github.com/kubernetes-sigs/krew/).

Once installed you could run `kubectl krew help` to view the documentation on how to use `krew`.

More info about extending `kubectl` can be found in the [official docs](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/).


### Managing plugins

