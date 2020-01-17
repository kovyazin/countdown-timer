import React from 'react'
import styled from 'styled-components'

import CurrentEventTimer from './Timer/Timer'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  color: #313131;

  strong {
    font-weight: 400;
  }
`

const CurrentEvent = () => {
  return (
    <>
      <Title>
        Before the event <strong>&quot;New Year&quot;</strong> left
      </Title>
      <CurrentEventTimer />
    </>
  )
}

export default CurrentEvent
