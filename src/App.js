import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }
  
  componentDidMount () {
    axios.get ('/api/inventory').then (res => {
      console.log (res.data)
      this.setState ({
        inventory: res.data
      })
    })
    .catch (error => console.log (error))
    // this.getInventory ()
  }

  getInventory () {}

  
  render () {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}
        getInventory={this.getInventory}/>
        <Form/>
      </div>
    )
  }

}

export default App;
