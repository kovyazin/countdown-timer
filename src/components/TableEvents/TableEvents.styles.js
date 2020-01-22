import styled from 'styled-components'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  color: #313131;
`

const Table = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  box-shadow: 3px 3px 25px rgba(49, 49, 49, 0.15);

  th {
    padding: 20px 15px;
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    color: #313131;
    border-bottom: 1px solid #d0d0d0;

    &:last-child {
      text-align: right;
      padding-right: 30px;
    }

    &:first-child {
      padding-left: 30px;
    }
  }

  td {
    padding: 15px;
    font-size: 18px;
    font-weight: 300;

    &:last-child {
      padding-right: 30px;
      text-align: right;
    }

    &:first-child {
      padding-left: 30px;
    }
  }
`

export const Styled = {
  Title,
  Table
}
