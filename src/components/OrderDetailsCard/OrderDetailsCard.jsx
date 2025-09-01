import React from "react";
import { Link } from "react-router-dom";

const OrderDetailsCard = ({ item }) => {
  return (
    <div className="cart-product-card order-item-card">
      <Link to={`../details/${item.id}`} className="cart-product-img">
        <img src={item.image} alt={item.title} />
      </Link>
      <div className="cart-product-right">
        <Link
          to={`../details/${item.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          className="cart-product-title"
        >
          {item.title}
        </Link>
        <div className="cart-product-bottom">
          <div className="cart-product-price">${item.price}</div>
          <div className="order-item-quantity">
            <span className="quantity-label">Quantity:</span>
            <span className="cart-product-quantity">{item.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
