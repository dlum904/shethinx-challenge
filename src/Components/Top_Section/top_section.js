import React from 'react';
import { PRODUCTS, CART } from '../../App.js'

// This will be the main body/product that's being viewed
export default function TopSection({id, cart, addToCart}) {
    return (
        <div className="main-product">
            main product here
            <div>
                {PRODUCTS[id].name}
                <img src={PRODUCTS[id].img} alt="pic" />
                {cart.length}
                <button onClick={() => addToCart(id)}> Add to Cart</button>
            </div>

        </div>
    )
}