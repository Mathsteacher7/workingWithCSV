import React from 'react'
import data from '../../citieswithkeys.json'

import CitiesTable from '../CitiesTable'



class ThreeHundredMPlus extends React.Component {
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
          data={this.state.data.sort( (a, b)  => (a.ThreeHundredMPlus.replace(/,/g,'') - b.ThreeHundredMPlus.replace(/,/g,'')))}
        />
      </div>
    )
  }
}

export default ThreeHundredMPlus
