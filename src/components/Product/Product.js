import React, {Component} from 'react';

class Product extends Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        return (
            <div class="product-box">
                <img className='product-image' src={this.props.data.img} alt={this.props.data.name}/>
                <div className="product-text-container">
                    <p className="product-name">{this.props.data.name}</p>
                    <p className="price">{this.props.data.price}</p>
                </div>
            </div>
        )
    }
}

export default Product