import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar({ onToggleCart }) {
  return (
    <nav className="nav-primary">
      <img src="/carlotagifts-logo.png" alt="" className="nav-logo" />
      <ul className="link-list">
        <li className="link-item active">Home</li>
        <li className="link-item">Catalog</li>
        <li className="link-item">Occasions</li>
        <li className="link-item">About</li>
      </ul>
      <div className="cart-profile">
        <CartWidget onToggleCart={onToggleCart} />
        <i class="bi bi-person-circle profile-button"></i>
      </div>
    </nav>
  );
}
