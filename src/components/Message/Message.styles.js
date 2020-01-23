import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 18px 36px 18px 24px;
  background: #fff;
  box-shadow: 3px 3px 25px rgba(49, 49, 49, 0.15);
  border-radius: 5px;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #313131;
`

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 24px;
  color: #dc5858;
  border: none;
  background: none;
  cursor: pointer;
`

export const Styled = { Wrapper, Text, ButtonClose }
