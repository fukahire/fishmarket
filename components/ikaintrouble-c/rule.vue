<template>
    <div class="py-4">
        <!-- 標題 -->
        <div class="font-medium text-xl text-[#e4e4e4] border-b-2 p-2 mb-4">
            <slot name = "title"></slot>
        </div>
        <div class="text-[#e4e4e4] ml-8 mb-4">
                <slot name = "content">還沒填歐</slot>
        </div>
    </div>
</template>

<script setup>
</script>