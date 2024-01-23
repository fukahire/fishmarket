import{_ as S}from"./nuxt-img.oyBM1Qk2.js";import{x as f,q as z,y as E,z as I,A as $,o as d,c as v,a as l,F as P,r as R,b as e,B as N,g as T,w as s,f as w,t as O,n as U,C as X,d as t}from"./entry.HU89vz_M.js";import{_ as q}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as W}from"./title.DVTw7CXU.js";import{_ as Z}from"./nuxt-link.W7jIoBU7.js";import{_ as j,a as M}from"./mark.Gko3q7fo.js";import{_ as G,a as J,b as V}from"./prize.E0qy85W7.js";import{_ as H}from"./mark.96-VRSyR.js";import{_ as Q}from"./staff.zCgsjzez.js";import{_ as Y}from"./logo.QgGn1I0Q.js";import{_ as ll,a as tl,b as sl}from"./joinroom.HND4XOFN.js";import{u as el}from"./picnic-b.YAx9PZGp.js";import{u as nl}from"./staff.iWZW2UrD.js";function ol(u,a){u=f.utils.toArray(u),a=a||{};let n=f.timeline({repeat:a.repeat,paused:a.paused,defaults:{ease:"none"},onReverseComplete:()=>n.totalTime(n.rawTime()+n.duration()*100)}),c=u.length,B=u[0].offsetLeft,r=[],b=[],y=[],h=0,D=(a.speed||1)*100,C=a.snap===!1?o=>o:f.utils.snap(a.snap||1),K,k,x,A,_,i;for(f.set(u,{xPercent:(o,m)=>{let F=b[o]=parseFloat(f.getProperty(m,"width","px"));return y[o]=C(parseFloat(f.getProperty(m,"x","px"))/F*100+f.getProperty(m,"xPercent")),y[o]}}),f.set(u,{x:0}),K=u[c-1].offsetLeft+y[c-1]/100*b[c-1]-B+u[c-1].offsetWidth*f.getProperty(u[c-1],"scaleX")+(parseFloat(a.paddingRight)||0),i=0;i<c;i++)_=u[i],k=y[i]/100*b[i],x=_.offsetLeft+k-B,A=x+b[i]*f.getProperty(_,"scaleX"),n.to(_,{xPercent:C((k-A)/b[i]*100),duration:A/D},0).fromTo(_,{xPercent:C((k-A+K)/b[i]*100)},{xPercent:y[i],duration:(k-A+K-k)/D,immediateRender:!1},A/D).add("label"+i,x/D),r[i]=x/D;function p(o,m){m=m||{},Math.abs(o-h)>c/2&&(o+=o>h?-c:c);let F=f.utils.wrap(0,c,o),L=r[F];return L>n.time()!=o>h&&(m.modifiers={time:f.utils.wrap(0,n.duration())},L+=n.duration()*(o>h?1:-1)),h=F,m.overwrite=!0,n.tweenTo(L,m)}return n.next=o=>p(h+1,o),n.previous=o=>p(h-1,o),n.current=()=>h,n.toIndex=(o,m)=>p(o,m),n.times=r,n.progress(1,!0).progress(0,!0),a.reversed&&(n.vars.onReverseComplete(),n.reverse()),n}const il={class:""},cl={__name:"fish",setup(u){const a=z(null);let n;return E(async()=>{await I(),n=f.context(()=>{ol(".marquee .item",{paused:!1,repeat:-1,reversed:!1})},a.value)}),$(()=>{n.revert()}),(c,B)=>{const r=S;return d(),v("div",il,[l("div",{class:"w-auto h-12 border-y-[2px] gap-8 border-white overflow-hidden flex flex-nowrap items-center marquee",ref_key:"main",ref:a},[(d(),v(P,null,R(40,b=>e(r,{class:"item w-8 block",src:"/visual/picnic-b/bg.png"})),64))],512)])}}},_l=q(cl,[["__scopeId","data-v-4aa45bfd"]]),al={class:"text-sm font-bold"},dl={class:"text-lg font-semibold"},ul={__name:"timeevent",props:{event:Object},setup(u){const n=u.event,c=Date.now(),B=N(()=>c>=n.start&&c<=n.end),r=N(()=>c<n.start?n.txt.start:c>n.end?n.txt.end:n.txt.goon);return(b,y)=>{const h=Z;return d(),T(h,{class:U(["block rounded-2xl overflow-hidden items-end gap-4 justify-between ring-white ring-4 p-3 px-6",[w(B)?"text-white bg-[#395EE5]":"text-slate-700 bg-[#FFCD40]"]]),to:w(n).url,target:"_blank"},{default:s(()=>[l("div",al,O(w(n).txt.date),1),l("div",dl,O(w(r)),1)]),_:1},8,["class","to"])}}},rl=ul,ml=""+globalThis.__publicAssetsURL("visual/picnic-b/people.png"),pl=""+globalThis.__publicAssetsURL("material/rule/schedule.png"),fl=""+globalThis.__publicAssetsURL("material/rule/weapon.png"),hl=""+globalThis.__publicAssetsURL("material/rule/animation_picnicb.gif"),xl={class:"pt-16",id:"title"},gl=l("div",{class:"flex items-center relative"},[l("img",{class:"max-w-2xl w-full mx-auto",src:ml,alt:""}),l("img",{class:"absolute bottom-0 -translate-y-1/2 w-[50%] max-w-xs left-1/2 -translate-x-1/2",src:Y,alt:""})],-1),bl={class:"flex gap-8 mt-8 md:items-center items-stretch max-w-6xl mx-auto px-4 flex-col md:flex-row"},wl={class:"w-full md:max-w-md"},vl=l("a",{class:"twitter-timeline","data-height":"500","data-width":"100%",href:"https://twitter.com/fishmarket_tw?ref_src=twsrc%5Etfw"},"Tweets by 斯普拉遁魚市場",-1),yl={class:"flex-grow"},kl=l("div",null,null,-1),Al={class:"w-full px-4 max-w-[1000px] mx-auto"},Ll={class:"w-full bg-white p-2 md:px-6 md:py-2 rounded-lg"},Tl={class:"divide-y divide-[#b6adca]"},Bl=l("img",{src:pl,class:"max-w-2xl",alt:""},null,-1),Dl=l("ul",{class:"list-disc"},[l("li",null,[l("span",{class:"bg-[#9FFCFF] px-1 rounded"},"比賽時間"),t("：1/27(六) 19:00 [GMT+8]")]),l("li",null,[l("span",{class:"bg-[#FFEA94] px-1 rounded"},"報名時間"),t("：1/9(二) 12:30～1/11(四) 20:00 [GMT+8] ")]),l("li",null,[l("span",{class:"bg-[#bcffa0] px-1 rounded"},"實況抽選"),t("：預定 1/12 (五) 具體時間另行公布")]),l("li",null,"募集組別：雙人 16 組 或 32 組"),l("ul",{class:"ml-20"},[l("li",null,"報名未滿 16 組，則取消比賽；"),l("li",null,"超過 16 組未滿 32 組，則抽籤取 16 組進行比賽；"),l("li",null,"若報名大於 32 組，則依抽籤順序列入備選。")]),l("li",null,"以報名表單時間戳記為主，超時不記入。"),l("li",null,"本次報名為抽選制，組別中兩人皆未參加過皮克尼杯，中籤機率為參加過組別的兩倍；兩人皆參加過／其中一人參加過的組別則為正常機率。"),l("li",null,"贊助商擁有參賽保底名額。"),l("li",{class:"flex gap-2 flex-col md:flex-row"},[l("a",{href:"https://forms.gle/hwsKafDRvcxuZNa2A",target:"_blank"},[l("span",{class:"my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale"},"報名網址")]),l("a",{href:"https://docs.google.com/spreadsheets/d/1QyXWQq2flAGS_z_vgNUWl2lRfj1LgIY8PbR2HEqKlNc/edit#gid=952962651",target:"_blank"},[l("span",{class:"my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale"},"分組表單與計分表")]),l("a",{href:"https://discord.gg/fishmarket-tw",target:"_blank"},[l("span",{class:"my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale"},"斯普拉遁魚市場Discord")])])],-1),Pl={class:"list-disc"},Rl=l("li",null,"本活動為特殊賽制，請詳閱規則說明後，確認可接受並能夠全程參與再進行報名。",-1),Cl=l("li",null,"初賽將以抽籤方式分組，結果於比賽當日公布。",-1),Fl=l("li",null,"比賽詳情與活動期間聯絡將於斯普拉遁魚市場 Discord 群進行，請參賽人員務必加入。",-1),Kl=l("li",null,"比賽進行期間，參賽人員皆有機會被賽評轉播，對戰的記憶代碼也有機會被公布分享。",-1),Nl=l("ul",{class:"list-disc"},[l("li",null,"採雙人報名制，報名前請先找好隊友。"),l("li",null,"活動進行時，將會按賽制配對另一組雙人隊友進行 4 對 4 的比賽。"),l("li",null,"比賽過程中可以任意更換武器，唯獨不可與報名雙排隊友重複武器，與配對到的另一組雙排隊友重複則不限制。"),l("p",{class:"mt-4"},"※主武器、副武器、SP 相同者視為同一把武器；有鏡狙擊和無鏡狙擊視為不同主武器"),l("img",{src:fl,alt:""}),l("li",null,"比賽過程中，只允許與報名雙排隊友進行語音或文字溝通。"),l("li",null,"為避免工作人員無法連絡參賽者，比賽當日 Discord 暱稱必須與報名表填寫的暱稱一致。")],-1),Ol=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"初賽",-1),Sl={class:"list-disc mb-6"},zl=l("li",null,"報名達 32 組則依抽選分兩區進行比賽。",-1),El=l("li",null,"規則為真格魚虎，一區分為四個私房同時進行比賽，在私房中將與其他三組輪流配對，進行三場比賽後換房，總共五輪、共計 15 場的積分賽，勝場加 2 分，敗場不加分。",-1),Il=l("li",null,"如另一組雙排隊友斷線但該局勝利，則按正常計分。",-1),$l=l("li",null,"地圖全隨機，不 BAN 圖。",-1),Ul=l("li",null,"比賽組別為 16 組時，取積分高的前 8 組進入複賽；比賽組別為 32 組時，取兩區積分高的前 4 組進入複賽。若出現同分情況，則依以下條件判定晉級組別：初賽總場次KO數＞兩組對戰時，兩勝的組別＞初賽組別順序（字典序）。",-1),Xl=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"複賽",-1),ql=l("ul",{class:"list-disc mb-6"},[l("li",null,"規則為真格魚虎，擂台賽（進行方式請見下方），勝場加 2 分，敗場不加分，先取得 14 分者為冠軍組別並結束比賽。亞軍至第八名由組別積分高低排序，若同分則並列名次。"),l("li",null,"地圖全隨機，不 BAN 圖。")],-1),Wl=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"擂台賽規則",-1),Zl={class:"list-decimal mb-6"},jl=l("li",null,"若進行至第 14 場仍無組別取得 14 分，第 15 場開始則以目前累計積分最高的分數為基準，先取得最高積分加 2 分者即為冠軍（例如第 14 場時， 2C 組為所有組別中最高積分 10 分，則第 15 場開始先取得 12 分的組別即為冠軍）。",-1),Ml=l("li",null,"若第 15 場結束時，出現多組同時符合冠軍條件（第 14 場最高積分 +2 分），則繼續進行下一輪比賽，直到有人取得唯一最高積分即為冠軍，並結束比賽。",-1),Gl=l("li",null,"參賽者語音需在斯普拉遁魚市場中進行，到號時工作人員會以語音及文字通知。 「若叫號起三分鐘內組別未全員進入私房」，則視同過號，需重新回到等待區組別的最後列，並且改由下一組遞補。 ",-1),Jl=l("img",{class:"max-w-[600px]",src:hl,alt:""},null,-1),Vl={class:"-ml-6"},Hl=l("ul",{class:"ml-8 list-disc"},[l("li",null,"比賽可能超過 12 點，請自行判斷是否能全程配合再行報名。"),l("li",null,"開房一律使用 Nintendo Switch Online 建房功能。")],-1),Ql={class:"w-full px-4 max-w-[1000px] mx-auto pt-4"},Yl={class:"w-full bg-white p-2 md:px-6 md:py-2 rounded-lg"},lt={class:"divide-y divide-[#b6adca]"},tt=l("p",{class:"-ml-6"},"為確保比賽進程順暢，請遵守以下規範：",-1),st=l("ul",{class:"list-disc"},[l("li",null,"如有溝通需求，只能與報名隊友進行語音，不得與對戰中配對的他組隊友語音。"),l("li",null,"初賽及複賽對戰皆為全地圖隨機抽選，不 BAN 圖。"),l("li",null,"若無特殊需求，請由隊伍英文字母代號較前的一方負責開房。"),l("li",null,"初賽開房必須在「所有組別」都確認完前一輪的對戰結果後再行開始，主辦會發布可開始進行對戰的訊息。"),l("li",null,"請勿對選手或隊伍進行挑釁、誹謗中傷等行為。")],-1),et=l("ul",{class:"list-disc mb-4"},[l("li",null,"進入私房前請將依照以下方式改名：隊伍序號_ID (EX. 1C_AA)"),l("li",null,"關閉遊戲重啟後必須重新輸入別稱，敬請注意。")],-1),nt=l("img",{src:ll,alt:""},null,-1),ot=l("ul",{class:"list-disc mb-4"},[l("li",null,"初賽進行時，主辦宣佈可進行次輪對戰後，若10分鐘內未進入指定房間，則判定為另外三組的勝利。"),l("li",null,"私房開啟後，10分鐘內若某一組未全員進入私房，則判定為另外三組的勝利")],-1),it=l("img",{src:tl,alt:""},null,-1),ct=l("img",{src:sl,alt:""},null,-1),_t={class:"list-decimal"},at=l("li",{class:""},"報告方式請依照下方格式，以利分數統計",-1),dt={class:"flex flex-wrap items-stretch gap-4 mt-4"},ut=l("div",{class:"bg-[#cbd5e1] p-4"},[l("p",null,"格式："),l("p",null,"[組別1A1B] 對 [組別1C1D]"),l("p",null,"[組別1A1B] 勝，則由A組以下述方式回報"),l("p",null,"[1A1B]勝 - [KO] (如無KO則無需填寫)")],-1),rt={class:"bg-[#cbd5e1] p-4"},mt=l("p",null,"例1：",-1),pt=l("p",null,"1A1B 對 1D1E",-1),ft=l("p",null,"1A1B 勝且KO",-1),ht={class:"bg-[#cbd5e1] p-4"},xt=l("p",null,"例2：",-1),gt=l("p",null,"2C2H 對 2J2K",-1),bt=l("p",null,"2J2K 勝無KO",-1),wt=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"規則／組別設定有誤",-1),vt={class:"list-disc mb-4"},yt=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"武器重複",-1),kt={class:"list-disc mb-4"},At=l("li",null,"若第二次仍未修改為不重複的武器組合，則直接判其他三組勝利。",-1),Lt=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"斷線問題",-1),Tt=l("ul",{class:"list-disc mb-4"},[l("li",null,"對戰開始 60 秒內斷線：請終止對戰，四組以相同的地圖規則、武器組成及裝備進行重賽。"),l("li",null,"對戰開始 60 秒後斷線：對戰繼續進行，不重賽。"),l("li",null,[t("若有玩家於 60 秒後斷線且落敗，則斷線玩家所在組別加 0 分，未斷線組加 1 分，勝方各加 2 分；若出現斷線玩家的一方獲勝，則正常計分。"),l("br"),t(" ※60秒內：倒數時間顯示4:00(含)以前，如有疑慮請務必錄影。")]),l("li",null,"複賽階段斷線計分處理辦法同上述三點，唯敗方須進入等待區；斷線仍獲勝的兩組將成為守擂隊。"),l("li",null,"若開房者斷線，必須重新開房的情況，請由其他三組中，字母排序第二小的組別重新開房。"),l("li",null,"如複賽擂台賽發生多人斷線，主辦會視情況判斷該局是否重賽，若重賽則以同樣規則、地圖、武器與配裝。")],-1),Bt=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"衝線／延遲狀況",-1),Dt={class:"list-disc mb-4"},Pt=l("li",null,"由於地區及遊戲本身連線問題，主辦方不接受延遲相關的投訴，請享受斯普拉遁的醍醐味。",-1),Rt=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"初賽過程中有組別消失、棄賽",-1),Ct=l("ul",{class:"list-disc mb-4"},[l("li",null,"將安排遞補讓比賽順利進行，但遞補組別的分數為從 0 分開始累計，不會繼承任何組別的分數。")],-1),Ft=l("p",{class:"text-md font-semibold -ml-2 md:-ml-6"},"玩家利用遊戲 bug 或惡意擺爛",-1),Kt=l("ul",{class:"list-disc mb-4"},[l("li",null,"由於賽制特殊，主辦方希望參賽玩家秉持運動精神，於正當操作下全力以赴贏得勝利，切勿利用遊戲 bug 或做出惡意影響勝負的行為 （如在時間充裕的情況將魚虎運回家影響推進分數、惡意死亡造成己方劣勢等）。針對惡意行為，將直接取消該組比賽資格；若有模糊地帶，主辦擁有最終解釋權。")],-1),Nt={class:"w-full px-4 max-w-[1000px] mx-auto"},Ot={class:"w-full bg-white p-2 md:px-6 md:py-2 rounded-lg mb-8"},St=l("ul",{class:"list-decimal"},[l("li",null,"按活動網頁獎項排列順序抽獎，已得獎組別不重複獲獎。"),l("li",null,"日後會將獎品圖適當裁切，置入活動官網展示。"),l("li",null,"圖片可公開並僅限於獲獎者本人於網路使用，張貼請註明原作者。"),l("li",null,"請勿進行任何修改／重製／印刷，並禁止使用於營利活動。"),l("li",null,"得獎者請於2/1(四)20:00前提供設定圖給工作人員。")],-1),zt={class:"mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row md:flex-row flex-wrap items-stretch gap-8 px-8"},Et={class:"w-full px-4 max-w-[1000px] mx-auto"},It={class:"w-full bg-white p-2 md:px-6 md:py-2 rounded-lg mb-8"},$t=l("ol",{class:"list-disc mb-4"},[l("li",null,"主辦方有可能會安插工作人員進入私房轉播，轉播場次將與對戰流程表一同公布，請知悉。"),l("li",null,"官方轉播：(點擊頭像前往主播個人頻道)")],-1),Ut={class:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row grid gap-8 w-full"},Xt={class:"rounded-lg overflow-hidden"},qt={class:"gap-2 flex p-4"},Wt={class:"rounded-lg overflow-hidden"},Zt={class:"gap-2 flex p-4"},jt={class:"rounded-lg overflow-hidden"},Mt={class:"gap-2 flex p-4"},Gt={class:"grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8"},_s={__name:"index",setup(u){const a=el(),n=nl(),c=a.youtuber,B=n.youtuber,r=c.map(C=>B[C]);let b=[r[0],r[1]],y=[r[2],r[3]],h=[r[4],r[5]];const D=a.date;return(C,K)=>{const k=_l,x=W,A=rl,_=j,i=M,p=G,o=J,m=H,F=V,L=Q;return d(),v("div",xl,[gl,e(k,{class:"w-full"}),l("div",bl,[l("div",wl,[vl,(d(),T(X("script"),{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))]),l("div",yl,[e(x,null,{default:s(()=>[t("活動時程")]),_:1}),(d(!0),v(P,null,R(w(D),g=>(d(),T(A,{event:g,class:"mb-3"},null,8,["event"]))),256))])]),kl,l("div",Al,[e(x,{id:"theme"},{default:s(()=>[t("比賽章程")]),_:1}),l("div",Ll,[l("div",Tl,[e(_,null,{title:s(()=>[t("比賽資訊")]),content:s(()=>[Bl,Dl]),_:1}),e(_,null,{title:s(()=>[t("報名前注意事項")]),content:s(()=>[l("ul",Pl,[Rl,Cl,Fl,l("li",null,[t("如對活動有任何疑問，歡迎在報名前於 Discord 群"),e(i,null,{default:s(()=>[t("聯繫主辦／問答諮詢")]),_:1}),t("頻道提出。")]),Kl])]),_:1}),e(_,null,{title:s(()=>[t("報名方式與活動辦法")]),content:s(()=>[Nl]),_:1}),e(_,null,{title:s(()=>[t("賽制")]),content:s(()=>[Ol,l("ul",Sl,[zl,El,Il,l("li",null,[t("因他組斷線導致落敗的組別，需於當局比賽結束時，於"),e(i,null,{default:s(()=>[t("聯繫主辦／問答諮詢")]),_:1}),t("出示任天堂app截圖證明（截圖需包含時間與八位玩家id） ")]),$l,Ul]),Xl,ql,Wl,l("ul",Zl,[l("li",null,[t("晉級複賽的八組將隨機安排出賽順序，第一場比賽由順位 1 的組別為"),e(p,null,{default:s(()=>[t("黃 1")]),_:1}),t("，順位 2 的組別為"),e(o,null,{default:s(()=>[t("藍 1")]),_:1}),t("，順位 3 的組別為"),e(p,null,{default:s(()=>[t("黃 2")]),_:1}),t("，順位 4 的組別為"),e(o,null,{default:s(()=>[t("藍 2")]),_:1}),t("，另外四組排列於等待區並且在後面的比賽依序上場。每場會有四組先上擂台，分為 黃隊 和 藍隊 進行對戰。")]),l("li",null,[t("黃隊或藍隊皆由一組守擂組 ("),e(p,null,{default:s(()=>[t("黃 1")]),_:1}),t("或"),e(o,null,{default:s(()=>[t("藍 1")]),_:1}),t(") 搭配一組挑戰組 ("),e(p,null,{default:s(()=>[t("黃 2")]),_:1}),t("或"),e(o,null,{default:s(()=>[t("藍 2")]),_:1}),t(") 組成，對戰組合為"),e(p,null,{default:s(()=>[t("黃 1")]),_:1}),e(p,null,{default:s(()=>[t("黃 2")]),_:1}),t("vs"),e(o,null,{default:s(()=>[t("藍 1")]),_:1}),e(o,null,{default:s(()=>[t("藍 2")]),_:1}),t("。")]),l("li",null,[t("獲勝隊伍的挑戰組在下一場將成為另一隊的守擂組。若黃隊獲勝，"),e(p,null,{default:s(()=>[t("黃 2")]),_:1}),t("下一場成為藍隊的"),e(o,null,{default:s(()=>[t("藍 1")]),_:1}),t("；若藍隊獲勝，"),e(o,null,{default:s(()=>[t("藍 2")]),_:1}),t("下一場成為黃隊的"),e(p,null,{default:s(()=>[t("黃 1")]),_:1}),t(" 。落敗方則回到等待區隊伍的最後序列。")]),l("li",null,[t("等待區內順序較前的兩組成為下一場的挑戰組，依序編入黃隊的挑戰組"),e(p,null,{default:s(()=>[t("黃 2")]),_:1}),t("和藍隊的挑戰組"),e(o,null,{default:s(()=>[t("藍 2")]),_:1}),t("。")]),jl,Ml,Gl]),Jl]),_:1}),e(_,null,{title:s(()=>[t("1/27(六)比賽當日時程預定")]),content:s(()=>[l("ul",Vl,[l("li",null,[e(i,null,{default:s(()=>[t("18:30")]),_:1}),t(" 前公布組別序號與分組")]),l("li",null,[e(i,null,{default:s(()=>[t("18:45")]),_:1}),t(" 各組確認賽程表")]),l("li",null,[e(i,null,{default:s(()=>[t("18:55")]),_:1}),t(" 所有組別進入私房待機")]),l("li",null,[e(i,null,{default:s(()=>[t("19:00")]),_:1}),t(" 初賽準時開打")]),l("li",null,[e(i,null,{default:s(()=>[t("21:20")]),_:1}),t(" 擂台賽開打")]),l("li",null,[e(i,null,{default:s(()=>[t("23:45")]),_:1}),t(" 比賽結束")]),Hl])]),_:1})])])]),l("div",Ql,[e(x,{id:"tip"},{default:s(()=>[t("對戰規則")]),_:1}),l("div",Yl,[l("div",lt,[e(_,null,{title:s(()=>[t("對戰規則")]),content:s(()=>[tt,st]),_:1}),e(_,null,{title:s(()=>[t("玩家／隊伍名稱")]),content:s(()=>[et,nt]),_:1}),e(_,null,{title:s(()=>[t("私房創建")]),content:s(()=>[ot,it,ct]),_:1}),e(_,null,{title:s(()=>[t("對戰結果報告")]),content:s(()=>[l("ul",_t,[l("li",null,[t("由勝利方中序號較前的隊伍代表於 Discord 中"),e(i,null,{default:s(()=>[t("對戰結果報告")]),_:1}),t("頻道進行回覆，並由工作人員進行確認")]),at,l("li",dt,[ut,l("div",rt,[mt,pt,ft,l("p",null,[e(m,null,{default:s(()=>[t("1A1B勝 - KO")]),_:1})])]),l("div",ht,[xt,gt,bt,l("p",null,[e(m,null,{default:s(()=>[t("2J2K勝")]),_:1})])])])])]),_:1})]),e(_,null,{title:s(()=>[t("問題回報")]),content:s(()=>[l("div",null,[wt,l("ul",vt,[l("li",null,[t("若有選擇錯誤情形，請該對戰中的任意玩家長按"),e(i,null,{default:s(()=>[t("左類比+右類比+L+R+ZL+ZR")]),_:1}),t("六鍵，直接切斷對戰。 雙方以同樣地圖規則、同樣武器組成進行對戰。")])]),yt,l("ul",kt,[l("li",null,[t("請該對戰中的任意玩家長按"),e(i,null,{default:s(()=>[t("左類比+右類比+L+R+ZL+ZR")]),_:1}),t("六鍵，直接切斷對戰。雙方以同樣地圖規則、更改武器組合後進行對戰。 ")]),At]),Lt,Tt,Bt,l("ul",Dt,[l("li",null,[t("賽前請務必事先確認個人網路狀況，如開房後有衝線情形，請立即於 Discord 內之"),e(i,null,{default:s(()=>[t("聯繫主辦／問答諮詢")]),_:1}),t("頻道提出。 ")]),Pt]),Rt,Ct,Ft,Kt])]),_:1})])]),l("div",Nt,[e(x,{id:"award"},{default:s(()=>[t("大會獎品")]),_:1}),l("div",Ot,[e(_,null,{title:s(()=>[t("注意事項")]),content:s(()=>[St]),_:1})])]),l("div",zt,[(d(!0),v(P,null,R(w(a).prize,g=>(d(),T(F,{prize:g},null,8,["prize"]))),256))]),e(x,{id:"staff",class:"mt-4"},{default:s(()=>[t("實況轉播")]),_:1}),l("div",Et,[l("div",It,[e(_,null,{title:s(()=>[]),content:s(()=>[$t]),_:1})]),l("div",Ut,[l("div",Xt,[l("div",qt,[(d(!0),v(P,null,R(w(b),g=>(d(),T(L,{staff:g},null,8,["staff"]))),256))])]),l("div",Wt,[l("div",Zt,[(d(!0),v(P,null,R(w(y),g=>(d(),T(L,{staff:g},null,8,["staff"]))),256))])]),l("div",jt,[l("div",Mt,[(d(!0),v(P,null,R(w(h),g=>(d(),T(L,{staff:g},null,8,["staff"]))),256))])])]),e(x,{class:"mt-4"},{default:s(()=>[t("工作人員")]),_:1}),l("div",Gt,[(d(!0),v(P,null,R(w(n).staff,g=>(d(),T(L,{staff:g},null,8,["staff"]))),256))])])])}}};export{_s as default};