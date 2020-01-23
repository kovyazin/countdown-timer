/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Import components */
import TableEvents from '../components/TableEvents/TableEvents'

/* Import other */
import {
  setActiveEvent,
  setEditEventMode,
  deleteEvent,
  addMessage
} from '../reducers/actions'

const TableEventsContainer = ({
  events,
  setActiveEvent,
  deleteEvent,
  setEditEventMode,
  addMessage
}) => {
  return (
    <TableEvents
      events={events}
      setActiveEvent={setActiveEvent}
      deleteEvent={deleteEvent}
      setEditEventMode={setEditEventMode}
      addMessage={addMessage}
    />
  )
}

TableEventsContainer.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setEditEventMode: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired
}

const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps, {
  setActiveEvent,
  deleteEvent,
  setEditEventMode,
  addMessage
})(TableEventsContainer)
