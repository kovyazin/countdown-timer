/* Import libraries */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Import components */
import Countdown from '../Countdown/Countdown'
import TableEventsContainer from '../../containers/TableEventsContainer'
import ModalEditContainer from '../../containers/ModalEditContainer'
import EventFormContainer from '../../containers/EventFormContainer'
import MessageContainer from '../../containers/MessageContainer'
import Section from '../UI/Section'

/* Import others */
import { setEvents, setMessages } from '../../reducers/actions'
import { Styled } from './App.styles'

const App = ({ events, messages, setEvents, setMessages }) => {
  const currentEvent = events.find(({ isActive }) => isActive)
  const editableEvent = events.find(({ isEdit }) => isEdit)

  useEffect(() => {
    const eventsStorage = localStorage.getItem('events')
    const messagesStorage = localStorage.getItem('messages')
    if (eventsStorage) setEvents(JSON.parse(eventsStorage))
    if (messagesStorage) setMessages(JSON.parse(messagesStorage))
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])

  return (
    <Styled.Wrapper>
      {!!messages.length && <MessageContainer messages={messages} />}
      <EventFormContainer />
      {!events.length && (
        <Styled.Message>You are not waiting for a single event</Styled.Message>
      )}
      {!!events.length && (
        <>
          <Section>
            <Countdown currentEvent={currentEvent} />
          </Section>
          <Section>
            <TableEventsContainer />
          </Section>
        </>
      )}
      {editableEvent && <ModalEditContainer editableEvent={editableEvent} />}
    </Styled.Wrapper>
  )
}

App.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEvents: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired
}

const mapStateToProps = ({ events, messages }) => ({ events, messages })

export default connect(mapStateToProps, { setEvents, setMessages })(App)
