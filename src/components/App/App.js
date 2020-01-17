import React from 'react'
import styled from 'styled-components'

import EventForm from '../EventForm/EventForm'
import CurrentEvent from '../CurrentEvent/CurrentEvent'
import OtherEvents from '../OtherEvents/OtherEvents'
import Section from '../UI/Section'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  padding: 165px 53px;
`

const App = () => {
  return (
    <Wrapper>
      <EventForm />
      <Section>
        <CurrentEvent />
      </Section>
      <Section>
        <OtherEvents />
      </Section>
    </Wrapper>
  )
}

export default App
