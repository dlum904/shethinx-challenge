import './top_section.css';
import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../../App.js'

// This will be the main body/product that's being viewed
export default function TopSection({id, cart, addToCart}) {

    // Hook for what color is selected
    const [form, setForm] = useState(
        {
            black: "black ✔",
            beige: "beige",
            quantity: 1
        }
    );
    // Changes selection to black
    const selectBlack = () => {
        setForm(
            {
                black: "black ✔",
                beige: "beige ",
                quantity: form.quantity
            }
        )
    }
    // Changes selection to beige
    const selectBeige = () => {
        setForm(
            {
                black: "black ",
                beige: "beige ✔",
                quantity: form.quantity
            }
        )
    }
        
    const adjustQuantity = (num) => {

        const oldQuantity = form.quantity;
        let newQuantity = oldQuantity + num;
        if (newQuantity < 1) newQuantity = 1;
        setForm(
            {
                black: form.black,
                beige: form.beige,
                quantity: newQuantity
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
                    <form>

                        <div className="color-select">
                            <div className="color">color</div>
                            <div className="color-black" onClick={() => selectBlack()}>{form.black}</div>
                            <div className="color-beige" onClick={() => selectBeige()}>{form.beige}</div>
                        </div>
                        <br/>
                        <div className="quantity-select">
                            <input type="button" className="minus" onClick={() => adjustQuantity(-1)} value="-"/>
                            <div>quantity ( {form.quantity} )</div>
                            <input type="button" className="plus" onClick={() => adjustQuantity(1)} value="+"/>
                        </div>
                        <br/>
                        <input type="button" onClick={() => addToCart(id)} value="add to cart"/>
                    </form>
                </div>

            </div>

        </div>
    )
}