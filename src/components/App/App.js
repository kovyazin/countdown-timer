import React from 'react'

import { useSelector } from 'react-redux'
import EventForm from '../EventForm/EventForm'
import CurrentEvent from '../CurrentEvent/CurrentEvent'
import OtherEvents from '../OtherEvents/OtherEvents'
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
          <CurrentEvent currentEvent={currentEvent} />
        </Section>
      )}
      {!!events.length && (
        <Section>
          <OtherEvents events={events} />
        </Section>
      )}
    </Wrapper>
  )
}

export default App
