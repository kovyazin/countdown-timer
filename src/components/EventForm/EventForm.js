import React from 'react'

import {
  Form,
  Input,
  Button,
  DateButton,
  InputWrapper,
  StyledCalendarIcon,
  WarningMessage
} from './Styled'

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
