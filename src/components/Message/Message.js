/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

/* Import others */
import { Styled } from './Message.styles'

const Message = ({ messages, deleteMessage }) => {
  const { name, id, date } = messages[messages.length - 1]

  const handleDelete = () => {
    deleteMessage(id)
  }

  return (
    <Styled.Wrapper>
      <Styled.Text>
        {name} event has happened on{' '}
        {moment(date).format('MMMM Do YYYY, h:mm a')}.
      </Styled.Text>
      <Styled.ButtonClose type="button" onClick={handleDelete}>
        <i className="fas fa-times" />
      </Styled.ButtonClose>
    </Styled.Wrapper>
  )
}

Message.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default Message
