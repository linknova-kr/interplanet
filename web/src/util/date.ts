import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

export function formatDate(date: Date) {
  return dayjs(date).format('M/D(dd) a h:mm')
}

export function formatHMM(date: Date) {
  return dayjs(date).format('H:mm')
}
