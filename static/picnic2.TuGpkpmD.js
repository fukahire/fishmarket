import{_ as w}from"./nuxt-link.oWUdanjA.js";import{u as g,M as y,g as B,o as s,c as a,a as o,F as h,i as x,h as i,t as b,n as p,b as _,w as m,k as C,d as j,_ as F}from"./entry.wyCgwR7x.js";import{u as v}from"./picnic-b.FKbh2M_P.js";import{_ as M}from"./logo.bWCyHSFr.js";function D(c,e){const{title:r,titleTemplate:l,...u}=c;return g({title:r,titleTemplate:l,_flatMeta:u},{...e,transform(t){const n=y({...t._flatMeta});return delete t._flatMeta,{...t,meta:n}}})}const N={class:"md:hidden"},$=["href"],z={__name:"nav-mobile",setup(c){const e=B(!1),l=v().navlink;return(u,t)=>(s(),a("div",N,[o("div",{class:p(["flex flex-col gap-2.5 fixed top-0 left-0 overflow-hidden cursor-pointer w-full h-full items-center justify-center bg-[#395ee5] -translate-x-full transition ease-in-out duration-500",{"!-translate-x-0":i(e)==!0}])},[(s(!0),a(h,null,x(i(l),n=>(s(),a("a",{href:n.link,class:"px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer",onClick:t[0]||(t[0]=f=>e.value=!i(e))},b(n.title),9,$))),256))],2),o("div",{class:p([{"!-rotate-90":i(e)==!0},"text text-2xl font-bold text-white drop-shadow-lg transition ease-in-out duration-500 fixed h-12 w-12 bg-[#FFCD40] bottom-6 right-6 rounded-full cursor-pointer flex justify-center items-center rotate-45 origin-center"]),onClick:t[1]||(t[1]=n=>e.value=!i(e))},"×",2)]))}},T=z,V={class:"bg-[#d6ebff] min-h-screen h-full bg-fixed bg-[length:60%] md:bg-[length:40%] lg:bg-[length:20%]"},I={class:"fixed w-full flex justify-between items-start top-0 z-50 p-5"},L=o("img",{class:"w-32",src:M,alt:""},null,-1),P={class:"gap-5 p-4 px-7 bg-white rounded-full shadow hidden md:flex"},S=o("div",{class:"fixed w-full flex justify-start items-end bottom-0 z-50 p-5"},null,-1),q={__name:"picnic2",setup(c){const r=v().navlink;return D({title:"皮克尼杯2",twitterTitle:"皮克尼杯2",twitterDescription:"欸等等搶魚耶，要不要雙排？",twitterImage:"https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg",ogTitle:"皮克尼杯2",description:"欸等等搶魚耶，要不要雙排？",ogDescription:"欸等等搶魚耶，要不要雙排？",ogImage:"https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg",twitterCard:"summary_large_image",ogUrl:"https://fukahire.github.io/fishmarket/picnic2"}),g({htmlAttrs:{lang:"zh"},link:[{rel:"icon",type:"image/png",href:"/favicon.png"}]}),(l,u)=>{const t=w,n=F,f=T;return s(),a("div",V,[o("div",I,[_(t,{to:"#title"},{default:m(()=>[L]),_:1}),o("div",P,[(s(!0),a(h,null,x(i(r),(d,k)=>(s(),C(t,{to:d.link,class:p([k===4?"text-[#395ee5] font-bold":""])},{default:m(()=>[j(b(d.title),1)]),_:2},1032,["to","class"]))),256))])]),S,_(n,{class:"pb-32"}),_(f)])}}};export{q as default};