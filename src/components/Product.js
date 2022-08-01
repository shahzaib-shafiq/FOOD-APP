import React from 'react'

const Product = (props) => {
  console.log(props);
  return (
    <div>
       <div className="text-center">
          <img src="/images/peproni.png"></img>
          <h2 className="text-lg font-bold py-2">Neapolitan Pizza</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 600</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>

      <div className="text-center">
          <img src="/images/pizza.png"></img>
          <h2 className="text-lg font-bold py-2">Chicago Pizza</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 700</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>


      <div className="text-center">
          <img src="/images/pizza1.png"></img>
          <h2 className="text-lg font-bold py-2">Sicilian Pizza.</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 300</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
      <div className="text-center">
          <img src="/images/pizza2.png"></img>
          <h2 className="text-lg font-bold py-2">Greek Pizza</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 900</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>


      <div className="text-center">
          <img src="/images/pizza3.png"></img>
          <h2 className="text-lg font-bold py-2">California Pizza</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 900</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>

      <div className="text-center">
          <img src="/images/pizza4.png"></img>
          <h2 className="text-lg font-bold py-2">St. Louis Pizza</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 600</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>

      <div className="text-center">
          <img src="/images/pizza5.png"></img>
          <h2 className="text-lg font-bold py-2">Chicago Pizza.</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 800</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    
      <div className="text-center">
          <img src="/images/pizza6.png"></img>
          <h2 className="text-lg font-bold py-2">New York-Style Pizza.</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 1100</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
    
  )
}

export default Product
