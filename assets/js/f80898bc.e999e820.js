"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[2820],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1370:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"watch",title:"watch"},d=void 0,p={unversionedId:"linux/watch",id:"linux/watch",title:"watch",description:"The watch command repeated runs a command or job for you. It is used like this:",source:"@site/docs/linux/watch.md",sourceDirName:"linux",slug:"/linux/watch",permalink:"/cka-prep/docs/linux/watch",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/watch.md",tags:[],version:"current",frontMatter:{id:"watch",title:"watch"},sidebar:"tutorialSidebar",previous:{title:"vim",permalink:"/cka-prep/docs/linux/vim"},next:{title:"wget",permalink:"/cka-prep/docs/linux/wget"}},c=[{value:"<code>watch</code> options",id:"watch-options",children:[],level:3},{value:"Helpful use cases",id:"helpful-use-cases",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," command repeated runs a command or job for you. It is used like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"watch [options] [command]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"[options]")," are listed below and the ",(0,i.kt)("inlineCode",{parentName:"p"},"[command]")," is the command you want to run repeatedly."),(0,i.kt)("h3",{id:"watch-options"},(0,i.kt)("inlineCode",{parentName:"h3"},"watch")," options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"option flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-n"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--interval")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the interval between runs of the passed command. The default is 2 seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-d"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--differences")),(0,i.kt)("td",{parentName:"tr",align:null},"Highlight any differences between updates.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-g"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--chgexit")),(0,i.kt)("td",{parentName:"tr",align:null},"Exits if the output of the passed command changes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--no-title")),(0,i.kt)("td",{parentName:"tr",align:null},"Removes the header with the interval, command, and current time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-b"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--beep")),(0,i.kt)("td",{parentName:"tr",align:null},"Play a sound if the command exits with an error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--precise")),(0,i.kt)("td",{parentName:"tr",align:null},"Attempt to run exactly on the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"--interval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--errexit")),(0,i.kt)("td",{parentName:"tr",align:null},"Stops updates on an error from the passed command and exits on the next key press")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--color")),(0,i.kt)("td",{parentName:"tr",align:null},"Pass an ANSI color and style sequence")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-x"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--exec")),(0,i.kt)("td",{parentName:"tr",align:null},"Passes user defined command to ",(0,i.kt)("inlineCode",{parentName:"td"},"exec"),". Reduces the need for additional quoting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-w"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--no-linewrap")),(0,i.kt)("td",{parentName:"tr",align:null},"Truncated any long lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--help")),(0,i.kt)("td",{parentName:"tr",align:null},"Display help text (this info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-v"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--version")),(0,i.kt)("td",{parentName:"tr",align:null},"Display version info")))),(0,i.kt)("h3",{id:"helpful-use-cases"},"Helpful use cases"),(0,i.kt)("p",null,"Continually get Pods when watching an update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"watch kubectl get pods\n")))}m.isMDXComponent=!0}}]);