import{_ as c}from"./AppLayout-df0de8c3.js";import p from"./DeleteUserForm-a3a69a80.js";import l from"./LogoutOtherBrowserSessionsForm-619b4a7f.js";import{S as s}from"./SectionBorder-e5b0a8e4.js";import f from"./TwoFactorAuthenticationForm-b2b5329b.js";import u from"./UpdatePasswordForm-2a80774b.js";import _ from"./UpdateProfileInformationForm-eb48b152.js";import{o,c as d,w as n,a as i,e as r,b as t,g as a,F as h}from"./app-38e25488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-d88bfeec.js";import"./DangerButton-ceed9c24.js";import"./TextInput-b9be03e7.js";import"./InputLabel-413e5478.js";import"./SecondaryButton-72212cda.js";import"./ActionMessage-ae208429.js";import"./DialogModal-0bbb438b.js";import"./PrimaryButton-68de50b9.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};
