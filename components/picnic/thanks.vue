<template>
    <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8">
        <a class="flex-row flex w-full gap-8 justify-center group" target="_blank" v-for="item in thanksList" :href="item.url">
            <div class="relative">
                <div class="rounded-full overflow-hidden w-28 bg-[#FFCD40] p-2"><img :src="`_nuxt/components/picnic/asset/${item.image}.jpg`" class="rounded-full" alt=""></div>
                <p class="bg-[#2E4187] px-2.5 py-1 rounded-lg font-semibold absolute bottom-0 right-0 rotate-6 text-white">{{item.name}}</p>
            </div>
        </a>
    </div>
</template>
<script setup>
const thanksList = ref([
            {
                // url: 'https://twitter.com/Syu_Tao',
                image: 'ytr_eru',
                name: '欸嚕',
            },
            {
                // url: 'https://www.youtube.com/@Taylor_SPL',
                image: 'thanks_eee',
                name: 'EEE',
            },
            {
                // url: 'https://lit.link/en/ChounoRin',
                image: 'thanks_ban',
                name: '棒仔',
            }
        ],)
</script>