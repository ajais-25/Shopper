import React from "react";

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt="product" />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-bottom">
        <div className="product-price">${product.price}</div>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
