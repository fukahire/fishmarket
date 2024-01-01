import { defineStore } from 'pinia'

export const useStaffList = defineStore('stafflist', {
    state: () => ({
        staff: [
            {
                url: 'https://twitter.com/Syu_Tao',
                image: '/_nuxt/assets/material/staff/syuto.jpg',
                name: '秀托',
            },
            {
                url: 'https://www.youtube.com/@Taylor_SPL',
                image: '/_nuxt/assets/material/staff/taylor.png',
                name: '泰勒',
            },
            {
                url: 'https://lit.link/en/ChounoRin',
                image: '/_nuxt/assets/material/staff/nana.png',
                name: '那那',
            },
            {
                url: 'https://www.youtube.com/channel/UCWVqclEBrX4vnNbLmm_Gt1g',
                image: '/_nuxt/assets/material/staff/aa.jpg',
                name: 'AA',
            },
            {
                url: 'https://twitter.com/kawaiilanpa',
                image: '/_nuxt/assets/material/staff/apa.jpg',
                name: 'APA',
            },
            {
                url: 'https://github.com/fukahire',
                image: '/_nuxt/assets/material/staff/fukahire.jpg',
                name: '魚翅',
            },
            {
                url: 'https://twitter.com/icelin1717',
                image: '/_nuxt/assets/material/staff/ice.png',
                name: '冰塊',
            },
            {
                url: 'https://twitter.com/dada56746',
                image: '/_nuxt/assets/material/staff/dada.png',
                name: '達達',
            },
        ],
        youtuber: {
            roro: {
                url: 'https://www.youtube.com/@RONNKIEBrothers',
                image: '/_nuxt/assets/material/youtuber/roro.png',
                name: '肉肉',
                position: '實況主'
            },
            rita: {
                url: 'https://www.youtube.com/@rrrrrita',
                image: '/_nuxt/assets/material/youtuber/rita.png',
                name: '瑞塔',
                position: '實況主'
            },
            aa: {
                url: 'https://www.youtube.com/@AAdesu',
                image: '/_nuxt/assets/material/youtuber/aa.png',
                name: 'AA',
                position: '實況主'
            },
            taylor: {
                url: 'https://www.youtube.com/@Taylor_SPL',
                image: '/_nuxt/assets/material/youtuber/taylor.jpg',
                name: '泰勒',
                position: '實況主'
            },
            nerl: {
                url: 'https://www.youtube.com/@neildrinksmilk',
                image: '/_nuxt/assets/material/youtuber/nerl.png',
                name: '尼爾',
                position: '實況主'
            },
            soya: {
                url: 'https://www.youtube.com/@SawyerCh',
                image: '/_nuxt/assets/material/youtuber/soya.png',
                name: '索亞',
                position: '實況主'
            },
            willy: {
                url: 'https://www.youtube.com/@willy3966',
                image: '/_nuxt/assets/material/youtuber/willy.png',
                name: '尾立',
                position: '實況主'
            },
            yohan: {
                url: 'https://www.youtube.com/@Yohan_Splat/featured',
                image: '/_nuxt/assets/material/youtuber/yohan.jpg',
                name: '有酣',
                position: '實況主'
            },
            eru: {
                url: 'https://www.youtube.com/@ooluannoo',
                image: '/_nuxt/assets/material/youtuber/eru.jpg',
                name: '欸嚕',
                position: '實況主'
            }
        },
        thanks: [
            {
                image: 'ytr_eru',
                name: '欸嚕',
            },
            {
                image: 'thanks_eee',
                name: 'EEE',
            },
            {
                image: 'thanks_ban',
                name: '棒仔',
            }
        ],
    })
})