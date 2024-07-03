import React from "react";
import { addItem, removeItem } from "../../features/cart/cartItemSlice";
import { useDispatch } from "react-redux";

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
        <div className="cart-product-img">
          <img src={item.image} alt="product" />
        </div>
        <div className="cart-product-right">
          <div className="cart-product-title">{item.title}</div>
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
