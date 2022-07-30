import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import Home from "./pages/Home";
//import About from  './pages/About'

import Products from "./pages/Products";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Home/>
        <Routes>
          
          
          <Route path="/" component={Home} exact></Route>
         
          {/* <Route path="/about" component={About}></Route> */}
          {/**                            <Route path="/products" exact component={ProductsPage}></Route>
                            <Route path="/products/:_id" component={SingleProduct}></Route>
                             */}
          <Route path="/cart" component={Cart}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
