import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentEventId, deleteEvent } from '../../reducers/actions'
import OtherEventsTable from './Table/Table'
import { Title } from './Styled'

const OtherEvents = () => {
  const { events, currentEventId } = useSelector(state => ({
    events: state.events,
    currentEventId: state.currentEventId
  }))
  const dispatch = useDispatch()

  if (!events.length) return null
  return (
    <>
      <Title>All events</Title>
      <OtherEventsTable
        events={events}
        currentEventId={currentEventId}
        setCurrentEventId={id => dispatch(setCurrentEventId(id))}
        deleteEvent={id => dispatch(deleteEvent(id))}
      />
    </>
  )
}

export default OtherEvents
