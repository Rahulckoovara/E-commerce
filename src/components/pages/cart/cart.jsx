import React, { useContext } from "react";
import { PRODUCTS } from "../../../products";
import ShopContext from "../../../context/shop-context";
import CartItem from "./cartItem";
//import Product1 from "../shop/product";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const total = getTotalAmount();
  console.log(cartItems);

  return (
    <div className="cart">
      <div>
        <h1>Your Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] && cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="checkout">
          <p><b>Total ₹:{total}</b></p>
          <button className="continuebtn" onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) 
      : <div>
        <h1>Your Cart is Empty😕...</h1>
        <Link to={'/'} style={{textDecoration:'none',fontSize:'20px'}}>Pick up where you left off</Link>
        
      
      </div>}
    </div>
  );
};

export default Cart;
