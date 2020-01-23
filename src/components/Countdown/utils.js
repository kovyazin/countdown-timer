import moment from 'moment'

export const calcDuration = (dateStart, dateEnd) => {
  const diff = dateEnd - dateStart
  return moment.duration(diff, 'milliseconds')
}

export const mapNumber = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
