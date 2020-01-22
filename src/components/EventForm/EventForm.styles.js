import styled from 'styled-components'

const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
`

const Input = styled.input`
  flex: 1;
  margin-right: 24px;
  padding: 0 26px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 5px;

  &::placeholder {
    color: #606060;
    font-weight: 300;
  }
`

const Button = styled.button`
  width: 176px;
  height: 60px;
  font-family: inherit;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  background: #dc5858;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const WarningMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
  z-index: 1;
  font-size: 14px;
  font-weight: 300;
  color: #dc5858;
`

const DatePicker = styled.div`
  margin-right: 24px;

  .react-datepicker-wrapper {
    height: 100%;
  }

  .react-datepicker__input-container {
    height: 100%;

    input {
      height: 100%;
      padding: 0 26px;
      font-family: 'Roboto', Arial, Tahoma, sans-serif;
      font-size: 18px;
      font-weight: 300;
      color: #313131;
      background: #fff;
      border: 1px solid #d0d0d0;
      border-radius: 5px;
    }
  }
`

export const Styled = {
  Form,
  Input,
  Button,
  WarningMessage,
  DatePicker
}
