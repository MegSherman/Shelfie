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
      inventory: [
        {
          name: 'leather journal',
          price: 30,
          img: 'https://images-na.ssl-images-amazon.com/images/I/91KNwuvtHyL._AC_SL1500_.jpg'
        },
        {
          name: 'fountain pen',
          price: 25,
          img: 'https://shop.r10s.jp/hunnyhunt/cabinet/sailor/s117new_2.jpg'
        },
        {
          name: 'inkwell',
          price: 15,
          img: 'https://cdn.shopify.com/s/files/1/0130/8502/products/clm39_600x.jpg?v=1571438566'
        }
      ]
    }
    this.getInventory = this.getInventory.bind(this)
  }
  
  // componentDidMount () {
  //   this.getIventory ()
  // }

  getInventory () {
    axios.get ('/api/inventory').then (res => {
      this.setState ({
        inventory: res.data
      })
    })
    .catch (error => console.log (error))
  }
  
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
