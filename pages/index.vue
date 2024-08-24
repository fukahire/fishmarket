<template>
    <div class="mx-auto flex flex-col items-center justify-center h-screen">
        <h1 class="font-bold text-lg">斯普拉遁魚市場</h1>
        <a href="https://discord.com/invite/VTjUQkB9uv">斯普拉遁魚市場 Discord</a>
        <div class="flex flex-col md:flex-row gap-12 my-8">
            <hall v-for="e in eventName" :eventName="e"></hall>
        </div>
    </div>
</template>

<script setup lang="ts">
const eventName = ref(['ikaintrouble3','picnic','picnic2'])
</script>