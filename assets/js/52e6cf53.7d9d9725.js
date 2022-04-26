"use strict";(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[9620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"chapter01",title:"Course Introduction"},s=void 0,d={unversionedId:"fundamentals/chapter01",id:"fundamentals/chapter01",title:"Course Introduction",description:"Course info",source:"@site/docs/fundamentals/chapter01.md",sourceDirName:"fundamentals",slug:"/fundamentals/chapter01",permalink:"/cka-prep/docs/fundamentals/chapter01",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fundamentals/chapter01.md",tags:[],version:"current",frontMatter:{id:"chapter01",title:"Course Introduction"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Fundamentals",permalink:"/cka-prep/docs/fundamentals/"},next:{title:"Basics of Kubernetes",permalink:"/cka-prep/docs/fundamentals/chapter02"}},u=[{value:"Course info",id:"course-info",children:[{value:"Learning Objectives",id:"learning-objectives",children:[],level:3},{value:"Course Requirements",id:"course-requirements",children:[],level:3},{value:"Setting up labs on AWS",id:"setting-up-labs-on-aws",children:[],level:3}],level:2},{value:"Lab 1.1 - Configuring system for <code>sudo</code>",id:"lab-11---configuring-system-for-sudo",children:[],level:2},{value:"Before You Begin",id:"before-you-begin",children:[{value:"Course Support",id:"course-support",children:[],level:3},{value:"Course Timing",id:"course-timing",children:[],level:3},{value:"Labs and Assessments",id:"labs-and-assessments",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"course-info"},"Course info"),(0,i.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"History and evolution of k8s"),(0,i.kt)("li",{parentName:"ul"},"High level architecture and components"),(0,i.kt)("li",{parentName:"ul"},"The API, the most important resources, and how to use it"),(0,i.kt)("li",{parentName:"ul"},"Deploying and managing applications"),(0,i.kt)("li",{parentName:"ul"},"Upcoming features")),(0,i.kt)("h3",{id:"course-requirements"},"Course Requirements"),(0,i.kt)("p",null,"The course is aimed at Linux administrators or software developers working with containers and trying to manage them in production. A good understanding of Linux, the command line, package managers, and ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),"/Github are essential to get the most of the course. Access to a Linux server, desktop, VM, or cloud provider is needed for the labs.  The course is distro/cloud provider agnostic."),(0,i.kt)("p",null,"The Linux Foundations Guide to running the course on AWS free tier can be found ",(0,i.kt)("a",{parentName:"p",href:"https://training.linuxfoundation.org/cm/prep/aws.pdf"},"here")),(0,i.kt)("h3",{id:"setting-up-labs-on-aws"},"Setting up labs on AWS"),(0,i.kt)("p",null,"Log in or create an account for AWS.  Go to the EC2 dashboard and launch a new instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"launch instance",src:n(330).Z,width:"1920",height:"872"})),(0,i.kt)("p",null,"For the labs we want an Ubuntu 18.04 instance"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ubuntu aws",src:n(7886).Z,width:"1682",height:"108"})),(0,i.kt)("p",null,"For the course we need two nodes with 2 vCPU and 8 GiB memory.  Here are all the EC2 instances that meet these requirements. Here is the pricing for instances (US-East - N. Virginia) that meet this requirement as of Feb 2022."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Instance name"),(0,i.kt)("th",{parentName:"tr",align:null},"On-Demand hourly rate"),(0,i.kt)("th",{parentName:"tr",align:null},"Storage"),(0,i.kt)("th",{parentName:"tr",align:null},"Network performance"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t2.medium"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0464"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Low to Moderate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t4g.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0672"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 5 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t3a.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0752"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 5 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"c6gd.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0768"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 118 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m6g.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.077"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t3.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0832"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 5 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5a.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.086"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"c5ad.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.086"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 75 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m6a.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0864"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 12500 Megabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m6gd.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0904"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 118 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t2.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.0928"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Low to Moderate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m6i.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.096"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 12500 Megabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5.large*"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.096"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m4.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.10"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Moderate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5ad.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.103"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 75 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"c5n.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.108"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 25 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5d.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.113"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 75 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 10 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5n.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.119"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 25 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5dn.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.136"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 75 NVMe SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 25 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m5zn.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.1652"),(0,i.kt)("td",{parentName:"tr",align:null},"EBS Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 25 Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"im4gn.large"),(0,i.kt)("td",{parentName:"tr",align:null},"$0.1819"),(0,i.kt)("td",{parentName:"tr",align:null},"1 x 937 SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"Up to 25 Gigabit")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"*This is the instance chose by the instructor in the course demo. Chosen for the better networking performance."),(0,i.kt)("p",{parentName:"div"},"What sort of network performace do we need? Will a ",(0,i.kt)("inlineCode",{parentName:"p"},"t2.medium")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"t3a.large")," be sufficient? Running that for 8 hr/day with 20 GB storage will run ~$37/person if each person runs a master and worker node for themselves."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure instance",src:n(4936).Z,width:"1911",height:"179"})),(0,i.kt)("p",null,"Configure this for 2 instances, the defaults for the other settings should be good for now."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure storage",src:n(5356).Z,width:"1600",height:"228"})),(0,i.kt)("p",null,"Configure the storage and change the size to 20 GiB.  Also make aure the ",(0,i.kt)("strong",{parentName:"p"},"Delete on Termination")," box is checked so any storage is deleted with thr termination of the instance."),(0,i.kt)("p",null,"You can then add tags to the istances if you choose to."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure security",src:n(2214).Z,width:"1920",height:"304"})),(0,i.kt)("p",null,"Next configure the security. Change the ",(0,i.kt)("strong",{parentName:"p"},"Type")," from ",(0,i.kt)("em",{parentName:"p"},"SSH")," to ",(0,i.kt)("em",{parentName:"p"},"All traffic"),"."),(0,i.kt)("p",null,"Finally review the instance an launch.  On launch it will ask you to add a key pair.  Here you can add an existing key pair or create a new one.  Once the instances launch, test connection with SSH."),(0,i.kt)("h2",{id:"lab-11---configuring-system-for-sudo"},"Lab 1.1 - Configuring system for ",(0,i.kt)("inlineCode",{parentName:"h2"},"sudo")),(0,i.kt)("p",null,"Since I'm running Ubuntu no need to do this lab since sudo is already set up.  If it were not, here would be the procedure:"),(0,i.kt)("p",null,"Launch a root shell with the ",(0,i.kt)("inlineCode",{parentName:"p"},"su")," command and enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user password. "),(0,i.kt)("p",null,"In more recent distros, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"etc/sudoers.d")," subdirectory and create a new file with the user you want to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," access to as the file name. For example, if the user was named ",(0,i.kt)("inlineCode",{parentName:"p"},"andrew")," create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"andrew")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"etc/sudoers.d"),". Naming the file after the user is convention, but it is not strictly necessary."),(0,i.kt)("p",null,"In the file created, add ",(0,i.kt)("inlineCode",{parentName:"p"},"<username> ALL=(ALL) ALL"),". Going back to out example user, ",(0,i.kt)("inlineCode",{parentName:"p"},"andrew"),", the file should contain ",(0,i.kt)("inlineCode",{parentName:"p"},"andrew ALL=(ALL) ALL"),".  A good explaination of what this means can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/a/201866"},"this")," StackExchange answer."),(0,i.kt)("p",null,"Finally, you may need to set the permissions on the file. Do this with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo chmod 440 /etc/sudoers.d/andrew"),".  Note that some distros will require ",(0,i.kt)("inlineCode",{parentName:"p"},"400")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"440"),"."),(0,i.kt)("p",null,"There is one last step, even when the system is preconfigured for ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo"),".  Most dirstos set different paths for finding executables for normals users vs the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user. In particular the ",(0,i.kt)("inlineCode",{parentName:"p"},"/sbin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usr/sbin")," paths are not searched, since ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," inherits ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," from the user, not the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user.  Because of this, at least for this course, it is recommended to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH=$PATH:/usr/sbin:/sbin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc")," file."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For my AWS instances the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," already contained ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/sbin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/sbin")," so no need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,i.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,i.kt)("h3",{id:"course-support"},"Course Support"),(0,i.kt)("p",null,"The course forum can be found ",(0,i.kt)("a",{parentName:"p",href:"https://forum.linuxfoundation.org/categories/lfs258-class-forum"},"here"),".  This is a community resource to discuss topic of the course with other enrolled students."),(0,i.kt)("h3",{id:"course-timing"},"Course Timing"),(0,i.kt)("p",null,"The course is accessible for 12 months from the date of enrollment. The chapters in the course are designed to build on previous ones, so it is best to go through the course in order."),(0,i.kt)("h3",{id:"labs-and-assessments"},"Labs and Assessments"),(0,i.kt)("p",null,"Labs and assessment questions in the course are not graded. In live courses, the Linux Foundation strives for a 50/50 split of lecture and discussion to working on labs.  Take this into account since this is self-paced."))}m.isMDXComponent=!0},4936:function(e,t,n){t.Z=n.p+"assets/images/ch01-configure-instance-ca0bbb8eccdff6d8482a89d634205db7.png"},2214:function(e,t,n){t.Z=n.p+"assets/images/ch01-configure-security-1a01d4ddc1b7128c7c7e763157aa33b6.png"},5356:function(e,t,n){t.Z=n.p+"assets/images/ch01-configure-storage-f07ffd2a82512e79ae692827c56b5fac.png"},330:function(e,t,n){t.Z=n.p+"assets/images/ch01-launch-instance-d3a116796ccf0f9f2143bead5cfbe3da.png"},7886:function(e,t,n){t.Z=n.p+"assets/images/ch01-ubuntu-6cc44f34ef95f97645327382e1bb970c.png"}}]);