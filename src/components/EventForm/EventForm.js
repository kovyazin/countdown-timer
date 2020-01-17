import React, { useState } from 'react'

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
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputValue) {
      setError('Event name must not be empty')
    } else {
      setError(null)
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <DateButton type="button">
          <StyledCalendarIcon />
        </DateButton>
        <Input
          placeholder="Write event name that you wait"
          value={inputValue}
          onChange={handleChange}
        />
        {error && <WarningMessage>{error}</WarningMessage>}
      </InputWrapper>
      <Button type="submit">start</Button>
    </Form>
  )
}

export default EventForm
