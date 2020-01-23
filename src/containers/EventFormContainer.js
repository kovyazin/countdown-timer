/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Import components */
import EventForm from '../components/EventForm/EventForm'

/* Import others */
import { addEvent } from '../reducers/actions'

const EventFormContainer = ({ addEvent }) => {
  return <EventForm addEvent={addEvent} />
}

EventFormContainer.propTypes = {
  addEvent: PropTypes.func.isRequired
}

export default connect(null, { addEvent })(EventFormContainer)
