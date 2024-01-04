<template>
    <div class="w-full px-4 max-w-[1000px] mx-auto pt-12">
        <!-- 比賽章程 -->
        <picnic-b-title id="theme">對戰規則</picnic-b-title>
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
                            <li>進入私房前請將依照以下方式改名：隊伍序號_ID (EX. C_AA)</li>
                            <li>關閉遊戲重啟後必須重新輸入別稱，敬請注意。</li>
                        </ul>
                        <img src="@/assets/material/rule/id.jpg" alt="">
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
                        <img src="@/assets/material/rule/buildroom.png" alt="">
                        <img src="@/assets/material/rule/joinroom.png" alt="">
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
                            <li>若有選擇錯誤情形，請該對戰中的任意玩家長按<picnic-b-mark>左類比+右類比+L+R+ZL+ZR</picnic-b-mark>六鍵，直接切斷對戰。 雙方以同樣地圖規則、同樣武器組成進行對戰。</li>
                        </ul>
                        <p class="text-md font-semibold -ml-2 md:-ml-6">武器重複</p>
                        <ul class="list-disc mb-4">
                            <li>請該對戰中的任意玩家長按<picnic-b-mark>左類比+右類比+L+R+ZL+ZR</picnic-b-mark>六鍵，直接切斷對戰。雙方以同樣地圖規則、更改武器組合後進行對戰。</li>
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
                            <li>賽前請務必事先確認個人網路狀況，如開房後有衝線情形，請立即於 Discord 內之<picnic-b-mark>聯繫主辦／問答諮詢</picnic-b-mark>頻道提出。</li>
                            <li>由於地區及遊戲本身連線問題，主辦方不接受延遲相關的投訴，請享受斯普拉遁的醍醐味。</li>
                        </ul>
                        <p class="text-md font-semibold -ml-2 md:-ml-6">初賽過程中有組別消失、棄賽</p>
                        <ul class="list-disc mb-4">
                            <li>將安排遞補讓比賽順利進行，但遞補組別的分數為從 0 分開始累計，不會繼承任何組別的分數。</li>
                        </ul>
                        <p class="text-md font-semibold -ml-2 md:-ml-6">玩家利用遊戲 bug 或惡意擺爛</p>
                        <ul class="list-disc mb-4">
                            <li>由於賽制特殊，主辦方希望參賽玩家秉持運動精神，於正當操作下全力以赴贏得勝利，切勿利用遊戲 bug 或做出惡意影響勝負的行為 （如在時間充裕的情況將魚虎運回家影響推進分數、惡意死亡造成己方劣勢等）。針對惡意行為，將直接取消該組比賽資格；若有模糊地帶，主辦擁有最終解釋權。</li>
                        </ul>
                    </div>
                </template>
            </picnic-b-rule>
        </div>
    </div>
</template>
<script>
</script>