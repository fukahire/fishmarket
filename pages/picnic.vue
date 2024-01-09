<template>
    <div
        class="bg-[url('/visual/picnic/picnic_bg.jpg')] h-full bg-fixed bg-[length:60%] md:bg-[length:40%] lg:bg-[length:20%]">
        <div class="w-full flex justify-center font-sans">
            <!-- container -->
            <div class="max-w-[1000px] w-full md:px-4">
                <!-- banner -->
                <div class="w-full rounded-md md:mb-12 md:mt-6">
                    <img class="hidden md:block" src="/visual/picnic/picnic_visual.png" alt="">
                    <img class="block md:hidden" src="/visual/picnic/picnic_visual_mobile.jpg" alt="">
                </div>
                <!-- content -->
                <div class="bg-neutral-100 p-4 mb-8">
                    <div class="text-center mb-4 pb-2 border-b-2 border-slate-300 text-slate-600">比賽名次</div>
                    <div class="px-2 md:px-4">
                        <div class="flex gap-2 items-center mb-2">
                            <div class="bg-yellow-400 py-1 px-1.5 rounded-lg">
                                <div class="drop-shadow flex items-center text-sm text-white"><span
                                        class="material-symbols-outlined">trophy</span>冠軍</div>
                            </div>
                            <div>e 組 阿鳥 & 拿拿</div>
                        </div>
                        <div class="flex gap-2 items-center mb-2">
                            <div class="bg-slate-300 text-white py-1 px-1.5 rounded-lg flex items-center text-sm">
                                <div class="drop-shadow flex items-center text-sm text-white"><span
                                        class="material-symbols-outlined">trophy</span>亞軍</div>
                            </div>
                            <div>c 組 巧克力饅頭 & 雷歐 </div>
                        </div>
                        <div class="flex gap-2 items-start mb-2">
                            <div class="bg-yellow-500 text-white py-1 px-1.5 rounded-lg flex items-center text-sm">
                                <div class="drop-shadow flex items-center text-sm text-white"><span
                                        class="material-symbols-outlined">trophy</span>季軍</div>
                            </div>
                            <ul>
                                <li>a 組 菇 & 螺</li>
                                <li>h 組 咩嚕 & Kenji</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white p-8 md:px-24 md:py-2">

                    <!-- 比賽章程 -->
                    <picnic-title id="theme">比賽章程</picnic-title>
                    <div>
                        <!-- 比賽資訊 -->
                        <picnic-rule>
                            <template #title>比賽資訊</template>
                            <template #content>
                                <ul class="list-disc">
                                    <li>比賽時間：4/15(六) 20:00 [GMT+8]</li>
                                    <li>報名時間：3/22(三) 12:30～3/31(五) 20:00 [GMT+8]</li>
                                    <li>募集隊伍：雙人 8 組 或 16 組，若未滿 8 組報名則取消比賽，若報名滿 8 組未達 16 組或超過 16 組則依照各組意願列入備選。</li>
                                    <li><a class="my-0.5 inline-block bg-[#6b21a8] text-white py-1 px-2 rounded-md  md:hover:bg-mainyellow md:active:grayscale"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfnkVOhevhP2dzfokrPnUVS2Afn-CYf-ratk0kUG156Y04Y6A/viewform"
                                            target="_blank">
                                            報名網址
                                        </a></li>
                                    <li><a class="my-0.5 inline-block bg-[#6b21a8] text-white py-1 px-2 rounded-md  md:hover:bg-mainyellow md:active:grayscale"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSf7wMXLgdEN7l2GhFolD9KZ_ytqf_9S-aw9OHDhL8R6WE7_nw/viewform"
                                            target="_blank">
                                            贊助網址
                                        </a></li>
                                    <li>比賽Discord群組：<a href="https://discord.gg/VTjUQkB9uv" target="_blank"><span
                                                class="my-0.5 inline-block bg-[#6b21a8] text-white py-1 px-2 rounded-md  md:hover:bg-mainyellow md:active:grayscale">斯普拉遁魚市場</span></a>
                                    </li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 報名前注意事項 -->
                        <picnic-rule>
                            <template #title>報名前注意事項</template>
                            <template #content>
                                <ul class="list-disc">
                                    <li>本活動為全新賽制試辦，請詳閱規則說明後，確認可接受並能夠全程參與再進行報名。</li>
                                    <li>初賽將以抽籤方式分組，抽籤時間及細節將另行公布。</li>
                                    <li>比賽詳情與活動期間聯絡將於斯普拉遁魚市場 Discord 群進行，請參賽人員務必加入。</li>
                                    <li>如對活動有任何疑問，歡迎在報名前於 Discord 群問答區提出。</li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 報名方式與活動辦法 -->
                        <picnic-rule>
                            <template #title>報名方式與活動辦法</template>
                            <template #content>
                                <ul class="list-disc">
                                    <li>採雙人報名制，報名前請先找好隊友。</li>
                                    <li>活動進行時，將會按賽制配對另一組雙人隊友進行 4 對 4 的比賽。</li>
                                    <li>比賽過程中可以任意更換武器，唯獨不可與雙排隊友重複武器（與配對到的另一組雙排隊友重複則不限制）</li>
                                    <li>比賽過程中，不可與配對到的他組雙排隊友語音或文字溝通武器與戰術等。</li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 賽制 -->
                        <picnic-rule>
                            <template #title>賽制</template>
                            <template #content>
                                <p class="content-title">初賽：</p>
                                <ul class="ml-8 list-decimal mb-4">
                                    <li>規則為真格魚虎，一輪私房將與其他三組輪流配對，進行三場比賽後換房，總共五輪、共計 15 場的積分賽，勝場加 2 分，敗場不加分。</li>
                                    <ul class="ml-8 list-disc">
                                        <li>如另一組雙排隊友斷線且該局落敗，則勝方加 2 分，敗方但未斷線的組別加 1 分，斷線組別不加分。</li>
                                        <li>如另一組雙排隊友斷線但該局勝利，則按正常計分。</li>
                                        <li>因他組斷線導致落敗的組別，需於當局比賽結束時，於 <picnic-mark>聯繫主辦／問答諮詢</picnic-mark>
                                            出示任天堂app截圖證明（截圖需包含時間與八位玩家id）
                                        </li>
                                    </ul>
                                    <li>地圖全隨機，不 BAN 圖。</li>
                                    <li>取積分高的前 8 組進入複賽，若出現同分情況，則依以下條件判定晉級隊伍：兩隊對戰時，兩勝的隊伍＞KO數＞報名順序。</li>
                                </ul>
                                <p class="content-title">複賽：</p>
                                <ul class="ml-8 list-decimal mb-4">
                                    <li>規則為真格魚虎，擂台賽（進行方式請見下方），勝場加 2 分，敗場不加分，先取得 14
                                        分者為冠軍隊伍並結束比賽。亞軍至第八名由隊伍積分高低排序，若同分則並列名次。</li>
                                    <ul class="ml-8 list-disc">
                                        <li>如另一組雙排隊友斷線且該局落敗，則勝方加 2 分，敗方但未斷線的組別加 1 分，斷線組別不加分，敗方進入等待區。</li>
                                        <li>如另一組雙排隊友斷線但該局勝利，則按正常計分，勝方兩組成為守擂隊。</li>
                                    </ul>
                                    <li>地圖全隨機，不 BAN 圖。</li>
                                    <li>擂台賽規則：
                                        <ul class="ml-8 list-disc">
                                            <li>晉級複賽的八隊將隨機排序並編號 a ~ h，<picnic-mark>第一場比賽</picnic-mark>由編號 a 的隊伍為 A1，編號 b
                                                的隊伍為 B1，編號
                                                c 的隊伍為 A2，編號 d
                                                的隊伍為 B2，另外四隊 efgh 排列於等待區並且在後面的比賽依序上場。每場會有四隊先上擂台，分為 Alpha 組和 Bravo 組進行對戰。
                                            </li>
                                            <li>Alpha 組或 Bravo 組皆由一隊守擂隊 (A1 或 B1) 搭配一隊挑戰隊 (A2 或 B2) 組成，對戰組合為 A1A2 vs
                                                B1B2。</li>
                                            <li>獲勝方的挑戰隊在下一場將成為另一組的守擂隊。若 Alpha 組獲勝，A2 下一場成為 Bravo 組的 B1 隊伍；若Bravo 組獲勝，B2
                                                下一場成為 Alpha 組的 A1 隊伍。落敗方則回到等待區隊伍的最後序列。</li>
                                            <li>等待區內順序較前的兩隊成為下一場的挑戰隊，依序編入 Alpha 組的挑戰隊 A2 和 Bravo 組的挑戰隊 B2。</li>
                                            <li>若進行至第 14 場仍無隊伍取得 14 分，第 15 場開始則以目前累計積分最高的分數為基準，先取得<picnic-mark>最高積分加 2
                                                    分</picnic-mark>者即為冠軍（例如第<picnic-mark>14場</picnic-mark>時，A隊為所有隊伍中最高積分 10
                                                分，則第 15 場開始先取得
                                                12 分的隊伍即為冠軍）。</li>
                                            <li>若進行至第 14 場仍無隊伍取得 14 分，第 15 場開始則以目前累計積分最高的分數為基準，先取得最高積分加 2
                                                分者即為冠軍（例如第14場時，A隊為所有隊伍中最高積分 10 分，則第 15 場開始先取得 12 分的隊伍即為冠軍）。</li>
                                            <li>若第15場結束時，出現多組同時符合冠軍條件（第14場最高積分+2分），則繼續進行下一輪比賽，直到有人取得唯一最高積分即為冠軍，並結束比賽。</li>
                                            <li>參賽者語音需在斯普拉遁魚市場中進行，到號時工作人員會以語音及文字通知。<picnic-mark>
                                                    「若叫號起三分鐘內隊伍未全員進入私房」，則視同過號，需重新回到等待區隊伍的最後列，</picnic-mark>並且改由下一組遞補。
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 4/15(六)比賽當日時程預定 -->
                        <picnic-rule>
                            <template #title>4/15(六)比賽當日時程預定</template>
                            <template #content>
                                <ul class="-ml-6">
                                    <li>
                                        <picnic-mark>19:45</picnic-mark> 集合完畢，進行當日賽事進程說明、隊伍代表交換FC
                                    </li>
                                    <li>
                                        <picnic-mark>19:55</picnic-mark> 賽程表確認，隊伍代表交換FC完畢
                                    </li>
                                    <li>
                                        <picnic-mark>20:00</picnic-mark> 初賽準時開打（60~100分鐘）
                                    </li>
                                    <ul class="ml-8 list-disc">
                                        <li>報名隊伍 8 組，則進行擂台賽，先取得 14 分為冠軍隊伍</li>
                                        <li>報名隊伍 16 組，則與其他三組輪流配對，進行五輪、共計 15 場的積分賽，</li>
                                        <li>取積分累積前八名的隊伍晉級（15x7=105分）</li>
                                    </ul>
                                    <li>
                                        <picnic-mark>21:20</picnic-mark> 擂台賽開打（最少7場，最多23場，7~23*7=49~161分）
                                    </li>
                                    <li>
                                        <picnic-mark>23:45</picnic-mark> 比賽結束
                                    </li>
                                </ul>
                                <div class="bg-[#cbd5e1] p-4 mt-4">
                                    <ul class="list-disc ml-6">
                                        <li>比賽可能超過 12 點，請自行判斷是否能全程配合再行報名。</li>
                                        <li>比賽當天會請大家進入同一個頻道，請先練習加入頻道的方式。</li>
                                    </ul>
                                </div>
                            </template>
                        </picnic-rule>

                        <!-- 對戰規則 -->
                        <picnic-rule>
                            <template #title>對戰規則</template>
                            <template #content>
                                <p class="-ml-6">為確保比賽進程順暢，請遵守以下規範：</p>
                                <ul class="list-decimal">
                                    <li>如有溝通需求，只能與報名隊友進行語音，不得與對戰中配對的他組隊友語音。</li>
                                    <li>初賽及複賽對戰皆為全地圖隨機抽選，不 BAN 圖。</li>
                                    <li>若無特殊需求，請由隊伍英文字母代號較前的一方負責開房。</li>
                                    <li>初賽開房必須在<picnic-mark>「所有隊伍」都確認完前一輪的對戰結果後</picnic-mark>再行開始，主辦會發布可開始進行對戰的訊息。</li>
                                    <li>請勿對選手或隊伍進行挑釁、誹謗中傷等行為。</li>
                                    <li>請保持充足睡眠規律生活不要睡過頭......(*´-ω-`人)</li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 玩家／隊伍名稱 -->
                        <picnic-rule>
                            <template #title>玩家／隊伍名稱</template>
                            <template #content>
                                <p class="-ml-6">為確保比賽進程順暢，請遵守以下規範：</p>
                                <ul class="list-disc mb-4">
                                    <li>進入私房前請將依照以下方式改名：隊伍序號_ID (EX. C_AA)</li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 私房創建 -->
                        <picnic-rule>
                            <template #title>私房創建</template>
                            <template #content>
                                <ul class="list-decimal">
                                    <li>初賽進行時，主辦宣佈可進行次輪對戰後，若10分鐘內未進入指定房間，則判定為另外三隊的勝利。</li>
                                    <li>私房開啟後，10分鐘內若某一組未全員進入私房，則判定為另外三隊的勝利</li>
                                </ul>
                            </template>
                        </picnic-rule>

                        <!-- 對戰結果報告 -->
                        <picnic-rule>
                            <template #title>對戰結果報告</template>
                            <template #content>
                                <ul class="list-decimal">
                                    <li>由勝利方中序號較前的隊伍代表於 Discord 中「對戰結果報告」頻道進行回覆，並由工作人員進行確認</li>
                                    <li class="">報告方式請依照下方格式，以利分數統計</li>
                                    <li class="flex flex-wrap items-stretch gap-4 mt-4">
                                        <div class="bg-[#cbd5e1] p-4">
                                            <p>格式：</p>
                                            <p>[隊伍AB] 對 [隊伍CD]</p>
                                            <p>[隊伍AB] 勝，則由A隊以下述方式回報</p>
                                            <p>[AB]勝 - [KO] (如無KO則無需填寫)</p>
                                        </div>
                                        <div class="bg-[#cbd5e1] p-4">
                                            <p>例1：</p>
                                            <p>AB 對 DE</p>
                                            <p>AB 勝且KO</p>
                                            <p>
                                                <picnic-mark>AB勝 - KO</picnic-mark>
                                            </p>
                                        </div>
                                        <div class="bg-[#cbd5e1] p-4">
                                            <p>例2：</p>
                                            <p>CH 對 JK</p>
                                            <p>JK 勝無KO</p>
                                            <p>
                                                <picnic-mark>JK勝</picnic-mark>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </template>
                        </picnic-rule>
                    </div>

                    <!-- 問題回報 -->
                    <picnic-rule>
                        <template #title>問題回報</template>
                        <template #content>
                            <div>
                                <p class="content-title">規則／隊伍設定錯了，怎麼辦？</p>
                                <ul class="list-disc mb-4">
                                    <li>若有選擇錯誤情形，請該對戰中的任意玩家長按<picnic-mark>「左類比+右類比+L+R+ZL+ZR」六鍵，直接切斷對戰。</picnic-mark>
                                        雙方以同樣地圖規則、同樣武器組成進行對戰。</li>
                                </ul>
                                <p class="content-title">
                                    <picnic-mark>如何進入指定頻道</picnic-mark>
                                </p>
                                <p class="content-title">斷線怎麼辦？</p>
                                <ul class="list-disc mb-4">
                                    <li>對戰開始 60 秒內斷線：請終止對戰，四隊以相同的地圖規則、武器組成及裝備進行重賽</li>
                                    <li>對戰開始 60 秒後斷線：對戰繼續進行，不重賽</li>
                                    <li>若有玩家於 60 秒後斷線且落敗，則斷線玩家所在組別加 0 分，未斷線組加 1 分，勝方各加 2 分；若出現斷線玩家的一方獲勝，則正常計分。</li>
                                    <li>若開房者斷線，必須重新開房的情況，請由其他三隊中，字母排序第二小的隊伍重新開房。</li>
                                    <div class="bg-[#cbd5e1] p-4 mt-4">
                                        <p>＊ 60秒內：倒數時間顯示4:00(含)以前，如有疑慮請務必錄影。</p>
                                    </div>
                                </ul>
                                <p class="content-title -ml-6">衝線怎麼辦？</p>
                                <ul class="list-disc mb-4">
                                    <li>賽前請務必事先確認個人網路狀況，如開房後有衝線情形，請立即於 Discord 內之「問題回報」頻道提出。</li>
                                </ul>
                                <p class="content-title -ml-6">初賽過程中有隊伍消失、棄賽怎麼辦？</p>
                                <ul class="list-disc mb-4">
                                    <li>將安排遞補讓比賽順利進行，但遞補組別的分數為從 0 分開始累計，不會繼承任何組別的分數。</li>
                                </ul>
                                <p class="content-title -ml-6">如果有玩家使用惡意BUG怎麼辦？</p>
                                <ul class="list-disc mb-4">
                                    <li>禁止惡意擺爛：由於賽制特殊，主辦方希望參賽玩家秉持運動精神，於正當操作下全力以赴贏得勝利，切勿做出<picnic-mark>惡意影響勝負的行為</picnic-mark>
                                        （如在時間充裕的情況將魚虎運回家影響推進分數、惡意死亡造成己方劣勢等）。針對惡意行為，將直接取消該組比賽資格；若有模糊地帶，主辦擁有最終解釋權。
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </picnic-rule>
                </div>
                <picnic-title>實況轉播</picnic-title>
                <div class="mx-auto flex flex-col items-center px-8">
                    <ol class="list-disc mb-4 text-txtc ml-6">
                        <li>主辦方有可能會安插工作人員進入私房轉播，轉播場次將與對戰流程表一同公布，請知悉。</li>
                        <li>官方轉播：(點擊頭像前往主播個人頻道)</li>
                    </ol>
                    <div class="grid-cols-1 md:grid-cols-2 grid-flow-row grid gap-8 w-full">
                        <div class="rounded-lg overflow-hidden drop-shadow-lg">
                            <p class="bg-[#2E4187] p-2 text-center text-white font-bold text-lg">泰A組合</p>
                            <div class="gap-6 px-8 flex bg-white p-4">
                                <a class="flex-row flex w-full gap-2 justify-center group items-center" target="_blank"
                                    v-for="item in ytOne" :href="item.url">
                                    <div class="relative">
                                        <div
                                            class="rounded-full overflow-hidden w-28 bg-[#FFCD40] p-2 md:group-hover:rotate-45 ease-in duration-150">
                                            <img :src="item.image" class="rounded-full" alt=""></div>
                                        <p
                                            class="bg-[#2E4187] px-2.5 py-1 rounded-lg font-semibold absolute bottom-0 right-0 rotate-6 text-white">
                                            {{ item.name }}</p>
                                    </div>
                                    <p class="text-[#6b21a8] font-semibold text-md">{{ item.position }}</p>
                                </a>
                            </div>
                        </div>
                        <div class="rounded-lg overflow-hidden drop-shadow-lg">
                            <p class="bg-[#2E4187] p-2 text-center text-white font-bold text-lg">酣欸組合</p>
                            <div class="gap-6 px-8 flex bg-white p-4">
                                <a class="flex-row flex w-full gap-2 justify-center group items-center" target="_blank"
                                    v-for="item in ytTwo" :href="item.url">
                                    <div class="relative">
                                        <div
                                            class="rounded-full overflow-hidden w-28 bg-[#FFCD40] p-2 md:group-hover:rotate-45 ease-in duration-150">
                                            <img :src="item.image" class="rounded-full" alt=""></div>
                                        <p
                                            class="bg-[#2E4187] px-2.5 py-1 rounded-lg font-semibold absolute bottom-0 right-0 rotate-6 text-white">
                                            {{ item.name }}</p>
                                    </div>
                                    <p class="text-[#6b21a8] font-semibold text-md">{{ item.position }}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 大會獎品 -->
                <picnic-title id="award">大會獎品</picnic-title>
                <div class="px-8 md:px-auto">
                    <p class="text-txtc flex justify-center mb-12">*得獎者以直播抽獎結果為主</p>
                    <div @click="ruleopen = !ruleopen"
                        class="mx-auto md:mx-none hover:bg-[#6b21a8] bg-[#2E4187] cursor-pointer text-white p-2 w-32 rounded-lg text-center mb-4">
                        {{ ruleopen ? '關閉得獎規則' : '查看得獎規則' }}</div>
                    <div
                        class=" grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4 md:flex-row flex-wrap items-stretch md:px-0">
                        <picnic-prize v-for="item in picnic.prize" :prize="item" :open="ruleopen"></picnic-prize>
                    </div>
                    <ul class="bg-[#cbd5e1] p-4 mt-8 list-disc pl-8">
                        <li>圖片可公開並僅限於獲獎者本人於網路使用，張貼請註明作者。</li>
                        <li>請勿進行任何修改／重製／印刷，並禁止使用於營利活動。</li>
                        <li>
                            <picnic-mark>得獎者請於4/20(四)20:00前提供設定圖給工作人員</picnic-mark>
                        </li>
                    </ul>
                </div>

                <!-- 工作人員 -->
                <picnic-title id="staff">工作人員</picnic-title>
                <div class="md:px-24">
                    <p class="text-txtc text-center mb-8">*點擊可前往個人資料頁面</p>
                    <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8">
                        <picnic-staff v-for="item in staffList.staff" :staff="item"></picnic-staff>
                    </div>
                </div>

                <!-- 感謝名單 -->
                <picnic-title id="thanks">特別感謝</picnic-title>
                <div class="md:px-24 grid grid-cols-3 grid-flow-row gap-6 px-8">
                    <picnic-staff v-for="item in thanksData" :staff="item"></picnic-staff>
                </div>

                <div class="h-36"></div>
                <picnic-nav-mobile></picnic-nav-mobile>
            </div>
        </div>
        <div class="hidden md:flex flex-col gap-0 fixed top-[10vh] left-0 overflow-hidden rounded-r-xl cursor-pointer">
            <a href="#theme"
                class="bg-[#2E4187] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">比賽章程</a>
            <a href="#award"
                class="bg-[#2E4187] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">大會獎品</a>
            <a href="#staff"
                class="bg-[#2E4187] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">工作人員</a>
            <a href="#thanks"
                class="bg-[#2E4187] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">特別感謝</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnkVOhevhP2dzfokrPnUVS2Afn-CYf-ratk0kUG156Y04Y6A/viewform"
                target="_blank"
                class="bg-[#6b21a8] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">我要報名</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7wMXLgdEN7l2GhFolD9KZ_ytqf_9S-aw9OHDhL8R6WE7_nw/viewform"
                target="_blank"
                class="bg-[#6b21a8] px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer">我想贊助</a>
        </div>
    </div>
</template>
<script setup>
useSeoMeta({
    title: '皮克尼杯',
    twitterTitle: '皮克尼杯',
    twitterDescription: '欸等等搶魚耶，要不要雙排？',
    twitterImage: 'https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg',
    ogTitle: '皮克尼杯',
    description: '欸等等搶魚耶，要不要雙排？',
    ogDescription: '欸等等搶魚耶，要不要雙排？',
    ogImage: 'https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://fukahire.github.io/fishmarket/picnic',
})

useHead({
    htmlAttrs: {
        lang: 'zh'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})

import { usePicnic } from '~~/store/contest/picnic';
import { useStaffList } from '~~/store/staff';


const picnic = usePicnic()
const staffList = useStaffList()
const navlink = picnic.navlink
const ruleopen = ref(false)

const picnicYT = picnic.youtuber
const youtuberList = staffList.youtuber
const thanksList = staffList.thanks
const picnicThanks = picnic.thanks

const ytData = picnicYT.map(item => youtuberList[item])
let ytOne = [ytData[0], ytData[1]]
let ytTwo = [ytData[2], ytData[3]]

const thanksData = picnicThanks.map(item => thanksList[item])
console.log(thanksData)
</script>