import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { setActiveEvent, deleteEvent } from '../../reducers/actions'
import OtherEventsTable from './Table/Table'
import { Title } from './Styled'

const OtherEvents = ({ events }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Title>All events</Title>
      <OtherEventsTable
        events={events}
        setActiveEvent={id => dispatch(setActiveEvent(id))}
        deleteEvent={id => dispatch(deleteEvent(id))}
      />
    </>
  )
}

OtherEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default OtherEvents
