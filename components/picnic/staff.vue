<template>
    <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8">
            <a class="flex-row flex w-full gap-8 justify-center group" target="_blank" v-for="item in staff" :href="item.url">
                <div class="relative">
                    <div class="rounded-full overflow-hidden w-28 bg-[#FFcd40] p-2 md:group-hover:rotate-45 ease-in duration-150"><img :src="`_nuxt/assets/picnic/${item.image}`" class="rounded-full" alt=""></div>
                    <p class="bg-[#2E4187] px-2.5 py-1 rounded-lg font-semibold absolute bottom-0 right-0 rotate-6 text-white">{{item.name}}</p>
                </div>
            </a>
        </div>
</template>

<script setup>
const staff = ref([
            {
                url: 'https://twitter.com/Syu_Tao',
                image: 'staff/syuto.jpg',
                name: '秀托',
            },
            {
                url: 'https://www.youtube.com/@Taylor_SPL',
                image: 'ytr/taylor.png',
                name: '泰勒',
            },
            {
                url: 'https://lit.link/en/ChounoRin',
                image: 'staff/sana.jpg',
                name: '那那',
            },
            {
                url: 'https://www.youtube.com/channel/UCWVqclEBrX4vnNbLmm_Gt1g',
                image: 'ytr/aa.jpg',
                name: 'AA',
            },
            {
                url: 'https://twitter.com/kawaiilanpa',
                image: 'staff/apa.jpg',
                name: 'APA',
            },
            {
                url: 'https://github.com/fukahire',
                image: 'staff/fukahire.jpg',
                name: '魚翅',
            },
            {
                url: 'https://twitter.com/icelin1717',
                image: 'staff/ice.png',
                name: '冰塊',
            },
            {
                url: 'https://twitter.com/dada56746',
                image: 'staff/dada.png',
                name: '達達',
            },
        ],)
</script>