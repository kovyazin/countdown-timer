/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

/* Import others */
import { Styled } from './Item.styles'

const TableEventsItem = ({
  event: { id, name, isActive, date },
  idx,
  handleSetEvent,
  handleEdit,
  handleDelete
}) => {
  return (
    <Styled.TableRow
      key={id}
      onClick={() => handleSetEvent(id)}
      active={isActive}
    >
      <td>{idx + 1}</td>
      <td>{name}</td>
      <td>{moment(date).format('MMMM DD, 2020')}</td>
      <td>
        <Styled.Button
          type="button"
          onClick={e => handleEdit(e, id)}
          active={isActive}
        >
          <i className="fas fa-pen" />
        </Styled.Button>
        <Styled.Button
          type="button"
          onClick={e => handleDelete(e, id, isActive)}
          active={isActive}
        >
          <i className="fas fa-times" />
        </Styled.Button>
      </td>
    </Styled.TableRow>
  )
}

TableEventsItem.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    date: PropTypes.number
  }).isRequired,
  idx: PropTypes.number.isRequired,
  handleSetEvent: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TableEventsItem
