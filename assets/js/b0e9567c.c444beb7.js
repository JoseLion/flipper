"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2293,5081],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20752:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(44996),c=["components"],s={},l=void 0,p={type:"mdx",permalink:"/docs/plugins/fresco/overview",source:"@site/src/embedded-pages/docs/plugins/fresco/overview.mdx",description:"The Images plugin enables you to inspect what images were fetched, where they are coming from, and selectively clear caches.",frontMatter:{}},u=[{value:"Cache Inspector",id:"cache-inspector",level:2},{value:"Attribution",id:"attribution",level:2},{value:"Leak Tracking",id:"leak-tracking",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The Images plugin enables you to inspect what images were fetched, where they are coming from, and selectively clear caches."),(0,a.mdx)("p",null,"Currently, the plugin supports ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/fresco/"},"Fresco")," as the backend."),(0,a.mdx)("img",{alt:"Images plugin",src:(0,i.default)("img/images-plugin.png")}),(0,a.mdx)("h2",{id:"cache-inspector"},"Cache Inspector"),(0,a.mdx)("p",null,"Images are grouped by the different caching layers they are stored in. The current fill rate of the cache is shown and you can choose to selectively clear caches."),(0,a.mdx)("h2",{id:"attribution"},"Attribution"),(0,a.mdx)("p",null,"Images can be annotated with attributes that can help to determine the context in which an image was loaded and displayed. You can use that information to filter by a particular surface or only inspect images that are in the critical path of your application (such as during a cold start)."),(0,a.mdx)("h2",{id:"leak-tracking"},"Leak Tracking"),(0,a.mdx)("p",null,"Dealing with large resources can require special APIs to be used that circumvent usual garbage collection. The plugin enables the tracking of ",(0,a.mdx)("inlineCode",{parentName:"p"},"CloseableReference"),"s for Fresco on Android that weren't properly closed, which can help you improve the performance of your app."))}m.isMDXComponent=!0},38508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(20752),c=["components"],s={id:"fresco",title:"Images Plugin",sidebar_label:"Images",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/fresco/docs/overview.mdx"},l=void 0,p={unversionedId:"features/plugins/fresco",id:"features/plugins/fresco",title:"Images Plugin",description:"\u2192 See setup instructions for the Images plugin",source:"@site/../docs/features/plugins/fresco.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/fresco",permalink:"/docs/features/plugins/fresco",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/fresco/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"fresco",title:"Images Plugin",sidebar_label:"Images",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/fresco/docs/overview.mdx"},sidebar:"main",previous:{title:"Logs",permalink:"/docs/features/plugins/device-logs"},next:{title:"Layout",permalink:"/docs/features/plugins/inspector"}},u={},d=[],m={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"\u2192 ",(0,a.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/fresco"},"See setup instructions for the Images plugin")),(0,a.mdx)(i.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);