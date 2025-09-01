import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import OrderDetailsCard from "../../components/OrderDetailsCard/OrderDetailsCard";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);
  const order =
    orders && orders.filter((order) => order.orderId === orderId)[0];
  const items = order?.items;

  if (!order) {
    return (
      <div className="order-details-page">
        <div className="order-details-wrapper">
          <div className="order-not-found">
            <h2>Order Not Found</h2>
            <p>The order you're looking for doesn't exist.</p>
            <button
              className="back-to-orders-btn"
              onClick={() => navigate("/orders")}
            >
              Back to Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-details-page">
      <div className="order-details-wrapper">
        <div className="order-details-header">
          <button className="back-btn" onClick={() => navigate("/orders")}>
            ← Back to Orders
          </button>
          <div className="order-header-info">
            <h1>Order #{orderId}</h1>
            <div className="order-status-badge">
              <span
                className={`status-indicator ${order.status.toLowerCase()}`}
              >
                {order.status}
              </span>
            </div>
          </div>
          <div className="order-meta">
            <div className="order-meta-item">
              <span className="meta-label">Expected Delivery:</span>
              <span className="meta-value">{order.arrivalDate}</span>
            </div>
            <div className="order-meta-item">
              <span className="meta-label">Total Amount:</span>
              <span className="meta-value total-amount">${order.total}</span>
            </div>
          </div>
        </div>

        <div className="order-details-content">
          <h2>Order Items</h2>
          <div className="order-items-container">
            {items &&
              items.map((item) => (
                <OrderDetailsCard key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
