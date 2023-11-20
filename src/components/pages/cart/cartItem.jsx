import React from 'react'
import './cart.css'
import {useContext} from'react';
import ShopContext from '../../../context/shop-context';



const CartItem = (props) => {
    const{id,productName,price,image}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItems}=useContext(ShopContext);



    



  return (
    <div className='cartItem'>
      <img src={image}/>
      <div className="cartItem-description">
        <p><b>{productName}</b></p>
        <p>{price}</p>
        <div className='count'>
          <button onClick={()=>addToCart(id)} >+</button>
          <input value={cartItems[id]} onChange={(e)=>updateCartItems(Number(e.target.value),id)}/>
          <button onClick={()=>removeFromCart(id)}>-</button>
        </div>
       
      </div>
      
    </div>
    
  )
}

export default CartItem;
