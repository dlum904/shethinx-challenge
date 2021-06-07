import React, { useState } from 'react';

import TopBar from '../Top_bar/top_nav.js'
import TopSection from '../Top_Section/top_section.js'
import BottomSection from '../Bottom_Section/bottom_section.js'
import { PRODUCTS, CART } from '../../App.js'

export default function Main() {

    // useState hook for the Cart
    const [cart, setCart] = useState([]);

    // adding items to the cart
    const addToCart = (product) => {
        console.log(product)
        const newCart = [...cart, [product]];
        console.log(cart)
        setCart(newCart);
    }

    return (
        <div className="main">
            <TopBar />
            MAIN
            <TopSection props={PRODUCTS[1]} addToCart={addToCart} />
            <BottomSection props={PRODUCTS} />
        </div>
    );
}