/* Import libraries */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

/* Import others */
import { Styled } from './Item.styles'

const TableEventsItem = ({
  events,
  event: { id, name, isActive, date },
  idx,
  setActiveEvent,
  deleteEvent,
  setEditEventMode,
  addMessage
}) => {
  const deleteAndSetActiveFirstEvent = () => {
    deleteEvent(id)
    if (isActive && events.length - 1) {
      setActiveEvent(events.find(event => event.id !== id).id)
    }
  }

  const handleSetActive = () => setActiveEvent(id)

  const handleDelete = e => {
    e.stopPropagation()
    deleteAndSetActiveFirstEvent()
  }

  const handleEdit = e => {
    e.stopPropagation()
    setEditEventMode({ isEdit: true, id })
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      const duration = date - Date.now()
      if (duration <= 0) {
        deleteAndSetActiveFirstEvent()
        addMessage({ id, name, date })
      }
    }, 1000)

    return () => clearInterval(timerId)
  }, [date])

  return (
    <Styled.TableRow key={id} onClick={handleSetActive} active={isActive}>
      <td>{idx + 1}</td>
      <td>{name}</td>
      <td>{moment(date).format('MMMM DD, 2020')}</td>
      <td>
        <Styled.Button type="button" onClick={handleEdit} active={isActive}>
          <i className="fas fa-pen" />
        </Styled.Button>
        <Styled.Button type="button" onClick={handleDelete} active={isActive}>
          <i className="fas fa-times" />
        </Styled.Button>
      </td>
    </Styled.TableRow>
  )
}

TableEventsItem.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  event: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    date: PropTypes.number
  }).isRequired,
  idx: PropTypes.number.isRequired,
  setActiveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setEditEventMode: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default TableEventsItem
