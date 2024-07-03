import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const items = useSelector((state) => state.items);

  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const calculatePrice = () => {
    let total = 0;
    items.map((item) => {
      total += item.price * 100 * item.quantity;
    });
    setPrice((total / 100).toFixed(2));
    setTax(((total * 0.01) / 100).toFixed(2));
    setFinalPrice(((total * 1.01) / 100).toFixed(2));
  };

  useEffect(() => {
    calculatePrice();
  }, [items]);

  return (
    <>
      <div className="cart">
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
              <div>${price}</div>
            </div>
            <div className="tax-incl">
              <div>Tax:</div>
              <div>${tax}</div>
            </div>
            <div className="final-price">
              <div>Final Price:</div>
              <div>${finalPrice}</div>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
