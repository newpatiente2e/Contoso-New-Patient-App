"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[899],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const o={},i="Upload training data",l={unversionedId:"form-recognizer-studio/upload-training-data",id:"form-recognizer-studio/upload-training-data",title:"Upload training data",description:"This topic describes how to upload your training data to Document Intelligence Studio.",source:"@site/docs/25-form-recognizer-studio/25-upload-training-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/upload-training-data",permalink:"/Contoso-New-Patient-App/form-recognizer-studio/upload-training-data",draft:!1,editUrl:"https://github.com/Contoso-New-Patient-App/tree/main/docs/docs/25-form-recognizer-studio/25-upload-training-data.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Document Intelligence Studio",permalink:"/Contoso-New-Patient-App/form-recognizer-studio/intro-form-recognizer"},next:{title:"Create a project",permalink:"/Contoso-New-Patient-App/form-recognizer-studio/create-project"}},p={},s=[{value:"New patient registration form",id:"new-patient-registration-form",level:2},{value:"Upload new patient registration form training data",id:"upload-new-patient-registration-form-training-data",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upload-training-data"},"Upload training data"),(0,n.kt)("p",null,"This topic describes how to upload your training data to ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/concept-form-recognizer-studio?WT.mc_id=aiml-77396-cxa"},"Document Intelligence Studio"),"."),(0,n.kt)("h2",{id:"new-patient-registration-form"},"New patient registration form"),(0,n.kt)("p",null,"In this workshop, you'll create a ",(0,n.kt)("em",{parentName:"p"},"custom template model")," to recognize the fields in the new patient registration form. There are five forms in the training set, and each form contains the same fields, four of these forms have been labeled, the fifth form is unlabeled. As part of this workshop, you'll label the fifth form."),(0,n.kt)("p",null,"This workshop includes a ",(0,n.kt)("em",{parentName:"p"},"New Patient Registration Form")," and matching label data you need to upload to an Azure storage container."),(0,n.kt)("p",null,"The label data describes the location of the fields on the forms and was created for the workshop using Document Intelligence Studio. The label data is in a JSON file that is named the same as the form file. For example, the label data for the form named ",(0,n.kt)("inlineCode",{parentName:"p"},"form1.pdf")," is in the file named ",(0,n.kt)("inlineCode",{parentName:"p"},"form1.pdf.json"),". The label data is in the same folder as the form files."),(0,n.kt)("h2",{id:"upload-new-patient-registration-form-training-data"},"Upload new patient registration form training data"),(0,n.kt)("p",null,"Upload the ",(0,n.kt)("em",{parentName:"p"},"New Patient Registration Form")," and matching label data to the storage container that you created in the previous step."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal")," and sign in.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the Azure Portal ",(0,n.kt)("inlineCode",{parentName:"p"},"burger menu"),", select ",(0,n.kt)("inlineCode",{parentName:"p"},"All services"),", then select ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage accounts")," to find your storage account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the storage account created in the previous step. The name starts with ",(0,n.kt)("strong",{parentName:"p"},"storage"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Storage account")," page, select ",(0,n.kt)("strong",{parentName:"p"},"Containers")," from the left-hand menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"trainingdata")," container")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"trainingdata")," page, select ",(0,n.kt)("strong",{parentName:"p"},"Upload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Upload blob")," page, select ",(0,n.kt)("strong",{parentName:"p"},"Browse for files"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"file manager")," dialog, select ",(0,n.kt)("strong",{parentName:"p"},"all")," the files from the ",(0,n.kt)("inlineCode",{parentName:"p"},"contoso_new_patient_assets/training_labeled/<Language_folder>")," folder you cloned to your computer."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The new patient registration form has been localized into several languages. Select the folder that matches the language you want to use for the workshop."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Open"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Upload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Close the ",(0,n.kt)("strong",{parentName:"p"},"Upload blob")," dialog.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Leave the Azure portal open in a browser tab."))))}d.isMDXComponent=!0}}]);