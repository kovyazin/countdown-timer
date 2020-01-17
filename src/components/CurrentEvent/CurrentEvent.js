import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CurrentEventTimer from './Timer/Timer'

const Wrapper = styled.div`
  margin: ${props => props.margin};
`

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

const CurrentEvent = ({ margin }) => {
  return (
    <Wrapper margin={margin}>
      <Title>
        Before the event <strong>&quot;New Year&quot;</strong> left
      </Title>
      <CurrentEventTimer />
    </Wrapper>
  )
}

CurrentEvent.defaultProps = {
  margin: 0
}

CurrentEvent.propTypes = {
  margin: PropTypes.string
}

export default CurrentEvent
