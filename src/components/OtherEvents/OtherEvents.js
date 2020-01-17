import React from 'react'
import styled from 'styled-components'
import OtherEventTable from './Table/Table'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  color: #313131;
`

const OtherEvents = () => {
  return (
    <>
      <Title>Other events</Title>
      <OtherEventTable />
    </>
  )
}

export default OtherEvents
