---
id: chapter14
title: Custom Resource Definitions
---

import { Terminal } from '@site/src/components/Terminal';

## Course Reading

### Learning objectives

- Grow available Kubernetes objects
- Deploy a custom resource definition (CRD)
- Deploy a new resource and API endpoints
- Discuss aggregates APIs


### Custom Resources

Kubernetes allows the flexibility to add your own dynamic resources to the cluster, outside the scope of those built-in.  Once a custom resource has been added, it can be created through the same methods of any other built-in resource, like with `kubectl`.

For a custom resource to be made part of the API, it needs a controller to receive the specification for that object and work to maintain the object in that state. These custom controllers should handle all the tasks a human would have to take if deploying the application outside of Kubernetes.

There are two methods for adding custom resource to the cluster that offer different levels of flexibility.  The less flexible option is to add a __custom resource definition__ (CRD). The more flexible option is to add __aggregated APIs__ (AA), which uses a new API server to be written and deployed in the cluster. Both options still manage custom resources outside the scope of the built-ins.

With RBAC, you will need to allow access to the new CRD resources and controller.  When using an AA, you can use the typical auth methods or a different one.


### Custom resource definitions



