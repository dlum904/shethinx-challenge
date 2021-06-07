import './App.css';
import React, { useEffect, useState } from 'react';

import TopBar from './Components/Top_bar/top_nav.js'
import TopSection from './Components/Top_Section/top_section.js'
import BottomSection from './Components/Bottom_Section/bottom_section.js'

// will use this to iterate through different products to show their names and descriptions, etc..
// thought this way it would be easier to switch out products
export const PRODUCTS = {
  1: {
    id: 1,
    name: "Hi-waist",
    img: "/assets/top section images/highwaist_black_front_2_1024x1024.jpg",
    price: "$35.00",
    colors: ["black", "beige"],
    size: ["XS", "S", "M", "L", "XL"],
    desc1: "Heavy Days",
    desc2: "The phrase 'treat yo'self' reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffling season.",
  },
  2: {
    id: 2,
    name: "Hiphugger",
    img: "/assets/bottom section images/thinx_productpage_-04.jpg",
    price: "$35.00",
    colors: ["black", "beige"],
    size: ["XS", "S", "M", "L", "XL"],
    desc1: "Heavy Days",
    desc2: "Hiphugger desc here.",
  },
  3: {
    id: 2,
    name: "Thong",
    img: "/assets/bottom section images/thinx_productpage_-05.jpg",
    price: "$35.00",
    colors: ["black", "beige"],
    size: ["XS", "S", "M", "L", "XL"],
    desc1: "Light Days",
    desc2: "Thong desc here.",
  },
  4: {
    id: 4,
    name: "Sport",
    img: "/assets/bottom section images/thinx_productpage_-07.jpg",
    price: "$35.00",
    colors: ["black", "beige"],
    size: ["XS", "S", "M", "L", "XL"],
    desc1: "Medium Days",
    desc2: "Sport desc here.",
  },
  5: {
    id: 5,
    name: "Boyshort",
    img: "/assets/bottom section images/thinx_productpage_-08.jpg",
    price: "$35.00",
    colors: ["black", "beige"],
    size: ["XS", "S", "M", "L", "XL"],
    desc1: "Light Days",
    desc2: "Boyshort desc here.",
  }
}

export const CART= [];

function App() {

    const mainProductId = PRODUCTS[1].id;
    const otherProducts = [
    PRODUCTS[2].id,
    PRODUCTS[3].id,
    PRODUCTS[4].id,
    PRODUCTS[5].id
  ];
    // useState hook for the Cart
    const [cart, setCart] = useState([]);

    // adding items to the cart
    const addToCart = (productId) => {
        console.log(productId)
        const newCart = [...cart, [productId]];
        console.log(cart)
        setCart(newCart);
    }

    return (
        <div className="app">
        <TopBar cart={cart}/>
            MAIN
        <TopSection id={mainProductId} cart={cart} addToCart={addToCart} />
        <BottomSection props={otherProducts} />
        </div>
    );
}

export default App;
