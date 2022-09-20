---
id: chapter10
title: Helm
---

## Course Reading

### Learning objectives

- Examine simple k8s deployments using Helm
- Understand Chart templates used by Helm to describe what to deploy
- Discuss how Tiller uses Charts to create a Deployment
- Initialize Helm on a cluster


### Deploying complex applications

Helm is similar to other packages like `apt`, `pip`, or `npm`, where a chart is similar to a package in that it has binaries as well as install and uninstall scripts.

Most containerized applications have many manifests, from that of the deployment, service, and configMaps, to other objects like secrets or Ingress. All of these need a manifest. Helm comes in handy, as it packages all these manifests into a single tarball. The tarball can be put into a repo, then the repo can be searched to discover the application and then deploy it.

Tarballs can be collected into a repo for sharing, and multiple repos can be connected. Helm also allows for easy upgrade and rollback from the command line.


### Helm v3

Helm underwent a near complete overhaul from v2 to v3.

One of the most notable changes is the removal of the need for a Tiller pod to deploy charts. This presented security issues since it needed elevated permissions to deploy. The functionality is now all built into the command, no longer needing initialization for use.

In v2, Helm did a two way strategic merge, looking at the currently applied manifest vs the one being applied and applying the updates. This did not account for any changes done outside of Helm. v3 corrects for this by also checking the current state of the live objects.

Generated names are no longer automatic in Helm v3, either one must be passed or `--generated-name` must be passed as an option.


### Chart contents

A __chart__ is an archived set of Kubernetes resource manifests making up a distributed application.

The basic structure of a chart is 

```
├── Chart.yaml
├── templates/
└── values.yaml
```

Let's walk through each major section.

First is the __`Chart.yaml`__ file. This is basic information about the chart, like the name, version, keywords, etc.

Next is the __`values.yaml`__ file. This contains the keys and values that will be used to fill in the templates to generate the release.  This is done via Go template syntax.

Finally is the __`templates`__ directory. This is comprised of all the resource manifests for the application.

For more a more in-depth look at charts and their structure, including more detailed break downs of what is discussed here, as well as additional files and directories, the [official docs](https://helm.sh/docs/topics/charts/) are a good place to look.


### Templates

The templates  that charts use are resource manifests that Go templating syntax. Variable from `values.yaml` are then applied in to fill in the template. 

Here is an example of a template for a Kubernetes secret, defining some passwords for a MariaDB.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: {{ template "fullname" . }}
  labels:
    app: {{ template "fullname" . }}
    chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"
    release: "{{ .Release.Name }}"
    heritage: "{{ .Release.Service }}"
type: Opaque
data:
  mariadb-root-password: {{ default "" .Values.mariadbRootPassword | b64enc | quote }}
  mariadb-password: {{ default "" .Values.mariadbPassword | b64enc | quote }}
```


### Chart repositories and hub

Repositories are simply HTTP servers with index file and a tarball of the present charts.

Only the [Artifact Hub](https://artifacthub.io/) is searched unless you add additional repositories. You can search the Artifact Hub with `helm search hub`.

You can interact with repositories by using `helm repo`, like so

```
helm repo add bitnami ht‌tps://charts.bitnami.com/bitnami
helm repo list
```

Once repos are added, charts can be searched via keywords, and then searched via the `helm search repo` command.


### Deploying a chart

Deploying charts is as easy as running a `helm install` command. Before you run this, however you may need some existing resources, like PVs for a chart's PVCs. Currently, this information is only listed in the `README` of the chart. This can be found by downloading the tarball and expanding it to view the `README`.

```bash
helm fetch bitnami/apache --untar
cd apache/
ls
```

Once a chart is installed, with Helm you can list the release, delete it, upgrade it, and roll it back.

Output for a deployment should be carefully reviewed. It will oftentimes contain information about access to the application that was deployed. If there are missing required pre-existing resources, the output is often a good place to start troubleshooting.


## Lab Exercises

### Lab 10.1 - Working with Helm and charts

Helm allows for simple deployment of complex configurations.  This is handy as it allows for a multi-part application to be deployed in a single step. By using a chart, the required components and their relationships are declared. A local agent, like Tiller, use the API to create object for you, effectively making Helm orchestration for orchestration.

This lab will focus on installing Helm, and then deploying a Chart to configure a MariaDB.

First we will download `helm` on the cp node and then we will set it up to use the binary. You can find all the available versions of `helm` [here on Github](https://github.com/helm/helm/releases/).

```bash
wget https://get.helm.sh/helm-v3.9.4-linux-amd64.tar.gz
tar -xvf helm-v3.9.4-linux-amd64.tar.gz
sudo cp linux-amd64/helm /usr/local/bin/helm
```

Now that `helm` is installed, we can use it to deploy a chart. A good place to start looking at some charts is [here on Github](https://github.com/helm/charts/tree/master/stable). Chart can also be supplied by a vendor or you could make your own.

Let's start using `helm` by searching the Artifact Hub for database charts.

```bash
helm search hub database
```

You can add additional repos to `helm` as well. Let's add a new repo and then deploy an echo server.

```bash
helm repo add ealenn https://ealenn.github.io/charts
helm repo update
helm upgrade -i tester ealenn/echo-server  --debug
```

When using the `--debug` flag, you will get more output when resources are being created. The output usually will have information on how to access the application as well. Now let's make sure the pod we deployed is running and then check the service.

```bash
kubectl get pods
kubectl get svc
curl <svc ClusterIP>
```

You can view the chart history on a system with `helm list`. If you include the `-a` option, all charts, including deleted and failed, will be shown. Now let's uninstall the echo server.

```bash
helm uninstall tester
helm list
```

Now let's find the downloaded chart tarball and then extract it to view the contents. In particular, look at the `values.yaml` file to see some of the values that could have been set.

```bash
find $HOME -name *echo*
cd $HOME/.cache/helm/repository ; tar -xvf echo-server-*
cat echo-server/values.yaml
```

Values can be examined or edited before installation.  Let's add a new repo and then download a new chart.

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm fetch bitnami/apache --untar
cd apache/
```

Look at the `apache` chart. You'll notice it has a similar structure. Read through the `values.yaml`.

```bash
ls
less values.yaml
```

Install the chart, ensure the application is running, and then check the service is working. It may be helpful to update the `values.yaml` so that a LoadBalancer is used, instead of an autoscaler for this small lab.

```bash
helm install anotherweb .
k get svc
curl <anotherweb-apache ClusterIP>
```

If the installation was successful, you should get a HTML response from the `curl` saying "It works!".

To finish, uninstall the Helm charts. We will use `helm` again in future labs.

```bash
helm uninstall anotherweb
```

## Knowledge check

- A __chart__ is the template that describes the application to deploy, any configuration, and dependencies
- Chart deployment __does__ tell us about missing dependencies
- __Tiller__ is the agent that deploys objects based on the chart
- A collection of charts is called a __repository__
