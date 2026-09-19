<template>
<div class="">
    <NuxtLink class="group block w-20 md:w-24 relative" :to="`/${event}`" target="_blank">
        <div class="absolute w-full h-full opacity-50 bg-slate-400 rotate-0 sm:group-hover:rotate-12 -z-10 ease-in-out transition"></div>
        <nuxtImg :src="`/event_logo/${event}.jpg`" class=" rounded-xl overflow-hidden ring-4 ring-[#4F2FF6]/0 md:hover:ring-[#E8F646]" alt=""></nuxtImg>
        <p class="text-center text-white absolute bottom-0 translate-y-full pt-1 sm:pt-3 left-1/2 -translate-x-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition sm:group-hover:pt-2">{{ event }}</p>
    </NuxtLink>
</div>
</template>

<script setup>
const props = defineProps({
    eventName: String,
})

const event = props.eventName
</script>

<style scoped>
</style>
