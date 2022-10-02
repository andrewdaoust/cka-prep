"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[1364],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,g=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2460:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],s={id:"chapter11",title:"Ingress"},o=void 0,c={unversionedId:"fundamentals/chapter11",id:"fundamentals/chapter11",title:"Ingress",description:"Course Reading",source:"@site/docs/fundamentals/chapter11.md",sourceDirName:"fundamentals",slug:"/fundamentals/chapter11",permalink:"/cka-prep/docs/fundamentals/chapter11",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/chapter11.md",tags:[],version:"current",frontMatter:{id:"chapter11",title:"Ingress"},sidebar:"tutorialSidebar",previous:{title:"Helm",permalink:"/cka-prep/docs/fundamentals/chapter10"},next:{title:"Scheduling",permalink:"/cka-prep/docs/fundamentals/chapter12"}},u=[{value:"Course Reading",id:"course-reading",children:[{value:"Learning objectives",id:"learning-objectives",children:[],level:3},{value:"Overview",id:"overview",children:[],level:3},{value:"Ingress controller",id:"ingress-controller",children:[],level:3},{value:"nginx",id:"nginx",children:[],level:3},{value:"Ingress API resources",id:"ingress-api-resources",children:[],level:3},{value:"Deploying the ingress controller",id:"deploying-the-ingress-controller",children:[],level:3},{value:"Creating an ingress rule",id:"creating-an-ingress-rule",children:[],level:3},{value:"Multiple ingress rules",id:"multiple-ingress-rules",children:[],level:3},{value:"Intelligent connected proxies",id:"intelligent-connected-proxies",children:[],level:3}],level:2},{value:"Lab Exercises",id:"lab-exercises",children:[{value:"Lab 11.1 - Service mesh",id:"lab-111---service-mesh",children:[],level:3},{value:"Lab 11.2 - Ingress controller",id:"lab-112---ingress-controller",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,s=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"course-reading"},"Course Reading"),(0,l.kt)("h3",{id:"learning-objectives"},"Learning objectives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Discuss differences between an Ingress Controller vs a Service"),(0,l.kt)("li",{parentName:"ul"},"Learn about nginx and GCE Ingress Controllers"),(0,l.kt)("li",{parentName:"ul"},"Deploy and Ingress Controller"),(0,l.kt)("li",{parentName:"ul"},"Configure an Ingress Rule")),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Earlier we learned about services and how to use them to connect containerized application in Kubernetes to outside the cluster. We can also used Ingress Controllers and Rules to do the same thing."),(0,l.kt)("p",null,"The difference between a service and ingress controllers lie in the efficiency.  Instead of many services, like ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancers"),", traffic can be routed based on the host or the path.  This lets us centralize traffic that could be going to many services to a single point."),(0,l.kt)("p",null,"Ingress controllers are different from other controllers as they are not managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-controller-manager"),".  Multiple controller can be deployed with each using unique configuration.  A controller will use Ingress Rules to handle any traffic to and from outside the cluster."),(0,l.kt)("p",null,"There are many options for ingress controllers.  Some of them include GKE, nginx, Traefik, Contour, and Envoy.  Any tool that can be used as a reverse proxy should be able to work as an ingress controller, these agents will just need to consume rules and listen for the associated traffic. An Ingress Rule is an API object that we can create with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),".  When the rule is created, it updates the ingress controller to allow traffic to from the outside to the internal service. Services can be left as ClusterIPs and then we can define how traffic gets routed to them via ingress rules."),(0,l.kt)("h3",{id:"ingress-controller"},"Ingress controller"),(0,l.kt)("p",null,"An ingress controller is a daemon running in a pod that watches the ",(0,l.kt)("inlineCode",{parentName:"p"},"/ingresses")," endpoint of the API server.  They are part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1")," group.  When new endpoints are created, the daemon uses the configured rules to allow the inbound traffic to the desired service, which is most often over HTTP."),(0,l.kt)("p",null,"You can deploy multiple ingress controllers. In that case, traffic should use annotations to select the correct controller to use.  A lack of matching annotations will cause every controller to try to satisfy the ingress traffic."),(0,l.kt)("h3",{id:"nginx"},"nginx"),(0,l.kt)("p",null,"Deploying nginx controllers is made simple through provided YAML files which can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md"},"Kubernetes Github")),(0,l.kt)("p",null,"Here you will also find configuration for several different platforms you can run a Kubernetes cluster on."),(0,l.kt)("p",null,"Like any ingress controller, there is come configuration required to deploy it properly. The deployment can be customized via configMaps, Annotations, or a custom template for more detailed use cases."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Easy integration with RBAC"),(0,l.kt)("li",{parentName:"ul"},"Uses annotation ",(0,l.kt)("inlineCode",{parentName:"li"},'kubernetes.io/ingress.class: "nginx"')),(0,l.kt)("li",{parentName:"ul"},"L7 traffic will require ",(0,l.kt)("inlineCode",{parentName:"li"},"proxy-real-ip-cidr")," setting"),(0,l.kt)("li",{parentName:"ul"},"Bypasses kube-proxy for session affinity"),(0,l.kt)("li",{parentName:"ul"},"Does not use ",(0,l.kt)("inlineCode",{parentName:"li"},"conntrack")," entries for iptables DNAT"),(0,l.kt)("li",{parentName:"ul"},"TLS requires host field to be defined")),(0,l.kt)("h3",{id:"ingress-api-resources"},"Ingress API resources"),(0,l.kt)("p",null,"A typical Ingress object looks like the this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ghost\nspec:\n  rules:\n  - host: ghost.192.168.99.100.nip.io\n    http:\n      paths:\n      - backend:\n          service:\n            name: ghost\n            port:\n              number: 2368\n        path: /\n        pathType: ImplementationSpecific\n")),(0,l.kt)("p",null,"Like all object, you can manage Ingress objects with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingress\nkubectl delete ingress <ingress name>\nkubectl edit ingress <ingress name>\n")),(0,l.kt)("h3",{id:"deploying-the-ingress-controller"},"Deploying the ingress controller"),(0,l.kt)("p",null,"Deploying an ingress controller is as simple as running a ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command.  You can find the source for a sample ingress from the link in the ",(0,l.kt)("a",{parentName:"p",href:"#nginx"},"nginx section"),". You could also install the ingress controller via Helm by following the sample's guide."),(0,l.kt)("p",null,"You can check all that was deployed with the sample by running ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods,rc,svc")," to see what was deployed."),(0,l.kt)("h3",{id:"creating-an-ingress-rule"},"Creating an ingress rule"),(0,l.kt)("p",null,"Creating an ingress rule is fairly simple.  First let's assume we have a running pod and service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run ghost --image=ghost\nkubectl expose deployments ghost --port=2368\n")),(0,l.kt)("p",null,"Now you could apply the ingress rules we defined with the example in ",(0,l.kt)("a",{parentName:"p",href:"#ingress-api-resources"},"Ingress API resources"),"section. Once the ingress is created, the you should be able to access the application external to the cluster."),(0,l.kt)("h3",{id:"multiple-ingress-rules"},"Multiple ingress rules"),(0,l.kt)("p",null,"If you have multiple services, you could also define multiple rules in the ingress definition. To do this you would just add to the list defined under the ",(0,l.kt)("inlineCode",{parentName:"p"},"rules")," section of the manifest."),(0,l.kt)("h3",{id:"intelligent-connected-proxies"},"Intelligent connected proxies"),(0,l.kt)("p",null,"If you want to do things like service discovery, rate limiting, traffic management, or advanced metrics, you will likely need to implement a service mesh.  A service mesh consists of edge and embedded proxies that talk to each another to handle traffic based on rules from a control plane."),(0,l.kt)("p",null,"There are many options for service meshes, with some of the most popular being Envoy, Istio, and linkerd."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("img",{alt:"service mesh example",src:t(1778).Z,width:"685",height:"751"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("b",null,"Example of a service mesh from Istio"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Envoy")," - a modular and extensible proxy. It is popular due to the open construction, modularity, and it's dedication to remain unmonetized. It is common to use Envoy for as a data plane under near other tools in a service mesh."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Istio")," - a set of tools that leverages Envoy's proxies to construct a multi-component control plane.  It is intended to be platform independent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"linkerd")," - service mesh built for ease and speed of deployment and for being ultralight.")),(0,l.kt)("h2",{id:"lab-exercises"},"Lab Exercises"),(0,l.kt)("h3",{id:"lab-111---service-mesh"},"Lab 11.1 - Service mesh"),(0,l.kt)("p",null,"First we will install linkerd.  Make sure all the installation steps are successful by reviewing the output of each command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sL run.linkerd.io/install | sh\nexport PATH=$PATH:/home/ubuntu/.linkerd2/bin\necho "export PATH=$PATH:/home/ubuntu/.linkerd2/bin" >> $HOME/.bashrc\nlinkerd check --pre\nlinkerd install --crds | kubectl apply -f -\nlinkerd install --set proxyInit.runAsRoot=true | kubectl apply -f -\nlinkerd check\nlinkerd viz install | kubectl apply -f -\nlinkerd viz check\nlinkerd viz dashboard &\n')),(0,l.kt)("p",null,"The GUI for linkerd is enabled on localhost by default. We need to edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"web")," deployment and service to allow for access of the GUI outside the cluster since we are running in a cloud provider."),(0,l.kt)("p",null,"For the deployment, in the container args, find the ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce-host")," line and remove the value after the ",(0,l.kt)("inlineCode",{parentName:"p"},"="),"."),(0,l.kt)("p",null,"On the service, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodePort")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," port with some high valued port number that is easy to remember and set the service ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," to a ",(0,l.kt)("inlineCode",{parentName:"p"},"NodePort"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n linkerd-viz edit deploy web\nkubectl -n linkerd-viz edit svc web\n")),(0,l.kt)("p",null,"Test access to your public IP."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl ifconfig.io\n")),(0,l.kt)("p",null,"Now use the public IP and the NodePort number you set to access the GUI in a browser on your local machine."),(0,l.kt)("p",null,"With the GUI accessible externally we can now add the annotations we need for linkerd to watch those objects. linkerd can do this for us by piping ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," commands to ",(0,l.kt)("inlineCode",{parentName:"p"},"linkerd")," and then back to ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),". You should see an error about the creation of the object but it should work fine. The view the GUI again and you should see the ",(0,l.kt)("inlineCode",{parentName:"p"},"accounting")," namespaces are meshed."),(0,l.kt)("p",null,"However, let's first create a deployment and expose it with a service to use in the service mesh."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n accounting create deploy nginx --image=nginx\nkubectl -n accounting expose deployment nginx --type=ClusterIP --port=80\n")),(0,l.kt)("p",null,"Then we will inject the annotations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n accounting get deploy nginx -o yaml | linkerd inject - | kubectl apply -f -\n")),(0,l.kt)("p",null,"Then we will want to generate some traffic to pods and watch that traffic in the UI. We'll use the ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx")," service we just created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n accounting get svc\ncurl <nginx ClusterIP>\n")),(0,l.kt)("p",null,"In the UI you should see some HTTP metrics in the accounting namespace. Now let's scale up the ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx")," deployment to 5 replicas and then generate traffic to them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n accounting scale deploy nginx --replicas=5\ncurl <nginx ClusterIP>\ncurl <nginx ClusterIP>\ncurl <nginx ClusterIP>\ncurl <nginx ClusterIP>\ncurl <nginx ClusterIP>\ncurl <nginx ClusterIP>\n")),(0,l.kt)("p",null,"In the UI we should see 5 replicas being meshed in the namespace as well as some other statistics."),(0,l.kt)("h3",{id:"lab-112---ingress-controller"},"Lab 11.2 - Ingress controller"),(0,l.kt)("p",null,"Bow we will use Helm to install an ingress controller."),(0,l.kt)("p",null,"First, we will want to create two deployments, one called ",(0,l.kt)("inlineCode",{parentName:"p"},"web-one")," running httpd, and another called ",(0,l.kt)("inlineCode",{parentName:"p"},"web-two")," running nginx."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create deployment web-one --image=httpd\nkubectl create deployment web-tow --image=nginx\nkubectl expose deployment web-one --type=ClusterIP --port=80\nkubectl expose deployment web-two --type=ClusterIP --port=80\n")),(0,l.kt)("p",null,"Linkerd does not have a bundled ingress controller ao we need to install on the cluster ourselves to manage traffic. We will use a Helm chart to do this. Let's search for ",(0,l.kt)("inlineCode",{parentName:"p"},"ingress")," with Helm and then install the popular nginx ingress controller."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm search hub ingress\nhelm repo add ingress-nginx http://kubernetes.github.io/ingress-nginx\nhelm repo update\n")),(0,l.kt)("p",null,"Now we will download the chart, and update the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," so that the ingress controller uses a DaemonSet instead of a Deployment by changing the ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm fetch ingress-nginx/ingress-nginx --untar\ncd ingress-nginx\nvim values.yaml\n")),(0,l.kt)("p",null,"Then, we will install the controller. Then watch for the service to come up."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install myingress .\ncd ..\nkubectl get ingress --all-namespaces -w\nkubectl get services -o wide myingress-ingress-nginx-controller\nkubectl get pod --all-namespaces | grep nginx\n")),(0,l.kt)("p",null,"Once the ingress controller is up and running, we can set up the ingress rules."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim ingress.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-test\n  annotations:\n    kubernetes.io/ingress.class: nginx\n  namespace: default\nspec:\n  rules:\n  - host: www.external.com\n    http:\n      paths:\n      - backend:\n          service:\n            name: web-one\n            port:\n              number: 80\n        path: /\n        pathType: ImplementationSpecific\nstatus:\n  loadBalancer: {}\n")),(0,l.kt)("p",null,"And now with the ingress rule defined, we can create it and verify it is working."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f ingress.yaml\nkubectl get ingress\nkubectl get pod -o wide | grep myingress\ncurl <Pod IP>\n")),(0,l.kt)("p",null,"At this point you should see you got a 404 error response from your curl.  Now let's check the service (don't use the admission controller that you will see)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc | grep ingress\ncurl <myingress-ingress-nginx-controller service IP>\n")),(0,l.kt)("p",null,"Again you should see that you are getting a 404 error. Let's try it again, this time passing a header matching the URL to one of the services we created earlier.  If it works you should see a default nginx/httpd server page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Host: www.external.com" http://<myingress-ingress-nginx-controller service IP>\n')),(0,l.kt)("p",null,"With that working we can then add the annotations for linkerd. Again, you will see some warnings but it should work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ds myingress-ingress-nginx-controller -o yaml | linkerd inject --ingress - | kubectl apply -f -\n")))}d.isMDXComponent=!0},1778:function(e,n,t){n.Z=t.p+"assets/images/ch11-istio-service-mesh-2d5cbc6c88e9b22aa0e449102ae5f6c8.png"}}]);