import nanoid from 'nanoid'
import { ADD_EVENT, DELETE_EVENT, SET_ACTIVE_EVENT } from './types'

const initialState = {
  events: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events.map(event => ({ ...event, isActive: false })),
          {
            id: nanoid(),
            name: payload.name,
            date: payload.date,
            isActive: payload.isActive
          }
        ]
      }
    case SET_ACTIVE_EVENT:
      return {
        ...state,
        events: state.events.map(event => {
          if (event.id === payload) {
            return { ...event, isActive: true }
          }
          return { ...event, isActive: false }
        })
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
