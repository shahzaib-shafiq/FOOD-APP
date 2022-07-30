import React from 'react'

const Product = (props) => {
  console.log(props);
  return (
    <div>
       <div className="text-center">
          <img src="/images/peproni.png"></img>
          <h2 className="text-lg font-bold py-2">Hanava Sepcial</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Small
          </span>
        </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>Rs 500</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  )
}

export default Product
