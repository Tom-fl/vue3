import{_ as e,o as a,c as s,d as t,x as l,C as o,D as n,i as d,q as u,h as c,w as r,J as i,a as m,b as v,f}from"./index.67228c61.js";const p={class:"box"};const _=e({},[["render",function(e,t){return a(),s("div",p,"A")}],["__scopeId","data-v-4176f900"]]),b=e=>(o("data-v-fbe923ce"),e=e(),n(),e),x={class:"box"},g=[b((()=>d("div",{class:"header"},null,-1))),b((()=>d("div",null,"拖动",-1)))],C=e(t({__name:"Case",setup(e){const t=(e,a)=>{let s=e.firstElementChild;s.addEventListener("mousedown",(a=>{let s=a.clientX-e.offsetLeft,t=a.clientY-e.offsetTop;const l=a=>{console.log(a),e.style.left=a.clientX-s+"px",e.style.top=a.clientY-t+"px"};document.addEventListener("mousemove",l),document.addEventListener("mouseup",(()=>{document.removeEventListener("mousemove",l)}))})),console.log(s)};return(e,o)=>l((a(),s("div",x,g)),[[t]])}}),[["__scopeId","data-v-fbe923ce"]]),E={class:"a"},L=f("切换"),h=e(t({__name:"Custom",setup(e){let t=u(!0),o=u("");const n=(e,a)=>{e.style.background=a.value.background};return(e,u)=>{const f=v("el-button"),p=v("el-input");return a(),s("div",null,[d("div",E,[c(f,{onClick:u[0]||(u[0]=e=>i(t)?t.value=!m(t):t=!m(t))},{default:r((()=>[L])),_:1}),c(p,{modelValue:m(o),"onUpdate:modelValue":u[1]||(u[1]=e=>i(o)?o.value=e:o=e),placeholder:"输入颜色"},null,8,["modelValue"]),l(c(_,null,null,512),[[n,{background:m(o),flag:m(t)},"params",{tom:!0}]])]),c(C)])}}}),[["__scopeId","data-v-a5c0abd3"]]);export{h as default};