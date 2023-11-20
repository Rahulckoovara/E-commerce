import React from "react";
import {PRODUCTS} from '../../../products.jsx';
import Product1 from "./product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>SHOPRIX </h1>
      </div>
      <div className="products">{PRODUCTS.map((product)=>(
      <Product1 data={product} />
      ))}
      </div>
    </div>


  );
};

export default Shop;
