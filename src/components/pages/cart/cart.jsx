import React, { useContext } from "react";
import { PRODUCTS } from "../../../products";
import ShopContext from "../../../context/shop-context";
import CartItem from "./cartItem";
//import Product1 from "../shop/product";
import { useNavigate } from "react-router-dom";
import "./cart.css";

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
          <p>Total ₹:{total}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) 
      : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
