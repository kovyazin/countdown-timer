import React from 'react'
import styled from 'styled-components'

import EventForm from '../EventForm/EventForm'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  padding: 165px 53px;
`

const App = () => {
  return (
    <Wrapper>
      <EventForm />
    </Wrapper>
  )
}

export default App
