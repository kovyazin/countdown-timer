import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  box-shadow: 3px 3px 25px rgba(49, 49, 49, 0.15);

  th {
    padding: 20px;
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
    color: #313131;

    &:last-child {
      padding-right: 30px;
      text-align: right;
    }

    &:first-child {
      padding-left: 30px;
    }
  }
`

const OtherEventTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Time left</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>My mother’s birthday</td>
          <td>June 27, 2020</td>
          <td>25 Days</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Start of study</td>
          <td>February 17, 2020</td>
          <td>10 Hours</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Relocating in Ekaterinburg</td>
          <td>August 10, 2020</td>
          <td>Less than an hour</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default OtherEventTable
