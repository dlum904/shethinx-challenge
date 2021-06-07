import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Main from './Components/Main_Page/main_page.js'
import Zoom from './Components/Zoom/zoom.js'


// will use this to iterate through different products to show their names and descriptions, etc..
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
  // TODO: Add a useState for the cart somewhere
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/zoom/:id" component={Zoom} />
          <Route path="/" component={Main} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
