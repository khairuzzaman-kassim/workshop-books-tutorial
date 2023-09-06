import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,e as n,a as s,r as t,b as r,w as l,c as _}from"./app-38e25488.js";import{_ as m}from"./SecondaryButton-72212cda.js";const p={},h={class:"md:col-span-1 flex justify-between"},f={class:"px-4 sm:px-0"},x={class:"text-lg font-medium text-gray-900"},u={class:"mt-1 text-sm text-gray-600"},$={class:"px-4 sm:px-0"};function g(e,o){return c(),n("div",h,[s("div",f,[s("h3",x,[t(e.$slots,"title")]),s("p",u,[t(e.$slots,"description")])]),s("div",$,[t(e.$slots,"aside")])])}const y=d(p,[["render",g]]),w={class:"md:grid md:grid-cols-3 md:gap-6"},v={class:"mt-5 md:mt-0 md:col-span-2"},b={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},A={__name:"ActionSection",setup(e){return(o,i)=>(c(),n("div",w,[r(y,null,{title:l(()=>[t(o.$slots,"title")]),description:l(()=>[t(o.$slots,"description")]),_:3}),s("div",v,[s("div",b,[t(o.$slots,"content")])])]))}},B={class:"px-6 py-4"},S={class:"text-lg font-medium text-gray-900"},k={class:"mt-4 text-sm text-gray-600"},j={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},D={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const i=()=>{o("close")};return(a,C)=>(c(),_(m,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:l(()=>[s("div",B,[s("div",S,[t(a.$slots,"title")]),s("div",k,[t(a.$slots,"content")])]),s("div",j,[t(a.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{y as S,A as _,D as a};
