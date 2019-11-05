import React from 'react'

export default function CitiesTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>Country</th>
          <th>All Buildings</th>
          <th>100m+</th>
          <th>150m+</th>
          <th>200m+</th>
          <th>300m+</th>
          <th>Telecom Towers</th>
          <th>All Structures</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((row, key) => (
            <tr key={key}>
              <td>{row.Index}</td>
              <td>{row.City}</td>
              <td>{row.Country}</td>
              <td>{row.AllBuildings}</td>
              <td>{row.OneHundredMPlus}</td>
              <td>{row.OneHundredFiftyMPlus}</td>
              <td>{row.TwoHunderedMPlus}</td>
              <td>{row.ThreeHundredMPlus}</td>
              <td>{row.TelecomTowers}</td>
              <td>{row.AllStructures}</td>
            </tr>
          ))
        }
      </tbody>


    </table>
  )
}
