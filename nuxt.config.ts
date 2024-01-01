// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/fishmarket/' : '/',
    buildAssetsDir: '/static/'
  },
  css: [
    '@/assets/css/main.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@hypernym/nuxt-gsap',
    "@nuxt/image"
  ],
})