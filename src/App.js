import './App.css';

// will use this to iterate through different products to show their names and descriptions, etc..
const product = {
  1: {
    id: 1,
    name: "someProduct1",
    desc: " blah blah blah"
  }
}

function App() {

  return (
    <div className="App">
      <TopNav/>
      <MainProduct/>
      <OtherProducts/>
    </div>
  );
}

// This will be the top middle nav bar that has a position absolute
function TopNav() {

  return (
    <div className="navbar">
      navbar here
    </div>
  )
}

// This will be the main body/product that's being viewed
function MainProduct() {
  return (
    <div className="main-product">
      main product here
      {product[1].name}
    </div>
  )
}

// This will be the other products
function OtherProducts() {
  return (
    <div className="other-product">
      other products list here
    </div>
  )
}

export default App;
