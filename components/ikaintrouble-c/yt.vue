<template>
    <a :href="staff.url" target="_blank"
        class="ytr-card flex flex-col items-cneter group bg-[#262626] rounded-xl p-4">
        <div class="rounded-full overflow-hidden w-28 bg-[url('/visual/ikaintrouble-c/bg.jpg')] p-2 md:group-hover:rotate-45 ease-in duration-150">
            <NuxtImg class="rounded-full" :src="staff.image" alt=""></NuxtImg>
        </div>
        <span class="text-center text-lg font-bold text-[#F8b1ff] md:group-hover:text-[#9be2ff]">{{ staff?.position?.ikaintroubleC}}<br>{{staff?.name}}</span>
    </a>
</template>

<script setup>
const props = defineProps({
    staff: Object,
})

const staff = props.staff
</script>