import CartWidget from "./CartWidget";

export default function NavBar({ onToggleCart }) {
  return (
    <nav className="nav-primary">
      <img src="/logo.jpeg" alt="" />
      <CartWidget onToggleCart={onToggleCart} />
    </nav>
  );
}
