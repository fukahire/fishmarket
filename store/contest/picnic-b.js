import { defineStore } from 'pinia'

export const usePicnicB = defineStore('picnicb', {
    state: () => ({
        prize: [
            {
                unit: '1組',
                title: '冠軍賞',
                image: 'prize/picnic-b/fenguo.png',
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
           'aa', 'taylor',
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
        ],
        date: [
          {
            txt:{
                date: '1/08 - ',
                start: '敬請期待',
                goon: '比賽公布',
                end: '比賽資訊公布',
            },
            start: Date.parse('08 Jan 2024 00:00:00'),
            end: Date.parse('09 Jan 2024 12:30:00'),
            url: '/picnic2',
          },
          {
            txt:{
                date: '1/09 12:30 - 1/11 20:00',
                start: '開始報名',
                goon: '點我報名',
                end: '報名截止',
            },
            start: Date.parse('09 Jan 2024 12:30:00'),
            end: Date.parse('11 Jan 2024 20:00:00'),
            url: 'https://forms.gle/hwsKafDRvcxuZNa2A',
          },
          {
            txt:{
                date: '1/12 00:00 - 1/12 24:00',
                start: '選手抽選',
                goon: '今日抽選',
                end: '分組資訊將於比賽當日公布',
            },
            start: Date.parse('12 Jan 2024 00:00:00'),
            end: Date.parse('12 Jan 2024 24:00:00'),
            url: 'https://docs.google.com/spreadsheets/d/1QyXWQq2flAGS_z_vgNUWl2lRfj1LgIY8PbR2HEqKlNc/edit#gid=952962651',
          },
          {
            txt:{
                date: '1/27 19:00(GMT+8)',
                start: '正式比賽開始',
                goon: '比賽進行中',
                end: '比賽結束',
            },
            start: Date.parse('27 Jan 2024 00:00:00'),
            end: Date.parse('27 Jan 2024 24:00:00'),
            url: 'https://docs.google.com/spreadsheets/d/1QyXWQq2flAGS_z_vgNUWl2lRfj1LgIY8PbR2HEqKlNc/edit#gid=304776388%EF%BC%89',
          },
        ]
    })
})