import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor () {
        super ()
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }
    
    handleImg (e) {
        this.setState ({
            img: e.target.value
        })
    }

    handleName (e) {
        this.setState ({
            name: e.target.value
        })
    }

    handlePrice (e) {
        this.setState ({
            price: e.target.value
        })
    }
    
    clearInputs () {
        this.setState ({
            name: '',
            price: '',
            img: '',
        })
    }

    // createProduct (name, price, img) {
    //     const body = {id, name, price, img}
    //     axios.post ('/api/inventory', body)
    //     .then ((res) => {
    //         this.setState ({
    //             collection: res.data
    //         })
    //     })
    //     .catch (error => console.log (error))
    // }

    render () {
        return (
            <>
            <div className='form-box'>
                <h3>Image URL:</h3>
                <input onChange = {e => this.handleImg (e)}></input>
                <h3>Product Name:</h3>
                <input onChange = {e => this.handleName (e)}></input>
                <h3>Price:</h3>
                <input onChange = {e => this.handlePrice (e)}></input>
                <div className='button-box'>
                    <button onClick = {this.clearInputs} className='button'>Cancel</button>
                    <button className='button'>Add to Inventory</button>
                </div>
            </div>
            </>
        )
    }
}

export default Form