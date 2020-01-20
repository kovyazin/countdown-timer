import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { mapNumber } from '../../utils'
import { Title, WrapperTimer, Counter, Number, Text } from './Styled'
import SVGCircle from './SVGCircle'

const Countdown = ({ currentEvent }) => {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  const updateCountdown = () => {
    const eventTime = currentEvent.date
    const currentTime = Date.now()
    const diff = eventTime - currentTime
    const duration = moment.duration(diff, 'milliseconds')

    setDays(duration.days())
    setHours(duration.hours())
    setMinutes(duration.minutes())
    setSeconds(duration.seconds())
  }

  useEffect(() => {
    updateCountdown()
    const timerId = setInterval(updateCountdown, 1000)
    return () => clearInterval(timerId)
  }, [currentEvent])

  const daysRadius = mapNumber(days, 30, 0, 0, 360)
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

  return (
    <>
      <Title>
        Before the event
        <strong>
          &nbsp;&quot;
          {currentEvent.name}
          &quot;&nbsp;
        </strong>
        left
      </Title>
      <WrapperTimer>
        <Counter>
          <SVGCircle radius={daysRadius} />
          <Number>{days}</Number>
          <Text>Days</Text>
        </Counter>
        <Counter>
          <SVGCircle radius={hoursRadius} />
          <Number>{hours}</Number>
          <Text>Hours</Text>
        </Counter>
        <Counter>
          <SVGCircle radius={minutesRadius} />
          <Number>{minutes}</Number>
          <Text>Minutes</Text>
        </Counter>
        <Counter>
          <SVGCircle radius={secondsRadius} />
          <Number>{seconds}</Number>
          <Text>Seconds</Text>
        </Counter>
      </WrapperTimer>
    </>
  )
}

Countdown.propTypes = {
  currentEvent: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.number,
    isActive: PropTypes.bool
  }).isRequired
}

export default Countdown
