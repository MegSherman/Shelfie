import React, {Component} from 'react';

class Form extends Component {
    constructor () {
        super ()
        this.state = {
            imageURL: '',
            productName: '',
            price: 0
        }
    }
    
    handleImageURL (e) {
        this.setState ({
            imageURL: e.target.value
        })
    }

    handleProductName (e) {
        this.setState ({
            productName: e.target.value
        })
    }

    handlePrice (e) {
        this.setState ({
            price: e.target.value
        })
    }
    
    clearInputs () {
        this.setState ({
            imageURL: this.state.imageURL,
            productName: this.state.productName,
            price: this.state.price
        })
    }

    render () {
        return (
            <>
            <div className='form-box'>
                <h3>Image URL:</h3>
                <input onChange = {e => this.handleImageURL (e)}></input>
                <h3>Product Name:</h3>
                <input onChange = {e => this.handleProductName (e)}></input>
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