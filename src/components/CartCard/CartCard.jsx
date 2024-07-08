import React from "react";
import { addItem, removeItem } from "../../features/cart/cartItemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(item));
  };

  const removeFromCartHandler = () => {
    dispatch(removeItem(item));
  };

  return (
    <>
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
              <button
                onClick={removeFromCartHandler}
                className="remove-from-cart"
              >
                -
              </button>
              <div className="cart-product-quantity">{item.quantity}</div>
              <button onClick={addToCartHandler} className="add-to-cart-btn">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
