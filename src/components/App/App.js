import React from 'react'

import { useSelector } from 'react-redux'
import EventForm from '../EventForm/EventForm'
import CurrentEvent from '../CurrentEvent/CurrentEvent'
import OtherEvents from '../OtherEvents/OtherEvents'
import Section from '../UI/Section'
import { Wrapper } from './Styled'

const App = () => {
  const { currentEventId } = useSelector(state => ({
    currentEventId: state.currentEventId
  }))
  return (
    <Wrapper>
      <EventForm />
      {currentEventId && (
        <Section>
          <CurrentEvent />
        </Section>
      )}
      <Section>
        <OtherEvents />
      </Section>
    </Wrapper>
  )
}

export default App
