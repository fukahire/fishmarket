<template>
    <div class="bg-[#131313]">
        <div class="h-full w-full flex justify-center gap font-sans">
        <!-- container -->
        <div class="max-w-[1200px] w-full md:px-4">
            <!-- banner -->
            <div class="w-full bg-white rounded-md mb-12">
                <img class="hidden md:block" src="/visual/ikaintrouble-c/banner.jpg" alt="">
                <img class="block md:hidden" src="/visual/ikaintrouble-c/banner_mobile.jpg" alt="">
            </div>
            <!-- caption -->
            <div class="p-8 w-[80%] bg-[url('/visual/ikaintrouble-c/bg.jpg')] bg-cover font-semibold m-auto">
                <p>花枝3上市接近滿月，充滿暴風武器的環境、侵略性極強的大招、激烈碰撞的地圖前線、<span
                        class="line-through">宛如大型公測的踩BUG遊戲</span>，對戰鬥感到疲倦的你，是否渴望新的力量？落難杯與斯普拉遁魚市場合作，共同推廣花枝真格競賽，期望能扶植各年幼海鮮，不再擔心被4X老害打屁屁，快來填寫報名表，成為人人喊抱的粗大腿吧！
                </p>
            </div>
            <!-- content -->
            <div class="w-full bg-dark p-8">
                <!-- 比賽章程 -->
                <ikaintrouble-c-title id="theme">比賽章程</ikaintrouble-c-title>
                <div>
                    <ikaintrouble-c-rule>
                        <template #title>活動資訊</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>公開報名時間 ：10/7(五) 21:00 ~ 10/13(四) 24:00(GMT+8)</li>
                                <li>募集人數：48/64/80人階段性擴增，若未滿48人報名則取消比賽，80人以後的報名列入備選。</li>
                                <li>選秀時間：10/15、16(六、日)</li>
                                <li>比賽時間：10/30(日) 19:45集合完畢，20:00準時開打。</li>
                                <li><a href="https://discord.gg/VTjUQkB9uv">比賽Discord群組：<span
                                            class="text-[#8be2fe] text-lg">斯普拉遁魚市場</span> </a></li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>參賽注意事項</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p>請務必詳閱以下規則說明</p>
                                <li>10/15、16(六、日)舉行選秀大會，詳情請看選秀辦法</li>
                                <li class="rule-mark">本屆落難盃將有新人保障名額，3代加入的新朋友將享有最少25%的保證名額</li>
                                <li>比賽相關活動詳情、即時狀況、聯絡等均於斯普拉遁魚市場 Discord 群組內進行，請參賽者務必加入</li>
                                <li>如有改機、作弊、謊報RANK等破壞遊戲與比賽規則的行為，將無條件判定不具比賽資格，若有獲獎亦取消相關獎項，且終生不得參加魚市場相關比賽與活動</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>選秀辦法</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>選秀時間<br>
                                    10/15(六)：09:00~22:00<br>
                                    10/16(日)：20:00~22:00</li>
                                <li>據參賽人數取12~20名玩家作為隊長，挑選方式以 <span class="rule-mark"> 二代 X power </span>為準，由高至低排序，如遇同樣 Rank
                                    區間玩家則以亂數決定選秀順序，如遇同樣 Rank 區間玩家大於隊長需求數量，一樣會以亂數抽選決定隊長資格</li>
                                <li>選秀第一日，第一輪選秀將由各隊長填寫選秀志願，將依隊長順位最低的隊伍優先排入選手</li>
                                <li>選秀第二日公布第一輪選秀結果，第二輪選秀將由順位最高的隊長開始挑選(1~20) 最後再由最低順位隊長挑選(20~1)完成選秀流程</li>
                                <li>如隊長選秀日未能如期參與（失聯15分鐘以上），將會取消隊長資格，由次高順位的玩家遞補</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>對戰規則</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p>為確保比賽進程順暢，請遵守以下規範：</p>
                                <li>初賽及決賽對戰地圖全地圖隨機抽選<br>
                                    <span class="rule-mark">初賽及決賽對戰場地皆以不重複為原則，請房主單場對戰結束後進行ban圖。</span>
                                </li>
                                <li>若無特殊需求，請由隊伍數字代號較小的一方負責開房。八強賽後若數字相同，則由字母較前的隊伍開房。</li>
                                <li>每場對戰皆須在「所有隊伍」確認好前一階段對戰結果後再行開始，主辦會發布可開始進行對戰的訊息。</li>
                                <li>請勿對選手或隊伍進行挑釁、誹謗中傷等行為。</li>
                                <li>請保持充足睡眠規律生活不要睡過頭......(*´-ω-`人)</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>

                    <ikaintrouble-c-rule>
                        <template #title>10/30(日)比賽當日時程預定</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li><span class="rule-mark">19:45</span> 集合完畢，進行當日賽事進程說明、隊伍代表交換FC</li>
                                <li><span class="rule-mark">19:55</span> 賽程表確認，隊伍代表交換FC完畢</li>
                                <li><span class="rule-mark">20:00</span> 初賽準時開打（60~100分鐘）
                                    <ul class="list-disc ml-8">
                                        <li>12組，每3組1區：每組打BO3取前二（R3x20=60分）</li>
                                        <li>16組，每4組1區：每組打BO3取前二（R4x20=80分）</li>
                                        <li>20組，每5組1區：每組打BO3取前二（R5x20=100分）</li>
                                    </ul>
                                </li>
                                <li><span class="rule-mark">21:40</span> 八強階段開打（BO5，30分鐘）</li>
                                <li><span class="rule-mark">22:10</span> 準決賽開打 （BO5，30分鐘）</li>
                                <li><span class="rule-mark">22:40</span> 冠亞賽開打 （BO5，30分鐘）</li>
                                <li><span class="rule-mark">23:10</span> 比賽結束</li>
                                <li>8強階段有超過10點的可能性，請自行判斷參賽時間是否能配合再行報名</li>
                                <li>隊伍代表FC將在10/30(日)中午12:00前預先提供給各隊，可提前處理，但請配合於19:30-20:00間再次確認好友狀態</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>

                    <ikaintrouble-c-rule>
                        <template #title>玩家／隊伍名稱</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>請每隊各自想好自己的隊伍名稱，不然大會會指派一個很爛的給你^^</li>
                                <li>請勿登記違反善良風俗的名稱</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>私房創建</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>主辦宣佈可進行次回合對戰後，若10分鐘內負責開房的一方未開私房，則判定為另一方的勝利(2-0)</li>
                                <li>房間開啟後，10分鐘內若有其中一方未全員進入私房，則判定為對手勝利(2-0)；若兩方成員皆未在10分鐘內進入房間，則在開房10分鐘後強制進行比賽</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>對戰結果報告</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>由勝利方的隊伍代表於Discord內之「對戰結果報告」頻道進行回覆，並由主辦確認。</li>
                                <li>報告方式請依照下方格式，以利分數統計進行：</li>
                                <li>
                                    <div class="border-l-[2px] border-white pl-2 mt-2">
                                        [隊伍A] 對 [隊伍B]<br>
                                        [隊伍A] 勝<br>
                                        [分數A] - [分數B]<br>
                                        <br>
                                        舉例：<br>
                                        A3 對 D2<br>
                                        A3 勝<br>
                                        2 - 1
                                    </div>
                                </li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>

                    <ikaintrouble-c-rule>
                        <template #title>初賽順位決定方式</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>勝利數>初賽內雙隊伍直接對決結果>BO3賽中的敗場數</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                    <ikaintrouble-c-rule>
                        <template #title>實況轉播</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <li>主辦方有可能會安插工作人員進入私房轉播，轉播場次將與對戰流程表一同公布，請知悉。</li>
                                <li>官方轉播：(點擊頭像前往主播個人頻道)</li>
                            </ol>
                            <div
                                class="w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 md:flex-row flex-wrap items-stretch gap-4 px-8 md:px-0">
                                <div class="flex flex-col justify-center">
                                    <p class="text-center text-white text-lg border-b-[2px] border-white p-2">泰A組合</p>
                                    <div class="flex py-2 justify-center gap-2"><a
                                            href="https://www.youtube.com/channel/UCWVqclEBrX4vnNbLmm_Gt1g" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_aa.jpg" alt="">
                                            </div>
                                            <span class="ytr-name">主播<br>AA</span>
                                        </a>
                                        <a href="https://www.youtube.com/c/Taylor_jbdxblgutaguta" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_taylor.png" alt="">
                                            </div>
                                            <span class="ytr-name">賽評<br>泰勒</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center">
                                    <p class="text-center text-white text-lg border-b-[2px] border-white p-2">肉塔組合</p>
                                    <div class="flex py-2 justify-center gap-2">
                                        <a href="https://www.youtube.com/c/RONNKIEBrothers" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_ron.jpg" alt="">
                                            </div>
                                            <span class="ytr-name">主播<br>肉肉先森</span>
                                        </a>
                                        <a href="https://www.youtube.com/c/%E7%91%9E%E5%A1%94" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_rita.jpg" alt="">
                                            </div>
                                            <span class="ytr-name">賽評<br>瑞塔</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center">
                                    <p class="text-center text-white text-lg border-b-[2px] border-white p-2">Deja萬</p>
                                    <div class="flex py-2 justify-center gap-2">
                                        <a href="https://www.youtube.com/c/SawyerCh" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_soya.jpg" alt="">
                                            </div>
                                            <span class="ytr-name">主播<br>索亞</span>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCD_Q__JVHofsidnNRmGmR-Q" target="_blank"
                                            class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
                                            <div class="ytr-icon">
                                                <img class="rounded-full" src="./asset/ytr_deja.jpg" alt="">
                                            </div>
                                            <span class="ytr-name">賽評<br>Deja Vu</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </template>
                    </ikaintrouble-c-rule>

                    <ikaintrouble-c-rule>
                        <template #title>問題回報</template>
                        <template #content>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p class="text-[#8be2fe] text-lg">Q.規則／場地／隊伍設定錯了，怎麼辦？</p>
                                <li>若有選擇錯誤情形，請重開房，雙方以同樣地圖規則、同樣武器組成進行對戰。</li>
                                <li>若房主方連續兩次選擇錯誤，則該場對戰結果判定為對方勝利。</li>
                                <li>若有選擇錯誤情形發生，<span class="rule-mark">請該對戰中的任意玩家長按「左類比+右類比+L+R+ZL+ZR」六鍵，直接切斷對戰。</span></li>
                            </ol>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p class="text-[#8be2fe] text-lg">Q.斷線怎麼辦？</p>
                                <li>對戰開始60秒內斷線：請重開房，雙方以同樣地圖規則、同樣武器組成、裝備進行對戰。</li>
                                <li>對戰開始60秒內同一隊伍參賽者第二次斷線：請繼續進行對戰。</li>
                                <li>對戰開始60秒後斷線：請繼續進行對戰。</li>
                                <li>若為開房方斷線，且為必須重新開房的情況，請由另一方重新開房。<br>
                                    ＊ 60秒內：倒數時間顯示4:00(含)以前，如有疑慮請務必錄影。</li>
                            </ol>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p class="text-[#8be2fe] text-lg">Q.衝線怎麼辦？</p>
                                <li>比賽開始前請務必提前確認個人網路狀況，如開房後有衝線情形請立刻於Discord內之「問題回報」頻道提出，由主辦方協助調整開房事宜。</li>
                            </ol>
                            <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                                <p class="text-[#8be2fe] text-lg">Q.如果有玩家使用惡意BUG怎麼辦？</p>
                                <li><span class="rule-mark">本賽事嚴禁使用非正常手段進行遊戲</span></li>
                                <li>如遇玩家使用系統漏洞進行遊戲，請長按拍照鍵錄影回報，經工作人員確認屬實，該隊將直接取消比賽資格。</li>
                            </ol>
                        </template>
                    </ikaintrouble-c-rule>
                </div>
                <!-- 賽制 -->
                <ikaintrouble-c-title id="contest">賽制</ikaintrouble-c-title>
                <!-- 標題 -->
                <ikaintrouble-c-rule>
                <template #title></template>
                <template #content>
                    <ol class="text-[#e4e4e4] list-disc ml-8 mb-4">
                        <li>初賽：規則區域，三戰兩勝循環賽，分四大戰區進行比賽後各組取前2進入八強賽
                            <ol class="list-disc ml-8">
                                <li>12組/3組/區：每組打BO3取前二（R2x20=40分）</li>
                                <li>16組/4組/區：每組打BO3取前二（R3x20=60分）</li>
                                <li>20組/5組/區：每組打BO3取前二（R5x20=100分）</li>
                            </ol>
                        </li>
                        <li>複賽：(區域→塔樓→魚虎→蛤蜊→區域)，五戰三勝
                            <!-- <ol class="list-disc ml-8">
                                <li>48人/12組/4區/新手保底12人</li>
                                <li>64人/16組/4區/新手保底16人</li>
                                <li>80人/20組/4區/新手保底20人</li>
                            </ol> -->
                        </li>
                        <li>準決賽：(區域→塔樓→魚虎→蛤蜊→區域)，五戰三勝（30分）</li>
                        <li>冠亞賽：(區域→塔樓→魚虎→蛤蜊→區域)，五戰三勝（30分）</li>
                        <li>總共 210 分（3.5 小時)</li>
                    </ol>
                </template>
            </ikaintrouble-c-rule>
            </div>
            <!-- 大會獎品 -->
            <ikaintrouble-c-title id="award">大會獎品</ikaintrouble-c-title>
            <p class="text-white flex justify-center mb-12">*得獎者以直播抽獎結果為主</p>
            <div
                class="w-full grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4 md:flex-row flex-wrap items-stretch gap-4 px-8 md:px-0">
                <ikaintrouble-c-prize v-for="item in ikaintroubleC.prize" :prize="item">大會獎品</ikaintrouble-c-prize>
            </div>
            <!-- 工作人員 -->
            <ikaintrouble-c-title id="staff">工作人員</ikaintrouble-c-title>
            <p class="text-[#e4e4e4] text-center mb-12">*點擊可前往個人資料頁面</p>
            <div class="flex flex-wrap gap-6 px-8">
                <a v-for="item in staff" class="lg:w-[48%] flex flex-row w-full gap-8 group" :href="item.url"
                    target="_blank">
                    <div class="flex flex-col justify-center items-center relative">
                        <div class="ytr-icon">
                            <img :src="item.image" class="rounded-full" alt="">
                        </div>
                        <p
                            class="bg-[#F8b1ff] px-2 py-0.5 rounded-lg font-extrabold absolute bottom-0 right-0 rotate-6 ring-4 ring-[#4520ea] text-[#4520ea]">
                            {{ item.name }}</p>
                    </div>
                    <div class="flex items-center justify-center gap-4 relative drop-shadow-md">
                        <div
                            class=" w-3 overflow-hidden inline-block absolute left-0 -translate-x-5 top-1/2 -translate-y-1/2">
                            <div
                                class=" h-4 bg-[#9be2ff] rotate-45 transform origin-bottom-right md:group-hover:bg-[#fefab7]">
                            </div>
                        </div>
                        <div class="md:group-hover:bg-[#fefab7] bg-[#9be2ff] p-4 w-full rounded-xl">
                            <p>{{ item.quote }}</p>
                        </div>
                    </div>
                </a>
                <ikaintrouble-c-staff v-for="item in staffList.staff" :staff="item"></ikaintrouble-c-staff>
            </div>
        </div>
        </div>
    </div>
    <!-- nav -->
    <!-- <div class="fixed blur-md h-14 w-full bottom-0
     bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> -->
    <div class="hidden md:flex fixed justify-center items-center backdrop-blur-xl 
    bottom-0 w-full h-14">
        <ul class="flex justify-between items-center w-[60%] gap-6">
            <li class="flex justify-between items-center w-[100%]">
                <ul class="flex flex-center items-center justify-between w-full">
                    <li class="nav-btn"><a href="#theme">比賽章程</a></li>
                    <li class="nav-btn"><a href="#contest">賽制</a></li>
                    <li class="nav-btn"><a href="#award">大會獎品</a></li>
                    <li class="nav-btn"><a href="#staff">工作人員</a></li>
                    <li><a href="https://discord.gg/VTjUQkB9uv" target="_blank" class="nav-btn_spec">聯絡我們</a></li>
                </ul>
            </li>
        </ul>
    </div>

    <div id="test">
        <!-- 打開鍵 -->
        <!-- <button  class="fixed bottom-5 right-5 hover:text-white z-10" @click=" mobile = 'no' ">打開</button> -->
        <!-- <div class="flex flex-col gap-2 fixed bottom-2 right-2 md:hidden">
            <a class="navmobile-btn flex"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFic0O-UQXr4s65eOH3V2PxeD-wkdjUmFEikM36Z52VXOfRQ/viewform">我要<br>報名</a>
            <a class="navmobile-btn flex"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5NC380QmP0g-_qu2rVm_4C3GCtfKtdSxr58T0t4c97ValYg/viewform">我想<br>贊助</a>
        </div> -->

        <!-- nav mobile -->
        <!-- <div class="fixed flex h-screen overflow-hidden items-center justify-center bg-black" :class="{active:navmobile}">
        <ul class="flex flex-col gap-4 text-center text-white">
          <li><a href="#theme">比賽章程</a></li>
          <li><a href="#contest">賽制</a></li>
          <li><a href="#award">大會獎品</a></li>
          <li><a href="#staff">工作人員</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdFic0O-UQXr4s65eOH3V2PxeD-wkdjUmFEikM36Z52VXOfRQ/viewform">我要報名</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5NC380QmP0g-_qu2rVm_4C3GCtfKtdSxr58T0t4c97ValYg/viewform">我想贊助</a></li>
        </ul>
        <div class="absolute bottom-5 right-5" @click="navmobile = !navmobile">叉叉</div>
    </div> -->
    </div>
</template>
<script setup>
useSeoMeta({
    title: '落難杯3',
    twitterTitle: '落難杯3',
    twitterDescription: '',
    ogTitle: '落難杯3',
    description: '',
    ogDescription: '',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://fukahire.github.io/fishmarket/ikantrouble3',
})

import { useIkaintroubleC } from '~~/store/contest/ikaintrouble3';
import { useStaffList } from '~~/store/staff';


const ikaintroubleC = useIkaintroubleC()
const staffList = useStaffList()
// const navlink = picnic.navlink
const ruleopen = ref(false)

const picnicYT = ikaintroubleC.youtuber
const youtuberList = staffList.youtuber
const thanksList = staffList.thanks

const ytData = picnicYT.map(item => youtuberList[item])
let ytOne = [ytData[0], ytData[1]]
let ytTwo = [ytData[2], ytData[3]]

</script>