import React, { useContext, useState } from 'react'
import './product.css'
import {ShopContext} from '../../../context/shop-context';



export const Product1 = (props) => {
    const{id,productName,price,image}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);

    const cartItemAmount=cartItems[id];

  return (
    <div className='product'>
        <img src={image} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
         
        </div>
        <button className="addToCartBtn" onClick={()=>addToCart(id)}>
          Add to Cart{cartItemAmount>0 &&<>({cartItemAmount}) </>}</button>
      
    </div>
  )
}
export default Product1;
