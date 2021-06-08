import './top_section.css';
import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../../App.js'

// This will be the main body/product that's being viewed
export default function TopSection({id, cart, addToCart}) {

    // Hook for what color is selected
    const [color, setColor] = useState(
        {
            black: "black ✔",
            beige: "beige"
        }
    );
    // Changes selection to black
    const selectBlack = () => {
        setColor(
            {
                black: "black ✔",
                beige: "beige "
            }
        )
    }
    // Changes selection to beige
    const selectBeige = () => {
        setColor(
            {
                black: "black ",
                beige: "beige ✔"
            }
        )
    }
        
    return (
        <div className="top-section">
            main product here
            <div className="product-info">
                {/* Left side with all the product descriptions */}
                <div className="product-left">
                    <p>{PRODUCTS[id].name}</p>
                    <p>{PRODUCTS[id].desc1}</p>
                    <p>{PRODUCTS[id].desc2}</p>
                </div>
                {/* Main image */}
                <img className="product-mid" src={PRODUCTS[id].img} alt="pic" />
                {/* Right side with all the selectors */}
                <div className="product-right">
                    <p>{PRODUCTS[id].price}</p>
                    <div className="color-select">
                        <div>color</div>
                        <div onClick={() => selectBlack()}>{color.black}</div>
                        <div onClick={() => selectBeige()}>{color.beige}</div>
                    </div>
                    
                    <button onClick={() => addToCart(id)}> Add to Cart</button>
                </div>

            </div>

        </div>
    )
}