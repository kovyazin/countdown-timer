/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

/* Import components */
import TableEventsItem from './Item/Item'

/* Import others */
import {
  setActiveEvent,
  deleteEvent,
  setEditEventMode
} from '../../reducers/actions'
import { Styled } from './TableEvents.styles'

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
                key={event.id}
                event={event}
                idx={idx}
                handleDelete={handleDelete}
                handleSetEvent={handleSetEvent}
                handleEdit={handleEdit}
              />
            )
          })}
        </tbody>
      </Styled.Table>
    </>
  )
}

TableEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TableEvents
