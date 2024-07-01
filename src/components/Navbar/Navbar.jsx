import Logo from "../../images/logo.png";
import Cart from "../../images/cart.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="cart-logo-container">
          <img src={Cart} alt="cart" className="cart-logo" />
          <div className="cart-quantity">4</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
