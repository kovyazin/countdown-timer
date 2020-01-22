/* Import libraries */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Import components */
import EventForm from '../EventForm/EventForm'
import Countdown from '../Countdown/Countdown'
import TableEvents from '../TableEvents/TableEvents'
import ModalEdit from '../ModalEdit/ModalEdit'
import Section from '../UI/Section'

/* Import others */
import { setEvents } from '../../reducers/actions'
import { Styled } from './App.styles'

const App = () => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events)
  const currentEvent = events.find(({ isActive }) => isActive)
  const editableEvent = events.find(({ isEdit }) => isEdit)

  useEffect(() => {
    const eventsStorage = localStorage.getItem('events')
    if (eventsStorage) {
      dispatch(setEvents(JSON.parse(eventsStorage)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  return (
    <Styled.Wrapper>
      <EventForm />
      {!events.length && (
        <Styled.Message>You are not waiting for a single event</Styled.Message>
      )}
      {currentEvent && (
        <Section>
          <Countdown currentEvent={currentEvent} />
        </Section>
      )}
      {!!events.length && (
        <Section>
          <TableEvents events={events} />
        </Section>
      )}
      {editableEvent && <ModalEdit editableEvent={editableEvent} />}
    </Styled.Wrapper>
  )
}

export default App
