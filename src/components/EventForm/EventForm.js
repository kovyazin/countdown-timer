import React from 'react'
import styled from 'styled-components'

import { ReactComponent as CalendarIcon } from './CalendarIcon.svg'

const Form = styled.form`
  display: flex;
  width: 100%;
`

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-right: 24px;
`

const Input = styled.input`
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

const Button = styled.button`
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

const DateButton = styled.button`
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

const StyledCalendarIcon = styled(CalendarIcon)`
  path {
    fill: #313131;
  }
`

const WarningMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
  z-index: 1;
  font-size: 14px;
  font-weight: 300;
  color: #dc5858;
`

const EventForm = () => {
  return (
    <Form>
      <InputWrapper>
        <DateButton type="button">
          <StyledCalendarIcon />
        </DateButton>
        <Input placeholder="Write event name that you wait" />
        <WarningMessage>Event name must not be empty</WarningMessage>
      </InputWrapper>
      <Button type="submit">start</Button>
    </Form>
  )
}

export default EventForm
