import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartCheckout.module.css";
function CartSideBar() {
  const { cartItems } = useStoreContext();
  return (
    <div className={styles.checkoutContainer}>
      <h2>
        total:{" Ref. "}
        {cartItems.reduce(
          (acc, item) => item.precioProducto * item.qty + acc,
          0,
        )}
      </h2>
      <button
        className={styles.checkoutBtn}
        onClick={async () => {
          await fetch("http://localhost:3001/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: "gustavoesoler0@gmail.com",
              name: "gustavo",
            }),
          }).then((res) => console.log(res));
        }}
      >
        Realizar Pedido
      </button>
    </div>
  );
}

export default CartSideBar;
