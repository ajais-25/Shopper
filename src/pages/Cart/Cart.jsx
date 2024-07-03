import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const items = useSelector((state) => state.items);

  return (
    <>
      <div className="cart-container">
        <div className="cart-product-container">
          {items.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>

        <div className="final-amount-container">
          <div className="details-heading">Details</div>
          <div className="total-price">
            <div>Total Price:</div>
            <div>$100</div>
          </div>
          <div className="tax-incl">
            <div>Tax:</div>
            <div>$2</div>
          </div>
          <div className="final-price">
            <div>Final Price:</div>
            <div>$102</div>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
