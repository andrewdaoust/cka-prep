"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[674],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(a),f=n,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9713:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],p={id:"follow-up",title:"Follow-up Items",position:18},i=void 0,u={unversionedId:"fundamentals/follow-up",id:"fundamentals/follow-up",title:"Follow-up Items",description:"Being new to many of these topic, there is more to learn than just Kubernetes.  Tracking topics I want to follow up on because I'm unfamilair or I just want to gain a deeper understanding.",source:"@site/docs/fundamentals/follow-up.md",sourceDirName:"fundamentals",slug:"/fundamentals/follow-up",permalink:"/cka-prep/docs/fundamentals/follow-up",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/follow-up.md",tags:[],version:"current",frontMatter:{id:"follow-up",title:"Follow-up Items",position:18},sidebar:"tutorialSidebar",previous:{title:"Exam Domain Review",permalink:"/cka-prep/docs/fundamentals/chapter17"},next:{title:"Setting up kubectl",permalink:"/cka-prep/docs/kubectl/setup"}},c=[{value:"Chapter 2",id:"chapter-2",children:[],level:2},{value:"Chapter 3",id:"chapter-3",children:[],level:2},{value:"Chapter 4",id:"chapter-4",children:[],level:2},{value:"Additional",id:"additional",children:[],level:2}],s={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Being new to many of these topic, there is more to learn than just Kubernetes.  Tracking topics I want to follow up on because I'm unfamilair or I just want to gain a deeper understanding."),(0,l.kt)("h2",{id:"chapter-2"},"Chapter 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter02#borg-heritage"},(0,l.kt)("inlineCode",{parentName:"a"},"cgroups"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter02#borg-heritage"},"Linux namespaces")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter02#kubernetes-architecture"},(0,l.kt)("inlineCode",{parentName:"a"},"systemd")))),(0,l.kt)("h2",{id:"chapter-3"},"Chapter 3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#calico"},"Layer 3 network")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#calico"},"IP encapsulation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#flannel"},"subnet leasing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#romana"},"IPAM-aware topology")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#kube-aws"},"AWS CloudFormation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./chapter03#kubicorn"},"DNS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter03#lab-31-install-kubernetes"},"GPG keys"))),(0,l.kt)("h2",{id:"chapter-4"},"Chapter 4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#etcd-database"},"b+tree")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#other-agents"},"in-tree deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#other-agents"},"out-of-tree deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"iptables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"ipvs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#worker-nodes"},"supervisord")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cka-prep/docs/fundamentals/chapter04#kubelet"},"NUMA"))),(0,l.kt)("h2",{id:"additional"},"Additional"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CIDR"),(0,l.kt)("li",{parentName:"ul"},"SSL certificates")))}m.isMDXComponent=!0}}]);