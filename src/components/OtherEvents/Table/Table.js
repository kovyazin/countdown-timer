import React from 'react'
import PropTypes from 'prop-types'

import { Table, TableRow } from './Styled'

const OtherEventsTable = ({ events, setActiveEvent, deleteEvent }) => {
  const handleSetEvent = id => {
    setActiveEvent(id)
  }

  const handleDelete = (e, id, isActive) => {
    e.stopPropagation()
    deleteEvent(id)
    if (isActive && events.length - 1) {
      setActiveEvent(events.find(event => event.id !== id).id)
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
        {events.map(({ id, name, isActive }, idx) => {
          return (
            <TableRow
              key={id}
              onClick={() => handleSetEvent(id)}
              active={isActive}
            >
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>June 27, 2020</td>
              <td>25 Days</td>
              <td>
                <button
                  type="button"
                  onClick={e => handleDelete(e, id, isActive)}
                >
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
  setActiveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default OtherEventsTable
