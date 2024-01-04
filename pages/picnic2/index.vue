<template>
    <div>
        <!-- 主視覺 -->
        <div class="flex items-center relative">
            <img class="max-w-3xl w-full mx-auto" src="/assets/visual/picnic-b/people.png" alt="">
            <img class="absolute bottom-24 w-[50%] max-w-sm left-1/2 -translate-x-1/2" src="/assets/visual/picnic-b/logo.png" alt="">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto px-4">
            <div>
                <a class="twitter-timeline" data-height="500"  data-width="100%" href="https://twitter.com/fishmarket_tw?ref_src=twsrc%5Etfw">Tweets by 斯普拉遁魚市場</a><component :is="'script'" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></component>
            </div>
            <div class="md:col-span-2">
                <p class="text-[#395EE5] font-bold text-2xl mb-4">活動時程</p>
                <picnic-b-timeevent v-for="item in date" :event="item" class="mb-3"></picnic-b-timeevent></div>
        </div>
        <!-- 參賽大合照 -->
        <div></div>
        <!-- twitter -->
        
        <!-- 時間軸 -->
        
    </div>
    
</template>
<script setup>
import { useDate } from '~~/store/date';

const date = useDate().date

</script>