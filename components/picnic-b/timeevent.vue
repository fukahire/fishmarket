<template>
    <NuxtLink class="block rounded-2xl overflow-hidden items-end gap-4 justify-between  ring-white ring-4 p-3 px-6"
        :class="[ eventcheck ? 'text-white bg-[#395EE5]' : 'text-slate-700 bg-[#FFCD40]' ]"
        :to="event.url" target="_blank">
        <div class="text-sm font-bold">{{ event.txt.date }}</div>
        <div class="text-lg font-semibold">{{ check }}</div>
        
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    event: Object,
})

const event = props.event
const today = Date.now()
const eventcheck = computed(() => today >= event.start && today <= event.end)
const check = computed(() => {
    if(today < event.start ){ return event.txt.start}
    else if(today > event.end ){ return event.txt.end}
    else{ return event.txt.goon }
})
</script>