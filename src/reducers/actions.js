import {
  ADD_EVENT,
  DELETE_EVENT,
  REMOVE_EDIT_MODAL,
  SET_ACTIVE_EVENT,
  SHOW_EDIT_MODAL
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

export const showEditModal = payload => ({
  type: SHOW_EDIT_MODAL,
  payload
})

export const removeEditModal = payload => ({
  type: REMOVE_EDIT_MODAL,
  payload
})
