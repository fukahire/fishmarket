import{_ as u}from"./nuxt-link.SHZ3i3d1.js";import{m as d,o as a,l as c,w as x,h as n,t as _,a as t,n as f,q as h,c as m,F as w,i as g,s as v}from"./entry.3QJnOUsT.js";import{_ as D}from"./logo.T8YsgyOZ.js";const b={class:"text-sm font-bold"},J={class:"text-lg font-semibold"},k={__name:"timeevent",props:{event:Object},setup(i){const e=i.event,s=Date.parse("08 Jan 2024 00:00:00"),o=d(()=>s>=e.start&&s<=e.end),r=d(()=>s<e.start?e.txt.start:s>e.end?e.txt.end:e.txt.goon);return(N,O)=>{const p=u;return a(),c(p,{class:f(["block rounded-2xl overflow-hidden items-end gap-4 justify-between ring-white ring-4 p-3 px-6",[n(o)?"text-white bg-[#395EE5]":"text-slate-700 bg-[#FFCD40]"]]),to:""},{default:x(()=>[t("div",b,_(n(e).txt.date),1),t("div",J,_(n(r)),1)]),_:1},8,["class"])}}},y=k,E=""+new URL("people.LKS7YOD7.png",import.meta.url).href,$=h("datecounter",{state:()=>({today:Date.now(),date:[{txt:{date:"1/09 - ",start:"敬請期待",goon:"比賽公布",end:"比賽公布"},start:Date.parse("08 Jan 2024 00:00:00"),end:Date.parse("09 Jan 2024 12:30:00")},{txt:{date:"1/09 12:30 - 1/11 20:00",start:"開始報名",goon:"點我報名",end:"報名截止"},start:Date.parse("09 Jan 2024 12:30:00"),end:Date.parse("11 Jan 2024 20:00:00")},{txt:{date:"1/12 00:00 - 1/12 24:00",start:"抽籤分組",goon:"今日抽籤",end:"分組完畢"},start:Date.parse("12 Jan 2024 00:00:00"),end:Date.parse("12 Jan 2024 24:00:00")},{txt:{date:"1/27 00:00 - 1/27 24:00",start:"等待比賽開始",goon:"比賽進行中",end:"比賽結束"},start:Date.parse("27 Jan 2024 00:00:00"),end:Date.parse("27 Jan 2024 24:00:00")}]})}),B=t("div",{class:"flex items-center relative"},[t("img",{class:"max-w-3xl w-full mx-auto",src:E,alt:""}),t("img",{class:"absolute bottom-24 w-[50%] max-w-sm left-1/2 -translate-x-1/2",src:D,alt:""})],-1),C={class:"grid grid-cols-3 gap-8 items-center max-w-6xl mx-auto"},F={class:"col-span-2"},L=t("p",{class:"text-[#395EE5] font-bold text-2xl mb-4"},"活動時程",-1),j=t("a",{class:"twitter-timeline","data-height":"500","data-width":"100%",href:"https://twitter.com/fishmarket_tw?ref_src=twsrc%5Etfw"},"Tweets by 斯普拉遁魚市場",-1),S=t("div",null,null,-1),R={__name:"index",setup(i){const l=$().date;return(e,s)=>{const o=y;return a(),m("div",null,[B,t("div",C,[t("div",F,[L,(a(!0),m(w,null,g(n(l),r=>(a(),c(o,{event:r,class:"mb-3"},null,8,["event"]))),256))]),t("div",null,[j,(a(),c(v("script"),{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))])]),S])}}};export{R as default};
