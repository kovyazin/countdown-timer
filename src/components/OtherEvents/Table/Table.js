import React from 'react'

import { Table } from './Styled'

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
