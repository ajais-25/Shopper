import Logo from "../../images/logo.png";
import Cart from "../../images/cart.png";
import Package from "../../images/package.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="navbar-right">
          <Link to="/orders" className="orders-logo-container">
            <img src={Package} alt="orders" className="orders-logo" />
          </Link>
          <Link to="/cart" className="cart-logo-container">
            <img src={Cart} alt="cart" className="cart-logo" />
            <div className="cart-quantity">{items.length || 0}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
