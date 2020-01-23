import {
  ADD_EVENT,
  ADD_MESSAGE,
  CHANGE_EVENT,
  DELETE_EVENT,
  DELETE_MESSAGE,
  SET_ACTIVE_EVENT,
  SET_EDIT_EVENT_MODE,
  SET_EVENTS,
  SET_MESSAGES
} from './types'

export const setEvents = payload => ({
  type: SET_EVENTS,
  payload
})

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

export const setMessages = payload => ({
  type: SET_MESSAGES,
  payload
})

export const addMessage = payload => ({
  type: ADD_MESSAGE,
  payload
})

export const deleteMessage = payload => ({
  type: DELETE_MESSAGE,
  payload
})
