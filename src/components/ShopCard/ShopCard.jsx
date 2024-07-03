import React from "react";
import { addItem } from "../../features/cart/cartItemSlice";
import { useDispatch } from "react-redux";

const ShopCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt="product" />
      </div>
      <div className="product-title">{product.title}</div>
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
