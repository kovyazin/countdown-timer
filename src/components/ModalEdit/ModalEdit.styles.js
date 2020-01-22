import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
`

const Modal = styled.div`
  width: 480px;
  padding: 50px 45px;
  background: #fff;
  border-radius: 25px;
`

const Title = styled.div`
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  color: #313131;
`

const FormGroup = styled.div`
  margin-bottom: 30px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  color: #313131;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 26px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 300;
  color: #313131;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
    height: 50px;
  }

  .react-datepicker__input-container {
    height: 100%;

    input {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0 26px;
      font-family: inherit;
      font-size: 18px;
      font-weight: 300;
      color: #313131;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
`

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  width: 180px;
  height: 50px;
  font-family: inherit;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  border-radius: 5px;
`

const ButtonSave = styled(Button)`
  color: #fff;
  border: none;
  background: #dc5858;
`

const ButtonClose = styled(Button)`
  color: #dc5858;
  border: 1px solid #dc5858;
  background: none;
`

export const Styled = {
  Overlay,
  Title,
  Button,
  Input,
  DatePickerWrapper,
  ButtonClose,
  ButtonSave,
  ButtonsGroup,
  FormGroup,
  Label,
  Modal
}
