import { defineStore } from 'pinia'

export const useDate = defineStore("datecounter", {
    //定義有哪些資料
    //可以當成 vue2 的 data 去記
    state: () => ({
      today: Date.now(),
      date: [
        {
          txt:{
              date: '1/09 - ',
              start: '敬請期待',
              goon: '比賽公布',
              end: '比賽公布',
          },
          start: Date.parse('08 Jan 2024 00:00:00'),
          end: Date.parse('09 Jan 2024 12:30:00'),
          url: '/picnic2/event',
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
          url: '#',
        },
        {
          txt:{
              date: '1/12 00:00 - 1/12 24:00',
              start: '抽籤分組',
              goon: '今日抽籤',
              end: '分組完畢',
          },
          start: Date.parse('12 Jan 2024 00:00:00'),
          end: Date.parse('12 Jan 2024 24:00:00'),
          url: '#',
        },
        {
          txt:{
              date: '1/27 00:00 - 1/27 24:00',
              start: '等待比賽開始',
              goon: '比賽進行中',
              end: '比賽結束',
          },
          start: Date.parse('27 Jan 2024 00:00:00'),
          end: Date.parse('27 Jan 2024 24:00:00'),
          url: '#',
        },
      ]
      

    }),
  
    //很單純就是操作資料的邏輯
    //可以當成 vue2 的 computed 去記
    // getters: {
    //   doubleCount: (state) => state.count * 2,
  
      // 若不使用箭頭函數要加 this
      // doubleCount() {
      //   return this.count * 2
      // }
    // },
  
//     //方法
//     //可以當成 vue2 的 methods 去記
//     actions: {
//       increment() {
//         this.count++;
//       },
  
//       decrement() {
//         this.count--;
//       },
//     },
  });