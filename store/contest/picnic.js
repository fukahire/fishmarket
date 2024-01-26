import { defineStore } from 'pinia'

export const usePicnic = defineStore('picnic', {
    state: () => ({
        prize: [
            {
                unit: '1組',
                title: '冠軍賞',
                image: 'prize/picnic/soar.jpg',
                sponsor: '索爾',
                rule: '皮克尼冠軍組',
                luckysquid: '阿鳥 & 拿拿',
                url: 'https://x.com/SODOSOAR/status/1670355341681491968?s=20',
            },
            {
                unit: '1組',
                title: '亞軍賞',
                image: 'prize/picnic/lu.jpg',
                sponsor: '欸嚕',
                rule: '皮克尼亞軍組',
                luckysquid: '巧克力饅頭 & 雷歐',
                url: 'https://x.com/ooluannoo/status/1675038947985215488?s=20',
            },
            {
                unit: '1組',
                title: '多才多藝獎',
                image: 'prize/picnic/polero.png',
                sponsor: 'Polero',
                rule: '比賽中使用最多武器的組合（兩人使用的不同武器數相加）',
                luckysquid: 'pinpin & 檸朦',
                url: 'https://x.com/Polero_light/status/1678064963930460160?s=20',
            },
            {
                unit: '1組',
                title: '同手同腳獎',
                image: 'prize/picnic/lalapizza.jpg',
                sponsor: '辣啦',
                rule: '勝利姿勢一樣的組合抽其1',
                luckysquid: '咩嚕 & セユ',
                url: 'https://x.com/yunxd/status/1678252710502739968?s=20',
            },
            {
                unit: '1人',
                title: '魚躍龍門獎',
                image: 'prize/picnic/pie.PNG',
                sponsor: 'π',
                rule: '取得「刷新最佳計數」者抽其1',
                luckysquid: 'APA',
                url: 'https://twitter.com/Shiopie314',
            },
            {
                unit: '1組',
                title: '同舟共濟獎',
                image: 'prize/picnic/fukahire.jpg',
                sponsor: '魚翅',
                rule: '裝備主技能跟副技能重複越多者獲獎（大顆相同+3分小顆相同+1分）',
                luckysquid: '巧克力饅頭 & 雷歐',
                url: 'https://x.com/ChounoRin/status/1680751173685637120?s=20',
            },
            {
                unit: '1組',
                title: '比翼雙飛獎',
                image: 'prize/picnic/meow.jpg',
                sponsor: '笑笑OUO',
                rule: '與雙排隊友擊殺、助攻、死亡、SP 相同數字越多者獲獎（斷線場及不戰而勝(敗)場不計）',
                luckysquid: 'MeteorV 及 テイ',
                url: 'https://x.com/lingmeowdas030/status/1717803362627072279?s=20',
            },
        ],
        thanks: ['eee','eru','ban'],
        youtuber: [
            'aa','taylor',
           'yohan', 'eru',
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