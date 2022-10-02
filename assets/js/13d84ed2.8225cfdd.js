"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[9085],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2502:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"chapter10",title:"Helm"},s=void 0,p={unversionedId:"fundamentals/chapter10",id:"fundamentals/chapter10",title:"Helm",description:"Course Reading",source:"@site/docs/fundamentals/chapter10.md",sourceDirName:"fundamentals",slug:"/fundamentals/chapter10",permalink:"/cka-prep/docs/fundamentals/chapter10",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/chapter10.md",tags:[],version:"current",frontMatter:{id:"chapter10",title:"Helm"},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/cka-prep/docs/fundamentals/chapter09"},next:{title:"Ingress",permalink:"/cka-prep/docs/fundamentals/chapter11"}},c=[{value:"Course Reading",id:"course-reading",children:[{value:"Learning objectives",id:"learning-objectives",children:[],level:3},{value:"Deploying complex applications",id:"deploying-complex-applications",children:[],level:3},{value:"Helm v3",id:"helm-v3",children:[],level:3},{value:"Chart contents",id:"chart-contents",children:[],level:3},{value:"Templates",id:"templates",children:[],level:3},{value:"Chart repositories and hub",id:"chart-repositories-and-hub",children:[],level:3},{value:"Deploying a chart",id:"deploying-a-chart",children:[],level:3}],level:2},{value:"Lab Exercises",id:"lab-exercises",children:[{value:"Lab 10.1 - Working with Helm and charts",id:"lab-101---working-with-helm-and-charts",children:[],level:3}],level:2},{value:"Knowledge check",id:"knowledge-check",children:[],level:2}],h={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"course-reading"},"Course Reading"),(0,r.kt)("h3",{id:"learning-objectives"},"Learning objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Examine simple k8s deployments using Helm"),(0,r.kt)("li",{parentName:"ul"},"Understand Chart templates used by Helm to describe what to deploy"),(0,r.kt)("li",{parentName:"ul"},"Discuss how Tiller uses Charts to create a Deployment"),(0,r.kt)("li",{parentName:"ul"},"Initialize Helm on a cluster")),(0,r.kt)("h3",{id:"deploying-complex-applications"},"Deploying complex applications"),(0,r.kt)("p",null,"Helm is similar to other packages like ",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", where a chart is similar to a package in that it has binaries as well as install and uninstall scripts."),(0,r.kt)("p",null,"Most containerized applications have many manifests, from that of the deployment, service, and configMaps, to other objects like secrets or Ingress. All of these need a manifest. Helm comes in handy, as it packages all these manifests into a single tarball. The tarball can be put into a repo, then the repo can be searched to discover the application and then deploy it."),(0,r.kt)("p",null,"Tarballs can be collected into a repo for sharing, and multiple repos can be connected. Helm also allows for easy upgrade and rollback from the command line."),(0,r.kt)("h3",{id:"helm-v3"},"Helm v3"),(0,r.kt)("p",null,"Helm underwent a near complete overhaul from v2 to v3."),(0,r.kt)("p",null,"One of the most notable changes is the removal of the need for a Tiller pod to deploy charts. This presented security issues since it needed elevated permissions to deploy. The functionality is now all built into the command, no longer needing initialization for use."),(0,r.kt)("p",null,"In v2, Helm did a two way strategic merge, looking at the currently applied manifest vs the one being applied and applying the updates. This did not account for any changes done outside of Helm. v3 corrects for this by also checking the current state of the live objects."),(0,r.kt)("p",null,"Generated names are no longer automatic in Helm v3, either one must be passed or ",(0,r.kt)("inlineCode",{parentName:"p"},"--generated-name")," must be passed as an option."),(0,r.kt)("h3",{id:"chart-contents"},"Chart contents"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"chart")," is an archived set of Kubernetes resource manifests making up a distributed application."),(0,r.kt)("p",null,"The basic structure of a chart is "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates/\n\u2514\u2500\u2500 values.yaml\n")),(0,r.kt)("p",null,"Let's walk through each major section."),(0,r.kt)("p",null,"First is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Chart.yaml"))," file. This is basic information about the chart, like the name, version, keywords, etc."),(0,r.kt)("p",null,"Next is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"values.yaml"))," file. This contains the keys and values that will be used to fill in the templates to generate the release.  This is done via Go template syntax."),(0,r.kt)("p",null,"Finally is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"templates"))," directory. This is comprised of all the resource manifests for the application."),(0,r.kt)("p",null,"For more a more in-depth look at charts and their structure, including more detailed break downs of what is discussed here, as well as additional files and directories, the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"official docs")," are a good place to look."),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The templates  that charts use are resource manifests that Go templating syntax. Variable from ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," are then applied in to fill in the template. "),(0,r.kt)("p",null,"Here is an example of a template for a Kubernetes secret, defining some passwords for a MariaDB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: {{ template "fullname" . }}\n  labels:\n    app: {{ template "fullname" . }}\n    chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"\n    release: "{{ .Release.Name }}"\n    heritage: "{{ .Release.Service }}"\ntype: Opaque\ndata:\n  mariadb-root-password: {{ default "" .Values.mariadbRootPassword | b64enc | quote }}\n  mariadb-password: {{ default "" .Values.mariadbPassword | b64enc | quote }}\n')),(0,r.kt)("h3",{id:"chart-repositories-and-hub"},"Chart repositories and hub"),(0,r.kt)("p",null,"Repositories are simply HTTP servers with index file and a tarball of the present charts."),(0,r.kt)("p",null,"Only the ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"Artifact Hub")," is searched unless you add additional repositories. You can search the Artifact Hub with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm search hub"),"."),(0,r.kt)("p",null,"You can interact with repositories by using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo"),", like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add bitnami ht\u200ctps://charts.bitnami.com/bitnami\nhelm repo list\n")),(0,r.kt)("p",null,"Once repos are added, charts can be searched via keywords, and then searched via the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm search repo")," command."),(0,r.kt)("h3",{id:"deploying-a-chart"},"Deploying a chart"),(0,r.kt)("p",null,"Deploying charts is as easy as running a ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command. Before you run this, however you may need some existing resources, like PVs for a chart's PVCs. Currently, this information is only listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," of the chart. This can be found by downloading the tarball and expanding it to view the ",(0,r.kt)("inlineCode",{parentName:"p"},"README"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm fetch bitnami/apache --untar\ncd apache/\nls\n")),(0,r.kt)("p",null,"Once a chart is installed, with Helm you can list the release, delete it, upgrade it, and roll it back."),(0,r.kt)("p",null,"Output for a deployment should be carefully reviewed. It will oftentimes contain information about access to the application that was deployed. If there are missing required pre-existing resources, the output is often a good place to start troubleshooting."),(0,r.kt)("h2",{id:"lab-exercises"},"Lab Exercises"),(0,r.kt)("h3",{id:"lab-101---working-with-helm-and-charts"},"Lab 10.1 - Working with Helm and charts"),(0,r.kt)("p",null,"Helm allows for simple deployment of complex configurations.  This is handy as it allows for a multi-part application to be deployed in a single step. By using a chart, the required components and their relationships are declared. A local agent, like Tiller, use the API to create object for you, effectively making Helm orchestration for orchestration."),(0,r.kt)("p",null,"This lab will focus on installing Helm, and then deploying a Chart to configure a MariaDB."),(0,r.kt)("p",null,"First we will download ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," on the cp node and then we will set it up to use the binary. You can find all the available versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases/"},"here on Github"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.helm.sh/helm-v3.9.4-linux-amd64.tar.gz\ntar -xvf helm-v3.9.4-linux-amd64.tar.gz\nsudo cp linux-amd64/helm /usr/local/bin/helm\n")),(0,r.kt)("p",null,"Now that ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," is installed, we can use it to deploy a chart. A good place to start looking at some charts is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/charts/tree/master/stable"},"here on Github"),". Chart can also be supplied by a vendor or you could make your own."),(0,r.kt)("p",null,"Let's start using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," by searching the Artifact Hub for database charts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm search hub database\n")),(0,r.kt)("p",null,"You can add additional repos to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," as well. Let's add a new repo and then deploy an echo server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add ealenn https://ealenn.github.io/charts\nhelm repo update\nhelm upgrade -i tester ealenn/echo-server  --debug\n")),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," flag, you will get more output when resources are being created. The output usually will have information on how to access the application as well. Now let's make sure the pod we deployed is running and then check the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\nkubectl get svc\ncurl <svc ClusterIP>\n")),(0,r.kt)("p",null,"You can view the chart history on a system with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list"),". If you include the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," option, all charts, including deleted and failed, will be shown. Now let's uninstall the echo server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall tester\nhelm list\n")),(0,r.kt)("p",null,"Now let's find the downloaded chart tarball and then extract it to view the contents. In particular, look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to see some of the values that could have been set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"find $HOME -name *echo*\ncd $HOME/.cache/helm/repository ; tar -xvf echo-server-*\ncat echo-server/values.yaml\n")),(0,r.kt)("p",null,"Values can be examined or edited before installation.  Let's add a new repo and then download a new chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm fetch bitnami/apache --untar\ncd apache/\n")),(0,r.kt)("p",null,"Look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"apache")," chart. You'll notice it has a similar structure. Read through the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls\nless values.yaml\n")),(0,r.kt)("p",null,"Install the chart, ensure the application is running, and then check the service is working. It may be helpful to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," so that a LoadBalancer is used, instead of an autoscaler for this small lab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install anotherweb .\nk get svc\ncurl <anotherweb-apache ClusterIP>\n")),(0,r.kt)("p",null,"If the installation was successful, you should get a HTML response from the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),' saying "It works!".'),(0,r.kt)("p",null,"To finish, uninstall the Helm charts. We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," again in future labs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall anotherweb\n")),(0,r.kt)("h2",{id:"knowledge-check"},"Knowledge check"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"chart")," is the template that describes the application to deploy, any configuration, and dependencies"),(0,r.kt)("li",{parentName:"ul"},"Chart deployment ",(0,r.kt)("strong",{parentName:"li"},"does")," tell us about missing dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tiller")," is the agent that deploys objects based on the chart"),(0,r.kt)("li",{parentName:"ul"},"A collection of charts is called a ",(0,r.kt)("strong",{parentName:"li"},"repository"))))}d.isMDXComponent=!0}}]);