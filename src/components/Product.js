import React from 'react'
import {Link} from 'react-router-dom'


const Product = (props) => {
  console.log(props);
  return (
    <Link to={'/products/${product._id}'}>
    <div>
       <div className="text-center">
        {/**
         * 
         *   <img src={Product.image}></img>
        */}
      <img src="/images/peproni.png"></img> 
          <h2 className="text-lg font-bold py-2">Perroni{/*Product.name*/}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          Small
          {/**Product.size*/}
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>{/*Product.price*/}500</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
    </Link>
  )
}

export default Product
