import styled from 'styled-components'

const TableRow = styled.tr`
  cursor: pointer;
  background: ${props => (props.active ? '#dc5858' : 'none')};
  color: ${props => (props.active ? '#fff' : '#313131')};
`

const Button = styled.button`
  margin: 3px;
  width: 32px;
  height: 32px;
  color: ${props => (props.active ? '#fff' : '#dc5858')};
  background: none;
  border: 1px solid ${props => (props.active ? '#fff' : '#dc5858')};
  border-radius: 5px;
  cursor: pointer;
`

export const Styled = {
  TableRow,
  Button
}
