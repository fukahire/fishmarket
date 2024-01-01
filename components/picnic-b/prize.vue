<template>
    <!-- 單張卡片 -->
    <a class="w-full rounded-2xl overflow-hidden relative drop-shadow-lg bg-[#cbd5e1] group" :href="prize.url" target="_blank">
        <!-- 內文 -->
        <div class="w-full p-2.5 bg-white z-10">
            <div class="h-14 flex flex-row items-center overflow-hidden bg-[#FFCD40] p-1 rounded-full gap-3 text-white shadow-md">
                    <div class="w-[4.5rem] rounded-full p-1 ml-2 bg-[#2E4187] text-white text-center flex justify-center items-center">{{prize.unit}}</div>
                    <div class="">
                        <div class="text-sm drop-shadow font-medium">{{prize.luckysquid ? `恭喜 ${item.luckysquid} 獲獎` : ''}}</div>
                        <div class="text-md font-bold drop-shadow">「{{prize.title ? prize.title : '〇〇〇〇賞'}}」</div>
                    </div>
            </div>
        </div>
        <div class="relative">
            <!-- <img class="w-full transition ease md:group-hover:brightness-75" src='./asset/prize_placeholder.jpg' alt=""> -->
            <img class="w-full transition ease md:group-hover:brightness-75" :src="prize.image" alt="" loading="lazy" onerror="this.src='_nuxt/assets/material/placeholder.jpg'">
            <div class="bg-gradient-to-b from-white to-transparent absolute top-0 left-0 h-4 w-full"></div>
            <div class="rounded-md p-1.5 bg-transparent md:p-auto md:bg-none text-white drop-shadow-lg font-bold absolute bottom-2 left-4">{{prize.sponsor ? prize.sponsor + '熱情贊助' : ''}}
                <span class="font-bold animate-[horibounce_1s_ease-in-out_infinite] w-6 h-6 md:inline-block rounded-full bg-[#FFCD40] text-center ml-2 hidden opacity-0 group-hover:opacity-100 transition ease-in-out">→</span></div>
            <div class="absolute top-0 left-0 bg-[#94a3b8] w-full h-full p-4 md:p-6 text-white -translate-x-full transition duration-500" :class="{ '!-translate-x-0' : props.ruledata === true }">得獎條件：<br>{{prize.rule ? prize.rule : ''}}<img v-show="prize.rule == ''" class="ml-6 mt-2"></div>
        </div>
        <div class="absolute bottom-0 right-0 text-white"></div>
    </a>
</template>
<script setup>
const props = defineProps({
    prize: Object,
})

const prize = props.prize
</script>