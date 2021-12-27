"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3802],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=o,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return s},toc:function(){return d},default:function(){return k}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=["components"],p={slug:"openkruise-0.10.0",title:"OpenKruise 0.10.0\uff1a\u65b0\u589e\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u3001\u5e94\u7528\u9632\u62a4\u7b49\u80fd\u529b",authors:["FillZpp"],tags:["release"]},i=void 0,u={permalink:"/zh/blog/openkruise-0.10.0",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-09-06-release-0.10.0.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-09-06-release-0.10.0.md",title:"OpenKruise 0.10.0\uff1a\u65b0\u589e\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u3001\u5e94\u7528\u9632\u62a4\u7b49\u80fd\u529b",description:"\u672c\u6587\u5c06\u5e26\u4f60\u4e00\u89c8 v0.10.0 \u7684\u65b0\u53d8\u5316\uff0c\u5176\u4e2d\u65b0\u589e\u7684 WorkloadSpread\u3001PodUnavailableBudget \u7b49\u5927\u9897\u7c92\u7279\u6027\u540e\u7eed\u8fd8\u5c06\u6709\u4e13\u6587\u8be6\u7ec6\u4ecb\u7ecd\u5176\u8bbe\u8ba1\u5b9e\u73b0\u539f\u7406\u3002",date:"2021-09-06T00:00:00.000Z",formattedDate:"2021\u5e749\u67086\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:8.615,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],prevItem:{title:"OpenKruise v0.10.0 \u65b0\u7279\u6027WorkloadSpread\u89e3\u8bfb",permalink:"/zh/blog/workloadspread"},nextItem:{title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",permalink:"/zh/blog/SidecarSet"}},s={authorsImageUrls:[void 0]},d=[{value:"WorkloadSpread\uff1a\u65c1\u8def\u7684\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u80fd\u529b",id:"workloadspread\u65c1\u8def\u7684\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u80fd\u529b",children:[],level:2},{value:"PodUnavailableBudget\uff1a\u5e94\u7528\u53ef\u7528\u6027\u9632\u62a4",id:"podunavailablebudget\u5e94\u7528\u53ef\u7528\u6027\u9632\u62a4",children:[],level:2},{value:"CloneSet \u652f\u6301\u6309\u62d3\u6251\u89c4\u5219\u7f29\u5bb9",id:"cloneset-\u652f\u6301\u6309\u62d3\u6251\u89c4\u5219\u7f29\u5bb9",children:[],level:2},{value:"Advanced StatefulSet \u652f\u6301\u6d41\u5f0f\u6269\u5bb9",id:"advanced-statefulset-\u652f\u6301\u6d41\u5f0f\u6269\u5bb9",children:[],level:2},{value:"More",id:"more",children:[],level:2}],c={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u5e26\u4f60\u4e00\u89c8 v0.10.0 \u7684\u65b0\u53d8\u5316\uff0c\u5176\u4e2d\u65b0\u589e\u7684 WorkloadSpread\u3001PodUnavailableBudget \u7b49\u5927\u9897\u7c92\u7279\u6027\u540e\u7eed\u8fd8\u5c06\u6709\u4e13\u6587\u8be6\u7ec6\u4ecb\u7ecd\u5176\u8bbe\u8ba1\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("h2",{id:"workloadspread\u65c1\u8def\u7684\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u80fd\u529b"},"WorkloadSpread\uff1a\u65c1\u8def\u7684\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u80fd\u529b"),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4\u7684\u573a\u666f\u4e0b\uff0c\u6709\u7740\u591a\u79cd\u591a\u6837\u7684\u62d3\u6251\u6253\u6563\u4ee5\u53ca\u5f39\u6027\u7684\u8bc9\u6c42\u3002\u5176\u4e2d\u6700\u5e38\u89c1\u3001\u6700\u57fa\u672c\u7684\uff0c\u5c31\u662f\u6309\u67d0\u79cd\u6216\u51e0\u79cd\u62d3\u6251\u6c34\u5e73\u6253\u6563\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72\u9700\u8981\u6309 node \u7ef4\u5ea6\u6253\u6563\uff0c\u907f\u514d\u5806\u53e0\uff08\u63d0\u9ad8\u5bb9\u707e\u80fd\u529b\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72\u9700\u8981\u6309 AZ\uff08available zone\uff09\u7ef4\u5ea6\u6253\u6563\uff08\u63d0\u9ad8\u5bb9\u707e\u80fd\u529b\uff09")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u57fa\u672c\u7684\u8bc9\u6c42\uff0c\u901a\u8fc7 Kubernetes \u539f\u751f\u63d0\u4f9b\u7684 pod affinity\u3001",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"topology spread constraints")," \u7b49\u80fd\u529b\u76ee\u524d\u90fd\u80fd\u591f\u6ee1\u8db3\u4e86\u3002\u4f46\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u573a\u666f\u4e0b\uff0c\u8fd8\u6709\u7740\u592a\u591a\u66f4\u52a0\u590d\u6742\u7684\u5206\u533a\u4e0e\u5f39\u6027\u9700\u6c42\uff0c\u4ee5\u4e0b\u4e3e\u4e00\u4e9b\u5b9e\u9645\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6309 zone \u6253\u6563\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u5728\u4e0d\u540c zone \u4e2d\u90e8\u7f72\u7684\u6bd4\u4f8b\u6570\uff0c\u6bd4\u5982\u67d0\u4e2a\u5e94\u7528\u5728 zone a\u3001b\u3001c \u4e2d\u90e8\u7f72\u7684 Pod \u6570\u91cf\u6bd4\u4f8b\u4e3a 1 : 1 : 2 \u7b49\uff08\u7531\u4e8e\u4e00\u4e9b\u73b0\u5b9e\u7684\u539f\u56e0\u6bd4\u5982\u8be5\u5e94\u7528\u5728\u591a\u4e2a zone \u4e2d\u7684\u6d41\u91cf\u4e0d\u5747\u8861\u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u5728\u591a\u4e2a zone \u6216\u4e0d\u540c\u673a\u578b\u7684\u62d3\u6251\uff0c\u5e94\u7528\u6269\u5bb9\u65f6\uff0c\u4f18\u5148\u90e8\u7f72\u5230\u67d0\u4e2a zone \u6216\u673a\u578b\u4e0a\uff0c\u5f53\u8d44\u6e90\u4e0d\u8db3\u65f6\u518d\u90e8\u7f72\u5230\u53e6\u4e00\u4e2a zone \u6216\u673a\u578b\u4e0a\uff08\u5f80\u540e\u4ee5\u6b64\u7c7b\u63a8\uff09\uff1b\u5e94\u7528\u7f29\u5bb9\u65f6\uff0c\u8981\u6309\u53cd\u5411\u987a\u5e8f\uff0c\u4f18\u5148\u7f29\u5bb9\u540e\u9762 zone \u6216\u673a\u578b\u4e0a\u7684 Pod\uff08\u5f80\u524d\u4ee5\u6b64\u7c7b\u63a8\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u5728\u591a\u4e2a\u57fa\u7840\u7684\u8282\u70b9\u6c60\u548c\u5f39\u6027\u7684\u8282\u70b9\u6c60\uff0c\u5e94\u7528\u90e8\u7f72\u65f6\u9700\u8981\u56fa\u5b9a\u6570\u91cf\u6216\u6bd4\u4f8b\u7684 Pod \u90e8\u7f72\u5728\u57fa\u7840\u8282\u70b9\u6c60\uff0c\u5176\u4f59\u7684\u90fd\u6269\u5230\u5f39\u6027\u8282\u70b9\u6c60")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e9b\u4f8b\u5b50\uff0c\u8fc7\u53bb\u4e00\u822c\u53ea\u80fd\u5c06\u4e00\u4e2a\u5e94\u7528\u62c6\u5206\u4e3a\u591a\u4e2a Workload\uff08\u6bd4\u5982 Deployment\uff09\u6765\u90e8\u7f72\uff0c\u624d\u80fd\u89e3\u51b3\u5e94\u7528\u5728\u4e0d\u540c\u62d3\u6251\u4e0b\u91c7\u7528\u4e0d\u540c\u6bd4\u4f8b\u6570\u91cf\u3001\u6269\u7f29\u5bb9\u4f18\u5148\u7ea7\u3001\u8d44\u6e90\u611f\u77e5\u3001\u5f39\u6027\u9009\u62e9\u7b49\u573a\u666f\u7684\u57fa\u672c\u95ee\u9898\uff0c\u4f46\u8fd8\u662f\u9700\u8981 PaaS \u5c42\u6df1\u5ea6\u5b9a\u5236\u5316\uff0c\u6765\u652f\u6301\u5bf9\u4e00\u4e2a\u5e94\u7528\u591a\u4e2a Workload \u7684\u7cbe\u7ec6\u5316\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e9b\u95ee\u9898\uff0c\u5728 Kruise v0.10.0 \u7248\u672c\u4e2d\u65b0\u589e\u4e86 WorkloadSpread \u8d44\u6e90\uff0c\u76ee\u524d\u5b83\u652f\u6301\u914d\u5408 Deployment\u3001ReplicaSet\u3001CloneSet \u8fd9\u4e9b Workload \u7c7b\u578b\uff0c\u6765\u7ba1\u7406\u5b83\u4eec\u4e0b\u5c5e Pod \u7684\u5206\u533a\u4e0e\u5f39\u6027\u62d3\u6251\u3002\n\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5316\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadata:\n  name: workloadspread-demo\nspec:\n  targetRef:\n    apiVersion: apps/v1 | apps.kruise.io/v1alpha1\n    kind: Deployment | CloneSet\n    name: workload-xxx\n  subsets:\n  - name: subset-a\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-a\n    maxReplicas: 10 | 30%\n  - name: subset-b\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-b\n")),(0,r.kt)("p",null,"\u521b\u5efa\u8fd9\u4e2a WorkloadSpread \u53ef\u4ee5\u901a\u8fc7 targetRef \u5173\u8054\u5230\u4e00\u4e2a Workload \u5bf9\u8c61\u4e0a\uff0c\u7136\u540e\u8fd9\u4e2a Workload \u5728\u6269\u5bb9 pod \u7684\u8fc7\u7a0b\u4e2d\uff0cPod \u4f1a\u88ab Kruise \u6309\u4e0a\u8ff0\u7b56\u7565\u6ce8\u5165\u5bf9\u5e94\u7684\u62d3\u6251\u89c4\u5219\u3002\u8fd9\u662f\u4e00\u79cd\u65c1\u8def\u7684\u6ce8\u5165\u548c\u7ba1\u7406\u65b9\u5f0f\uff0c\u672c\u8eab\u4e0d\u4f1a\u5e72\u6d89 Workload \u5bf9 Pod \u7684\u6269\u7f29\u5bb9\u3001\u53d1\u5e03\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aWorkloadSpread \u5bf9 Pod \u7684\u7f29\u5bb9\u7684\u4f18\u5148\u7ea7\u63a7\u5236\u662f\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/labels-annotations-taints/#pod-deletion-cost"},"Pod Deletion Cost")," \u6765\u5b9e\u73b0\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c Workload \u7c7b\u578b\u662f CloneSet\uff0c\u5219\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u4e2a feature\uff0c\u53ef\u4ee5\u5b9e\u73b0\u7f29\u5bb9\u4f18\u5148\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c Workload \u7c7b\u578b\u662f Deployment/ReplicaSet\uff0c\u5219\u8981\u6c42 Kubernetes version >= 1.21\uff0c\u4e14\u5728 1.21 \u4e2d\u8981\u5728 kube-controller-manager \u4e0a\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"li"},"PodDeletionCost")," \u8fd9\u4e2a feature-gate")),(0,r.kt)("p",null,"\u4f7f\u7528 WorkloadSpread \u529f\u80fd\uff0c\u9700\u8981\u5728 \u5b89\u88c5/\u5347\u7ea7 Kruise v0.10.0 \u7684\u65f6\u5019\u6253\u5f00 WorkloadSpread \u8fd9\u4e2a feature-gate\u3002"),(0,r.kt)("h2",{id:"podunavailablebudget\u5e94\u7528\u53ef\u7528\u6027\u9632\u62a4"},"PodUnavailableBudget\uff1a\u5e94\u7528\u53ef\u7528\u6027\u9632\u62a4"),(0,r.kt)("p",null,"\u5728\u8bf8\u591a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"},"Voluntary Disruption")," \u573a\u666f\u4e2d Kubernetes \u539f\u751f\u63d0\u4f9b\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"Pod Disruption Budget\uff08PDB\uff09")," \u901a\u8fc7\u9650\u5236\u540c\u65f6\u4e2d\u65ad\u7684 Pod \u6570\u91cf\uff0c\u6765\u4fdd\u8bc1\u5e94\u7528\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,r.kt)("p",null,"\u4f46\u8fd8\u6709\u5f88\u591a\u573a\u666f\u4e2d\uff0c\u5373\u4fbf\u6709 PDB \u9632\u62a4\u4f9d\u7136\u5c06\u4f1a\u5bfc\u81f4\u4e1a\u52a1\u4e2d\u65ad\u3001\u670d\u52a1\u964d\u7ea7\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528 owner \u901a\u8fc7 Deployment \u6b63\u5728\u8fdb\u884c\u7248\u672c\u5347\u7ea7\uff0c\u4e0e\u6b64\u540c\u65f6\u96c6\u7fa4\u7ba1\u7406\u5458\u7531\u4e8e\u673a\u5668\u8d44\u6e90\u5229\u7528\u7387\u8fc7\u4f4e\u6b63\u5728\u8fdb\u884c node \u7f29\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6\u56e2\u961f\u5229\u7528 SidecarSet \u6b63\u5728\u539f\u5730\u5347\u7ea7\u96c6\u7fa4\u4e2d\u7684sidecar\u7248\u672c\uff08\u4f8b\u5982\uff1aServiceMesh envoy\uff09\uff0c\u540c\u65f6HPA\u6b63\u5728\u5bf9\u540c\u4e00\u6279\u5e94\u7528\u8fdb\u884c\u7f29\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528 owner \u548c\u4e2d\u95f4\u4ef6\u56e2\u961f\u5229\u7528 CloneSet\u3001SidecarSet \u539f\u5730\u5347\u7ea7\u7684\u80fd\u529b\uff0c\u6b63\u5728\u5bf9\u540c\u4e00\u6279 Pod \u8fdb\u884c\u5347\u7ea7")),(0,r.kt)("p",null,"\u8fd9\u5176\u5b9e\u5f88\u597d\u7406\u89e3 -- PDB \u53ea\u80fd\u9632\u63a7\u901a\u8fc7 Eviction API \u6765\u89e6\u53d1\u7684 Pod \u9a71\u9010\uff08\u4f8b\u5982 kubectl drain\u9a71\u9010node\u4e0a\u9762\u7684\u6240\u6709Pod\uff09\uff0c\u4f46\u662f\u5bf9\u4e8e Pod \u5220\u9664\u3001\u539f\u5730\u5347\u7ea7 \u7b49\u5f88\u591a\u64cd\u4f5c\u662f\u65e0\u6cd5\u9632\u62a4\u7684\u3002"),(0,r.kt)("p",null,"\u5728 Kruise v0.10.0 \u7248\u672c\u4e2d\u65b0\u589e\u7684 PodUnavailableBudget\uff08PUB\uff09\u529f\u80fd\uff0c\u5219\u662f\u5bf9\u539f\u751f PDB \u7684\u5f3a\u5316\u6269\u5c55\u3002\u5b83\u5305\u542b\u4e86 PDB \u81ea\u8eab\u7684\u80fd\u529b\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u5bf9\u66f4\u591a Voluntary Disruption \u64cd\u4f5c\u7684\u9632\u62a4\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e Pod \u5220\u9664\u3001\u539f\u5730\u5347\u7ea7 \u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodUnavailableBudget\nmetadata:\n  name: web-server-pub\n  namespace: web\nspec:\n  targetRef:\n    apiVersion: apps/v1 | apps.kruise.io/v1alpha1\n    kind: Deployment | CloneSet | StatefulSet | ...\n    name: web-server\n  # selector \u4e0e targetRef \u4e8c\u9009\u4e00\u914d\u7f6e\n# selector:\n#   matchLabels:\n#     app: web-server\n  # \u4fdd\u8bc1\u7684\u6700\u5927\u4e0d\u53ef\u7528\u6570\u91cf\n  maxUnavailable: 60%\n  # \u4fdd\u8bc1\u7684\u6700\u5c0f\u53ef\u7528\u6570\u91cf\n# minAvailable: 40%\n")),(0,r.kt)("p",null,"\u4f7f\u7528 PodUnavailableBudget \u529f\u80fd\uff0c\u9700\u8981\u5728 \u5b89\u88c5/\u5347\u7ea7 Kruise v0.10.0 \u7684\u65f6\u5019\u6253\u5f00feature-gate\uff08\u4e24\u4e2a\u53ef\u4ee5\u9009\u62e9\u6253\u5f00\u4e00\u4e2a\uff0c\u4e5f\u53ef\u4ee5\u90fd\u6253\u5f00\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PodUnavailableBudgetDeleteGate\uff1a\u62e6\u622a\u9632\u62a4 Pod \u5220\u9664\u3001\u9a71\u9010 \u7b49\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"PodUnavailableBudgetUpdateGate\uff1a\u62e6\u622a\u9632\u62a4 Pod \u539f\u5730\u5347\u7ea7 \u7b49\u66f4\u65b0\u64cd\u4f5c")),(0,r.kt)("h2",{id:"cloneset-\u652f\u6301\u6309\u62d3\u6251\u89c4\u5219\u7f29\u5bb9"},"CloneSet \u652f\u6301\u6309\u62d3\u6251\u89c4\u5219\u7f29\u5bb9"),(0,r.kt)("p",null,"\u5728 CloneSet \u7f29\u5bb9\uff08\u8c03\u5c0f replicas \u6570\u91cf\uff09\u7684\u65f6\u5019\uff0c\u9009\u62e9\u54ea\u4e9b Pod \u5220\u9664\u662f\u6709\u4e00\u5957\u56fa\u5b9a\u7b97\u6cd5\u6392\u5e8f\u7684\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u672a\u8c03\u5ea6 < \u5df2\u8c03\u5ea6"),(0,r.kt)("li",{parentName:"ol"},"PodPending < PodUnknown < PodRunning"),(0,r.kt)("li",{parentName:"ol"},"Not ready < ready"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8f83\u5c0f pod-deletion cost < \u8f83\u5927 pod-deletion cost")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8f83\u5927\u6253\u6563\u6743\u91cd < \u8f83\u5c0f")),(0,r.kt)("li",{parentName:"ol"},"\u5904\u4e8e Ready \u65f6\u95f4\u8f83\u77ed < \u8f83\u957f"),(0,r.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u91cd\u542f\u6b21\u6570\u8f83\u591a < \u8f83\u5c11"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65f6\u95f4\u8f83\u77ed < \u8f83\u957f")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u201c4\u201d \u662f\u5728 Kruise v0.9.0 \u4e2d\u5f00\u59cb\u63d0\u4f9b\u7684\u7279\u6027\uff0c\u7528\u4e8e\u652f\u6301\u7528\u6237\u6307\u5b9a\u5220\u9664\u987a\u5e8f\uff08WorkloadSpread \u5c31\u662f\u5229\u7528\u8fd9\u4e2a\u529f\u80fd\u5b9e\u73b0\u7f29\u5bb9\u4f18\u5148\u7ea7\uff09\uff1b",(0,r.kt)("strong",{parentName:"p"},"\u800c \u201c5\u201d \u5219\u662f\u5f53\u524d v0.10.0 \u63d0\u4f9b\u7684\u7279\u6027\uff0c\u5373\u5728\u7f29\u5bb9\u7684\u65f6\u5019\u4f1a\u53c2\u8003\u5e94\u7528\u7684\u62d3\u6251\u6253\u6563\u6765\u6392\u5e8f"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u914d\u7f6e\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"topology spread constraints"),"\uff0c\u5219 CloneSet \u7f29\u5bb9\u65f6\u4f1a\u6309\u7167\u5176\u4e2d\u7684 topology \u7ef4\u5ea6\u6253\u6563\u6765\u9009\u62e9 Pod \u5220\u9664\uff08\u6bd4\u5982\u5c3d\u91cf\u6253\u5e73\u591a\u4e2a zone \u4e0a\u90e8\u7f72 Pod \u7684\u6570\u91cf\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u6ca1\u6709\u914d\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"topology spread constraints"),"\uff0c\u5219\u9ed8\u8ba4\u60c5\u51b5\u4e0b CloneSet \u7f29\u5bb9\u65f6\u4f1a\u6309\u7167 node \u8282\u70b9\u7ef4\u5ea6\u6253\u6563\u6765\u9009\u62e9 Pod \u5220\u9664\uff08\u5c3d\u91cf\u51cf\u5c11\u540c node \u4e0a\u7684\u5806\u53e0\u6570\u91cf\uff09")),(0,r.kt)("h2",{id:"advanced-statefulset-\u652f\u6301\u6d41\u5f0f\u6269\u5bb9"},"Advanced StatefulSet \u652f\u6301\u6d41\u5f0f\u6269\u5bb9"),(0,r.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u5728\u4e00\u4e2a\u65b0 Advanced StatefulSet \u521b\u5efa\u540e\u6709\u5927\u91cf\u5931\u8d25\u7684 pod \u88ab\u521b\u5efa\u51fa\u6765\uff0c\u4ece Kruise v0.10.0 \u7248\u672c\u5f00\u59cb\u5f15\u5165\u4e86\u5728 scale strategy \u4e2d\u7684 maxUnavailable \u7b56\u7565\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 100\n  scaleStrategy:\n    maxUnavailable: 10% # percentage or absolute number\n")),(0,r.kt)("p",null,"\u5f53\u8fd9\u4e2a\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u4e4b\u540e\uff0cAdvanced StatefulSet \u4f1a\u4fdd\u8bc1\u521b\u5efa pod \u4e4b\u540e\u4e0d\u53ef\u7528 pod \u6570\u91cf\u4e0d\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u503c\u3002\n\u6bd4\u5982\u8bf4\uff0c\u4e0a\u9762\u8fd9\u4e2a StatefulSet \u4e00\u5f00\u59cb\u53ea\u4f1a\u4e00\u6b21\u6027\u521b\u5efa 10 \u4e2a pod\u3002\u5728\u6b64\u4e4b\u540e\uff0c\u6bcf\u5f53\u4e00\u4e2a pod \u53d8\u4e3a running\u3001ready \u72b6\u6001\u540e\uff0c\u624d\u4f1a\u518d\u521b\u5efa\u4e00\u4e2a\u65b0 pod \u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u4e2a\u529f\u80fd\u53ea\u5141\u8bb8\u5728 podManagementPolicy \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallel")," \u7684 StatefulSet \u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("p",null,"\u66f4\u591a\u7248\u672c\u53d8\u5316\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"release page")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"ChangeLog")))}k.isMDXComponent=!0}}]);