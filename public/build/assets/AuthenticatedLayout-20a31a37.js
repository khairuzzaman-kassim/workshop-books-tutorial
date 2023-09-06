import{A as f}from"./ApplicationLogo-7bcde14b.js";import{_ as p,a as c,b as _,c as i}from"./ResponsiveNavLink-d88bfeec.js";import{h as v,o as n,e as l,a as e,b as t,w as o,j as g,l as b,i as r,t as d,n as h,r as m,g as x}from"./app-38e25488.js";const y={class:"min-h-screen bg-gray-100"},w={class:"bg-white border-b border-gray-100"},k={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},$={class:"flex justify-between h-16"},C={class:"flex"},L={class:"shrink-0 flex items-center"},M={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},j={class:"hidden sm:flex sm:items-center sm:ml-6"},B={class:"ml-3 relative"},N={class:"inline-flex rounded-md"},D={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},V=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),A={class:"-mr-2 flex items-center sm:hidden"},z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},O={class:"pt-2 pb-3 space-y-1"},P={class:"pt-4 pb-1 border-t border-gray-200"},S={class:"px-4"},E={class:"font-medium text-base text-gray-800"},T={class:"font-medium text-sm text-gray-500"},q={class:"mt-3 space-y-1"},F={key:0,class:"bg-white shadow"},G={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},R={__name:"AuthenticatedLayout",setup(H){const a=v(!1);return(s,u)=>(n(),l("div",null,[e("div",y,[e("nav",w,[e("div",k,[e("div",$,[e("div",C,[e("div",L,[t(g(b),{href:s.route("dashboard")},{default:o(()=>[t(f,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",M,[t(p,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[r(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",j,[e("div",B,[t(_,{align:"right",width:"48"},{trigger:o(()=>[e("span",N,[e("button",D,[r(d(s.$page.props.auth.user.name)+" ",1),V])])]),content:o(()=>[t(c,{href:s.route("profile.edit")},{default:o(()=>[r(" Profile ")]),_:1},8,["href"]),t(c,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[r(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",A,[e("button",{onClick:u[0]||(u[0]=I=>a.value=!a.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(n(),l("svg",z,[e("path",{class:h({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:h([{block:a.value,hidden:!a.value},"sm:hidden"])},[e("div",O,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[r(" Dashboard ")]),_:1},8,["href","active"])]),e("div",P,[e("div",S,[e("div",E,d(s.$page.props.auth.user.name),1),e("div",T,d(s.$page.props.auth.user.email),1)]),e("div",q,[t(i,{href:s.route("profile.edit")},{default:o(()=>[r(" Profile ")]),_:1},8,["href"]),t(i,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[r(" Log Out ")]),_:1},8,["href"])])])],2)]),s.$slots.header?(n(),l("header",F,[e("div",G,[m(s.$slots,"header")])])):x("",!0),e("main",null,[m(s.$slots,"default")])])]))}};export{R as _};
