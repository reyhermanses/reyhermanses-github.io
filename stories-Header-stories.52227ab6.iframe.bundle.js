(self.webpackChunkmakyo=self.webpackChunkmakyo||[]).push([[512],{"./src/stories/Header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Header",component:__webpack_require__("./src/stories/Header.tsx").Y,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onLogout:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onCreateAccount:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},LoggedIn={args:{user:{name:"Jane Doe"}}},LoggedOut={};LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",...LoggedIn.parameters?.docs?.source}}},LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}};const __namedExportsOrder=["LoggedIn","LoggedOut"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary=!1,size="medium",backgroundColor,label,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor},...props,children:label})};Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}}},"./src/stories/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Header});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/stories/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=_ref=>{let{user,onLogin,onLogout,onCreateAccount}=_ref;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.$,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  name: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},description:""},onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCreateAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);