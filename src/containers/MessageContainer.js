/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Import components */
import Message from '../components/Message/Message'

/* Import others */
import { deleteMessage } from '../reducers/actions'

const MessageContainer = ({ deleteMessage, ...props }) => {
  return <Message deleteMessage={deleteMessage} {...props} />
}

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default connect(null, { deleteMessage })(MessageContainer)
