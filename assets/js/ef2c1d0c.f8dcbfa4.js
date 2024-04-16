"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[905],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(o),p=n,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1980:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=o(7462),n=(o(7294),o(4137));const i={},a="Document Intelligence Studio",c={unversionedId:"form-recognizer-studio/intro-form-recognizer",id:"form-recognizer-studio/intro-form-recognizer",title:"Document Intelligence Studio",description:"Document Intelligence Studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model.",source:"@site/docs/25-form-recognizer-studio/10-intro-form-recognizer.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/intro-form-recognizer",permalink:"/Contoso-New-Patient-App/form-recognizer-studio/intro-form-recognizer",draft:!1,editUrl:"https://github.com/Contoso-New-Patient-App/tree/main/docs/docs/25-form-recognizer-studio/10-intro-form-recognizer.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure AI Document Intelligence",permalink:"/Contoso-New-Patient-App/category/azure-ai-document-intelligence"},next:{title:"Upload training data",permalink:"/Contoso-New-Patient-App/form-recognizer-studio/upload-training-data"}},s={},l=[{value:"Custom Form Recognizer models",id:"custom-form-recognizer-models",level:2},{value:"Custom model types",id:"custom-model-types",level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"document-intelligence-studio"},"Document Intelligence Studio"),(0,n.kt)("p",null,"Document Intelligence Studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model."),(0,n.kt)("h2",{id:"custom-form-recognizer-models"},"Custom Form Recognizer models"),(0,n.kt)("p",null,"Form Recognizer uses advanced machine learning to extract text and table data from your documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards."),(0,n.kt)("p",null,"To train a custom model, you need to provide a set of labeled training documents. The training documents should be in the same format as the documents you want to recognize. For example, if you want to recognize receipts, you should provide labeled training receipts."),(0,n.kt)("p",null,"You need at least five examples of a document type to train a custom model. For example, if you want to recognize receipts, you'd need five labeled receipts examples."),(0,n.kt)("h2",{id:"custom-model-types"},"Custom model types"),(0,n.kt)("p",null,"Custom models can be one of two types, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-template?WT.mc_id=aiml-77396-cxa"},(0,n.kt)("strong",{parentName:"a"},"custom template"))," or custom form and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-neural?WT.mc_id=aiml-77396-cxa"},(0,n.kt)("strong",{parentName:"a"},"custom neural"))," or custom document models. The labeling and training process for both models is identical, but the models differ as follows:"))}d.isMDXComponent=!0}}]);