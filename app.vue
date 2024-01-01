<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>
<script setup>

// import App from '@/app.vue'
// import { createApp } from 'vue'
// const app = createApp(App)
// app.use(pinia)

useHead({
  title: '皮克尼杯2',
  meta: [
    { name: '斯普拉遁魚市場', content: 'picnic2' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>