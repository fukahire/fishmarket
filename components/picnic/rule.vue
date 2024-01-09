<template>
    <div>
        <!-- 標題 -->
        <div class="flex items-center font-semibold text-2xl text-[#2E4187] border-[#2E4187] border-b-2 p-2 mb-4" @click="show = !show">
            <img class="w-6 h-6 mr-2 ease-in duration-300" src="/visual/picnic/picnic_icon.png" alt="">
            <slot name = "title">沒填標題歐</slot>
        </div>
        <div class="text-[#475569] mb-4 pl-8
                    transition-all ease-in-out duration-500 max-h-fit">
                <slot name = "content">還沒填歐</slot>
        </div>
    </div>
</template>

<script setup>
    const show = ref([false])
</script>