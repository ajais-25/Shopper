import React from "react";
import { addItem } from "../../features/cartItemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <Link to={`details/${product.id}`} className="product-img">
        <img src={product.image} alt="product" />
      </Link>
      <Link
        to={`details/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        className="product-title"
      >
        {product.title}
      </Link>
      <div className="product-bottom">
        <div className="product-price">${product.price}</div>
        <button onClick={addToCartHandler} className="add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
