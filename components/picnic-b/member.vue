<template>
    <!-- 單張卡片 -->
    <div class="w-full relative overflow-hidden rounded-2xl border-8"
    :class="number === 1 ? 'border-[#395EE5] bg-[#395EE5]' : 'border-[#FFCD40] bg-[#FFCD40]'">
        <nuxtImg class="block" :src="`${member.image}`" alt=""></nuxtImg>
        <div class="md:absolute bottom-0 right-0 py-1 md:py-2 px-1 md:px-4 md:rounded-tl" :class="number === 1 ? 'bg-[#395EE5] text-white' : 'bg-[#FFCD40] text-black'">
            <p class="text-xl font-bold">{{ member.title }}</p>
            <p>{{ member.luckysquid }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    member: Object,
    number: Number,
})

const member = props.member
// console.log(member)

</script>