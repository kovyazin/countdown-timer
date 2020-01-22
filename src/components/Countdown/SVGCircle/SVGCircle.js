import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { describeArc } from '../../../utils'

export const CountdownSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
`

const CountdownSVGCircle = ({ radius }) => (
  <CountdownSVG>
    <path
      fill="none"
      stroke="#dc5858"
      strokeWidth="10"
      d={describeArc(100, 100, 95, 0, radius)}
    />
  </CountdownSVG>
)

CountdownSVGCircle.propTypes = {
  radius: PropTypes.number.isRequired
}

export default CountdownSVGCircle
