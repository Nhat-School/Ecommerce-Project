
import { NavLink } from 'react-router-dom';
import './Header.css';
export function Header({cart}) {
  let totalQuantity=0;
  cart.forEach((cartItem)=>totalQuantity+=cartItem.quantity);
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-NavLink">
            <img className="logo" src="src/assets/images/logo-white.png" />
            <img className="mobile-logo" src="src/assets/images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="src/assets/images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-NavLink header-NavLink" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-NavLink header-NavLink" to="/checkout">
            <img className="cart-icon" src="src/assets/images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
