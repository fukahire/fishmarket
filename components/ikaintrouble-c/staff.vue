<template>
    <a class="lg:w-[48%] flex flex-row w-full gap-8 group" :href="staff.url" target="_blank">
        <div class="flex flex-col justify-center items-center relative">
            <div class="rounded-full overflow-hidden w-28 bg-[url('../asset/ytr_bg.jpg')] p-2 md:group-hover:rotate-45 ease-in duration-150">
                <img :src="staff.image" class="rounded-full" alt="">
            </div>
            <p
                class="bg-[#F8b1ff] px-2 py-0.5 rounded-lg font-extrabold absolute bottom-0 right-0 rotate-6 ring-4 ring-[#4520ea] text-[#4520ea]">
                {{ staff.name }}</p>
        </div>
        <div class="flex items-center justify-center gap-4 relative drop-shadow-md">
            <div class=" w-3 overflow-hidden inline-block absolute left-0 -translate-x-5 top-1/2 -translate-y-1/2">
                <div class=" h-4 bg-[#9be2ff] rotate-45 transform origin-bottom-right md:group-hover:bg-[#fefab7]">
                </div>
            </div>
            <div class="md:group-hover:bg-[#fefab7] bg-[#9be2ff] p-4 w-full rounded-xl">
                <p>{{ staff.quote }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    staff: Object,
})

const staff = props.staff
</script>