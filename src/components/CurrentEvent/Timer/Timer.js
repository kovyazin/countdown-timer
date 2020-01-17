import React from 'react'
import styled from 'styled-components'

import CurrentEventTimerItem from './Item/Item'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

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
