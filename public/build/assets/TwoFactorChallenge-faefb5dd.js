import{o as s,e as r,a,r as p,h as m,T as w,b as o,j as t,w as f,F as n,Z as C,i as l,f as v,n as V,p as $}from"./app-38e25488.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as B}from"./AuthenticationCardLogo-f2a880c4.js";import{_ as g,a as h}from"./TextInput-b9be03e7.js";import{_ as x}from"./InputLabel-413e5478.js";import{P as I}from"./PrimaryButton-68de50b9.js";const P={},U={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},j={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function F(d,c){return s(),r("div",U,[a("div",null,[p(d.$slots,"logo")]),a("div",j,[p(d.$slots,"default")])])}const N=T(P,[["render",F]]),S={class:"mb-4 text-sm text-gray-600"},R=["onSubmit"],z={key:0},A={key:1},E={class:"flex items-center justify-end mt-4"},L=["onClick"],K={__name:"TwoFactorChallenge",setup(d){const c=m(!1),e=w({code:"",recovery_code:""}),_=m(null),y=m(null),b=async()=>{c.value^=!0,await $(),c.value?(_.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(M,i)=>(s(),r(n,null,[o(t(C),{title:"Two-factor Confirmation"}),o(N,null,{logo:f(()=>[o(B)]),default:f(()=>[a("div",S,[c.value?(s(),r(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),r(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),a("form",{onSubmit:v(k,["prevent"])},[c.value?(s(),r("div",A,[o(x,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:t(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(h,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),r("div",z,[o(x,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":i[0]||(i[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(h,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),a("div",E,[a("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:v(b,["prevent"])},[c.value?(s(),r(n,{key:1},[l(" Use an authentication code ")],64)):(s(),r(n,{key:0},[l(" Use a recovery code ")],64))],8,L),o(I,{class:V(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:f(()=>[l(" Log in ")]),_:1},8,["class","disabled"])])],40,R)]),_:1})],64))}};export{K as default};
