import { defineStore } from 'pinia'

export const useDate = defineStore("datecounter", {
    //定義有哪些資料
    //可以當成 vue2 的 data 去記
    state: () => ({
      today: Date.now(),
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
      

    }),
  });