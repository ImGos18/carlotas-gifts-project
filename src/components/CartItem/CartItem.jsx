import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const { handleRemoveFromCart } = useStoreContext();

  return (
    <div className={styles.tableItem}>
      <img src={item.img} alt={item.nombreProducto} className={styles.image} />
      <div className={styles.nombre}>{item.nombreProducto}</div>
      <div className={styles.precio}>Ref.{item.precioProducto}</div>
      <div className={styles.cantidad}>x{item.qty}</div>
      <div>
        <button
          className={`${styles.btn} ${styles.btnDanger}`}
          onClick={() => handleRemoveFromCart(item)}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
