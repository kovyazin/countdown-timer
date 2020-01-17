import React from 'react'
import styled from 'styled-components'

import EventForm from '../EventForm/EventForm'
import CurrentEvent from '../CurrentEvent/CurrentEvent'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  padding: 165px 53px;
`

const App = () => {
  return (
    <Wrapper>
      <EventForm />
      <CurrentEvent margin="60px 0 0 0" />
    </Wrapper>
  )
}

export default App
