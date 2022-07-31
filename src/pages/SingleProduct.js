import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom';


const SingleProduct = () => {
  
  const [product,SetProduct] = useState({})

  const params=useParams();
const history = useNavigate();
  useEffect(() =>{
    fetch('/api/products/${params._id}')
.then (res=>res.json())

.then(product => {

 SetProduct(product);
  
})
})



  return (

    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={() =>{history.goBack() }}>Back</button>
    <div className="flex" >

        <img src="./images/perroni.png"></img>
<div className="ml-16">
    <h1 className="text-xl font-bold">Havan Special</h1>
<div className="text-md">Small</div>
<div className="font-bold mt-2" >Rs 500</div>
<button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add </button>
</div>
    </div>
    
    </div>
  )
}

export default SingleProduct
