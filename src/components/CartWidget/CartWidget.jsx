import styles from "./CartWidget.module.css";

export default function CartWidget() {
  return <i class={`bi bi-cart3 cart-button ${styles.cart}`}></i>;
}
