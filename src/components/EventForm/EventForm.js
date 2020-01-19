import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import nanoid from 'nanoid'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Form, Input, Button, WarningMessage } from './Styled'
import './EventForm.scss'
import { addEvent, setCurrentEventId } from '../../reducers/actions'

const EventForm = () => {
  const dispatch = useDispatch()
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
      const id = nanoid()
      dispatch(addEvent({ id, name: inputValue, date }))
      dispatch(setCurrentEventId(id))
      setError(null)
      setInputValue('')
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <Form onSubmit={handleAdd}>
      <Input
        placeholder="Write event name that you wait"
        value={inputValue}
        onChange={handleChange}
      />
      {error && <WarningMessage>{error}</WarningMessage>}
      <DatePicker
        selected={date}
        onChange={date => setDate(date)}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
      <Button type="submit">start</Button>
    </Form>
  )
}

export default EventForm
