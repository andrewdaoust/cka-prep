"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[351],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3470:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"chapter05",title:"APIs and Access"},s=void 0,p={unversionedId:"fundamentals/chapter05",id:"fundamentals/chapter05",title:"APIs and Access",description:"Course Reading",source:"@site/docs/fundamentals/chapter05.md",sourceDirName:"fundamentals",slug:"/fundamentals/chapter05",permalink:"/cka-prep/docs/fundamentals/chapter05",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/chapter05.md",tags:[],version:"current",frontMatter:{id:"chapter05",title:"APIs and Access"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Architecture",permalink:"/cka-prep/docs/fundamentals/chapter04"},next:{title:"API Objects",permalink:"/cka-prep/docs/fundamentals/chapter06"}},c=[{value:"Course Reading",id:"course-reading",children:[{value:"Learning objectives",id:"learning-objectives",children:[],level:3},{value:"API access",id:"api-access",children:[],level:3},{value:"RESTful",id:"restful",children:[],level:3},{value:"Checking access",id:"checking-access",children:[],level:3},{value:"Optimistic currency",id:"optimistic-currency",children:[],level:3},{value:"Using annotations",id:"using-annotations",children:[],level:3},{value:"Simple pod",id:"simple-pod",children:[],level:3},{value:"Manage API resources with <code>kubectl</code>",id:"manage-api-resources-with-kubectl",children:[],level:3},{value:"Access from outside the cluster",id:"access-from-outside-the-cluster",children:[],level:3},{value:"<code>~/.kube/config</code>",id:"kubeconfig",children:[{value:"<code>apiVersion</code>",id:"apiversion",children:[],level:4},{value:"<code>clusters</code>",id:"clusters",children:[],level:4},{value:"<code>contexts</code>",id:"contexts",children:[],level:4},{value:"<code>current-context</code>",id:"current-context",children:[],level:4},{value:"<code>kind</code>",id:"kind",children:[],level:4},{value:"<code>preferences</code>",id:"preferences",children:[],level:4},{value:"<code>users</code>",id:"users",children:[],level:4}],level:3},{value:"Namespaces",id:"namespaces",children:[],level:3},{value:"Working with namespaces",id:"working-with-namespaces",children:[],level:3},{value:"API resources with <code>kubectl</code>",id:"api-resources-with-kubectl",children:[],level:3},{value:"Additional resource methods",id:"additional-resource-methods",children:[],level:3},{value:"Swagger and OpenAPI",id:"swagger-and-openapi",children:[],level:3},{value:"API maturity",id:"api-maturity",children:[{value:"Alpha",id:"alpha",children:[],level:4},{value:"Beta",id:"beta",children:[],level:4},{value:"Stable",id:"stable",children:[],level:4}],level:3}],level:2},{value:"Lab Exercises",id:"lab-exercises",children:[{value:"Lab 5.1 - Configuring TLS access",id:"lab-51---configuring-tls-access",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"course-reading"},"Course Reading"),(0,l.kt)("h3",{id:"learning-objectives"},"Learning objectives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Understand the API REST based architecture"),(0,l.kt)("li",{parentName:"ul"},"Work with annotations"),(0,l.kt)("li",{parentName:"ul"},"Understanding simple pod templates"),(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," with greater verbosity to troubleshoot"),(0,l.kt)("li",{parentName:"ul"},"Separating cluster resources using namespacing")),(0,l.kt)("h3",{id:"api-access"},"API access"),(0,l.kt)("p",null,"Kubernetes has a powerful REST API that is the heart of it's architecture.  Knowing how to find the endpoints for resources and understandong how the API changes between versions is vitally important for administrative tasks.  Starting at v1.16, the API no longer honors depreciated objects."),(0,l.kt)("p",null,"As was discusses in ",(0,l.kt)("a",{parentName:"p",href:"/cka-prep/docs/fundamentals/chapter04"},"the last section")," the ",(0,l.kt)("strong",{parentName:"p"},"kubeapi-server")," is the main agent for communication within and outside the cluster.  A ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," query to the API will expose current groups.  These groups can have different versions which mature independently of one another. They follow a domain name format, with many reserved such as single word domains, the empty group, and anything with a ",(0,l.kt)("inlineCode",{parentName:"p"},".k8s.io")," ending."),(0,l.kt)("h3",{id:"restful"},"RESTful"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," work through making API calls for you through typical HTTP verbs.  You could also interact with the cluster externally using ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as long as you pass the appropriate certs and keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --cert userbob.pem --key userBob-key.pem \\  \n  --cacert /path/to/ca.pem \\   \n  https://k8sServer:6443/api/v1/pods\n")),(0,l.kt)("p",null,"Thi ability to impersonate other users/groups allows for manual override of authentication which can be useful in debugging authorization policies for other groups of users."),(0,l.kt)("h3",{id:"checking-access"},"Checking access"),(0,l.kt)("p",null,"Security will be discussed later but for now, it can be helpful to check current authorization of both administrators as well as other users.  Here are some examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl auth can-i create deployments\n")),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"auth can-i")," subcommand we can check for what functionality a user has. In this case we would be checking if the user issuing the command with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," can create deployments in the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace. The API will return with a ",(0,l.kt)("inlineCode",{parentName:"p"},"yes")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"no"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl auth can-i create deployments --as bob\n")),(0,l.kt)("p",null,"This time around we are checking if the user ",(0,l.kt)("inlineCode",{parentName:"p"},"bob"),", by passing the username with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--as")," flag, can create deployments in the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl auth can-i create deployments --as bob  --nmespace developer\n")),(0,l.kt)("p",null,"Again we check if the user ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," can create deployments, this time in the ",(0,l.kt)("inlineCode",{parentName:"p"},"developer")," namespace by also passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace")," flag."),(0,l.kt)("p",null,"Currently, there are three APIs that can be applied to set who/what can be queried:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SelfSubjectAccessReview")," - Access review for any user, helpful for delegating to others"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LocalSubjectReview")," - Review is restricted to a namespace"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SelfSubjectRulesReview")," - A review showing allowed actions for a user withing a particular namespace")),(0,l.kt)("p",null,"You can also use "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl auth reconcile -f <YAML file>\n")),(0,l.kt)("p",null,"to check to see if the necessary permissions exist to create the object specified in the file.  No output indicates the creation is allowed."),(0,l.kt)("h3",{id:"optimistic-currency"},"Optimistic currency"),(0,l.kt)("p",null,"API calls to Kubernetes must use the default serialization of JSON.  There are experimental features that use Google's protobuf serialization.  Even hrough we often work in YAML files, they are converted to and from JSON fr the API calls."),(0,l.kt)("p",null,"Kubernetes uses ",(0,l.kt)("inlineCode",{parentName:"p"},"resourceVersion")," to determine API updates and implement optimistic currency., i.e. objects do not get locked from read time to write time of the object.  Kubernetes handles this by first checking the ",(0,l.kt)("inlineCode",{parentName:"p"},"resourceVersion")," and if the number has been changed a ",(0,l.kt)("inlineCode",{parentName:"p"},"409 CONFLICT")," error is returned.  The ",(0,l.kt)("inlineCode",{parentName:"p"},"resourceVersion")," is backed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"modifiedIndex")," parameter in etcd.  It is unique to the namespace, kind, and server.  Any operations that do not change an object do not change the ",(0,l.kt)("inlineCode",{parentName:"p"},"resourceVersion"),", for example ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"),"s."),(0,l.kt)("h3",{id:"using-annotations"},"Using annotations"),(0,l.kt)("p",null,"In Kubernetes labels are used to work with object or collections of objects."),(0,l.kt)("p",null,"Annotations on the otherhand serve as a way to add metadata to objects that is useful outside of Kubernetes.  Similar to labels, they are key-value pairs.  They also can hold more information and information that is more human readable than labels."),(0,l.kt)("p",null,"Some use cases of annotations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Timestamps"),(0,l.kt)("li",{parentName:"ul"},"Pointer to related objects in other ecosystems, e.g. a link to view logging externally or to a repo containing the source code of the object"),(0,l.kt)("li",{parentName:"ul"},"Developer email who created object"),(0,l.kt)("li",{parentName:"ul"},"Friendly description of object")),(0,l.kt)("p",null,"Any of the uses for annotations is information that could sit elsewhere in some other database but allowing for them increases flexibilty and allows for better integration of management and deployment tools."),(0,l.kt)("p",null,"Some examples of how to annotate Pods in a namespace, overwrite it for a Pod, and then delete the annotation on that Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate pods --all description='Production Pods' -n prod\nkubectl annotate --overwrite pod webpod description=\"Old Production Pods\" -n prod\nkubectl -n prod annotate pod webpod description-\n")),(0,l.kt)("h3",{id:"simple-pod"},"Simple pod"),(0,l.kt)("p",null,"Remember that a Pod is the smallest object we can work with in Kubernetes.  A pod can contain a single container, or multiple, often with the primary application container and some number of supporting ones."),(0,l.kt)("p",null,"Here is an example of a simple YAML Pod manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: firstpod\nspec:\n  containers:\n  - image: nginx\n    name: stan\n")),(0,l.kt)("p",null,"Notice the ",(0,l.kt)("inlineCode",{parentName:"p"},"apiVersion"),", which is how Kubernetes tracks the ",(0,l.kt)("em",{parentName:"p"},"optimistic currency"),". There is also the ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," field to specify which kind of object is being defined in the manifest.  Then there is the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata")," field to define any metadata for thr Pod with at least a ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),". Here is where you can add ",(0,l.kt)("inlineCode",{parentName:"p"},"labels")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"annotations")," as well.  Finally is the ",(0,l.kt)("inlineCode",{parentName:"p"},"spec")," field where you define what will run and any parmeters. This contains any definitions for ",(0,l.kt)("inlineCode",{parentName:"p"},"containers")," that the Pod will contain, among some other possible definitions."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create")," can be used to create Pods in Kubernetes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f simple.yaml\nkubectl get pods\nkubectl get pod firstpod -o yaml\nkubectl get pod firstpod -o json\n")),(0,l.kt)("p",null,"Once the deployment is created, you can check its status with the ",(0,l.kt)("inlineCode",{parentName:"p"},"get pods")," sub commands and list the Pod definitions to the terminal with ",(0,l.kt)("inlineCode",{parentName:"p"},"get pods <pod name> -o <format>"),"."),(0,l.kt)("h3",{id:"manage-api-resources-with-kubectl"},"Manage API resources with ",(0,l.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,l.kt)("p",null,"All objects in Kubernetes are exposed via RESTful API calls so that they can be managed with HTTP, JSON, or XML (although typically it is HTTP).  Object states can be changed with the standard HTTP verbs."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," exposes information for the REST calls it is making if you increase the verbosity.  This will include additional logging like the ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," commands being made behind the scenes. Max verbosity is ",(0,l.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --v=10 get pods firstpod\nkubectl --v=10 delete pods firstpod\n")),(0,l.kt)("p",null,"If you ran the first command above, you would see the HTTP method as ",(0,l.kt)("inlineCode",{parentName:"p"},"XGET")," and when running the second you would see it change to ",(0,l.kt)("inlineCode",{parentName:"p"},"XDELETE"),"."),(0,l.kt)("h3",{id:"access-from-outside-the-cluster"},"Access from outside the cluster"),(0,l.kt)("p",null,"Instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," you could use ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," to make changes to the cluster."),(0,l.kt)("p",null,"The basic server configuration (with omitted TLS cert info) can be found using "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config view\n")),(0,l.kt)("p",null,"Running this command will show config pulled from ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),".  In the ",(0,l.kt)("a",{parentName:"p",href:"/cka-prep/docs/fundamentals/chapter05#manage-api-resources-with-kubectl"},"previous section"),", if you ran the command with additional verbosity, you'd see something like ",(0,l.kt)("inlineCode",{parentName:"p"},"Config loaded from file ~/.kube/config")," in the logging."),(0,l.kt)("p",null,"Without the cert authority, key, and cert from the kube config file, only insecure ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," commands would work, which severly limits how much you can interact with the cluster.  In the upcoming lab we will use ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," and TLS to access the cluster."),(0,l.kt)("h3",{id:"kubeconfig"},(0,l.kt)("inlineCode",{parentName:"h3"},"~/.kube/config")),(0,l.kt)("p",null,"Here's an example of a section of a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdF.....\n    server: https://10.128.0.3:6443 ;\n    name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: {}\nusers:\n- name: kubernetes-admin\n  user:\n    client-certificate-data: LS0tLS1CRUdJTib.....\n    client-key-data: LS0tLS1CRUdJTi....\n")),(0,l.kt)("p",null,"Here is what each major section is."),(0,l.kt)("h4",{id:"apiversion"},(0,l.kt)("inlineCode",{parentName:"h4"},"apiVersion")),(0,l.kt)("p",null,"Similar to other objects in Kubernetes, this field instructs the kube-apiserver where to assign the data."),(0,l.kt)("h4",{id:"clusters"},(0,l.kt)("inlineCode",{parentName:"h4"},"clusters")),(0,l.kt)("p",null,"Contains the name of the cluster and where to send API requests. The sub-field ",(0,l.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," is also passed to authenticate requests made by ",(0,l.kt)("inlineCode",{parentName:"p"},"curl"),"."),(0,l.kt)("h4",{id:"contexts"},(0,l.kt)("inlineCode",{parentName:"h4"},"contexts")),(0,l.kt)("p",null,"This field allows for easy access to multiple clusters, and potentially by multiple users, in one configuration file.  It can be used to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),"."),(0,l.kt)("h4",{id:"current-context"},(0,l.kt)("inlineCode",{parentName:"h4"},"current-context")),(0,l.kt)("p",null,"Shows what cluster and user ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," commands will go to. These can be passed on a per command basis."),(0,l.kt)("h4",{id:"kind"},(0,l.kt)("inlineCode",{parentName:"h4"},"kind")),(0,l.kt)("p",null,"Every object in Kubernetes has a ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," set. In this case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," of object is ",(0,l.kt)("inlineCode",{parentName:"p"},"Config"),"."),(0,l.kt)("h4",{id:"preferences"},(0,l.kt)("inlineCode",{parentName:"h4"},"preferences")),(0,l.kt)("p",null,"Not currently used in the example above, but it can used for optional settings of ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),", like colorizing outputs."),(0,l.kt)("h4",{id:"users"},(0,l.kt)("inlineCode",{parentName:"h4"},"users")),(0,l.kt)("p",null,"Nicknames for associated client credentials, such as key and certs, usernames and passwords, or a token."),(0,l.kt)("p",null,"A token and username/password are mutually exclusive and can be set up via ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config set-credentials"),"."),(0,l.kt)("h3",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Namespace")," is a term used both for the feature of the Linux kernel and Kubernetes the allos for segregation of resources.  In the case of the Linus kernel, it is segregating system resources, while in Kuberentes it is the segregation of API objects."),(0,l.kt)("p",null,"Every call to the API includes a namesapce, and it uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace if one is not specified: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<Cluster IP>:6443/api/v1/namespaces/default/pods")),(0,l.kt)("p",null,"Four namesapces are created along with the cluster."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"default"))," - Where resources are assumed unless otherwise specified."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"kube-node-lease"))," - Namespace for worker node lease information to be stored."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"kube-public"))," - Namespace that is readable by all, even ones not authenticated.  General information about the cluster is included in this namespace."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"kube-system"))," - Namespace for infrastructure pods.")),(0,l.kt)("p",null,"If you want to see resources in all namespaces, the ",(0,l.kt)("inlineCode",{parentName:"p"},"--all-namespaces")," option can be passed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," command."),(0,l.kt)("h3",{id:"working-with-namespaces"},"Working with namespaces"),(0,l.kt)("p",null,"You can view the list of namespaces with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,l.kt)("p",null,"To create a new one you can do"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns mynspace\n")),(0,l.kt)("p",null,"You can describe a namespace like other objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe ns mynspace\n")),(0,l.kt)("p",null,"The config in YAML format for the namespace can be viewed with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns/mynspace -o yaml\n")),(0,l.kt)("p",null,"And you can delete a namespace with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns/mynspace\n")),(0,l.kt)("p",null,"Once a namespace is created, it can be referencing in YAML when defining other objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: V1\nkind: Pod\nmetadata:\n    name: redis\n    namespace: mynspace\n...\n")),(0,l.kt)("h3",{id:"api-resources-with-kubectl"},"API resources with ",(0,l.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,l.kt)("p",null,"Here is a list of all objects that are exposed by ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),".  Expect this list to change as Kuberentes continues to mature."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"all")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"certificatesigningrequests")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"csr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clusterrolebindings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clusterroles")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clusterroles")," which is only available to federation apiservers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"componentstatuses")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ca")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configmaps")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"cm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"controllerrevisions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cronjobs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"customresourcedefinition")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"crd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"daemonsets")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ds")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployments")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"deploy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"endpoints")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ep")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ev")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"horizontalpodautoscalers")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"hpa")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingresses")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jobs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limitranges")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"limits")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespaces")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ns")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"networkpolicies")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"netpol")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"no")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"persistentvolumeclaims")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"pvc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"persistentvolumes")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"pv")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"poddisruptionbudgets")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"pdb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"podpreset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pods")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"po")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"podsecuritypolicies")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"psp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"podtemplates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicasets")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"rs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicationcontrollers")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"rc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resourcequotas")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"quota")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rolebindings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roles")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secrets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"serviceaccounts")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"sa")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"services")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"svc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"statefulsets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"storageclasses"))),(0,l.kt)("h3",{id:"additional-resource-methods"},"Additional resource methods"),(0,l.kt)("p",null,"On top of basic resource management, certain objects have some other extremely helpful endpoints in the API.  For example, the logs of a container, ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),"ing into a container, or watching for changes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --cert /tmp/client.pem --key /tmp/client-key.pem \\\n    --cacert /tmp/ca.pem -v XGET \\\n    https://<Cluster IP>:6443/api/v1/namespaces/default/pods/firtpod/log\n")),(0,l.kt)("p",null,"Equivalently with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs firstpod\n")),(0,l.kt)("p",null,"Some other calls that can be made are"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GET /api/v1/namespaces/{namespace}/pods/{name}/exec\nGET /api/v1/namespaces/{namespace}/pods/{name}/log\nGET /api/v1/watch/namespaces/{namespace}/pods/{name}\n")),(0,l.kt)("h3",{id:"swagger-and-openapi"},"Swagger and OpenAPI"),(0,l.kt)("p",null,"The Kubernetes API was built using a Swagger specification. This has been evolving towards the OpenAPI initiative, which is extremely useful so you can autogenerate client code.  All stable resource definitions are in the docs site.  The API groups can be browsed in a Swagger UI on the ",(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specification page"),"."),(0,l.kt)("h3",{id:"api-maturity"},"API maturity"),(0,l.kt)("p",null,"Using API groups and versions allow development to continue without changes to existing groups and allows for easier growth and splitting work among different teams."),(0,l.kt)("p",null,"Use of JSON and Protobuf serialization will follow the same release guidelines."),(0,l.kt)("h4",{id:"alpha"},"Alpha"),(0,l.kt)("p",null,"This is denoted with ",(0,l.kt)("inlineCode",{parentName:"p"},"alpha")," in the version name. These features are often still buggy and disabled by default. These features can also change or altogether disappear without notice. Backward compatibilty is not guaranteed either. These features should only be used on test clusters that are rebuilt often."),(0,l.kt)("h4",{id:"beta"},"Beta"),(0,l.kt)("p",null,"Denoted with ",(0,l.kt)("inlineCode",{parentName:"p"},"beta")," in the version name.  These features are more well tested and are enabled by default. It also ensures backward compatibility will be tested going forward but hasn't been tested and adopted widely enough to be considered stable."),(0,l.kt)("h4",{id:"stable"},"Stable"),(0,l.kt)("p",null,"Stable releases have no designator, just the version number. Currently, the only stable version is ",(0,l.kt)("inlineCode",{parentName:"p"},"v1"),"."),(0,l.kt)("h2",{id:"lab-exercises"},"Lab Exercises"),(0,l.kt)("h3",{id:"lab-51---configuring-tls-access"},"Lab 5.1 - Configuring TLS access"))}u.isMDXComponent=!0}}]);