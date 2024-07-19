<template>
    <div class="pt-16" id="title">
        <!-- 主視覺 -->
        <!-- <picnic-b-fish class="w-full"></picnic-b-fish> -->
        <div class="flex items-center relative">
            <img class="max-w-2xl w-full mx-auto" src="/visual/picnic-b/people.png" alt="">
            <img class="absolute bottom-0 -translate-y-1/2 w-[50%] max-w-xs left-1/2 -translate-x-1/2"
                src="/visual/picnic-b/logo.png" alt="">
        </div>
        <picnic-b-fish class="w-full"></picnic-b-fish>
        <!-- 參賽大合照 -->
        <div class="w-full px-4 max-w-[1000px] mx-auto">
            <picnic-b-title>參賽選手</picnic-b-title>
            <div class="grid grid-cols-3 gap-2 md:gap-8">
                <picnic-b-member v-for="(item, index) in member" :member="item" :number="index"></picnic-b-member>
            </div>
            <div class="mt-4">
                <a target="_blank"  href="/prize/picnic-b/all.jpg" class="block w-full text-center font-bold bg-[#395EE5] px-4 cursor-pointer rounded-lg text-white py-2 hover:text-black hover:bg-[#FFCD40]">其他選手</a>
            </div>
        </div>
        <!--  -->
        <picnic-b-title class="mt-16">活動時程</picnic-b-title>
        <div class="flex gap-8 mt-8 md:items-center items-stretch max-w-6xl mx-auto px-4 flex-col md:flex-row">
            <div class="w-full md:max-w-md">
                <a class="twitter-timeline" data-height="500" data-width="100%"
                    href="https://twitter.com/fishmarket_tw?ref_src=twsrc%5Etfw">Tweets by 斯普拉遁魚市場</a>
                <component :is="'script'" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></component>
            </div>
            <div class="flex-grow">
                <picnic-b-timeevent v-for="item in date" :event="item" class="mb-3"></picnic-b-timeevent>
            </div>
        </div>
        <!-- 參賽大合照 -->
        <div></div>
        <!-- twitter -->

        <!-- 時間軸 -->
        <div class="w-full px-4 max-w-[1000px] mx-auto">
            <!-- 比賽章程 -->
            <picnic-b-title id="theme">比賽章程</picnic-b-title>
            <div class="w-full bg-white p-2 md:px-6 md:py-2 rounded-lg">
                <!-- 比賽資訊 -->
                <div class="divide-y divide-[#b6adca]">
                    <picnic-b-rule>
                        <template #title>比賽資訊</template>
                        <template #content>
                            <img src="/material/rule/schedule.png" class="max-w-2xl" alt="">
                            <ul class="list-disc">
                                <li><span class="bg-[#9FFCFF] px-1 rounded">比賽時間</span>：1/27(六) 19:00 [GMT+8]</li>
                                <li><span class="bg-[#FFEA94] px-1 rounded">報名時間</span>：1/9(二) 12:30～1/11(四) 20:00 [GMT+8]
                                </li>
                                <li><span class="bg-[#bcffa0] px-1 rounded">實況抽選</span>：預定 1/12 (五) 具體時間另行公布</li>
                                <li>募集組別：雙人 16 組 或 32 組</li>
                                <ul class="ml-20">
                                    <li>報名未滿 16 組，則取消比賽；</li>
                                    <li>超過 16 組未滿 32 組，則抽籤取 16 組進行比賽；</li>
                                    <li>若報名大於 32 組，則依抽籤順序列入備選。</li>
                                </ul>
                                <li>以報名表單時間戳記為主，超時不記入。</li>
                                <li>本次報名為抽選制，組別中兩人皆未參加過皮克尼杯，中籤機率為參加過組別的兩倍；兩人皆參加過／其中一人參加過的組別則為正常機率。</li>
                                <li>贊助商擁有參賽保底名額。</li>
                                <li class="flex gap-2 flex-col md:flex-row">
                                    <a
                                        href="https://forms.gle/hwsKafDRvcxuZNa2A" target="_blank">
                                        <span class="my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md  md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale">報名網址</span>
                                    </a>
                                    <a
                                        href="https://docs.google.com/spreadsheets/d/1QyXWQq2flAGS_z_vgNUWl2lRfj1LgIY8PbR2HEqKlNc/edit#gid=952962651"
                                        target="_blank">
                                        <span class="my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md  md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale">分組表單與計分表</span>
                                    </a>
                                    <a href="https://discord.gg/fishmarket-tw" target="_blank"><span
                                            class="my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md  md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale">斯普拉遁魚市場Discord</span></a>
                                </li>
                            </ul>
                        </template>
                    </picnic-b-rule>

                    <!-- 報名前注意事項 -->
                    <picnic-b-rule>
                        <template #title>報名前注意事項</template>
                        <template #content>
                            <ul class="list-disc">
                                <li>本活動為特殊賽制，請詳閱規則說明後，確認可接受並能夠全程參與再進行報名。</li>
                                <li>初賽將以抽籤方式分組，結果於比賽當日公布。</li>
                                <li>比賽詳情與活動期間聯絡將於斯普拉遁魚市場 Discord 群進行，請參賽人員務必加入。</li>
                                <li>如對活動有任何疑問，歡迎在報名前於 Discord 群<picnic-b-mark>聯繫主辦／問答諮詢</picnic-b-mark>頻道提出。</li>
                                <li>比賽進行期間，參賽人員皆有機會被賽評轉播，對戰的記憶代碼也有機會被公布分享。</li>
                            </ul>
                        </template>
                    </picnic-b-rule>

                    <!-- 報名方式與活動辦法 -->
                    <picnic-b-rule>
                        <template #title>報名方式與活動辦法</template>
                        <template #content>
                            <ul class="list-disc">
                                <li>採雙人報名制，報名前請先找好隊友。</li>
                                <li>活動進行時，將會按賽制配對另一組雙人隊友進行 4 對 4 的比賽。</li>
                                <li>比賽過程中可以任意更換武器，唯獨不可與報名雙排隊友重複武器，與配對到的另一組雙排隊友重複則不限制。</li>
                                <p class="mt-4">※主武器、副武器、SP 相同者視為同一把武器；有鏡狙擊和無鏡狙擊視為不同主武器</p>
                                <img src="/material/rule/weapon.png" alt="">
                                <li>比賽過程中，只允許與報名雙排隊友進行語音或文字溝通。</li>
                                <li>為避免工作人員無法連絡參賽者，比賽當日 Discord 暱稱必須與報名表填寫的暱稱一致。</li>
                            </ul>
                        </template>
                    </picnic-b-rule>

                    <!-- 賽制 -->
                    <picnic-b-rule>
                        <template #title>賽制</template>
                        <template #content>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">初賽</p>
                            <ul class="list-disc mb-6">
                                <li>報名達 32 組則依抽選分兩區進行比賽。</li>
                                <li>規則為真格魚虎，一區分為四個私房同時進行比賽，在私房中將與其他三組輪流配對，進行三場比賽後換房，總共五輪、共計 15 場的積分賽，勝場加 2 分，敗場不加分。</li>
                                <li>如另一組雙排隊友斷線但該局勝利，則按正常計分。</li>
                                <li>因他組斷線導致落敗的組別，需於當局比賽結束時，於<picnic-b-mark>聯繫主辦／問答諮詢</picnic-b-mark>出示任天堂app截圖證明（截圖需包含時間與八位玩家id）
                                </li>
                                <li>地圖全隨機，不 BAN 圖。</li>
                                <li>比賽組別為 16 組時，取積分高的前 8 組進入複賽；比賽組別為 32 組時，取兩區積分高的前 4
                                    組進入複賽。若出現同分情況，則依以下條件判定晉級組別：初賽總場次KO數＞兩組對戰時，兩勝的組別＞初賽組別順序（字典序）。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">複賽</p>
                            <ul class="list-disc mb-6">
                                <li>規則為真格魚虎，擂台賽（進行方式請見下方），勝場加 2 分，敗場不加分，先取得 14 分者為冠軍組別並結束比賽。亞軍至第八名由組別積分高低排序，若同分則並列名次。</li>
                                <li>地圖全隨機，不 BAN 圖。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">擂台賽規則</p>
                            <ul class="list-decimal mb-6">
                                <li>晉級複賽的八組將隨機安排出賽順序，第一場比賽由順位 1 的組別為<picnic-b-mark-y>黃 1</picnic-b-mark-y>，順位 2
                                    的組別為<picnic-b-mark-b>藍 1</picnic-b-mark-b>，順位 3 的組別為<picnic-b-mark-y>黃
                                        2</picnic-b-mark-y>，順位 4 的組別為<picnic-b-mark-b>藍
                                        2</picnic-b-mark-b>，另外四組排列於等待區並且在後面的比賽依序上場。每場會有四組先上擂台，分為 黃隊 和 藍隊 進行對戰。</li>
                                <li>黃隊或藍隊皆由一組守擂組 (<picnic-b-mark-y>黃 1</picnic-b-mark-y>或<picnic-b-mark-b>藍
                                        1</picnic-b-mark-b>) 搭配一組挑戰組 (<picnic-b-mark-y>黃
                                        2</picnic-b-mark-y>或<picnic-b-mark-b>藍 2</picnic-b-mark-b>)
                                    組成，對戰組合為<picnic-b-mark-y>黃 1</picnic-b-mark-y><picnic-b-mark-y>黃
                                        2</picnic-b-mark-y>vs<picnic-b-mark-b>藍 1</picnic-b-mark-b><picnic-b-mark-b>藍
                                        2</picnic-b-mark-b>。</li>
                                <li>獲勝隊伍的挑戰組在下一場將成為另一隊的守擂組。若黃隊獲勝，<picnic-b-mark-y>黃
                                        2</picnic-b-mark-y>下一場成為藍隊的<picnic-b-mark-b>藍
                                        1</picnic-b-mark-b>；若藍隊獲勝，<picnic-b-mark-b>藍
                                        2</picnic-b-mark-b>下一場成為黃隊的<picnic-b-mark-y>黃 1</picnic-b-mark-y>
                                    。落敗方則回到等待區隊伍的最後序列。</li>
                                <li>等待區內順序較前的兩組成為下一場的挑戰組，依序編入黃隊的挑戰組<picnic-b-mark-y>黃
                                        2</picnic-b-mark-y>和藍隊的挑戰組<picnic-b-mark-b>藍 2</picnic-b-mark-b>。</li>
                                <li>若進行至第 14 場仍無組別取得 14 分，第 15 場開始則以目前累計積分最高的分數為基準，先取得最高積分加 2 分者即為冠軍（例如第 14 場時， 2C
                                    組為所有組別中最高積分 10 分，則第 15 場開始先取得 12 分的組別即為冠軍）。</li>
                                <li>若第 15 場結束時，出現多組同時符合冠軍條件（第 14 場最高積分 +2 分），則繼續進行下一輪比賽，直到有人取得唯一最高積分即為冠軍，並結束比賽。</li>
                                <li>參賽者語音需在斯普拉遁魚市場中進行，到號時工作人員會以語音及文字通知。
                                    「若叫號起三分鐘內組別未全員進入私房」，則視同過號，需重新回到等待區組別的最後列，並且改由下一組遞補。
                                </li>
                            </ul>
                            <img class="max-w-[600px]" src="/material/rule/animation_picnicb.gif" alt="">
                        </template>
                    </picnic-b-rule>

                    <!-- 4/15(六)比賽當日時程預定 -->
                    <picnic-b-rule>
                        <template #title>1/27(六)比賽當日時程預定</template>
                        <template #content>
                            <ul class="-ml-6">
                                <li><picnic-b-mark>18:30</picnic-b-mark> 前公布組別序號與分組</li>
                                <li><picnic-b-mark>18:45</picnic-b-mark> 各組確認賽程表</li>
                                <li><picnic-b-mark>18:55</picnic-b-mark> 所有組別進入私房待機</li>
                                <li><picnic-b-mark>19:00</picnic-b-mark> 初賽準時開打</li>
                                <li><picnic-b-mark>21:20</picnic-b-mark> 擂台賽開打</li>
                                <li><picnic-b-mark>23:45</picnic-b-mark> 比賽結束</li>
                                <ul class="ml-8 list-disc">
                                    <li>比賽可能超過 12 點，請自行判斷是否能全程配合再行報名。</li>
                                    <li>開房一律使用 Nintendo Switch Online 建房功能。</li>
                                </ul>
                            </ul>
                        </template>
                    </picnic-b-rule>
                </div>

            </div>


        </div>

        <div class="w-full px-4 max-w-[1000px] mx-auto pt-4">
            <!-- 比賽章程 -->
            <picnic-b-title id="tip">對戰規則</picnic-b-title>
            <div class="w-full bg-white p-2 md:px-6 md:py-2 rounded-lg">
                <div class="divide-y divide-[#b6adca]">
                    <!-- 對戰規則 -->
                    <picnic-b-rule>
                        <template #title>對戰規則</template>
                        <template #content>
                            <p class="-ml-6">為確保比賽進程順暢，請遵守以下規範：</p>
                            <ul class="list-disc">
                                <li>如有溝通需求，只能與報名隊友進行語音，不得與對戰中配對的他組隊友語音。</li>
                                <li>初賽及複賽對戰皆為全地圖隨機抽選，不 BAN 圖。</li>
                                <li>若無特殊需求，請由隊伍英文字母代號較前的一方負責開房。</li>
                                <li>初賽開房必須在「所有組別」都確認完前一輪的對戰結果後再行開始，主辦會發布可開始進行對戰的訊息。</li>
                                <li>請勿對選手或隊伍進行挑釁、誹謗中傷等行為。</li>
                            </ul>
                        </template>
                    </picnic-b-rule>

                    <!-- 玩家／隊伍名稱 -->
                    <picnic-b-rule>
                        <template #title>玩家／隊伍名稱</template>
                        <template #content>
                            <ul class="list-disc mb-4">
                                <li>進入私房前請將依照以下方式改名：隊伍序號_ID (EX. 1C_AA)</li>
                                <li>關閉遊戲重啟後必須重新輸入別稱，敬請注意。</li>
                            </ul>
                            <img src="/material/rule/id.png" alt="">
                        </template>
                    </picnic-b-rule>

                    <!-- 私房創建 -->
                    <picnic-b-rule>
                        <template #title>私房創建</template>
                        <template #content>
                            <ul class="list-disc mb-4">
                                <li>初賽進行時，主辦宣佈可進行次輪對戰後，若10分鐘內未進入指定房間，則判定為另外三組的勝利。</li>
                                <li>私房開啟後，10分鐘內若某一組未全員進入私房，則判定為另外三組的勝利</li>
                            </ul>
                            <img src="/material/rule/buildroom.png" alt="">
                            <img src="/material/rule/joinroom.png" alt="">
                        </template>
                    </picnic-b-rule>

                    <!-- 對戰結果報告 -->
                    <picnic-b-rule>
                        <template #title>對戰結果報告</template>
                        <template #content>
                            <ul class="list-decimal">
                                <li>由勝利方中序號較前的隊伍代表於 Discord 中<picnic-b-mark>對戰結果報告</picnic-b-mark>頻道進行回覆，並由工作人員進行確認</li>
                                <li class="">報告方式請依照下方格式，以利分數統計</li>
                                <li class="flex flex-wrap items-stretch gap-4 mt-4">
                                    <div class="bg-[#cbd5e1] p-4">
                                        <p>格式：</p>
                                        <p>[組別1A1B] 對 [組別1C1D]</p>
                                        <p>[組別1A1B] 勝，則由A組以下述方式回報</p>
                                        <p>[1A1B]勝 - [KO] (如無KO則無需填寫)</p>
                                    </div>
                                    <div class="bg-[#cbd5e1] p-4">
                                        <p>例1：</p>
                                        <p>1A1B 對 1D1E</p>
                                        <p>1A1B 勝且KO</p>
                                        <p>
                                            <picnic-mark>1A1B勝 - KO</picnic-mark>
                                        </p>
                                    </div>
                                    <div class="bg-[#cbd5e1] p-4">
                                        <p>例2：</p>
                                        <p>2C2H 對 2J2K</p>
                                        <p>2J2K 勝無KO</p>
                                        <p>
                                            <picnic-mark>2J2K勝</picnic-mark>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </picnic-b-rule>
                </div>

                <!-- 問題回報 -->
                <picnic-b-rule>
                    <template #title>問題回報</template>
                    <template #content>
                        <div>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">規則／組別設定有誤</p>
                            <ul class="list-disc mb-4">
                                <li>若有選擇錯誤情形，請該對戰中的任意玩家長按<picnic-b-mark>左類比+右類比+L+R+ZL+ZR</picnic-b-mark>六鍵，直接切斷對戰。
                                    雙方以同樣地圖規則、同樣武器組成進行對戰。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">武器重複</p>
                            <ul class="list-disc mb-4">
                                <li>請該對戰中的任意玩家長按<picnic-b-mark>左類比+右類比+L+R+ZL+ZR</picnic-b-mark>六鍵，直接切斷對戰。雙方以同樣地圖規則、更改武器組合後進行對戰。
                                </li>
                                <li>若第二次仍未修改為不重複的武器組合，則直接判其他三組勝利。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">斷線問題</p>
                            <ul class="list-disc mb-4">
                                <li>對戰開始 60 秒內斷線：請終止對戰，四組以相同的地圖規則、武器組成及裝備進行重賽。</li>
                                <li>對戰開始 60 秒後斷線：對戰繼續進行，不重賽。</li>
                                <li>若有玩家於 60 秒後斷線且落敗，則斷線玩家所在組別加 0 分，未斷線組加 1 分，勝方各加 2 分；若出現斷線玩家的一方獲勝，則正常計分。<br>
                                    ※60秒內：倒數時間顯示4:00(含)以前，如有疑慮請務必錄影。</li>
                                <li>複賽階段斷線計分處理辦法同上述三點，唯敗方須進入等待區；斷線仍獲勝的兩組將成為守擂隊。</li>
                                <li>若開房者斷線，必須重新開房的情況，請由其他三組中，字母排序第二小的組別重新開房。</li>
                                <li>如複賽擂台賽發生多人斷線，主辦會視情況判斷該局是否重賽，若重賽則以同樣規則、地圖、武器與配裝。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">衝線／延遲狀況</p>
                            <ul class="list-disc mb-4">
                                <li>賽前請務必事先確認個人網路狀況，如開房後有衝線情形，請立即於 Discord 內之<picnic-b-mark>聯繫主辦／問答諮詢</picnic-b-mark>頻道提出。
                                </li>
                                <li>由於地區及遊戲本身連線問題，主辦方不接受延遲相關的投訴，請享受斯普拉遁的醍醐味。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">初賽過程中有組別消失、棄賽</p>
                            <ul class="list-disc mb-4">
                                <li>將安排遞補讓比賽順利進行，但遞補組別的分數為從 0 分開始累計，不會繼承任何組別的分數。</li>
                            </ul>
                            <p class="text-md font-semibold -ml-2 md:-ml-6">玩家利用遊戲 bug 或惡意擺爛</p>
                            <ul class="list-disc mb-4">
                                <li>由於賽制特殊，主辦方希望參賽玩家秉持運動精神，於正當操作下全力以赴贏得勝利，切勿利用遊戲 bug 或做出惡意影響勝負的行為
                                    （如在時間充裕的情況將魚虎運回家影響推進分數、惡意死亡造成己方劣勢等）。針對惡意行為，將直接取消該組比賽資格；若有模糊地帶，主辦擁有最終解釋權。</li>
                            </ul>
                        </div>
                    </template>
                </picnic-b-rule>
            </div>
        </div>
        <!-- 獎項 -->
        <div class="w-full px-4 max-w-[1000px] mx-auto">
            <picnic-b-title id="award">大會獎品</picnic-b-title>

            <div class="w-full bg-white p-2 md:px-6 md:py-2 rounded-lg mb-8">
                <picnic-b-rule>
                    <template #title>注意事項</template>
                    <template #content>
                        <ul class="list-decimal">
                            <li>按活動網頁獎項排列順序抽獎，已得獎組別不重複獲獎。</li>
                            <li>日後會將獎品圖適當裁切，置入活動官網展示。</li>
                            <li>圖片可公開並僅限於獲獎者本人於網路使用，張貼請註明原作者。</li>
                            <li>請勿進行任何修改／重製／印刷，並禁止使用於營利活動。</li>
                            <li>得獎者請於2/1(四)20:00前提供設定圖給工作人員。</li>
                        </ul>
                    </template>
                </picnic-b-rule>

            </div>
        </div>


        <div
            class="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row md:flex-row flex-wrap items-stretch gap-8 px-8">
            <picnic-b-prize v-for="item in picnicB.prize" :prize="item"></picnic-b-prize>
        </div>
            <picnic-b-title id="staff" class="mt-4">實況轉播</picnic-b-title>

        <div class="w-full px-4 max-w-[1000px] mx-auto">
            <div class="w-full bg-white p-2 md:px-6 md:py-2 rounded-lg mb-8">
                <picnic-b-rule>
                    <template #title></template>
                    <template #content>
                        <ol class="list-disc mb-4">
                            <li>主辦方有可能會安插工作人員進入私房轉播，轉播場次將與對戰流程表一同公布，請知悉。</li>
                            <li>官方轉播：(點擊頭像前往主播個人頻道)</li>
                        </ol>
                    </template>
                </picnic-b-rule>
            </div>
            <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row grid gap-8 w-full">
            <div class="rounded-lg overflow-hidden">
                <div class="gap-2 flex p-4">
                    <picnic-b-staff v-for="item in ytOne" :staff="item"></picnic-b-staff>
                </div>
            </div>
            <div class="rounded-lg overflow-hidden">
                <div class="gap-2 flex p-4">
                    <picnic-b-staff v-for="item in ytTwo" :staff="item"></picnic-b-staff>
                </div>
            </div>
            <div class="rounded-lg overflow-hidden">
                <div class="gap-2 flex p-4">
                    <picnic-b-staff v-for="item in ytThree" :staff="item"></picnic-b-staff>
                </div>
            </div>
        </div>

        <picnic-b-title class="mt-4">工作人員</picnic-b-title>
        <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8">
            <picnic-b-staff v-for="item in staffList.staff" :staff="item"></picnic-b-staff>
        </div>
        </div>
        
    </div>
</template>
<script setup>
import { usePicnicB } from '~~/store/contest/picnic-b';
import { useStaffList } from '~~/store/staff';

const picnicB = usePicnicB()
const staffList = useStaffList()

const picnicBYT = picnicB.youtuber
const youtuberList = staffList.youtuber

const ytData = picnicBYT.map(item => youtuberList[item])
let ytOne = [ytData[0], ytData[1]]
let ytTwo = [ytData[2], ytData[3]]
let ytThree = [ytData[4], ytData[5]]

const date = picnicB.date
const member = picnicB.member
</script>