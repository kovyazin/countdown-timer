import styled from 'styled-components'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  color: #313131;

  strong {
    font-weight: 400;
  }
`

const WrapperTimer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Counter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  text-align: center;
  color: #313131;
`

const Number = styled.span`
  font-size: 72px;
  font-weight: 400;
`

const Text = styled.span`
  margin-top: -10px;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`

export const Styled = {
  Title,
  WrapperTimer,
  Counter,
  Number,
  Text
}
