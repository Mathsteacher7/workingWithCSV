import React from 'react'
import data from '../citieswithkeys2.json'
import CitiesTable from './CitiesTable'


class Original extends React.Component {
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
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Original
