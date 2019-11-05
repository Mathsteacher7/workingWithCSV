import React from 'react'
import data from '../../citieswithkeys.json'

import CitiesTable from '../CitiesTable'



class TelecomTowers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }



  render() {
    console.log(this.state.data)
    return (
      <div>
        <CitiesTable
          data={this.state.data.sort( (a, b)  => (a.TelecomTowers.replace(/,/g,'') - b.TelecomTowers.replace(/,/g,'')))}
        />
      </div>
    )
  }
}

export default TelecomTowers
