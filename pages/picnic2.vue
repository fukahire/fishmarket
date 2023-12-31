<template>
    <div class="bg-[url('/assets/visual/picnic-b/bg.jpg')] min-h-screen h-full bg-fixed bg-[length:60%] md:bg-[length:40%] lg:bg-[length:20%]">
        <div class="fixed w-full flex justify-between items-start top-0 z-50 p-5">
            <NuxtLink to="/picnic2">
                <img class="w-32" src="/assets/visual/picnic-b/logo.png" alt="">
            </NuxtLink>
            <div class="flex gap-5 p-4 px-7 bg-white rounded-full">
                <NuxtLink v-for="item in navlink" :to="item.link">{{item.title}}</NuxtLink>
            </div>
        </div>
        <div class="fixed w-full flex justify-between items-end bottom-0 z-50 p-5">
            <NuxtLink to="/picnic2">斯普拉遁魚市場</NuxtLink>
            <NuxtLink to="item.link" class="p-4 px-7 bg-white rounded-full">點我報名</NuxtLink>
        </div>
        <NuxtPage class="py-12"></NuxtPage>
    </div>
</template>
<script setup>
import { usePicnicB } from '~~/store/contest/picnic-b';
const picnicB = usePicnicB()

const navlink = picnicB.navlink
</script>