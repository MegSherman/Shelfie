import React, {Component} from 'react';
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
          imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91KNwuvtHyL._AC_SL1500_.jpg',
          productName: 'leather journal',
          price: 30
        },
        {
          imageURL: 'https://shop.r10s.jp/hunnyhunt/cabinet/sailor/s117new_2.jpg',
          productName: 'fountain pen',
          price: 25
        },
        {
          imageURL: 'https://cdn.shopify.com/s/files/1/0130/8502/products/clm39_600x.jpg?v=1571438566',
          productName: 'inkwell',
          price: 15
        },
    ]
    }
  }
  render () {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    )
  }

}

export default App;
