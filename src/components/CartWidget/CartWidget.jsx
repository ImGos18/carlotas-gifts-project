import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
  const { cartItems } = useStoreContext();
  return (
    <i class={`bi bi-cart3 cart-button ${styles.cart}`}>
      {cartItems.length > 0 && cartItems.length}
    </i>
  );
}
