/* Import libraries */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* Import others */
import { Styled } from './ModalEdit.styles'

const ModalEdit = ({
  setEditEventMode,
  changeEvent,
  editableEvent: { id, name, date }
}) => {
  const [nameInputValue, setNameInputValue] = useState(name)
  const [dateInputValue, setDateInputValue] = useState(new Date(date))

  const handleChangeName = e => {
    setNameInputValue(e.target.value)
  }

  const handleClose = () => {
    setEditEventMode({ isEdit: false, id })
  }

  const handleSave = e => {
    e.preventDefault()
    changeEvent({
      id,
      name: nameInputValue,
      date: dateInputValue,
      dateStart: new Date()
    })
    setEditEventMode({ isEdit: false, id })
  }

  return (
    <Styled.Overlay>
      <Styled.Modal>
        <Styled.Title>Edit mode</Styled.Title>
        <form onSubmit={handleSave}>
          <Styled.FormGroup>
            <Styled.Label>Name event:</Styled.Label>
            <Styled.Input
              type="text"
              value={nameInputValue}
              onChange={handleChangeName}
            />
          </Styled.FormGroup>
          <Styled.FormGroup>
            <Styled.Label>Date event:</Styled.Label>
            <Styled.DatePickerWrapper>
              <DatePicker
                selected={dateInputValue}
                onChange={date => setDateInputValue(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
              />
            </Styled.DatePickerWrapper>
          </Styled.FormGroup>
          <Styled.ButtonsGroup>
            <Styled.ButtonSave type="submit">Save</Styled.ButtonSave>
            <Styled.ButtonClose type="button" onClick={handleClose}>
              Cancel
            </Styled.ButtonClose>
          </Styled.ButtonsGroup>
        </form>
      </Styled.Modal>
    </Styled.Overlay>
  )
}

ModalEdit.propTypes = {
  editableEvent: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
    isActive: PropTypes.bool,
    isEdit: PropTypes.bool
  }).isRequired,
  changeEvent: PropTypes.func.isRequired,
  setEditEventMode: PropTypes.func.isRequired
}

export default ModalEdit
