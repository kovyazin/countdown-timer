import styled from 'styled-components'
import { ReactComponent as CalendarIcon } from './CalendarIcon.svg'

export const Form = styled.form`
  display: flex;
  width: 100%;
`

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-right: 24px;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 26px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 5px;

  &::placeholder {
    color: #606060;
    font-weight: 300;
  }
`

export const Button = styled.button`
  width: 176px;
  height: 60px;
  font-family: inherit;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  background: #dc5858;
  border: none;
  border-radius: 5px;
`

export const DateButton = styled.button`
  position: absolute;
  top: 50%;
  right: 26px;
  z-index: 1;
  transform: translateY(-50%);
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

export const StyledCalendarIcon = styled(CalendarIcon)`
  path {
    fill: #313131;
  }
`

export const WarningMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
  z-index: 1;
  font-size: 14px;
  font-weight: 300;
  color: #dc5858;
`
