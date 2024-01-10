<template>
    <div class="flex flex-col items-center">
        <a class="flex-row inline-block gap-8 justify-center group" target="_blank" :href="staff?.url ? staff?.url : ''">
            <div class="relative">
                <div class="rounded-full overflow-hidden w-28 bg-[#FFcd40] p-2 md:group-hover:rotate-45 ease-in duration-150"><NuxtImg  :src="`${staff.image}`" class="rounded-full" alt=""></NuxtImg></div>
                <p class="bg-[#2E4187] px-2.5 py-1 rounded-lg font-semibold absolute bottom-0 right-0 rotate-6 text-white">{{staff.name}}</p>
            </div>
            
        </a>
        <p v-if="staff?.position?.picnic" class="text-[#6b21a8] font-semibold text-md text-center">{{ staff?.position?.picnic }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    staff: Object,
})

const staff = props.staff
</script>