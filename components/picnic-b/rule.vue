<template>
    <div class="py-4">
        <!-- 標題 -->
        <div class="flex items-center font-semibold text-lg text-[#2E4187] p-2">
            <!-- <img class="w-6 h-6 mr-2 ease-in duration-300" src="/assets/picnic/visual/picnic_icon.png" alt=""> -->
            <slot name = "title">沒填標題歐</slot>
        </div>
        <div class="text-[#475569] mb-4 pl-8 text-base font-normal
                    transition-all ease-in-out duration-500 max-h-fit leading-7">
                <slot name = "content">還沒填歐</slot>
        </div>
    </div>
</template>

<script setup>
</script>