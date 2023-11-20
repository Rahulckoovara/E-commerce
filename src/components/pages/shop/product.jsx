import React from 'react'
import './product.css'
 const Product1 = (props) => {
    const{id,productName,price,image}=props.data;
  return (
    <div className='product'>
        <img src={image} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
         
        </div>
      
    </div>
  )
}
export default Product1;
