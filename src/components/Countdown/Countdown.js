/* Import libraries */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/* Import components */
import CountdownSVGCircle from './SVGCircle/SVGCircle'

/* Import other */
import { Styled } from './Countdown.styles'
import { calcDuration, mapNumber } from './utils'

const Countdown = ({ currentEvent }) => {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const diffDays = Math.floor(
    calcDuration(currentEvent.dateStart, currentEvent.date).asDays()
  )

  const updateCountdown = () => {
    const duration = calcDuration(Date.now(), currentEvent.date)

    setDays(Math.floor(duration.asDays()))
    setHours(duration.hours())
    setMinutes(duration.minutes())
    setSeconds(duration.seconds())
  }

  useEffect(() => {
    updateCountdown()
    const timerId = setInterval(updateCountdown, 1000)
    return () => clearInterval(timerId)
  }, [currentEvent])

  const daysRadius = mapNumber(days, diffDays + 1, 0, 0, 360)
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

  return (
    <>
      <Styled.Title>
        Before the event
        <strong>
          &nbsp;&quot;
          {currentEvent.name}
          &quot;&nbsp;
        </strong>
        left
      </Styled.Title>
      <Styled.WrapperTimer>
        <Styled.Counter>
          <CountdownSVGCircle radius={daysRadius} />
          <Styled.Number>{days}</Styled.Number>
          <Styled.Text>Days</Styled.Text>
        </Styled.Counter>
        <Styled.Counter>
          <CountdownSVGCircle radius={hoursRadius} />
          <Styled.Number>{hours}</Styled.Number>
          <Styled.Text>Hours</Styled.Text>
        </Styled.Counter>
        <Styled.Counter>
          <CountdownSVGCircle radius={minutesRadius} />
          <Styled.Number>{minutes}</Styled.Number>
          <Styled.Text>Minutes</Styled.Text>
        </Styled.Counter>
        <Styled.Counter>
          <CountdownSVGCircle radius={secondsRadius} />
          <Styled.Number>{seconds}</Styled.Number>
          <Styled.Text>Seconds</Styled.Text>
        </Styled.Counter>
      </Styled.WrapperTimer>
    </>
  )
}

Countdown.propTypes = {
  currentEvent: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.number,
    isActive: PropTypes.bool,
    dateStart: PropTypes.number
  }).isRequired
}

export default Countdown
