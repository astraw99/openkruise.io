"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7203],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7300:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],s={slug:"SidecarSet",title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",authors:["zmberg"],tags:["workload","sidecar","istio","mosn","HotUpgrade"]},l="\u524d\u8a00",c={permalink:"/zh/blog/SidecarSet",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-06-10-sidecarset-hot-update-0.9.0.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-06-10-sidecarset-hot-update-0.9.0.md",title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",description:"OpenKruise \u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684Sandbox\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8eKubernetes\u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002",date:"2021-06-10T00:00:00.000Z",formattedDate:"2021\u5e746\u670810\u65e5",tags:[{label:"workload",permalink:"/zh/blog/tags/workload"},{label:"sidecar",permalink:"/zh/blog/tags/sidecar"},{label:"istio",permalink:"/zh/blog/tags/istio"},{label:"mosn",permalink:"/zh/blog/tags/mosn"},{label:"HotUpgrade",permalink:"/zh/blog/tags/hot-upgrade"}],readingTime:10.73,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],prevItem:{title:"OpenKruise 0.10.0\uff1a\u65b0\u589e\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u3001\u5e94\u7528\u9632\u62a4\u7b49\u80fd\u529b",permalink:"/zh/blog/openkruise-0.10.0"},nextItem:{title:"OpenKruise 0.9.0\uff1a\u65b0\u589ePod\u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u5220\u9664\u9632\u62a4\u7b49\u529f\u80fd",permalink:"/zh/blog/openkruise-0.9.0"}},d={authorsImageUrls:[void 0]},p=[{value:"\u6ce8\u5165\u70ed\u5347\u7ea7Sidecar\u5bb9\u5668",id:"\u6ce8\u5165\u70ed\u5347\u7ea7sidecar\u5bb9\u5668",children:[],level:2},{value:"Mesh\u5bb9\u5668\u5e73\u6ed1\u5347\u7ea7",id:"mesh\u5bb9\u5668\u5e73\u6ed1\u5347\u7ea7",children:[],level:2},{value:"Migration\u6838\u5fc3\u903b\u8f91",id:"migration\u6838\u5fc3\u903b\u8f91",children:[],level:2},{value:"Migration Demo",id:"migration-demo",children:[],level:2}],u={toc:p};function m(e){var n=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenKruise \u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684Sandbox\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8eKubernetes\u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002"),(0,a.kt)("p",null,"OpenKruise\u57282021.5.20\u53d1\u5e03\u4e86\u6700\u65b0\u7684v0.9.0\u7248\u672c\uff0c\u5176\u4e2dsidecarSet\u57fa\u4e8e\u4e0a\u4e00\u4e2a\u7248\u672c\u6269\u5c55\u4e86\u7279\u522b\u9488\u5bf9Service Mesh\u573a\u666f\u7684\u652f\u6301\u3002"),(0,a.kt)("h1",{id:"\u80cc\u666f---\u5982\u4f55\u72ec\u7acb\u5347\u7ea7mesh\u5bb9\u5668"},"\u80cc\u666f - \u5982\u4f55\u72ec\u7acb\u5347\u7ea7Mesh\u5bb9\u5668"),(0,a.kt)("p",null,"SidecarSet \u662f Kruise \u63d0\u4f9b\u7684\u72ec\u7acb\u7ba1\u7406 sidecar \u5bb9\u5668\u7684 workload\u3002\u7528\u6237\u901a\u8fc7 SidecarSet \u80fd\u591f\u4fbf\u5229\u7684\u5b8c\u6210\u5bf9Sidecar\u5bb9\u5668\u7684\u81ea\u52a8\u6ce8\u5165\u548c\u72ec\u7acb\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0csidecar \u7684\u72ec\u7acb\u5347\u7ea7\u987a\u5e8f\u662f\u5148\u505c\u6b62\u65e7\u7248\u672c\u7684\u5bb9\u5668\uff0c\u7136\u540e\u518d\u521b\u5efa\u65b0\u7248\u672c\u7684\u5bb9\u5668\u3002\u8fd9\u79cd\u65b9\u5f0f\u5c24\u5176\u9002\u5408\u4e0d\u5f71\u54cdPod\u670d\u52a1\u53ef\u7528\u6027\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982\u65e5\u5fd7\u6536\u96c6 agent\uff0c\u4f46\u662f\u5bf9\u4e8e\u5f88\u591a\u4ee3\u7406\u6216\u8fd0\u884c\u65f6\u7684 sidecar \u5bb9\u5668\uff0c\u5982 Istio Envoy\uff0c\u8fd9\u79cd\u5347\u7ea7\u65b9\u6cd5\u5c31\u6709\u95ee\u9898\u4e86\u3002Envoy \u4f5c\u4e3a Pod \u4e2d\u7684\u4e00\u4e2aProxy\u5bb9\u5668\u4ee3\u7406\u4e86\u6240\u6709\u7684\u6d41\u91cf\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b\u5982\u679c\u76f4\u63a5\u91cd\u542f\u5347\u7ea7\uff0cPod\u670d\u52a1\u7684\u53ef\u7528\u6027\u5fc5\u7136\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u56e0\u6b64\u9700\u8981\u8003\u8651\u5e94\u7528\u81ea\u8eab\u7684\u53d1\u5e03\u548c\u5bb9\u91cf\u60c5\u51b5\uff0c\u65e0\u6cd5\u5b8c\u5168\u72ec\u7acb\u4e8e\u5e94\u7528\u505asidecar\u7684\u53d1\u5e03\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"how update mesh sidecar",src:t(1525).Z})),(0,a.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u90e8\u62e5\u6709\u4e0a\u4e07\u7684Pod\u90fd\u662f\u57fa\u4e8eService Mesh\u6765\u5b9e\u73b0\u76f8\u4e92\u95f4\u7684\u901a\u4fe1\uff0c\u7531\u4e8emesh\u5bb9\u5668\u5347\u7ea7\u4f1a\u5bfc\u81f4\u4e1a\u52a1pod\u7684\u4e0d\u53ef\u7528\uff0c\u56e0\u800cmesh\u5bb9\u5668\u7684\u5347\u7ea7\u5c06\u4f1a\u6781\u5927\u963b\u788dService Mesh\u7684\u8fed\u4ee3\u3002\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0c\u6211\u4eec\u540c\u96c6\u56e2\u5185\u90e8\u7684Service Mesh\u56e2\u961f\u4e00\u8d77\u5408\u4f5c\u5b9e\u73b0\u4e86mesh\u5bb9\u5668\u7684\u70ed\u5347\u7ea7\u80fd\u529b\u3002\u672c\u6587\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5728\u5b9e\u73b0mesh\u5bb9\u5668\u70ed\u5347\u7ea7\u80fd\u529b\u7684\u8fc7\u7a0b\u4e2dSidecarSet\u662f\u626e\u6f14\u4e86\u600e\u6837\u7684\u91cd\u8981\u89d2\u8272\u3002"),(0,a.kt)("h1",{id:"sidecarset\u52a9\u529bmesh\u5bb9\u5668\u65e0\u635f\u70ed\u5347\u7ea7"},"SidecarSet\u52a9\u529bMesh\u5bb9\u5668\u65e0\u635f\u70ed\u5347\u7ea7"),(0,a.kt)("p",null,"Mesh\u5bb9\u5668\u4e0d\u80fd\u50cf\u65e5\u5fd7\u91c7\u96c6\u7c7b\u5bb9\u5668\u76f4\u63a5\u539f\u5730\u5347\u7ea7\uff0c\u5176\u539f\u56e0\u5728\u4e8e\uff1amesh\u5bb9\u5668\u5fc5\u987b\u8981\u4e0d\u95f4\u65ad\u5730\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u800c\u72ec\u7acb\u5347\u7ea7\u65b9\u5f0f\u4f1a\u5bfc\u81f4mesh\u670d\u52a1\u5b58\u5728\u4e00\u6bb5\u4e0d\u53ef\u7528\u65f6\u95f4\u3002\u867d\u7136\u793e\u533a\u4e2d\u5df2\u6709\u4e00\u4e9b\u77e5\u540d\u7684mesh\u670d\u52a1\u5982Envoy\u3001Mosn\u7b49\u9ed8\u8ba4\u80fd\u591f\u63d0\u4f9b\u5e73\u6ed1\u5347\u7ea7\u7684\u80fd\u529b\uff0c\u4f46\u662f\u8fd9\u4e9b\u5347\u7ea7\u65b9\u5f0f\u65e0\u6cd5\u4e0e\u4e91\u539f\u751f\u8fdb\u884c\u6070\u5f53\u5730\u7ed3\u5408\uff0c\u4e14kubernetes\u672c\u8eab\u4e5f\u7f3a\u4e4f\u5bf9\u6b64\u7c7bsidecar\u5bb9\u5668\u7684\u5347\u7ea7\u65b9\u6848\u3002"),(0,a.kt)("p",null,"OpenKruise SidecarSet\u4e3a\u6b64\u7c7bmesh\u5bb9\u5668\u63d0\u4f9b\u4e86sidecar\u70ed\u5347\u7ea7\u673a\u5236\uff0c\u80fd\u591f\u901a\u8fc7\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u52a9\u529bMesh\u5bb9\u5668\u5b9e\u73b0\u65e0\u635f\u70ed\u5347\u7ea7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: hotupgrade-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: hotupgrade\n  containers:\n  - name: sidecar\n    image: openkruise/hotupgrade-sample:sidecarv1\n    imagePullPolicy: Always\n    lifecycle:\n      postStart:\n        exec:\n          command:\n          - /bin/sh\n          - /migrate.sh\n    upgradeStrategy:\n      upgradeType: HotUpgrade\n      hotUpgradeEmptyImage: openkruise/hotupgrade-sample:empty\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"upgradeType: HotUpgrade\u4ee3\u8868\u8be5sidecar\u5bb9\u5668\u7684\u7c7b\u578b\u662fhot upgrade\uff0c\u5373\u70ed\u5347\u7ea7\u65b9\u6848"),(0,a.kt)("li",{parentName:"ul"},"hotUpgradeEmptyImage: \u5f53\u70ed\u5347\u7ea7sidecar\u5bb9\u5668\u65f6\uff0c\u4e1a\u52a1\u987b\u8981\u63d0\u4f9b\u4e00\u4e2aempty\u5bb9\u5668\u7528\u4e8e\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u5bb9\u5668\u5207\u6362\u3002Empty\u5bb9\u5668\u540csidecar\u5bb9\u5668\u5177\u6709\u76f8\u540c\u7684\u914d\u7f6e\uff08\u955c\u50cf\u5730\u5740\u9664\u5916\uff09\uff0c\u4f8b\u5982command, lifecycle, probe\u7b49\u3002")),(0,a.kt)("p",null,"SidecarSet\u70ed\u5347\u7ea7\u673a\u5236\u4e3b\u8981\u5305\u542b\u6ce8\u5165\u70ed\u5347\u7ea7Sidecar\u5bb9\u5668\u548cMesh\u5bb9\u5668\u5e73\u6ed1\u5347\u7ea7\u4e24\u4e2a\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u5165\u70ed\u5347\u7ea7sidecar\u5bb9\u5668"},"\u6ce8\u5165\u70ed\u5347\u7ea7Sidecar\u5bb9\u5668"),(0,a.kt)("p",null,"\u9488\u5bf9\u70ed\u5347\u7ea7\u7c7b\u578b\u7684Sidecar\u5bb9\u5668\uff0c\u5728Pod\u521b\u5efa\u65f6SidecarSet Webhook\u5c06\u4f1a\u6ce8\u5165\u4e24\u4e2a\u5bb9\u5668\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{sidecar.name}-1: \u5982\u4e0b\u56fe\u6240\u793a envoy-1\uff0c\u8fd9\u4e2a\u5bb9\u5668\u4ee3\u8868\u6b63\u5728\u5b9e\u9645\u5de5\u4f5c\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aenvoy:1.16.0"),(0,a.kt)("li",{parentName:"ul"},"{sidecar.name}-2: \u5982\u4e0b\u56fe\u6240\u793a envoy-2\uff0c\u8fd9\u4e2a\u5bb9\u5668\u662f\u4e1a\u52a1\u63d0\u4f9b\u7684hotUpgradeEmptyImage\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aempty:1.0")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inject sidecar",src:t(8037).Z})),(0,a.kt)("p",null,"\u4e0a\u8ff0Empty\u5bb9\u5668\u5728Mesh\u5bb9\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5e76\u6ca1\u6709\u505a\u4efb\u4f55\u5b9e\u9645\u7684\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"mesh\u5bb9\u5668\u5e73\u6ed1\u5347\u7ea7"},"Mesh\u5bb9\u5668\u5e73\u6ed1\u5347\u7ea7"),(0,a.kt)("p",null,"\u70ed\u5347\u7ea7\u6d41\u7a0b\u4e3b\u8981\u5206\u4e3a\u4e00\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Upgrade: \u5c06Empty\u5bb9\u5668\u66ff\u6362\u4e3a\u6700\u65b0\u7248\u672c\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aenvoy-2.Image = envoy:1.17.0"),(0,a.kt)("li",{parentName:"ol"},"Migration: \u6267\u884csidecar\u5bb9\u5668\u7684PostStartHook\u811a\u672c\uff0c\u5b8c\u6210mesh\u670d\u52a1\u7684\u5e73\u6ed1\u5347\u7ea7"),(0,a.kt)("li",{parentName:"ol"},"Reset: mesh\u670d\u52a1\u5e73\u6ed1\u5347\u7ea7\u540e\uff0c\u5c06\u8001\u7248\u672csidecar\u5bb9\u5668\u66ff\u6362\u4e3aEmpty\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aenvoy-1.Image = empty:1.0")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"update sidecar",src:t(7003).Z})),(0,a.kt)("p",null,"\u4ec5\u9700\u4e0a\u8ff0\u4e09\u4e2a\u6b65\u9aa4\u5373\u53ef\u5b8c\u6210\u70ed\u5347\u7ea7\u4e2d\u7684\u5168\u90e8\u6d41\u7a0b\uff0c\u82e5\u5bf9Pod\u6267\u884c\u591a\u6b21\u70ed\u5347\u7ea7\uff0c\u5219\u91cd\u590d\u6267\u884c\u4e0a\u8ff0\u4e09\u4e2a\u6b65\u9aa4\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"migration\u6838\u5fc3\u903b\u8f91"},"Migration\u6838\u5fc3\u903b\u8f91"),(0,a.kt)("p",null,"SidecarSet\u70ed\u5347\u7ea7\u673a\u5236\u4e0d\u4ec5\u5b8c\u6210\u4e86mesh\u5bb9\u5668\u7684\u5207\u6362\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u65b0\u8001\u7248\u672c\u7684\u534f\u8c03\u673a\u5236\uff08PostStartHook\uff09\uff0c\u4f46\u662f\u81f3\u6b64\u8fd8\u53ea\u662f\u4e07\u91cc\u957f\u5f81\u7684\u7b2c\u4e00\u6b65\uff0cMesh\u5bb9\u5668\u540c\u65f6\u8fd8\u9700\u8981\u63d0\u4f9bPostSartHook\u811a\u672c\u6765\u5b8c\u6210mesh\u670d\u52a1\u81ea\u8eab\u7684\u5e73\u6ed1\u5347\u7ea7\uff08\u4e0a\u8ff0Migration\u8fc7\u7a0b\uff09\uff0c\u5982\uff1aEnvoy\u70ed\u91cd\u542f\u3001Mosn\u65e0\u635f\u91cd\u542f\u3002"),(0,a.kt)("p",null,"mesh\u5bb9\u5668\u4e00\u822c\u90fd\u662f\u901a\u8fc7\u76d1\u542c\u56fa\u5b9a\u7aef\u53e3\u6765\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u6b64\u7c7bmesh\u5bb9\u5668\u7684migration\u8fc7\u7a0b\u53ef\u4ee5\u6982\u62ec\u4e3a\uff1a\u901a\u8fc7UDS\u4f20\u9012ListenFD\u548c\u505c\u6b62Accpet\u3001\u5f00\u59cb\u6392\u6c34\u3002\u9488\u5bf9\u4e0d\u652f\u6301\u70ed\u91cd\u542f\u7684mesh\u5bb9\u5668\u53ef\u4ee5\u53c2\u8003\u6b64\u8fc7\u7a0b\u5b8c\u6210\u6539\u9020\uff0c\u903b\u8f91\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"migration",src:t(1265).Z})),(0,a.kt)("h2",{id:"migration-demo"},"Migration Demo"),(0,a.kt)("p",null,"\u4e0d\u540cmesh\u5bb9\u5668\u5bf9\u5916\u63d0\u4f9b\u7684\u670d\u52a1\u4ee5\u53ca\u5185\u90e8\u5b9e\u73b0\u903b\u8f91\u5404\u6709\u5dee\u5f02\uff0c\u8fdb\u800c\u5177\u4f53\u7684Migration\u4e5f\u6709\u6240\u4e0d\u540c\uff0c\u4e0a\u8ff0\u903b\u8f91\u53ea\u662f\u5bf9\u5176\u4e2d\u4e00\u4e9b\u8981\u70b9\u505a\u4e86\u4e00\u4e9b\u603b\u7ed3\uff0c\u5e0c\u671b\u80fd\u5bf9\u6709\u9700\u8981\u7684\u5404\u4f4d\u6709\u6240\u88e8\u76ca\uff0c\u540c\u65f6\u5728github\u4e0a\u9762\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u70ed\u5347\u7ea7Migration Demo\u4ee5\u4f9b\u53c2\u8003\uff0c\u4e0b\u9762\u5c06\u5bf9\u5176\u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u4ee3\u7801\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u534f\u5546\u673a\u5236\nMesh\u5bb9\u5668\u542f\u52a8\u903b\u8f91\u9996\u5148\u5c31\u9700\u8981\u5224\u65ad\u7b2c\u4e00\u6b21\u542f\u52a8\u8fd8\u662f\u70ed\u5347\u7ea7\u5e73\u6ed1\u8fc1\u79fb\u8fc7\u7a0b\uff0c\u4e3a\u4e86\u51cf\u5c11mesh\u5bb9\u5668\u6c9f\u901a\u6210\u672c\uff0cKruise\u5728\u4e24\u4e2asidecar\u5bb9\u5668\u4e2d\u6ce8\u5165\u4e86\u4e24\u4e2a\u73af\u5883\u53d8\u91cfSIDECARSET_VERSION\u548cSIDECARSET_VERSION_ALT\uff0c\u901a\u8fc7\u5224\u65ad\u4e24\u4e2a\u73af\u5883\u53d8\u91cf\u7684\u503c\u6765\u5224\u65ad\u662f\u5426\u662f\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4ee5\u53ca\u5f53\u524dsidecar\u5bb9\u5668\u662f\u65b0\u7248\u672c\u8fd8\u662f\u8001\u7248\u672c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// return two parameters:\n// 1. (bool) indicates whether it is hot upgrade process\n// 2. (bool ) when isHotUpgrading=true, the current sidecar is newer or older\nfunc isHotUpgradeProcess() (bool, bool) {\n  // Version of the current sidecar container\n  version := os.Getenv("SIDECARSET_VERSION")\n  // Version of the peer sidecar container\n  versionAlt := os.Getenv("SIDECARSET_VERSION_ALT")\n  // If the version of the peer sidecar container is "0", hot upgrade is not underway\n  if versionAlt == "0" {\n    return false, false\n  }\n  // Hot upgrade is underway\n  versionInt, _ := strconv.Atoi(version)\n  versionAltInt, _ := strconv.Atoi(versionAlt)\n  // version is of int type and monotonically increases, which means the version value of the new-version container will be greater\n  return true, versionInt > versionAltInt\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"ListenFD\u8fc1\u79fb\n\u901a\u8fc7Unix Domain Socket\u5b9e\u73b0ListenFD\u5728\u4e0d\u540c\u5bb9\u5668\u95f4\u7684\u8fc1\u79fb\uff0c\u6b64\u6b65\u540c\u6837\u4e5f\u662f\u70ed\u5347\u7ea7\u4e2d\u975e\u5e38\u5173\u952e\u7684\u4e00\u6b65\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  // For code conciseness, all failures will not be captured\n\n  /* The old sidecar migrates ListenFD to the new sidecar through Unix Domain Socket */\n  // tcpLn *net.TCPListener\n  f, _ := tcpLn.File()\n  fdnum := f.Fd()\n  data := syscall.UnixRights(int(fdnum))\n  // Establish a connection with the new sidecar container through Unix Domain Socket\n  raddr, _ := net.ResolveUnixAddr("unix", "/dev/shm/migrate.sock")\n  uds, _ := net.DialUnix("unix", nil, raddr)\n  // Use UDS to send ListenFD to the new sidecar container\n  uds.WriteMsgUnix(nil, data, nil)\n  // Stop receiving new requests and start the drainage phase, for example, http2 GOAWAY\n  tcpLn.Close()\n\n  /* The new sidecar receives ListenFD and starts to provide external services */\n  // Listen to UDS\n  addr, _ := net.ResolveUnixAddr("unix", "/dev/shm/migrate.sock")\n  unixLn, _ := net.ListenUnix("unix", addr)\n  conn, _ := unixLn.AcceptUnix()\n  buf := make([]byte, 32)\n  oob := make([]byte, 32)\n  // Receive ListenFD\n  _, oobn, _, _, _ := conn.ReadMsgUnix(buf, oob)\n  scms, _ := syscall.ParseSocketControlMessage(oob[:oobn])\n  if len(scms) > 0 {\n    // Parse FD and convert to *net.TCPListener\n    fds, _ := syscall.ParseUnixRights(&(scms[0]))\n    f := os.NewFile(uintptr(fds[0]), "")\n    ln, _ := net.FileListener(f)\n    tcpLn, _ := ln.(*net.TCPListener)\n    // Start to provide external services based on the received Listener. The http service is used as an example\n    http.Serve(tcpLn, serveMux)\n  }\n\n')),(0,a.kt)("h1",{id:"\u5df2\u77e5mesh\u5bb9\u5668\u70ed\u5347\u7ea7\u6848\u4f8b"},"\u5df2\u77e5Mesh\u5bb9\u5668\u70ed\u5347\u7ea7\u6848\u4f8b"),(0,a.kt)("p",null,"\u963f\u91cc\u4e91\u670d\u52a1\u7f51\u683c\uff08Alibaba Cloud Service Mesh\uff0c\u7b80\u79f0ASM\uff09\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u6258\u7ba1\u5f0f\u7684\u670d\u52a1\u7f51\u683c\u5e73\u53f0\uff0c\u517c\u5bb9\u793e\u533aIstio\u5f00\u6e90\u670d\u52a1\u7f51\u683c\u3002\u5f53\u524d\uff0c\u57fa\u4e8eOpenKruise SidecarSet\u7684\u70ed\u5347\u7ea7\u80fd\u529b\uff0cASM\u5b9e\u73b0\u4e86\u6570\u636e\u5e73\u9762Sidecar\u70ed\u5347\u7ea7\u80fd\u529b\uff08Beta\uff09\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5e94\u7528\u65e0\u611f\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210\u670d\u52a1\u7f51\u683c\u7684\u6570\u636e\u5e73\u9762\u7248\u672c\u5347\u7ea7\uff0c\u6b63\u5f0f\u7248\u4e5f\u5c06\u4e8e\u8fd1\u671f\u4e0a\u7ebf\u3002\u9664\u70ed\u5347\u7ea7\u80fd\u529b\u5916\uff0cASM\u8fd8\u652f\u6301\u914d\u7f6e\u8bca\u65ad\u3001\u64cd\u4f5c\u5ba1\u8ba1\u3001\u8bbf\u95ee\u65e5\u5fd7\u3001\u76d1\u63a7\u3001\u670d\u52a1\u6ce8\u518c\u63a5\u5165\u7b49\u80fd\u529b\uff0c\u5168\u65b9\u4f4d\u63d0\u5347\u670d\u52a1\u7f51\u683c\u4f7f\u7528\u4f53\u9a8c\uff0c\u6b22\u8fce\u60a8\u524d\u5f80\u8bd5\u7528\u3002"),(0,a.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u4e91\u539f\u751f\u4e2dmesh\u5bb9\u5668\u7684\u70ed\u5347\u7ea7\u4e00\u76f4\u90fd\u662f\u8feb\u5207\u5374\u53c8\u68d8\u624b\u7684\u95ee\u9898\uff0c\u672c\u6587\u4e2d\u7684\u65b9\u6848\u4e5f\u53ea\u662f\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5728\u6b64\u95ee\u9898\u4e0a\u7684\u4e00\u6b21\u63a2\u7d22\uff0c\u5728\u53cd\u9988\u793e\u533a\u7684\u540c\u65f6\u4e5f\u5e0c\u671b\u80fd\u591f\u629b\u7816\u5f15\u7389\uff0c\u5f15\u53d1\u5404\u4f4d\u5bf9\u6b64\u4e2d\u573a\u666f\u7684\u601d\u8003\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u6b22\u8fce\u66f4\u591a\u7684\u540c\u5b66\u53c2\u4e0e\u5230 OpenKruise \u793e\u533a\u6765\uff0c\u5171\u540c\u5efa\u8bbe\u4e00\u4e2a\u573a\u666f\u66f4\u52a0\u4e30\u5bcc\u3001\u5b8c\u5584\u7684 K8s \u5e94\u7528\u7ba1\u7406\u3001\u4ea4\u4ed8\u6269\u5c55\u80fd\u529b\uff0c\u80fd\u591f\u9762\u5411\u66f4\u52a0\u89c4\u6a21\u5316\u3001\u590d\u6742\u5316\u3001\u6781\u81f4\u6027\u80fd\u7684\u573a\u666f\u3002"))}m.isMDXComponent=!0},1525:function(e,n,t){n.Z=t.p+"assets/images/how_update_mesh-3a481d5c7fc703baaa0f61eeeab900f1.png"},8037:function(e,n,t){n.Z=t.p+"assets/images/inject_sidecar-95e9a533cc8e31c0568fdeb02631131a.png"},1265:function(e,n,t){n.Z=t.p+"assets/images/migration-d3c1e779066507e6aeb8c3b6aabb7411.png"},7003:function(e,n,t){n.Z=t.p+"assets/images/update_sidecar-29730728e5bdcaddd9b1d94b2f180bb5.png"}}]);