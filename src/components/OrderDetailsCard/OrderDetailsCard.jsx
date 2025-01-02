import React from "react";
import { Link } from "react-router-dom";

const OrderDetailsCard = ({ item }) => {
  return (
    <div className="cart-product-card">
      <Link to={`../details/${item.id}`} className="cart-product-img">
        <img src={item.image} alt="product" />
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
          <div className="add-remove-btn">
            <div className="cart-product-quantity">
              <span style={{ fontSize: "0.9rem" }}>X</span>
              {item.quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
