<template>
    <div class="mx-auto flex flex-col items-center justify-center h-screen bg-[#302f33] p-4">
        <div class="grid grid-cols-5 w-full max-w-[40rem] gap-0 md:gap-4">
            <div class="col-span-5 flex justify-center items-center md:col-span-2 mb-2 ring-white">
                <div class="max-w-40 max-h-40 md:max-w-none md:max-h-none w-full h-full overflow-hidden rounded-full bg-[#1f2124]">
                    <img src="/public/event_logo/fishmarket.png" alt="logo" class="w-full h-full max-w-40 md:max-w-none block" />
                </div>
            </div>
            <!-- <h1 class="font-bold text-2xl">斯普拉遁魚市場</h1> -->
            <div class="col-span-5 md:col-span-3 flex flex-col justify-between bg-[#1b1a21] rounded-3xl text-left p-4">
                <div class="text-left p-2 text-[#e7e7e7]">
                    <p>斯普拉遁(Splatoon)非官方交流群，提供玩家交流及揪團的平台。</p>
                    <p>An unofficial Chinese group of Splatoon, providing a place for players to communicate.</p>
                </div>

                <div class="pl-2 flex gap-4">
                    <a class="text-white bg-[#4F2FF6] ring-4 ring-[#4F2FF6]/0 hover:ring-[#E8F646] py-2 px-6 text-center rounded-lg inline-block" href="https://discord.com/invite/VTjUQkB9uv"><svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                        </svg>
                    </a>
                    <a class=" text-white bg-[#4F2FF6] ring-4 ring-[#4F2FF6]/0 hover:ring-[#E8F646] py-2 px-6 text-center rounded-lg inline-block" href="https://x.com/fishmarket_tw"><svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-[#1b1a21] rounded-3xl w-full md:max-w-[40rem] flex justify-between flex-col md:flex-row items-center mt-4 pt-4 px-8 pb-8">
            <div class="text-white text-2xl font-bold">過往比賽</div>
            <div class="flex flex-row gap-4 md:gap-12 my-8 justify-between">
                <hall v-for="e in eventName" :eventName="e"></hall>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const eventName = ref(['ikaintrouble3','picnic','picnic2'])
</script>