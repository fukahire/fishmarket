<template>
    <div class="bg-[#d6ebff] min-h-screen h-full bg-fixed bg-[length:60%] md:bg-[length:40%] lg:bg-[length:20%]">
        <div class="fixed w-full flex justify-between items-start top-0 z-50 p-5">
            <NuxtLink to="#title">
                <img class="w-32" src="/visual/picnic-b/logo.png" alt="">
            </NuxtLink>
            <div class=" gap-5 p-4 px-7 bg-white rounded-full shadow hidden md:flex">
                <NuxtLink v-for="(item, index) in navlink" :to="item.link" :class="[ index === 4 ? 'text-[#395ee5] font-bold' : '']">{{item.title}}</NuxtLink>
            </div>
        </div>
        <div class="fixed w-full flex justify-start items-end bottom-0 z-50 p-5">
        </div>
        <NuxtPage class="pb-32"></NuxtPage>
        <picnic-b-nav-mobile></picnic-b-nav-mobile>
    </div>
</template>
<script setup>
import { usePicnicB } from '~~/store/contest/picnic-b';
const picnicB = usePicnicB()

const navlink = picnicB.navlink
useSeoMeta({
  title: '皮克尼杯2',
  twitterTitle: '皮克尼杯2',
  twitterDescription: '欸等等搶魚耶，要不要雙排？',
  twitterImage: 'https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg',
  ogTitle: '皮克尼杯2',
  description: '欸等等搶魚耶，要不要雙排？',
  ogDescription: '欸等等搶魚耶，要不要雙排？',
  ogImage: 'https://fukahire.github.io/fishmarket/visual/picnic-b/meta.jpg',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://fukahire.github.io/fishmarket/picnic2',
})

useHead({
  htmlAttrs: {
    lang: 'zh'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>