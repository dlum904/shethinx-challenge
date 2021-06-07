import React from 'react';
import { PRODUCTS, CART } from '../../App.js'

// This will be the main body/product that's being viewed
export default function TopSection(product) {
    
    return (
        <div className="main-product">
            main product here
            <div>
                {product.props.name}
                <img src={product.props.img} alt="pic" />
                {CART.length}
                <button onClick={() => product.addToCart(product.props.id)}> Add to Cart</button>
            </div>

        </div>
    )
}