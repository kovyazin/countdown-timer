import React from 'react'
import styled from 'styled-components'

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  text-align: center;
  color: #313131;
  border: 10px solid #dc5858;
  border-radius: 50%;
`

const Number = styled.span`
  font-size: 72px;
  font-weight: 400;
`

const Text = styled.span`
  margin-top: -10px;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`

const CurrentEventTimerItem = () => {
  return (
    <Counter>
      <Number>25</Number>
      <Text>days</Text>
    </Counter>
  )
}

export default CurrentEventTimerItem
