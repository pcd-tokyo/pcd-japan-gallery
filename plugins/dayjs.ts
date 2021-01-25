import 'dayjs/locale/ja'
import dayjs from 'dayjs'

export default function ({ _ }, inject) {
  dayjs.locale('ja')
  inject('dayjs', dayjs)
}
