import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderDetailsCard from "../../components/OrderDetailsCard/OrderDetailsCard";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.orders.orders);
  const items =
    orders && orders.filter((order) => order.orderId === orderId)[0].items;

  return (
    <div className="cart order-details">
      <div className="cart-container order-details-container">
        <div className="cart-product-container order-details-product-container">
          {items &&
            items.map((item) => <OrderDetailsCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
