<template>
    <div class="w-full px-4 max-w-[1200px] mx-auto">
        <picnic-b-title>實況轉播</picnic-b-title>
            <div class="mx-auto flex flex-col items-center px-8">
                <ol class="list-disc mb-4 text-txtc ml-6">
                    <li>主辦方有可能會安插工作人員進入私房轉播，轉播場次將與對戰流程表一同公布，請知悉。</li>
                    <li>官方轉播：(點擊頭像前往主播個人頻道)</li>
                </ol>
                <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row grid gap-8 w-full">
                    <div class="rounded-lg overflow-hidden">
                        <div class="gap-2 flex p-4">
                            <picnic-b-staff v-for="item in ytOne" :staff="item"></picnic-b-staff>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden">
                        <div class="gap-2 flex p-4">
                            <picnic-b-staff v-for="item in ytTwo" :staff="item"></picnic-b-staff>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden">
                        <div class="gap-2 flex p-4">
                            <picnic-b-staff v-for="item in ytThree" :staff="item"></picnic-b-staff>
                        </div>
                    </div>
                </div>
            </div>
        <picnic-b-title>工作人員</picnic-b-title>
        <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6 px-8">
            <picnic-b-staff v-for="item in staffList.staff" :staff="item"></picnic-b-staff>
        </div>
    </div>
</template>
<script setup>
import { useStaffList } from '~~/store/staff';
import { usePicnicB } from '~~/store/contest/picnic-b';

const picnicB = usePicnicB()
const staffList = useStaffList()

const picnicBYT = picnicB.youtuber
const youtuberList = staffList.youtuber

const ytData = picnicBYT.map(item => youtuberList[item])
let ytOne = [ytData[0], ytData[1]]
let ytTwo = [ytData[2], ytData[3]]
let ytThree = [ytData[4], ytData[5]]

</script>