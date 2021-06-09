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
            quantity: 1,
            size: "M"
        }
    );

    // Hook to show the size dropdown: if set to false, it will not show, if true it will show it
    const [show, setShow] = useState(false);

    // Hook to show what size is currently selected.  changes background for the size that's in the form state.
    useEffect (() => {
        const sizes = document.querySelectorAll(".XS, .S, .M, .L, .XL, .XXL");
        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i] === document.querySelector(`.${form.size}`)) {
                sizes[i].style.background = 'black';
                sizes[i].style.color = "white"
            }
            else {
                sizes[i].style.background = ""
                sizes[i].style.color = ""
            }
        }
    })

    // Changes the show state to true, if it's false, else set to true
    const toggleShow = () => {
        !show ? setShow(true) : setShow(false);
    }

    // Changes selection to black
    const selectBlack = () => {
        setForm(
            {
                black: "black ✔",
                beige: "beige ",
                quantity: form.quantity,
                size: form.size
            }
        )
    }
    // Changes selection to beige
    const selectBeige = () => {
        setForm(
            {
                black: "black ",
                beige: "beige ✔",
                quantity: form.quantity,
                size: form.size
            }
        )
        
    }
     
    // increase/decrease quantity
    const adjustQuantity = (num) => {
        const oldQuantity = form.quantity;
        let newQuantity = oldQuantity + num;
        if (newQuantity < 1) newQuantity = 1;
        setForm(
            {
                black: form.black,
                beige: form.beige,
                quantity: newQuantity,
                size: form.size
            }
        )

    }

    // changes the size based on selection
    const selectSize = (size) => {
        setForm(
            {
                black: form.black,
                beige: form.beige,
                quantity: form.quantity,
                size: size
            }
        )

        toggleShow()
    }

    return (
        <div className="top-section">

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
                    <p className="price">{PRODUCTS[id].price}</p>
                    {/* COLOR SELECT */}
                    <div className="color-select">
                        <div className="color">color</div>
                        <div className="color-black" onClick={() => selectBlack()}>{form.black}</div>
                        <div className="color-beige" onClick={() => selectBeige()}>{form.beige}</div>
                    </div>
                    <br/>
                    {/* QUANTITY SELECT */}
                    <div className="quantity-select">
                        <input type="button" className="minus" onClick={() => adjustQuantity(-1)} value="-"/>
                        <div>quantity ( {form.quantity} )</div>
                        <input type="button" className="plus" onClick={() => adjustQuantity(1)} value="+"/>
                    </div>
                    <br/>
                    {/* SIZE SELECT */}
                    <div className="size-btn" onClick={() => toggleShow()}>
                        <div>size</div>
                        <div> ▿ </div>
                    </div>
                    {show ? (
                        <div className="sizeDropdown">
                            <ul>
                                <li className="XS" onClick={() => selectSize("XS")}>XS</li>
                                <li className="S" onClick={() => selectSize("S")}>S</li>
                                <li className="M" onClick={() => selectSize("M")}>M</li>
                                <li className="L" onClick={() => selectSize("L")}>L</li>
                                <li className="XL" onClick={() => selectSize("XL")}>XL</li>
                                <li className="XXL" onClick={() => selectSize("XXL")}>XXL</li>
                            </ul>
                            <div className="dropdown-bg" onClick={()=> toggleShow()}></div>
                        </div>
                    ) :
                    null }
                    <br/>
                    <div className="whatsize">
                        <a href="/">what's my size?</a>
                    </div>
                    <br/>
                    {/* ADD TO CART BTN */}
                    <input className="cart-btn" type="button" onClick={() => addToCart(form)} value="add to cart"/>
                </div>

            </div>

        </div>
    )
}