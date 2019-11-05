import React from 'react'
import data from '../../citieswithkeys.json'

import CitiesTable from '../CitiesTable'



class OneHundredMPlus extends React.Component {
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
          data={this.state.data.sort( (a, b)  => (a.OneHundredMPlus.replace(/,/g,'') - b.OneHundredMPlus.replace(/,/g,'')))}
        />
      </div>
    )
  }
}

export default OneHundredMPlus
