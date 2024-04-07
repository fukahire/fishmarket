<template>
    <div class=" pt-12">
        <div class="w-full px-4 max-w-[1000px] mx-auto">
            <!-- 比賽章程 -->
            <picnic-b-title id="theme">比賽章程</picnic-b-title>
            <div class="w-full bg-white p-2 md:px-6 md:py-2 rounded-lg">
                <!-- 比賽資訊 -->
                <div class="divide-y divide-[#b6adca]">
                    <picnic-b-rule>
                        <template #title>比賽資訊</template>
                        <template #content>
                            <img src="/material/rule/schedule.png" class="max-w-lg block" alt="">
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
                                <li><a class="my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md  md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale"
                                        href="#" target="_blank">
                                        報名網址
                                    </a></li>
                                <li>比賽Discord群組：<a href="https://discord.gg/VTjUQkB9uv" target="_blank"><span
                                            class="my-0.5 inline-block bg-[#395ee5] text-white py-1 px-2 rounded-md  md:hover:bg-[#ffcd40] md:hover:text-[#334155] md:active:grayscale">斯普拉遁魚市場</span></a>
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
                                <p class="mt-4">※主武器、副武器、SP 相同者視為同一把武器，且有鏡狙擊和無鏡狙擊視為同一種主武器</p>
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
                            <img src="/material/rule/animation_picnicb.gif" alt="">
                        </template>
                    </picnic-b-rule>

                    <!-- 4/15(六)比賽當日時程預定 -->
                    <picnic-b-rule>
                        <template #title>1/27(六)比賽當日時程預定</template>
                        <template #content>
                            <ul class="-ml-6">
                                <li><picnic-mark>18:30</picnic-mark> 前公布組別序號與分組</li>
                                <li><picnic-mark>18:45</picnic-mark> 各組確認賽程表</li>
                                <li><picnic-mark>18:55</picnic-mark> 所有組別進入私房待機</li>
                                <li><picnic-mark>19:00</picnic-mark> 初賽準時開打</li>
                                <li><picnic-mark>21:20</picnic-mark> 擂台賽開打</li>
                                <li><picnic-mark>23:45</picnic-mark> 比賽結束</li>
                                <ul class="ml-8 list-disc">
                                    <li>比賽可能超過 12 點，請自行判斷是否能全程配合再行報名。</li>
                                    <li>開房一律使用 Nintendo Switch Online 建房功能。</li>
                                </ul>
                            </ul>
                        </template>
                    </picnic-b-rule>
                </div>

            </div>

            <!-- 獎項 -->
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




        <div class="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row md:flex-row flex-wrap items-stretch gap-8 px-8">
            <picnic-b-prize v-for="item in picnicB.prize" :prize="item"></picnic-b-prize>
        </div>

    </div>
</template>
<script setup>
import { usePicnicB } from '~~/store/contest/picnic-b';

const picnicB = usePicnicB()

</script>