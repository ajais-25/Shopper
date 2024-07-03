import Logo from "../../images/logo.png";
import Cart from "../../images/cart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.items);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/cart" className="cart-logo-container">
          <img src={Cart} alt="cart" className="cart-logo" />
          <div className="cart-quantity">{items.length}</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
