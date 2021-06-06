import React from 'react';

// This will be the main body/product that's being viewed
export default function TopSection(product) {
    return (
        <div className="main-product">
            main product here
            <div>
                {product.props.name}
                <img src={product.props.img} alt="pic" />
            </div>

        </div>
    )
}