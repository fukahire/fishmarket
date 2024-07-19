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
                luckysquid: 'Vito、Ryan',
                url: 'https://twitter.com/fenguooooo/status/1771559120581058729?s=20',
            },
            {
                unit: '1組',
                title: '金魚獎',
                image: 'prize/picnic-b/fefe.jpg',
                sponsor: '緋緋',
                rule: '任一場對戰擁有「計數推進NO.1」表揚，即可和同組夥伴一起參加抽獎',
                luckysquid: '87、Soda',
                url: 'https://twitter.com/fifi0225/status/1754117784844583190?s=20',
            },
            {
                unit: '1組',
                title: '拍立得獎',
                image: 'prize/picnic-b/turtle.jpg',
                sponsor: '烏龜',
                rule: '繳交一組直式雙人合照即可參加抽獎',
                luckysquid: '檸朦、帽子',
                url: 'https://twitter.com/turtle3883/status/1758548286414447077?s=20',
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
        ],
        member: [
          {
            title:'拍立得獎',
            luckysquid: '檸朦、帽子',
            image: 'prize/picnic-b/2A.jpg',
          },
          {
            title:'冠軍賞',
            luckysquid: 'Vito、Ryan',
            image: 'prize/picnic-b/victory.jpg',
          },
          {
            title:'金魚獎',
            luckysquid: '87、Soda',
            image: 'prize/picnic-b/2N.jpg',
          }
        ]
    })
})