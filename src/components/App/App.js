import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EventForm from '../EventForm/EventForm'
import CurrentEvent from '../CurrentEvent/CurrentEvent'
import OtherEvents from '../OtherEvents/OtherEvents'
import Section from '../UI/Section'
import { Wrapper, Message } from './Styled'

const App = ({ eventsList }) => {
  return (
    <Wrapper>
      <EventForm />
      {!!eventsList.length && <Body eventsList={eventsList} />}
      {!eventsList.length && (
        <Message>You are not waiting for any event yet</Message>
      )}
    </Wrapper>
  )
}

const Body = ({ eventsList }) => (
  <>
    <Section>
      <CurrentEvent />
    </Section>
    {eventsList.length > 1 && (
      <Section>
        <OtherEvents />
      </Section>
    )}
  </>
)

App.propTypes = {
  eventsList: PropTypes.arrayOf(PropTypes.object).isRequired
}

Body.propTypes = {
  eventsList: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ events: { eventsList } }) => ({
  eventsList
})

export default connect(mapStateToProps)(App)
