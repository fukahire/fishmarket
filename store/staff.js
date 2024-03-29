import { defineStore } from 'pinia'

export const useStaffList = defineStore('stafflist', {
    state: () => ({
        staff: [
            {
                url: 'https://twitter.com/Syu_Tao',
                image: 'material/staff/syuto.jpg',
                name: '秀托',
                quote: '芋報從速'
            },
            {
                url: 'https://www.youtube.com/@Taylor_SPL',
                image: 'material/staff/taylor.png',
                name: '泰勒',
                quote: '慢了'
            },
            {
                url: 'https://lit.link/en/ChounoRin',
                image: 'material/staff/nana.png',
                name: '那那',
                quote: '有事請聯絡主辦'
            },
            {
                url: 'https://www.youtube.com/channel/UCWVqclEBrX4vnNbLmm_Gt1g',
                image: 'material/staff/aa.jpg',
                name: 'AA',
                quote: '我不是在委託，就是在前往委託的路上'
            },
            {
                url: 'https://twitter.com/kawaiilanpa',
                image: 'material/staff/apa.jpg',
                name: 'APA',
                quote: '魚翅超會寫網頁，謝謝你，魚翅超人'
            },
            {
                url: 'https://github.com/fukahire',
                image: 'material/staff/fukahire.jpg',
                name: '魚翅',
                quote: '偷懶打真格都沒在寫網頁'
            },
            {
                url: 'https://twitter.com/icelin1717',
                image: 'material/staff/ice.png',
                name: '冰塊',
                quote: '獸人'
            },
            {
                url: 'https://twitter.com/dada56746',
                image: 'material/staff/dada.png',
                name: '達達',
                quote: '占地杯籌畫中 (X)'
            },
        ],
        youtuber: {
            roro: {
                url: 'https://www.youtube.com/@RONNKIEBrothers',
                image: 'material/youtuber/roro.png',
                name: '肉肉',
                position: {
                    default: '實況主',
                    ikaintroubleC: '主播',
                }
            },
            rita: {
                url: 'https://www.youtube.com/@rrrrrita',
                image: 'material/youtuber/rita.png',
                name: '瑞塔',
                position: {
                    default: '實況主',
                    ikaintroubleC: '賽評',
                }
            },
            aa: {
                url: 'https://www.youtube.com/@AAdesu',
                image: 'material/youtuber/aa.png',
                name: 'AA',
                position: {
                    default: '實況主',
                    ikaintroubleC: '主播',
                    picnic: '實況',
                }
            },
            taylor: {
                url: 'https://www.youtube.com/@Taylor_SPL',
                image: 'material/youtuber/taylor.png',
                name: '泰勒',
                position: {
                    default: '實況主',
                    ikaintroubleC: '賽評',
                    picnic: '賽評',
                }
            },
            nerl: {
                url: 'https://www.youtube.com/@neildrinksmilk',
                image: 'material/youtuber/nerl.png',
                name: '尼爾',
                position: '實況主'
            },
            soya: {
                url: 'https://www.youtube.com/@SawyerCh',
                image: 'material/youtuber/soya.png',
                name: '索亞',
                position: {
                    default: '實況主',
                    ikaintroubleC: '主播',
                }
            },
            willy: {
                url: 'https://www.youtube.com/@willy3966',
                image: 'material/youtuber/willy.png',
                name: '尾立',
                position: '實況主'
            },
            yohan: {
                url: 'https://www.youtube.com/@Yohan_Splat/featured',
                image: 'material/youtuber/yohan.jpg',
                name: '有酣',
                position: {
                    default: '實況主',
                    picnic: '主播',
                }
            },
            eru: {
                url: 'https://www.youtube.com/@ooluannoo',
                image: 'material/youtuber/eru.jpg',
                name: '欸嚕',
                position: {
                    default: '實況主',
                    picnic: '賽評',
                }
            },
            dejavu: {
                url: 'https://www.youtube.com/channel/UCD_Q__JVHofsidnNRmGmR-Q',
                image: 'material/youtuber/deja.jpg',
                name: 'Deja Vu',
                position: {
                    default: '實況主',
                    ikaintroubleC: '賽評',
                }
            }
        },
        thanks: {
            eru: {
                url: 'https://www.youtube.com/@ooluannoo',
                image: 'material/youtuber/eru.jpg',
                name: '欸嚕',
            },
            eee: {
                url: 'https://twitter.com/yoshi_EEE',
                image: 'material/thanks/eee.jpg',
                name: 'EEE',
            },
            ban: {
                url: 'https://twitter.com/ckug8520',
                image: 'material/thanks/ban.jpg',
                name: '棒仔',
            }
        }
    })
})