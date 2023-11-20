import React from 'react'
import './cart.css'
import {useContext} from'react';
import ShopContext from '../../../context/shop-context';
import DeleteIcon from '@mui/icons-material/Delete';



const CartItem = (props) => {
    const{id,productName,price,image}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItems,deleteFromCart}=useContext(ShopContext);

    

    



  return (
    <div className='cartItem'>
      <img src={image}/>
      <div className="cartItem-description">
        <p><b>{productName}</b></p>
        <p>₹{price}</p>
        <div className='count'>
          <button onClick={()=>addToCart(id)} >+</button>
          <input  className='inputval' value={cartItems[id]} onChange={(e)=>updateCartItems(Number(e.target.value),id)}/>
          <button onClick={()=>removeFromCart(id)}>-</button><br/><br/>    
             <div  className='deletebtn' >
             <DeleteIcon/>      <button onClick={()=>deleteFromCart(id)} className='removebtn'>Remove</button>

             </div>
        </div>
       
      </div>
      
    </div>
    
  )
}

export default CartItem;
