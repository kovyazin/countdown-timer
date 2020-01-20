import { ADD_EVENT, DELETE_EVENT, SET_ACTIVE_EVENT } from './types'

export const addEvent = payload => ({
  type: ADD_EVENT,
  payload
})

export const setActiveEvent = payload => ({
  type: SET_ACTIVE_EVENT,
  payload
})

export const deleteEvent = payload => ({
  type: DELETE_EVENT,
  payload
})
