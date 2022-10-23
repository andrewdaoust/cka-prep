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

Logging the activity across all nodes is also not something currently built into Kubernetes. For this, something like Fluentd is useful to implement a unified logging layer on the cluster.  
