import React from 'react'
import PropTypes from 'prop-types'

import { Table, TableRow } from './Styled'

const OtherEventsTable = ({
  events,
  currentEventId,
  setCurrentEventId,
  deleteEvent
}) => {
  const handleSetEvent = id => {
    setCurrentEventId(id)
  }

  const handleDelete = (e, id) => {
    e.stopPropagation()
    deleteEvent(id)
    if (id === currentEventId) {
      const { id } = events.find(({ id }) => id !== currentEventId) || {}
      setCurrentEventId(id || null)
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Time left</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map(({ id, name }, idx) => {
          return (
            <TableRow
              key={id}
              onClick={() => handleSetEvent(id)}
              active={id === currentEventId}
            >
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>June 27, 2020</td>
              <td>25 Days</td>
              <td>
                <button type="button" onClick={e => handleDelete(e, id)}>
                  Delete
                </button>
                <button type="button">Edit</button>
              </td>
            </TableRow>
          )
        })}
      </tbody>
    </Table>
  )
}

OtherEventsTable.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentEventId: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  currentEventId: PropTypes.string.isRequired
}

export default OtherEventsTable
