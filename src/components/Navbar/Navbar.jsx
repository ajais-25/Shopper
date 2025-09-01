import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiPackage } from "react-icons/fi";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-container">
          <span className="logo-text">Shopper</span>
        </Link>
        <div className="navbar-right">
          <Link to="/orders" className="orders-logo-container">
            <FiPackage className="orders-icon" />
          </Link>
          <Link to="/cart" className="cart-logo-container">
            <FiShoppingCart className="cart-icon" />
            <div className="cart-quantity">{items.length || 0}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
