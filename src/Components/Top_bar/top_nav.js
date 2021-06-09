import './top_nav.css';
import React from 'react';


// This will be the top middle nav bar that has a position fixed to the top
export default function Topbar({cart}) {
    return (
        <div className="topbar">

            <div className="top-left">
                <a href="/">MENSWEAR</a>
                <a href="/">WOMENSWEAR</a>
            </div>

            <div className="top-mid">
                <a href="/">SHETHINX</a>
            </div>

            <div className="top-right">
                <a href="/">SHOPPING BAG ({cart.length})</a>
            </div>
            
        </div>
    )
}