<template>
    <div class="md:hidden">
            <div class="flex flex-col gap-2.5 fixed top-0 left-0 overflow-hidden
            cursor-pointer w-full h-full items-center justify-center bg-[#2E4187] -translate-x-full transition ease-in-out duration-500
            " :class="{ '!-translate-x-0' : openmenu == true }">
                <a href="#theme" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">比賽章程</a>
                <a href="#award" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">大會獎品</a>
                <a href="#staff" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">工作人員</a>
                <a href="#thanks" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">特別感謝</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnkVOhevhP2dzfokrPnUVS2Afn-CYf-ratk0kUG156Y04Y6A/viewform"
                    target="_blank" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">我要報名</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7wMXLgdEN7l2GhFolD9KZ_ytqf_9S-aw9OHDhL8R6WE7_nw/viewform"
                    target="_blank" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">我想贊助</a>
            </div>
            <div :class="{ '!-rotate-90' : openmenu == true }" class="text text-2xl font-bold text-white drop-shadow-lg transition ease-in-out duration-500 fixed h-12 w-12 bg-[#FFCD40] bottom-6 right-6 rounded-full cursor-pointer flex justify-center items-center rotate-45 origin-center" @click="openmenu = !openmenu">×</div>
        </div>
</template>
<script setup>
    const openmenu = ref(false)
</script>