import React from 'react'
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom"
import Cart from './Cart'
import Home from  './pages/Home'
//import About from  './pages/About'

import Products from  './pages/Products'
import Navigation from './components/Navigation'
const App = () => {
  return (
    <>
     <Router>
     <Navigation/>
      
<Routes>
       

<Route path="/" component={Home} exact></Route>
<Home/>
{/** 
<Route path="/about" component={About} exact></Route>

<About/>
*/}
<Route path="/products" component={Products} exact></Route>
<Route path="/cart" component={Cart} exact></Route>
       
       
       </Routes>

     </Router>

    </>
  )
}

export default App
