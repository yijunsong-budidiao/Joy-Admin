var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&n(e,a,t[a]);return e},c=(e,s)=>t(e,a(s));import{h as l,P as u}from"./index-ccc255a2.js";import{G as m,s as p,t as b,d as v,b as d,o as g,v as h,h as f,x as y,y as O}from"./index-b6078456.js";const j=e=>l.post(u+"/login",e),w=()=>l.get(u+"/auth/buttons"),k=()=>l.get(u+"/menu/list");var D="./assets/svg/logo-7e7c7361.svg";const P=()=>{const e=m(),t=p((()=>e.themeConfig)),a=()=>{const e=document.documentElement;t.value.isDark?e.setAttribute("class","dark"):e.setAttribute("class","")};return b((()=>{a()})),{switchTheme:a}},x=v({name:"switchDark"}),C=v(c(i({},x),{setup(e){const t=m(),{switchTheme:a}=P(),s=p((()=>t.themeConfig)),o=e=>{t.setThemeConfig(c(i({},s.value),{isDark:e})),a()};return(e,t)=>{const a=d("el-switch");return g(),h(a,{modelValue:f(s).isDark,"onUpdate:modelValue":t[0]||(t[0]=e=>f(s).isDark=e),onChange:o,"inline-prompt":"","active-color":"#0a0a0a","inactive-color":"#dcdfe6","active-icon":f(y),"inactive-icon":f(O)},null,8,["modelValue","active-icon","inactive-icon"])}}}));export{D as _,C as a,w as b,k as g,j as l,P as u};