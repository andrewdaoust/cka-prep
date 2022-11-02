---
id: chapter15
title: Security
---

import { Terminal } from '@site/src/components/Terminal';

## Course Reading

### Learning objectives

- Explain the flow of API requests
- Configure authorization rules
- Examine authentication policies
- Use network policies to restrict traffic


### Overview

Security is a very broad and complex topic, this section will cover it as it relates to Kubernetes specifically.

This will include the following topics:

- Authentication and authorization with the API server
- RBAC
- The admission control system
- Securing pods more tightly with security contexts and security policies
- Network policies


### Cloud security considerations

When running Kubernetes in the cloud (or any other software for that matter), the first consideration is to ensure the hardware, firmware, and OS you are running on are secure and hardened.  Once this is ensured, you can start securing the software itself.  In Kubernetes, the first thing that should be secured is the kube-apiserver, which has a list of considerations, tools, and settings to limit and control the access to it.

Since Kubernetes is a network heavy runtime, securing the network inside the cluster, like with a NetworkPolicy, and outside tools like firewalls is important.

The next layer of security is the application level. The applications run inside Kubernetes should be secured through means of minimizing base images used, container immutability, and through the use of static/runtime analysis tools.  These steps are often done during the development process or when building the CI/CD pipeline.  Things like AppArmor and SELinux should be used to further protect an environment from malicious containers.

It is also important to continually be checking for vulnerabilities. Security is not just getting the settings and configuration right on the first deployment.


### Accessing the API

Any action performed in a Kubernetes cluster must go through the API. Each request to the API goes through 3 main steps:

- Authentication (token)
- Authorization (RBAC)
- Admission controller

When the API receives a request, the authentication step is first by going through whatever the configured authentication module is.  If authentication fails, then the request is rejected.  If it succeeds, then the request is passed to the authorization step.

The authorization step checks the request against existing policies. If the user has the correct permissions to perform the requested action, the request will then pass to admission. If not the request is rejected at this step.

Finally, the admission step is generally responsible for the validation in the content of the request. If validation succeeds, then the request succeeds.

Additionally, the request is received encrypted using TLS.  When creating a cluster with `kubeadm` this is done manually.  You can learn more about how the API server is configured [here](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). More about access control in Kubernetes can be learned in the docs [here](https://kubernetes.io/docs/concepts/security/controlling-access/).


### Authentication

There are 3 things to remember when it comes to auth in Kubernetes.

- Auth is done with certificates, tokens, or username/password (in it's most basic form)
- Users aren't created by the API and should be managed elsewhere externally
- Processes use system accounts to access the API (more on that [here](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/))

Additionally there are two other advanced auth methods, webhooks to verify a bearer token, and with external OpenID providers.

The type of authentication used is determined to by the kube-apiservers startup options.  Here are some examples of startup options that can be used.

- `--basic-auth-file`
- `--oidc-issuer-url`
- `--token-auth-file`
- `--authorization-webhook-config-file`

More than one authentication module can be used.  Module options are:

- x509 client certs
- static, bearer, or bootstrap tokens
- static password file
- service account
- OpenID connect token

Each module in use is tried until successful, and the order is not guaranteed.  Anonymous access is also available to be enabled, otherwise a 401 response is returned.

More info about Kubernetes authentication can be [found in the docs](https://kubernetes.io/docs/reference/access-authn-authz/authentication/).


### Authorization

There are two main modes of authorization, RBAC and webhooks.  These are also configured using kube-apiserver startup options.  Some examples are:

- `--authorization-mode=RBAC`
- `--authorization-mode=Webhook`
- `--authorization-mode=AlwaysDeny`
- `--authorization-mode=AlwaysAllow`

The different authorization modes implement policies.  Request attributes are then checked against the policies.


### RBAC and webhook modes

