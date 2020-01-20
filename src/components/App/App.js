import React from 'react'

import { useSelector } from 'react-redux'
import EventForm from '../EventForm/EventForm'
import Countdown from '../Countdown/Countdown'
import TableEvents from '../TableEvents/TableEvents'
import Section from '../UI/Section'
import { Wrapper } from './Styled'

const App = () => {
  const events = useSelector(state => state.events)
  const currentEvent = events.find(({ isActive }) => isActive)

  return (
    <Wrapper>
      <EventForm />
      {currentEvent && (
        <Section>
          <Countdown currentEvent={currentEvent} />
        </Section>
      )}
      {!!events.length && (
        <Section>
          <TableEvents events={events} />
        </Section>
      )}
    </Wrapper>
  )
}

export default App
