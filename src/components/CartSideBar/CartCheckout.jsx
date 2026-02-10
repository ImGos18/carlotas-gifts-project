import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartCheckout.module.css";

function CartSideBar() {
  const { cartItems } = useStoreContext();
  return (
    <div className={styles.sideBarContainer}>
      <h2>
        total:{" Ref. "}
        {cartItems.reduce(
          (acc, item) => item.precioProducto * item.qty + acc,
          0,
        )}
      </h2>
    </div>
  );
}

export default CartSideBar;
