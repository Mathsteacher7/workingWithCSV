import React from 'react'
import data from '../../citieswithkeys.json'

import CitiesTable from '../CitiesTable'



class AllBuildings extends React.Component {
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
          data={this.state.data.sort( (a, b)  => (a.AllBuildings.replace(/,/g,'') - b.AllBuildings.replace(/,/g,'')))}
        />
      </div>
    )
  }
}

export default AllBuildings
