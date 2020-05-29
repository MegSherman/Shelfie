import React from 'react';
import Product from './../Product/Product'

function Dashboard (props) {
    const productMap = props.inventory.map (product => (
        <Product key={product.id}
        data = {product}
        getInventory={props.getInventory}/>))
    return (
        <div>
            <h2>Dashboard.js</h2>
            <div>{productMap}</div>
        </div>
    )
}

export default Dashboard