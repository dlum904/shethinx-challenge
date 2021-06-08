import React from 'react';

import { PRODUCTS } from '../../App.js'
// This will be the other products
export default function BottomSection({ids}) {
    return (
        <div className="other-product">
            other products list here:
            {/* iterate through the ids to get the rest of the products on the bottom section */}
            <ul>
                {ids.map((id) => {
                    return (
                        <li key={id}>
                            <img src={PRODUCTS[id].img} alt="pic" />
                            {PRODUCTS[id].name}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}