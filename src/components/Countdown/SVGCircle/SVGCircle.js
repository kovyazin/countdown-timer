/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import others */
import { describeArc } from './utils'
import { Styled } from './SVGCircle.styles'

const CountdownSVGCircle = ({ radius }) => (
  <Styled.CountdownSVG>
    <path
      fill="none"
      stroke="#dc5858"
      strokeWidth="10"
      d={describeArc(100, 100, 95, 0, radius)}
    />
  </Styled.CountdownSVG>
)

CountdownSVGCircle.propTypes = {
  radius: PropTypes.number.isRequired
}

export default CountdownSVGCircle
