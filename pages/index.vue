<template>
    <div class="mx-auto flex flex-col items-center justify-center h-screen">
        <h1 class="font-bold text-2xl">斯普拉遁魚市場</h1>
        <a class="mt-4 text-white bg-[#717277] hover:bg-indigo-700 py-1 px-3 text-center rounded-lg inline-block" href="https://discord.com/invite/VTjUQkB9uv">Discord</a>
        <div class="flex flex-col md:flex-row gap-12 my-12">
            <hall v-for="e in eventName" :eventName="e"></hall>
        </div>
    </div>
</template>

<script setup lang="ts">
const eventName = ref(['ikaintrouble3','picnic','picnic2'])
</script>