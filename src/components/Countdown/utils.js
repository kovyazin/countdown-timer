import moment from 'moment'

export const calcDuration = (dateStart, dateEnd) => {
  const diff = dateEnd - dateStart
  return moment.duration(diff, 'milliseconds')
}
