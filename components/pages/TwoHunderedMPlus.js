import React from 'react'
import data from '../../citieswithkeys.json'

import CitiesTable from '../CitiesTable'



class TwoHunderedMPlus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }



  render() {
    return (
      <div>
        <CitiesTable
          data={this.state.data.sort( (a, b)  => (a.TwoHunderedMPlus.replace(/,/g,'') - b.TwoHunderedMPlus.replace(/,/g,'')))}
        />
      </div>
    )
  }
}

export default TwoHunderedMPlus
