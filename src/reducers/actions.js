import {
  ADD_EVENT,
  CHANGE_EVENT,
  DELETE_EVENT,
  SET_ACTIVE_EVENT,
  SET_EDIT_EVENT_MODE
} from './types'

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

export const setEditEventMode = payload => ({
  type: SET_EDIT_EVENT_MODE,
  payload
})

export const changeEvent = payload => ({
  type: CHANGE_EVENT,
  payload
})
