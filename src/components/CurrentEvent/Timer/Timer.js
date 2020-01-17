import React from 'react'

import CurrentEventTimerItem from './Item/Item'
import { Wrapper } from './Styled'

const CurrentEventTimer = () => {
  return (
    <Wrapper>
      <CurrentEventTimerItem />
      <CurrentEventTimerItem />
      <CurrentEventTimerItem />
      <CurrentEventTimerItem />
    </Wrapper>
  )
}

export default CurrentEventTimer
