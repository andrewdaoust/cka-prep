(self.webpackChunkcka_prep_2=self.webpackChunkcka_prep_2||[]).push([[9514,4608],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6756:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),r=n(3905),o=n(6291),l=n(2434),c=n(6010),i=n(8920),s=n(5537),u=n(7462);var d=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},m=n(5999),p=n(3366),b=n(9960),f=n(3919),v=n(541),h="menuLinkText_QVir",E="hasHref_VCh3",g=n(2389),k=["item"],_=["item","onItemClick","activePath","level","index"],C=["item","onItemClick","activePath","level","index"];function y(e){var t=e.item,n=(0,p.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,u.Z)({item:t},n)):a.createElement(N,(0,u.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=e.index,d=(0,p.Z)(e,_),f=n.items,v=n.label,k=n.collapsible,C=n.className,y=n.href,S=function(e){var t=(0,g.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,o),T=(0,i.uR)({initialState:function(){return!!k&&(!N&&n.collapsed)}}),I=T.collapsed,x=T.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:N,collapsed:I,setCollapsed:x});var P=(0,i.fP)(),w=P.expandedItem,O=P.setExpandedItem;function M(e){void 0===e&&(e=!I),O(e?null:s),x(e)}var A=(0,i.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){k&&w&&w!==s&&A&&x(!0)}),[k,w,s,x,A]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":I},C)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":k&&!y,"menu__link--active":N},t[h]=!k,t[E]=!!S,t)),onClick:k?function(e){null==r||r(n),y?M(!1):(e.preventDefault(),M())}:function(){null==r||r(n)},"aria-current":N?"page":void 0,href:k?null!=S?S:"#":S},d),v),y&&k&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),M()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(Z,{items:f,tabIndex:I?-1:0,onItemClick:r,activePath:o,level:l+1})))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(e.index,(0,p.Z)(e,C)),s=t.href,d=t.label,m=t.className,h=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var T=["items"];function I(e){var t=e.items,n=(0,p.Z)(e,T);return a.createElement(i.D_,null,t.map((function(e,t){return a.createElement(y,(0,u.Z)({key:t,item:e,index:t},n))})))}var Z=(0,a.memo)(I),x="sidebar_CW9Y",P="sidebarWithHideableNavbar_FoYL",w="sidebarHidden_D64r",O="sidebarLogo_FJUI",M="menu_SkdO",A="menuWithAnnouncementBar_x19h",L="collapseSidebarButton_cwdi",D="collapseSidebarButtonIcon_xORG";function F(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(d,{className:D}))}function j(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,u=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(x,(t={},t[P]=p,t[w]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:O}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",M,(n={},n[A]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:o,activePath:r,level:1}))),b&&a.createElement(F,{onClick:l}))}var B=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return a.createElement(i.Cv,{component:B,props:e})}var H=a.memo(j),W=a.memo(R);function Y(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(W,e))}var q=n(1769),z=n.n(q),U=n(4608),V="backToTopButton_RiI4",X="backToTopButtonShow_ssHd";function G(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=G(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,V,(e={},e[X]=n,e)),type:"button",onClick:function(){return s()}})},J=n(6775),Q={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},$=n(2859);function ee(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,b=e.sidebarName,f=(0,i.Vq)(),v=u.pluginId,h=u.version,E=(0,a.useState)(!1),g=E[0],k=E[1],_=(0,a.useState)(!1),C=_[0],y=_[1],S=(0,a.useCallback)((function(){C&&y(!1),k((function(e){return!e}))}),[C]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(v,h)}},a.createElement("div",{className:Q.docPage},a.createElement(K,null),f&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&y(!0)}},a.createElement(Y,{key:b,sidebar:f,path:s.path,onCollapse:S,isHidden:C}),C&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(d,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!f,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:z()},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!l)return a.createElement(U.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement($.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(ee,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.Z)(t,{versionMetadata:n})))))}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(2434),o=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},1769:function(){}}]);