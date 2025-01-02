import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import { createOrder } from "../../features/orderSlice";
import { emptyCart } from "../../features/cartItemSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [disableCheckout, setDisableCheckout] = useState(true);

  const calculatePrice = () => {
    let total = 0;
    items &&
      items.map((item) => {
        total += item.price * 100 * item.quantity;
      });
    setPrice((total / 100).toFixed(2));
    setTax(((total * 0.01) / 100).toFixed(2));
    setFinalPrice(((total * 1.01) / 100).toFixed(2));
  };

  useEffect(() => {
    calculatePrice();
    if (items.length > 0) {
      setDisableCheckout(false);
    } else {
      setDisableCheckout(true);
    }
  }, [items]);

  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const handleCheckout = () => {
    const date = new Date();
    const arrivalDate = new Date(date.setDate(date.getDate() + 7));

    const order = {
      orderId: uid(),
      items,
      arrivalDate: arrivalDate.toDateString(),
      total: finalPrice,
      status: "Order Placed",
    };
    dispatch(createOrder(order));
    dispatch(emptyCart());
  };

  return (
    <>
      <div className="cart">
        <div className="cart-container">
          <div className="cart-product-container">
            {items &&
              items.map((item) => <CartCard key={item.id} item={item} />)}
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
            {disableCheckout ? (
              <button className="checkout-btn-disabled">Checkout</button>
            ) : (
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
