import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import TopBar from './Components/Top_bar/top_nav.js'
import Main from './Components/Main_Page/main_page.js'
import Zoom from './Components/Zoom/zoom.js'


// will use this to iterate through different products to show their names and descriptions, etc..
// const product = {
//   1: {
//     id: 1,
//     name: "someProduct1",
//     img: "/assets/top section images/highwaist_black_front_2_1024x1024.jpg",
//     desc: " blah blah blah"
//   }
// }

function App() {
  return (
    <div className="App">
      <TopBar/>
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
