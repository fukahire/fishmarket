<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4 md:flex-row flex-wrap items-stretch md:px-0">
        <!-- 單張卡片 -->
        <a class="w-full rounded-2xl overflow-hidden relative drop-shadow-lg bg-[#cbd5e1] group" v-for="item in prizeList" :href="item.url" target="_blank">
            <!-- 內文 -->
            <div class="w-full p-2.5 bg-white z-10">
                <div class="h-14 flex flex-row items-center overflow-hidden bg-[#FFCD40] p-1 rounded-full gap-3 text-white shadow-md">
                        <div class="w-[4.5rem] rounded-full p-1 ml-2 bg-[#2E4187] text-white text-center flex justify-center items-center">{{item.unit}}</div>
                        <div class="">
                            <div class="text-sm drop-shadow font-medium">{{item.luckysquid ? `恭喜 ${item.luckysquid} 獲獎` : ''}}</div>
                            <div class="text-md font-bold drop-shadow">「{{item.title ? item.title : '〇〇〇〇賞'}}」</div>
                        </div>
                </div>
            </div>
            <!-- <div class="relative">
                <img class="w-full transition ease md:group-hover:brightness-75" src='./asset/prize_placeholder.jpg' alt="">
                <img class="w-full transition ease md:group-hover:brightness-75" :src="`_nuxt/assets/picnic/prize/${item.image}.jpg`" alt="" loading="lazy" onerror="this.src='_nuxt/assets/picnic/prize/placeholder.jpg';">
                <div class="bg-gradient-to-b from-white to-transparent absolute top-0 left-0 h-4 w-full"></div>
                <div class="rounded-md p-1.5 bg-transparent md:p-auto md:bg-none text-white drop-shadow-lg font-bold absolute bottom-2 left-4">{{item.sponsor ? item.sponsor + '熱情贊助' : ''}}
                    <span class="font-bold animate-[horibounce_1s_ease-in-out_infinite] w-6 h-6 md:inline-block rounded-full bg-[#FFCD40] text-center ml-2 hidden opacity-0 group-hover:opacity-100 transition ease-in-out">→</span></div>
                <div class="absolute top-0 left-0 bg-[#94a3b8] w-full h-full p-4 md:p-6 text-white -translate-x-full transition duration-500" :class="{ '!-translate-x-0' : props.ruledata === true }">得獎條件：<br>{{item.rule ? item.rule : ''}}<img v-show="item.rule == ''" src="./asset/dntno_syuto.png" class="ml-6 mt-2"></div>
            </div> -->
            <div class="absolute bottom-0 right-0 text-white"></div>
        </a>
    </div>
</template>
<script setup>
const props = defineProps({
    ruledata: Boolean
})
const prizeList = ref([
            {
                unit: '1組',
                title: '冠軍賞',
                image: 'soar',
                sponsor: '索爾',
                rule: '皮克尼冠軍組',
                luckysquid: '阿鳥 & 拿拿',
                url: 'https://twitter.com/SODOSOAR',
            },
            {
                unit: '1組',
                title: '亞軍賞',
                image: 'lu',
                sponsor: '欸嚕',
                rule: '皮克尼亞軍組',
                luckysquid: '巧克力饅頭 & 雷歐',
                url: 'https://twitter.com/ooluannoo',
            },
            {
                unit: '1組',
                title: '多才多藝獎',
                image: 'polero',
                sponsor: 'Polero',
                rule: '比賽中使用最多武器的組合（兩人使用的不同武器數相加）',
                luckysquid: 'pinpin & 檸朦',
                url: 'https://twitter.com/Polero_light',
            },
            {
                unit: '1組',
                title: '同手同腳獎',
                image: 'lalapizza',
                sponsor: '辣啦',
                rule: '勝利姿勢一樣的組合抽其1',
                luckysquid: '咩嚕 & セユ',
                url: 'https://twitter.com/yunxd',
            },
            {
                unit: '1人',
                title: '魚躍龍門獎',
                image: 'pie',
                sponsor: 'π',
                rule: '取得「刷新最佳計數」者抽其1',
                luckysquid: 'APA',
                url: 'https://twitter.com/Shiopie314',
            },
            {
                unit: '1組',
                title: '同舟共濟獎',
                image: 'fukahire',
                sponsor: '魚翅',
                rule: '裝備主技能跟副技能重複越多者獲獎（大顆相同+3分小顆相同+1分）',
                luckysquid: '巧克力饅頭 & 雷歐',
                url: 'https://github.com/fukahire',
            },
            {
                unit: '1組',
                title: '比翼雙飛獎',
                image: 'meow',
                sponsor: '笑笑OUO',
                rule: '與雙排隊友擊殺、助攻、死亡、SP 相同數字越多者獲獎（斷線場及不戰而勝(敗)場不計）',
                luckysquid: 'MeteorV 及 テイ',
                url: 'https://twitter.com/lingmeowdas030',
            },
        ],)
</script>