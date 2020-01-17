import React from 'react'

import CurrentEventTimer from './Timer/Timer'
import { Title } from './Styled'

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
