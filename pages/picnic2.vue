<template>
    <div class="bg-[#d6ebff] min-h-screen h-full bg-fixed bg-[length:60%] md:bg-[length:40%] lg:bg-[length:20%]">
        <div class="fixed w-full flex justify-between items-start top-0 z-50 p-5">
            <NuxtLink to="/picnic2">
                <img class="w-32" src="/assets/visual/picnic-b/logo.png" alt="">
            </NuxtLink>
            <div class="flex gap-5 p-4 px-7 bg-white rounded-full shadow">
                <NuxtLink v-for="item in navlink" :to="item.link">{{item.title}}</NuxtLink>
            </div>
        </div>
        <div class="fixed w-full flex justify-start items-end bottom-0 z-50 p-5">
            <!-- <NuxtLink class="text-[#395ee5] font-bold" to="https://discord.gg/VTjUQkB9uv" target="_blank">斯普拉遁魚市場</NuxtLink> -->
            <NuxtLink to="item.link" class="p-2.5 px-6 bg-[#395ee5] ring-4 text-lg ring-white rounded-full drop-shadow text-white font-bold">點我報名</NuxtLink>
        </div>
        <NuxtPage class="pb-28"></NuxtPage>
        <picnic-b-nav-mobile></picnic-b-nav-mobile>
    </div>
</template>
<script setup>
import { usePicnicB } from '~~/store/contest/picnic-b';
const picnicB = usePicnicB()

const navlink = picnicB.navlink
</script>