import CartItem from "../../components/CartItem/CartItem";
import CartCheckout from "../../components/CartSideBar/CartCheckout";
import Footer from "../../components/Footer/Footer";

import NavBar from "../../components/NavBar/NavBar";
import { useStoreContext } from "../../context/StoreContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems } = useStoreContext();
  const isItemsOnCart = cartItems.length > 0;

  return (
    <>
      <NavBar />
      {isItemsOnCart && (
        <>
          <div className={styles.cartContainer}>
            <>
              <ul className={styles.table}>
                {isItemsOnCart &&
                  cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
              </ul>
            </>
            <CartCheckout />
          </div>
        </>
      )}

      {!isItemsOnCart && (
        <div className={styles.noItems}>
          <i className={`bi bi-basket3 ${styles.icon}`}></i>
          <p className={styles.noItemsText}>
            Nada por aqui por el momento, agrega articulos al carrito para poder
            verlos aqui
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
