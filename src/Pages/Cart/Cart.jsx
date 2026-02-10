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
      <div className={styles.cartContainer}>
        <div>
          <ul className={styles.table}>
            {isItemsOnCart &&
              cartItems.map((item) => <CartItem item={item} key={item.id} />)}
          </ul>
        </div>
        {isItemsOnCart && <CartCheckout />}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
