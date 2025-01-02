import "./Orders.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);

  const handleClick = (e) => {
    navigate(
      `/orders/${e.target.parentNode.firstChild.textContent.split("#")[1]}`
    );
  };

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          No orders found.
        </p>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3>Order #{order.orderId}</h3>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Expected Date:</strong>
                {order.arrivalDate}
              </p>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>
              <button className="view-order" onClick={handleClick}>
                View Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
