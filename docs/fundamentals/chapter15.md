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

#### RBAC

RBAC is short for Role Based Access Control.

All objects you can create in Kubernetes are modelled in the API and each object belongs to some group.  The resources allow for standard CRUD operations.  In Kubernetes YAML manifests, these operations are called __verbs__.  

On top of these basic operations are rules, which act upon API groups, and roles are made up of sets or rules.  These roles scope a single namespace, or with `ClusterRoles` give scope across the entire cluster.

These operations act on 1 or 3 subjects, user accounts (these are not API objects), service accounts, and groups (know as `clusterrolebinding` in `kubectl`).  RBAC then writes rules to allow or deny the requested operation by the user, role, or group.

RBAC is complex but the basic flow is as follows:

- Determine/create namespace
- Create a cert for the user against the cluster CA. Since users aren't API objects outside auth is required, such as OpenSSL certs.
- Set credential for the user to the namespace using a context
- Create a role for the expected tasks
- Bind the user to the role
- Verify user has limited access

Learn more about RBAC in the [official docs](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).

#### Webhook

Webhooks are HTTP callbacks, usually a POST request that occurs when something happens to act as an event-notification.  Web applications that implement webhooks send POST requests to a URL when certain events occur.

More about Kubernetes' webhooks mode can be found in the [official docs](https://kubernetes.io/docs/reference/access-authn-authz/webhook/).


### Admission controller

The final step for allowing an API request is admission control.

An admission controller is software that has access to the content of the objects being requested. They will modify or validate this content and are the last layer that can deny the request.

Starting in v1.13 of the kube-apiserver, admission controllers are compiled into the binary, instead of a list passed during execution.Admissions controllers are now needed for certain features to work and is not consider a mature feature.  To enable or disable certain admission controller plugins, you can pass startup options to the kube-apiserver.  Some examples:

- `--enable-admission-plugins=Initializers,NamespaceLifecycle,LimitRanger`
- `--disable-admission-plugins=PodNodeSelector`

Change the names of the plugins you want to enable and disable.

