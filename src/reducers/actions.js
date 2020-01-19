import { ADD_EVENT, DELETE_EVENT, SET_CURRENT_EVENT_ID } from './types'

export const addEvent = ({ id, name, date }) => ({
  type: ADD_EVENT,
  payload: { id, name, date }
})

export const setCurrentEventId = id => ({
  type: SET_CURRENT_EVENT_ID,
  payload: id
})

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id
})
