"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[674],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||p;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<p;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9713:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),p=(a(7294),a(3905)),l=["components"],i={id:"follow-up",title:"Follow-up Items",position:18},o=void 0,c={unversionedId:"fundamentals/follow-up",id:"fundamentals/follow-up",title:"Follow-up Items",description:"Being new to many of these topic, there is more to learn than just Kubernetes.  Tracking topics I want to follow up on because I'm unfamilair or I just want to gain a deeper understanding.",source:"@site/docs/fundamentals/follow-up.md",sourceDirName:"fundamentals",slug:"/fundamentals/follow-up",permalink:"/cka-prep/docs/fundamentals/follow-up",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/follow-up.md",tags:[],version:"current",frontMatter:{id:"follow-up",title:"Follow-up Items",position:18},sidebar:"tutorialSidebar",previous:{title:"Exam Domain Review",permalink:"/cka-prep/docs/fundamentals/chapter17"},next:{title:"Setting up kubectl",permalink:"/cka-prep/docs/kubectl/setup"}},u=[{value:"Chapter 2",id:"chapter-2",children:[],level:2},{value:"Chapter 3",id:"chapter-3",children:[],level:2},{value:"Chapter 4",id:"chapter-4",children:[],level:2},{value:"Additional",id:"additional",children:[],level:2}],s={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Being new to many of these topic, there is more to learn than just Kubernetes.  Tracking topics I want to follow up on because I'm unfamilair or I just want to gain a deeper understanding."),(0,p.kt)("h2",{id:"chapter-2"},"Chapter 2"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter02#borg-heritage"},(0,p.kt)("inlineCode",{parentName:"a"},"cgroups"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter02#borg-heritage"},"Linux namespaces")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter02#kubernetes-architecture"},(0,p.kt)("inlineCode",{parentName:"a"},"systemd")))),(0,p.kt)("h2",{id:"chapter-3"},"Chapter 3"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#calico"},"Layer 3 network")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#calico"},"IP encapsulation")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#flannel"},"subnet leasing")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#romana"},"IPAM-aware topology")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#kube-aws"},"AWS CloudFormation")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./chapter03#kubicorn"},"DNS")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter03#lab-31-install-kubernetes"},"GPG keys"))),(0,p.kt)("h2",{id:"chapter-4"},"Chapter 4"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#etcd-database"},"b+tree")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#other-agents"},"in-tree deployment"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://cloud-provider-vsphere.sigs.k8s.io/concepts/in_tree_vs_out_of_tree.html"},"k8s sig")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#other-agents"},"out-of-tree deployment"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://cloud-provider-vsphere.sigs.k8s.io/concepts/in_tree_vs_out_of_tree.html"},"k8s sig")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"iptables")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"ipvs")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"supervisord")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#kubelet"},"NUMA"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Non-uniform_memory_access"},"Wikipedia")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#operators"},"DeltFIFO queue")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#operators"},"Golang work queues")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#pods"},"IPC")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#pods"},"loopback interface")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#init-containers"},"LivenessProbes")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#init-containers"},"ReadinessProbes")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#init-containers"},"StatefulSets")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#component-review"},"Route programming")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#component-review"},"Access control list (ACL)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#node"},(0,p.kt)("inlineCode",{parentName:"a"},"NodeLease"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#single-ip-per-pod"},"Loopback interface")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#single-ip-per-pod"},"Interprocess communication (IPC)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#cni-network-configuration-file"},"Subnet")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#pod-to-pod-communication"},"Network address translation (NAT)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#back-up-etcd"},"TLS")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#back-up-etcd"},"Certificate authority"))),(0,p.kt)("h2",{id:"additional"},"Additional"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"CIDR"),(0,p.kt)("li",{parentName:"ul"},"SSL certificates")))}m.isMDXComponent=!0}}]);