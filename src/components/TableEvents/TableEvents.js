import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  setActiveEvent,
  deleteEvent,
  setEditEventMode
} from '../../reducers/actions'
import { Title, Table, TableRow, Button } from './Styled'

const TableEvents = ({ events }) => {
  const dispatch = useDispatch()

  const handleSetEvent = id => {
    dispatch(setActiveEvent(id))
  }

  const handleDelete = (e, id, isActive) => {
    e.stopPropagation()
    dispatch(deleteEvent(id))
    if (isActive && events.length - 1) {
      dispatch(setActiveEvent(events.find(event => event.id !== id).id))
    }
  }

  const handleEdit = (e, id) => {
    e.stopPropagation()
    dispatch(setEditEventMode({ isEdit: true, id }))
  }

  return (
    <>
      <Title>All events</Title>
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
                  <Button
                    type="button"
                    onClick={e => handleEdit(e, id)}
                    active={isActive}
                  >
                    <i className="fas fa-pen" />
                  </Button>
                  <Button
                    type="button"
                    onClick={e => handleDelete(e, id, isActive)}
                    active={isActive}
                  >
                    <i className="fas fa-times" />
                  </Button>
                </td>
              </TableRow>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

TableEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TableEvents
