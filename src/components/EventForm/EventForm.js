/* Import libraries */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* Import others */
import { Styled } from './EventForm.styles'

const EventForm = ({ addEvent }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)
  const [date, setDate] = useState(new Date())

  const handleAdd = e => {
    e.preventDefault()
    if (!inputValue) {
      setError('Event name must not be empty')
    } else if (date.getTime() <= Date.now()) {
      setError('You cannot select a date less than the current')
    } else {
      addEvent({
        name: inputValue,
        date,
        isActive: true,
        dateStart: new Date()
      })
      setError(null)
      setInputValue('')
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <Styled.Form onSubmit={handleAdd}>
      <Styled.Input
        placeholder="Write event name that you wait"
        value={inputValue}
        onChange={handleChange}
      />
      {error && <Styled.WarningMessage>{error}</Styled.WarningMessage>}
      <Styled.DatePicker>
        <DatePicker
          selected={date}
          onChange={date => setDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
        />
      </Styled.DatePicker>
      <Styled.Button type="submit">start</Styled.Button>
    </Styled.Form>
  )
}

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired
}

export default EventForm
