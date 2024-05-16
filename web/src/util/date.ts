import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

export function formatDate(date: Date) {
  return dayjs(date).format('M/D(dd) a h:mm')
}

export function formatMDdd(date: Date) {
  return dayjs(date).format('M/D(dd)')
}

export function formatHMM(date: Date) {
  return dayjs(date).format('H:mm')
}

export function formatDateYMD(date: Date) {
  return dayjs(date).format('YY.MM.DD')
}

export function formatYMDHM(date: Date) {
  return dayjs(date).format('YY.MM.DD HH:mm')
}
