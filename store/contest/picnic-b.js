import { defineStore } from 'pinia'

export const usePicnicB = defineStore('picnicb', {
    state: () => ({
        prize: [
            {
                unit: '1組',
                title: '冠軍賞',
                image: '/_nuxt/assets/prize/picnic-b/fenguo.png',
                sponsor: '粉粿',
                rule: '皮克尼2冠軍組',
                luckysquid: '',
                url: 'https://twitter.com/fenguooooo',
            },
            {
                unit: '1組',
                title: '活動賞',
                image: '/_nuxt/assets/prize/picnic-b/fefe.webp',
                sponsor: '緋緋',
                rule: '',
                luckysquid: '',
                url: 'https://twitter.com/fifi0225',
            },
            {
                unit: '1組',
                title: '活動賞',
                image: '/_nuxt/assets/prize/picnic-b/turtle.webp',
                sponsor: '烏龜',
                rule: '',
                luckysquid: '',
                url: 'https://twitter.com/turtle8338',
            }
        ],
        youtuber: [
            'rita','roro',
           'aa', 'nerl',
           'soya', 'willy'
        ] 
    })
})