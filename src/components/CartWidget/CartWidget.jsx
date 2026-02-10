import { Link } from "react-router";
import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
  const { cartItems } = useStoreContext();
  return (
    <Link className={styles.cart} to={"/Cart"}>
      <i
        className={`bi bi-cart3 cart-button ${styles.cart}`}
        onClick={() => console.log(cartItems)}
      >
        {cartItems.length > 0 && cartItems.length}
      </i>
    </Link>
  );
}
