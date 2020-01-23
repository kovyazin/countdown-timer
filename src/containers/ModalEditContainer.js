/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Import components */
import ModalEdit from '../components/ModalEdit/ModalEdit'

/* Import others */
import { setEditEventMode, changeEvent } from '../reducers/actions'

const ModalEditContainer = ({ setEditEventMode, changeEvent, ...props }) => {
  return (
    <ModalEdit
      setEditEventMode={setEditEventMode}
      changeEvent={changeEvent}
      {...props}
    />
  )
}

ModalEditContainer.propTypes = {
  setEditEventMode: PropTypes.func.isRequired,
  changeEvent: PropTypes.func.isRequired
}

export default connect(null, { setEditEventMode, changeEvent })(
  ModalEditContainer
)
