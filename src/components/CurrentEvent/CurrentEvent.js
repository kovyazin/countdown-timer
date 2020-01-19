import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Title, WrapperTimer, Counter, Number, Text } from './Styled'

const CurrentEvent = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const { events, currentEventId } = useSelector(state => {
    return {
      currentEventId: state.currentEventId,
      events: state.events
    }
  })

  const currentEvent = events.find(({ id }) => id === currentEventId) || {}

  const updateTimer = () => {
    const diff = currentEvent.date - Date.now()
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((diff / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((diff / 1000 / 60) % 60))
    setSeconds(Math.floor((diff / 1000) % 60))
  }

  useEffect(() => {
    console.log('Use effect!')
    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [currentEventId, updateTimer])

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
          <Number>{days}</Number>
          <Text>Days</Text>
        </Counter>
        <Counter>
          <Number>{hours}</Number>
          <Text>Hours</Text>
        </Counter>
        <Counter>
          <Number>{minutes}</Number>
          <Text>Minutes</Text>
        </Counter>
        <Counter>
          <Number>{seconds}</Number>
          <Text>Seconds</Text>
        </Counter>
      </WrapperTimer>
    </>
  )
}

export default CurrentEvent
