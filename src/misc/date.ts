/*
// Does not work on Android. You get the error "Can't find variable: Intl".
// See https://stackoverflow.com/questions/56943813/using-intl-properly-in-android-react-native-app.
export function formatDate(dateNumber: number): string {
  const dateObject = new Date(dateNumber)
  const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(
    dateObject
  )
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
    dateObject
  )
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
    dateObject
  )
  return `${day} ${month} ${year}`
}
*/

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/**
 * Formats the date like '26 Feb 2020' or '02 Mar 2020'.
 */
export function formatDate(dateNumber: number): string {
  const dateObject = new Date(dateNumber)
  const d = dateObject.getDate()
  const m = MONTHS[dateObject.getMonth()]
  const y = dateObject.getFullYear().toString().substr(-2)

  return `${d <= 9 ? '0' + d : d} ${m} ${y}`
}

export function formatDate1000(dateNumber: number): string {
  return formatDate(dateNumber * 1000)
}
