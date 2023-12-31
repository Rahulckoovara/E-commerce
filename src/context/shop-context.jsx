import React, {createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);



//------------iterating added cart items---------------------------

const getdefaultCart=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
};

 export const ShopContextProvider = (props) => {
 const[cartItems,setCartItems]=useState({});


//---------------------adding to cart------------------

const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]? prev[itemId]+1 : 1}));;
};

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
};

const deleteFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:0}));
};


const updateCartItems=(amount,itemId)=>{
  setCartItems((prev)=>({...prev, [itemId]:amount}))
};


//-----get total amount-------------------------------
const getTotalAmount=()=>{
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo=PRODUCTS.find((product)=>product.id===Number(item));
        total+=cartItems[item]*iteminfo.price;
      }
       
    }
    return total;
};

//-----------------------assigning to contval------------
const contextValue={cartItems,addToCart,removeFromCart,updateCartItems,getTotalAmount,deleteFromCart};
console.log(cartItems);


  return (
    <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
  ) 
}

export default ShopContext;
