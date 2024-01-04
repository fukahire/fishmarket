<template>
    <div class="md:hidden">
            <div class="flex flex-col gap-2.5 fixed top-0 left-0 overflow-hidden
            cursor-pointer w-full h-full items-center justify-center bg-[#395ee5] -translate-x-full transition ease-in-out duration-500
            " :class="{ '!-translate-x-0' : openmenu == true }">
                <a v-for="item in navlink" :href="item.link" class="px-8 py-3 text-white font-medium md:hover:bg-[#FFCD40] md:active:grayscale cursor-pointer" @click="openmenu = !openmenu">{{item.title}}</a>
            </div>
            <div :class="{ '!-rotate-90' : openmenu == true }" class="text text-2xl font-bold text-white drop-shadow-lg transition ease-in-out duration-500 fixed h-12 w-12 bg-[#FFCD40] bottom-6 right-6 rounded-full cursor-pointer flex justify-center items-center rotate-45 origin-center" @click="openmenu = !openmenu">×</div>
        </div>
</template>
<script setup>
    const openmenu = ref(false)

    import { usePicnicB } from '~~/store/contest/picnic-b';
    const picnicB = usePicnicB()

    const navlink = picnicB.navlink
</script>