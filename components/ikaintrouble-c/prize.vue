<template>
    <!-- 單張卡片 -->
    <a :href="prize.url" class=" flex flex-col w-full relative group" target="_blank"
        @click="newurl(prize.url)">
        <!-- title -->
        <div class="w-full h-16
                    flex flex-row justify-between items-center overflow-hidden
                    bg-gradient-to-r from-[#f7b5d1] via-[#ae7eec] to-[#7dc0eb]
                    bg-cover px-2
                    ">
            <div class="flex flex-row h-full items-center gap-3">
                <div class="w-[4.5rem] h-[70%] rounded-full p-4 ml-2
                                bg-[#1d1d1d]
                                text-white text-center flex justify-center items-center">{{ prize.unit }}</div>
                <div class="flex flex-col">
                    <div class="text-sm">恭喜 {{ prize.luckysquid }}</div>
                    <div class="text-md font-bold">「{{ prize.title }}」</div>
                </div>
            </div>
            <!-- <div class="px-6 bg-black h-full flex justify-center items-center">
                            <div class="w-8 h-8">
                                這裡放icon
                                <img class="w-full h-full" 
                                src="./asset/ika.png" alt="">
                            </div>
                        </div> -->
        </div>
        <!-- 獎品內容 -->
        <div class="flex flex-col items-center bg-[#1D1D1D] px-6 py-2 shadow-2xl">
            <!-- 贊助商 -->
            <div class="text-center px-4 py-1 mt-2 text-[#f9b0ff] border-[#f9b0ff]">{{ prize.sponsor }}
            </div>
            <div
                class="flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 py-4 border-t-[0.5px] border-[#FD85FF] px-8">
                <!-- 圖片 -->
                <div class="md:w-full lg:w-[40%] overflow-hidden">
                    <NuxtImg class=" rounded-2xl" :src='prize.image' alt=""></NuxtImg>
                </div>
                <!-- 內容 -->
                <div class="w-full md:w-[60%] flex flex-col px-2 text-white relative h-auto md:h-auto">
                    <div class="">
                        得獎條件：<br><span class=""></span>
                        {{ prize.rule }}
                    </div>
                    <!-- <div class=" md:absolute bottom-0 lg:right-[10%] ml-4 w-full  md:w-[50%] lg:w-[40%]">
                                    <img class="" src="./asset/dntno_syuto.png" alt="">
                                </div> -->
                </div>
            </div>
        </div>
        <div class="absolute right-2 top-2 hidden " :class="{ open: prize.url }">
            <span class="material-symbols-outlined font-bold">
                arrow_right_alt
            </span>
        </div>
    </a>
</template>
<script setup>
const props = defineProps({
    prize: Object,
})

const prize = props.prize

</script>