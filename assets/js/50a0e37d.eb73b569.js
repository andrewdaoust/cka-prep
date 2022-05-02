"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[7342],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"chapter06",title:"API Objects"},s=void 0,p={unversionedId:"fundamentals/chapter06",id:"fundamentals/chapter06",title:"API Objects",description:"Course Reading",source:"@site/docs/fundamentals/chapter06.md",sourceDirName:"fundamentals",slug:"/fundamentals/chapter06",permalink:"/cka-prep/docs/fundamentals/chapter06",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/chapter06.md",tags:[],version:"current",frontMatter:{id:"chapter06",title:"API Objects"},sidebar:"tutorialSidebar",previous:{title:"APIs and Access",permalink:"/cka-prep/docs/fundamentals/chapter05"},next:{title:"Managing State with Deployments",permalink:"/cka-prep/docs/fundamentals/chapter07"}},c=[{value:"Course Reading",id:"course-reading",children:[{value:"Learning objectives",id:"learning-objectives",children:[],level:3},{value:"Overview",id:"overview",children:[],level:3},{value:"<code>v1</code> API group",id:"v1-api-group",children:[{value:"Node",id:"node",children:[],level:4},{value:"Service account",id:"service-account",children:[],level:4},{value:"Resource Quota",id:"resource-quota",children:[],level:4},{value:"Endpoint",id:"endpoint",children:[],level:4}],level:3},{value:"Discovering API groups",id:"discovering-api-groups",children:[],level:3},{value:"Deploying an application",id:"deploying-an-application",children:[{value:"Deployment",id:"deployment",children:[],level:4},{value:"ReplicaSet",id:"replicaset",children:[],level:4},{value:"Pod",id:"pod",children:[],level:4}],level:3},{value:"DaemonSets",id:"daemonsets",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"course-reading"},"Course Reading"),(0,o.kt)("h3",{id:"learning-objectives"},"Learning objectives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore API versions"),(0,o.kt)("li",{parentName:"ul"},"Discuss rapid change and development"),(0,o.kt)("li",{parentName:"ul"},"Deploy and configure an application using a Deployment"),(0,o.kt)("li",{parentName:"ul"},"Examine primitives for a self-healing application"),(0,o.kt)("li",{parentName:"ul"},"Scale an application")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This chapter will cover API objects.  We will learn about resources in the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," API group. Objects move from ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"beta")," and then finally to ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," once they are considered stable."),(0,o.kt)("p",null,"DaemonSets ensure a Pod for every node.  StatefulSets stick a container to a node and act like a deployment.  These have both progressed to ",(0,o.kt)("inlineCode",{parentName:"p"},"apps/v1")," stability. Jobs and CronJobs have reached ",(0,o.kt)("inlineCode",{parentName:"p"},"batch/v1")," stability."),(0,o.kt)("p",null,"Role-Based Access Control (RBAC), which is essential to security, went from ",(0,o.kt)("inlineCode",{parentName:"p"},"v1alpha")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," stability in one release cycle."),(0,o.kt)("p",null,"Because Kubernetes is such a fast moving project, it is important to keep track of changes. Any changes could be important to ongoing administration of the cluster."),(0,o.kt)("p",null,"New feature tracking for Kubernetes can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements"},"this repo"),"."),(0,o.kt)("p",null,"Release notes can be found by reading through the change logs in the Kubernetes repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG"},"here"),". You can also search and filter through change logs on ",(0,o.kt)("a",{parentName:"p",href:"https://relnotes.k8s.io/"},"this site"),"."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Starting in ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.16"),", depreciated API object versions respond with an error rather than being accepted. This is an important change from past behavior."))),(0,o.kt)("h3",{id:"v1-api-group"},(0,o.kt)("inlineCode",{parentName:"h3"},"v1")," API group"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," API group is no longer a single group, but a collection of groups for each main object category."),(0,o.kt)("p",null,"So far, through the lab exercises, we have seen a few objects from the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," group.  Here's a recap of some of them:"),(0,o.kt)("h4",{id:"node"},"Node"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," represents a machine, either virtual or physical, that is part of the Kubernetes cluster. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," will retrieve information about them. Scheduling on nodes can be turned on and off with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl uncordon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl cordon"),", respectively."),(0,o.kt)("h4",{id:"service-account"},"Service account"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"serviceaccounts")," provide an identifier for running processes in a Pod to access the kube-apiserver and perform actions that it is granted to do."),(0,o.kt)("h4",{id:"resource-quota"},"Resource Quota"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resourcequotas")," are useful tools that allow you to define quotas per namespace.  An example would be if you want a namespace to only run a certain number of Pods, you can define a ",(0,o.kt)("inlineCode",{parentName:"p"},"resourcequotas")," manifest, create it with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," and Kubernetes will then enforce the quota."),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"Generally, ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," are not managed by the administrator.  They represent the set of IPs for Pods matching a ",(0,o.kt)("inlineCode",{parentName:"p"},"service"),". They come in handy when you want to check that a service actually matches running Pods. If the endpoint is empty, that means there are no matching Pods and something is probably wrong with the service definition."),(0,o.kt)("h3",{id:"discovering-api-groups"},"Discovering API groups"),(0,o.kt)("p",null,"Each group name can be appended to the API URL to see details for that group.  For example, you could drill down to find specifics of the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiregistration.k8s.io")," group with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://k8scp:6443/apis/apiregistration.k8s.io/v1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "APIResourceList",\n  "apiVersion": "v1",\n  "groupVersion": "apiregistration.k8s.io/v1",\n  "resources": [\n    {\n      "name": "apiservices",\n      "singularName": "",\n      "namespaced": false,\n      "kind": "APIService",\n      "verbs": [\n        "create",\n        "delete",\n        "deletecollection",\n        "get",\n        "list",\n        "patch",\n        "update",\n        "watch"\n      ],\n      "categories": [\n        "api-extensions"\n      ],\n      "storageVersionHash": "<omitted>"\n    },\n    {\n      "name": "apiservices/status",\n      "singularName": "",\n      "namespaced": false,\n      "kind": "APIService",\n      "verbs": [\n        "get",\n        "patch",\n        "update"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"If you followed this, you would see just one resource, called ",(0,o.kt)("inlineCode",{parentName:"p"},"apiservices"),". IF it looks like it is listed twice, the lower is the status.  You'll also notice there are different verbs for each. Another entry is if the object is namespaced, or restricted to only one namespace.  In this case it is not."),(0,o.kt)("p",null,"To get a list of all the API groups you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --cert ./client.pem --key ./client-key.pem --cacert ./ca.pem https://k8scp:6443/apis\n")),(0,o.kt)("p",null,"and you'll see a response something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "APIGroupList",\n  "apiVersion": "v1",\n  "groups": [\n    {\n      "name": "apiregistration.k8s.io",\n      "versions": [\n        {\n          "groupVersion": "apiregistration.k8s.io/v1",\n          "version": "v1"\n        }\n      ],\n      "preferredVersion": {\n        "groupVersion": "apiregistration.k8s.io/v1",\n        "version": "v1"\n      }\n    },\n    ...\n}\n')),(0,o.kt)("p",null,"You can ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," each URI to get more information on each like which verbs are available and other characteristics."),(0,o.kt)("h3",{id:"deploying-an-application"},"Deploying an application"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl create")," we can quickly deploy an application to the cluster. We have looked at the Pods created running the application ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx"),". If we look closer though, we will see a Deployment was created, whcih manages RepliceSets, which in turn control the Pod."),(0,o.kt)("h4",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"This is a controller that manges the sate of ReplicaSets.  This higher level control give more flexibility for upgrades and administration.  Unless there is a good reason not to, use a Deployment."),(0,o.kt)("h4",{id:"replicaset"},"ReplicaSet"),(0,o.kt)("p",null,"These orchestrate the life cycles and updates of Pods.  ReplicaSets are new versinos of Replication Controllers, the only difference being selector support."),(0,o.kt)("h4",{id:"pod"},"Pod"),(0,o.kt)("p",null,"As mentioned ad nauseam, these are the smallest unit that can be managed and interacted with in Kubernetes.  They run the application container and possibly any support containers."),(0,o.kt)("h3",{id:"daemonsets"},"DaemonSets"),(0,o.kt)("p",null,"DaemonSets are controllers that ensure Pods of the same type run on every cluster node.  When a new node is added to the cluster, a Pod that is the same sa all the others is started.  When the node is removed from the cluster, the DaemonSet ensures the Pod is deleted.  "),(0,o.kt)("p",null,"DaemonSets are most often used for logging, metrics, and security Pods. They can also be configured to avoid nodes."),(0,o.kt)("p",null,"As usual, you get all the normal CRUD operation with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get daemonsets\nkubectl get ds\n")))}u.isMDXComponent=!0}}]);