You can learn more about each of the admission controllers and what they do in the [official docs](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#what-does-each-admission-controller-do).


### Security contexts

You can set security limitations on pods using what is called a security context.  These can be defined at the pod or container level as part of the manifest for the resource.

Some examples of what you may use this for are 

- limit UID of a process
- limit Linux capabilities
- filesystem group limitations

Another example would be preventing a process from running as the root user. The definition of a Pod using this security context would look something like the following.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  securityContext:
    runAsNonRoot: true
  containers:
  - image: nginx
    name: nginx
```

When you try to deploy this pod to the cluster, it would fail and never become ready since `nginx` runs as the root user, but the security context would prevent this.

More about configuring security contexts can be found in the [official docs](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/).


### Pod security policies

Pod security policies (PSPs) automate the enforcement of security contexts.  A PSP is defined as a standard Kubernetes manifest like any other standard API object.  The policies are cluster level and govern what pods can do (including access permissions, what users to run as, etc).

Similar to the example in the [security contexts section](#security-contexts), if you wanted to make sure all pods are not able to run as root, the you could define a PSP to enforce this.

```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  seLinux:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
  runAsUser:
    rule: MustRunAsNonRoot
  fsGroup:
    rule: RunAsAny
```

For PSPs to be enabled, their associated admission controller plugin must be configured. These pair well with RBAC configuration to fine tune what users are allowed to run and the low level permissions their containers will have.

:::note
PSPs have been depreciated in v1.25 and their replacement, Pod Security Admission is in alpha
:::


### Network security policies

Kubernetes allows for all pods to reach each other by default. You can, however, still set configuration to isolate and block traffic. Newer versions of Kubernetes also allow egress traffic to be blocked.  To do any of this, you would use a `NetworkPolicy`.  Because all traffic is allowed, it may be best to implement a policy that drops all traffic and then others to allow for specific ingress and egress traffic.

When defining a network policy, you can limit it to a namespace, with a `podSelector`, or by using labels to target the correct pods.  Further definition is for ingress to and egress from IP addresses and ports.

Not all network plugins support the `NetworkPolicy` kind.  Some that do are:

- Calico
- Romana
- Cilium
- Kube-router
- WeaveNet

Previously, Kubernetes requires namespaces be annotated as part of the network isolation, like so: `net.beta.kubernetes.io/network-policy= value`.  While this is no longer required, some plugins may still need it.

Here is an example of a network policy definition.  The policy only affects the default namespace and pods with a `role=db` label.  Ingress and egress settings are both defined.

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: ingress-egress-policy
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - ipBlock:
        cidr: 172.17.0.0/16
        except:
        - 172.17.1.0/24
    - namespaceSelector:
        matchLabels:
          project: myproject
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 6379
  egress:
  - to:
    - ipBlock:
        cidr: 10.0.0.0/24
    ports:
    - protocol: TCP
      port: 5978
```

Using empty ingress or egress rules will block traffic for the affected pods. It is not recommended you do this, but instead us a separate network policy. Some network policy recipes for different scenarios can be found [here on Github](https://github.com/ahmetb/kubernetes-network-policy-recipes).


### Default network policy

Below is an example of a network policy that does not allow ingress traffic to all pods not already matched to another policy (the `{}` does this).  All egress traffic is still allowed by this policy.

```yaml
apiVersion: networking.k8s.io
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

As policies can grow quite complex, it is often a good idea that write multiple smaller and simpler policies rather than one large complex policy.


## Lab Exercises

### Lab 15.1 - Working with TLS

First look at the kubelet on both the cp and worker nodes.

<Terminal lines={
  [
    {
      text: "systemctl status kubelet.service",
      host: "cp"
    }
  ]
} />

<Terminal lines={
  [
    {
      text: "systemctl status kubelet.service",
      host: "worker"
    }
  ]
} />

Under the output for the cgroups, find where the configuration file can be found. It will likely be under `/var/lib/kubelet/config.yaml`.

Now take a look at the configuration file.

<Terminal lines={
  [
    {
      text: "sudo cat /var/lib/kubelet/config.yaml",
    }
  ]
} />

In the output, near the end of the file, you should see a `staticPodPath` which shows where the kube-apiserver would look for pod spec.  Take a look at this directory. and some of the files within it. In the kube-controller-manager spec, notice that you can see the files referenced for the certs being used.

<Terminal lines={
  [
    {
      text: "sudo ls /etc/kubernetes/manifests",
    },
    {
      text: "sudo cat /etc/kubernetes/manifests/kube-controller-manager.yaml",
    },
    {
      text: "sudo cat /etc/kubernetes/manifests/kube-apiserver.yaml",
    }
  ]
} />

The token for authorization are kept as secrets. Look at the secrets within the `kube-system` namespace as well as one of the secrets themselves.

<Terminal lines={
  [
    {
      text: "kubectl -n kube-system get secrets",
    },
    {
      text: "kubectl -n kube-system get secrets certificate-controller-token-<unique id> -o yaml",
    },
  ]
} />

You can use the `kubectl config` command to view and update parameters in the configuration of the cluster.  This can help prevent mistakes that accidentally remove access to the cluster. Keys and certs used are redacted from the config viewing. View some of the options for setting new credentials.

<Terminal lines={
  [
    {
      text: "kubectl config view",
    },
    {
      text: "kubectl config set-credentials --help",
    },
  ]
} />

Make a copy of the configuration file so that we can modify it later.

<Terminal lines={
  [
    {
      text: "cp $HOME/.kube/config $HOME/cluster-api-config",
    },
  ]
} />

### Lab 15.2 - Authentication and authorization

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: developer
  namespace: development
rules:
- apiGroups: ["", "extensions", "apps"]
  resources: ["deployments", "replicasets", "pods"]
  verbs: ["list", "get", "watch", "create", "update", "patch", "delete"]
```


```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: developer-role-binding
  namespace: development
subjects:
- kind: User
  name: DevDan
  apiGroup: ""
roleRef:
  kind: Role
  name: developer
  apiGroup: ""
```


### Lab 15.3 - Admission controllers

View the existing admission controller settings.

<Terminal lines={
  [
    {
      text: "sudo grep admission /etc/kubernetes/manifests/kube-apiserver.yaml",
    },
  ]
} />


## Knowledge check

- __Authentication__, __authorization__, and __admission control__ are all part of accessing the Kubernetes API
- The __kube-apiserver__ accepts and `--authorization-control` option to change the operation tool in use
- You __can__ specify egress rules in network policies
