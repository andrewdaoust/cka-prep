---
id: chapter11
title: Ingress
---

## Course Reading

### Learning objectives

- Discuss differences between an Ingress Controller vs a Service
- Learn about nginx and GCE Ingress Controllers
- Deploy and Ingress Controller
- Configure an Ingress Rule


### Overview

Earlier we learned about services and how to use them to connect containerized application in Kubernetes to outside the cluster. We can also used Ingress Controllers and Rules to do the same thing.

The difference between a service and ingress controllers lie in the efficiency.  Instead of many services, like `LoadBalancers`, traffic can be routed based on the host or the path.  This lets us centralize traffic that could be going to many services to a single point.

Ingress controllers are different from other controllers as they are not managed by the `kube-controller-manager`.  Multiple controller can be deployed with each using unique configuration.  A controller will use Ingress Rules to handle any traffic to and from outside the cluster.

There are many options for ingress controllers.  Some of them include GKE, nginx, Traefik, Contour, and Envoy.  Any tool that can be used as a reverse proxy should be able to work as an ingress controller, these agents will just need to consume rules and listen for the associated traffic. An Ingress Rule is an API object that we can create with `kubectl`.  When the rule is created, it updates the ingress controller to allow traffic to from the outside to the internal service. Services can be left as ClusterIPs and then we can define how traffic gets routed to them via ingress rules.


### Ingress controller

An ingress controller is a daemon running in a pod that watches the `/ingresses` endpoint of the API server.  They are part of the `networking.k8s.io/v1` group.  When new endpoints are created, the daemon uses the configured rules to allow the inbound traffic to the desired service, which is most often over HTTP.

You can deploy multiple ingress controllers. In that case, traffic should use annotations to select the correct controller to use.  A lack of matching annotations will cause every controller to try to satisfy the ingress traffic.


### nginx

Deploying nginx controllers is made simple through provided YAML files which can be found in the [Kubernetes Github](https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md)

Here you will also find configuration for several different platforms you can run a Kubernetes cluster on.

Like any ingress controller, there is come configuration required to deploy it properly. The deployment can be customized via configMaps, Annotations, or a custom template for more detailed use cases.

- Easy integration with RBAC
- Uses annotation `kubernetes.io/ingress.class: "nginx"`
- L7 traffic will require `proxy-real-ip-cidr` setting
- Bypasses kube-proxy for session affinity
- Does not use `conntrack` entries for iptables DNAT
- TLS requires host field to be defined


### Ingress API resources

A typical Ingress object looks like the this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ghost
spec:
  rules:
  - host: ghost.192.168.99.100.nip.io
    http:
      paths:
      - backend:
          service:
            name: ghost
            port:
              number: 2368
        path: /
        pathType: ImplementationSpecific
```

Like all object, you can manage Ingress objects with `kubectl`.

```bash
kubectl get ingress
kubectl delete ingress <ingress name>
kubectl edit ingress <ingress name>
```


### Deploying the ingress controller

Deploying an ingress controller is as simple as running a `kubectl apply` command.  You can find the source for a sample ingress from the link in the [nginx section](#nginx). You could also install the ingress controller via Helm by following the sample's guide.

You can check all that was deployed with the sample by running `kubectl get pods,rc,svc` to see what was deployed.


### Creating an ingress rule

Creating an ingress rule is fairly simple.  First let's assume we have a running pod and service.

```bash
kubectl run ghost --image=ghost
kubectl expose deployments ghost --port=2368
```

Now you could apply the ingress rules we defined with the example in [Ingress API resources](#ingress-api-resources)section. Once the ingress is created, the you should be able to access the application external to the cluster.


### Multiple ingress rules

If you have multiple services, you could also define multiple rules in the ingress definition. To do this you would just add to the list defined under the `rules` section of the manifest.


### Intelligent connected proxies

If you want to do things like service discovery, rate limiting, traffic management, or advanced metrics, you will likely need to implement a service mesh.  A service mesh consists of edge and embedded proxies that talk to each another to handle traffic based on rules from a control plane.

There are many options for service meshes, with some of the most popular being Envoy, Istio, and linkerd