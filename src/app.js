import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/common/Navbar'

// import CitiesTable from '../components/Test2'
import Original from '../components/Original'
import OneHundredMPlus from '../components/pages/OneHundredMPlus'
import ThreeHundredMPlus from '../components/pages/ThreeHundredMPlus'
import AllStructures from '../components/pages/AllStructures'
import TelecomTowers from '../components/pages/TelecomTowers'
import OneHundredFiftyMPlus from '../components/pages/OneHundredFiftyMPlus'
import TwoHunderedMPlus from '../components/pages/TwoHunderedMPlus'
import Index from '../components/pages/Index'
import AllBuildings from '../components/pages/AllBuildings'
import City from '../components/pages/City'
import Country from '../components/pages/Country'

import './style.scss'


class App extends React.Component {


  render() {

    return (


      <HashRouter>
        <Navbar />
        <Switch>

          <Route path="/allbuildings" component={AllBuildings} />
          <Route path="/telecomtowers" component={TelecomTowers} />
          <Route path="/allstructures" component={AllStructures} />
          <Route path="/300+" component={ThreeHundredMPlus} />
          <Route path="/200+" component={TwoHunderedMPlus} />
          <Route path="/150+" component={OneHundredFiftyMPlus} />
          <Route path="/100+" component={OneHundredMPlus} />
          <Route path="/city" component={City} />
          <Route path="/country" component={Country} />
          <Route path="/index" component={Index} />
          <Route path="/" component={Original} />
        </Switch>
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
