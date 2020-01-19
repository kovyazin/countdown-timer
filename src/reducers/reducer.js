import { ADD_EVENT, DELETE_EVENT, SET_CURRENT_EVENT_ID } from './types'

const initialState = {
  events: [],
  currentEventId: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          { id: payload.id, name: payload.name, date: payload.date }
        ]
      }
    case SET_CURRENT_EVENT_ID:
      return {
        ...state,
        currentEventId: payload
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(({ id }) => id !== payload)
      }
    default:
      return state
  }
}

export default reducer
