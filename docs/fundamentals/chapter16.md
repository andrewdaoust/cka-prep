---
id: chapter16
title: High Availability
---

import { Terminal } from '@site/src/components/Terminal';

## Course Reading

### Learning objectives

- Discuss high availability in Kubernetes
- Discuss collocated and non-collocated databases in Kubernetes
- Learn steps to achieve HA in Kubernetes


### Cluster high availability

Newer versions of kubeadm allow multiple cp nodes to be joined with collocated etc databases, which allows for additional redundancy and fault tolerance. As long as the database is available to the cluster, the cluster will continue to run when a cp node goes down.  The kubelet information will catch up when it is brought back online.

etcd requires at least 3 instances for quorum to determine if data is accurate.  If the data is corrupt the database could become unavailable.  When etcd reached quorum, it elects a leader and returns to functioning as it did before failure. You have the option to collocate the database with the control planes, or run an external etcd cluster.  kubeadm makes the collocated option easier.

It is a good ideas to use a load balancer to ensure worker nodes and additional control planes have continual access.  Default configuration uses SSL, so unless you want to handle the extra work of cert configuration, the load balancer should be set up as a TCP passthrough.

Certificates are only decodes for particular node names so it is better to use a FQDN instead of an IP address.


### Collocated databases

The easier way to gain high availability is to use `kubeadm` to join two additional cp nodes to the cluster. The command is similar to that of joining worker nodes, except with passing the `--control-plane` option and a `certificate-key`. This key will need to be generated unless you initialize the extra cp nodes within two hours of cluster initialization.

If a node fails, you lose the control plane and the database.


### Non-collocated databases

Using external etcd clusters allows for less disruption when a node fails.  This setup requires more hardware to spread out the running services as well as more work configuring.  The external etcd would need to be configured first, which kubeadm has options to do.  Once etcd is running, the certs need to manually be copied to the first cp node.

The `kubeadm-config.yaml` file will need to be updated with etcd set to external, the endpoints need to be added, and the certificate locations specified.  When the first control plane is initialized and ready, the additional cp nodes can be added one at a time, allowing them to fully initialize and become available.


## Lab Exercises

### Lab 16.1 - High availability steps

At a high level the steps for setting up the cluster for HA are as follows:

1. Deploy a load balancer that is configured to pass traffic through to the new proxy node. HAProxy is easy to deploy for this use case.
2. Install Kubernetes on the two additional nodes.
3. Use kubeadm to join the two new nodes.
4. Update the proxy to backend IPs of the cp nodes.
5. Temporarily shut down the first cp and monitor the traffic.

#### Detailed steps

