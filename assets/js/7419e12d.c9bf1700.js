"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[106],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],c={id:"du",title:"du"},u=void 0,i={unversionedId:"linux/du",id:"linux/du",title:"du",description:"The du command helps get information on the disk usage.  Typically you will want to use the -h flag to make the response human readable.  You can also use the -d flag and a number to specify the depth.  For example:",source:"@site/docs/linux/du.md",sourceDirName:"linux",slug:"/linux/du",permalink:"/cka-prep/docs/linux/du",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/du.md",tags:[],version:"current",frontMatter:{id:"du",title:"du"},sidebar:"tutorialSidebar",previous:{title:"cut",permalink:"/cka-prep/docs/linux/cut"},next:{title:"grep",permalink:"/cka-prep/docs/linux/grep"}},l=[],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"du")," command helps get information on the disk usage.  Typically you will want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," flag to make the response human readable.  You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag and a number to specify the depth.  For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  du -h -d 1\n")),(0,o.kt)("p",null,"on the root of this repo, for example, gets "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"235M    ./node_modules\n40K     ./src\n328K    ./.docusaurus\n2.9M    ./.git\n908K    ./docs\n72K     ./iac\n12K     ./.github\n208K    ./static\n239M    .\n")),(0,o.kt)("p",null,"If you include the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," flag you will get output for all files, not just directories.  You can also specify a path after a command to get the disk usage from that directory.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," flag will give you a grand total at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"du -hac -d 1 /<path to>/cka-prep\n")),(0,o.kt)("p",null,"will get the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"235M    /<path to>/cka-prep/node_modules\n396K    /<path to>/cka-prep/package-lock.json\n4.0K    /<path to>/cka-prep/sidebars.js\n40K     /<path to>/cka-prep/src\n4.0K    /<path to>/cka-prep/babel.config.js\n4.0K    /<path to>/cka-prep/.gitignore\n4.0K    /<path to>/cka-prep/package.json\n4.0K    /<path to>/cka-prep/README.md\n328K    /<path to>/cka-prep/.docusaurus\n2.9M    /<path to>/cka-prep/.git\n908K    /<path to>/cka-prep/docs\n72K     /<path to>/cka-prep/iac\n12K     /<path to>/cka-prep/.github\n208K    /<path to>/cka-prep/static\n4.0K    /<path to>/cka-prep/docusaurus.config.js\n239M    /<path to>/cka-prep\n239M    total\n")))}d.isMDXComponent=!0}}]);