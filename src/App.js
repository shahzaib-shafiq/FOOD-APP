import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import Home from "./pages/Home";
//import About from  './pages/About'

import SingleProduct from  './pages/SingleProduct';

import ProductsPage from "./pages/ProductsPage";
import Navigation from "./components/Navigation";
import { CartContext } from "./CartContext";
const App = () => {
  return (
    <>
      <Router>
        <CartContext.Provider value={{name: 'SS'}}/>
        <Navigation />
        <Home/>
        <Routes>
          
          
          <Route path="/" component={Home} exact></Route>
         
          <Route path="/products/:_id" exact component={SingleProduct}></Route>

          {/* <Route path="/about" component={About}></Route> */}
                                     <Route path="/products" exact component={ProductsPage}></Route>
                          
          <Route path="/cart" component={Cart}></Route>
        </Routes>
        <CartContext.Provider/>   
      </Router>
    </>
  );
};

export default App;
