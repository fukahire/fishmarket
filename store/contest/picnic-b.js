import { defineStore } from 'pinia'

export const usePicnicB = defineStore('picnicb', {
    state: () => ({
        prize: [
            {
                unit: '1組',
                title: '冠軍賞',
                image: 'prize/picnic-b/fenguo.jpg',
                sponsor: '粉粿',
                rule: '皮克尼2冠軍組',
                luckysquid: '',
                url: 'https://twitter.com/fenguooooo',
            },
            {
                unit: '1組',
                title: '活動賞',
                image: 'prize/picnic-b/fefe.jpg',
                sponsor: '緋緋',
                rule: '',
                luckysquid: '',
                url: 'https://twitter.com/fifi0225',
            },
            {
                unit: '1組',
                title: '活動賞',
                image: 'prize/picnic-b/turtle.jpg',
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
        ],
        navlink: [
            {
                title: '比賽章程',
                link:'#theme'
            },
            {
                title: '對戰規則',
                link:'#tip'
            },
            {
                title: '大會獎品',
                link:'#award'
            },
            {
                title: '工作人員',
                link:'#staff'
            },
            {
                title: '我要報名',
                link:'https://forms.gle/hwsKafDRvcxuZNa2A'
            },
        ] 
    })
})