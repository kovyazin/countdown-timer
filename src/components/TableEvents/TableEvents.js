/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import components */
import TableEventsItem from './Item/Item'

/* Import others */
import { Styled } from './TableEvents.styles'

const TableEvents = ({
  events,
  setActiveEvent,
  deleteEvent,
  setEditEventMode,
  addMessage
}) => (
  <>
    <Styled.Title>All events</Styled.Title>
    <Styled.Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, idx) => {
          return (
            <TableEventsItem
              events={events}
              event={event}
              idx={idx}
              setActiveEvent={setActiveEvent}
              deleteEvent={deleteEvent}
              setEditEventMode={setEditEventMode}
              addMessage={addMessage}
              key={event.id}
            />
          )
        })}
      </tbody>
    </Styled.Table>
  </>
)

TableEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setEditEventMode: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default TableEvents
