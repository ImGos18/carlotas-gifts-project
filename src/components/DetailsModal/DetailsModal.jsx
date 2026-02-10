import { useEffect, useState } from "react";
import styles from "./DetailsModal.module.css";
import NumOrderedItems from "../NumOrderedItems/NumOrderedItems";
import { useStoreContext } from "../../context/StoreContext";

function DetailsModal({ item, onCloseModal, onAddItem }) {
  const { itemsList, cartItems } = useStoreContext();
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const [itemCount, setItemCount] = useState(function () {
    if (isInCart) {
      return cartItems.at(
        cartItems.findIndex((cartItem) => cartItem.id === item.id),
      )?.qty;
    } else {
      return 0;
    }
  });
  function handleUpdateItem(operation) {
    if (operation === "substract" && itemCount > 0)
      setItemCount((count) => count - 1);
    if (operation === "add") setItemCount((count) => count + 1);
  }

  useEffect(
    function () {
      const close = function (e) {
        if (e.key !== "Escape") return;
        onCloseModal();
      };

      document.addEventListener("keydown", close);

      return function () {
        removeEventListener("keydown", close);
      };
    },
    [onCloseModal],
  );

  return (
    <>
      <div className={styles.modalBg} onClick={onCloseModal}></div>
      <div className={styles.modalWindow}>
        <div className={styles.imgContainer}>
          <img src={item.img} alt="product img" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{item.nombreProducto}</span>
          <span className={styles.price}>Ref. {item.precioProducto}</span>
        </div>

        <p className={styles.description}>
          {item.descripcion ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nesciunt quam perferendis. Odio aspernatur quidem, asperiores quam rem omnis cumque. Quos distinctio esse, animi delectus sit incidunt ipsum aut odio"}
        </p>
        <NumOrderedItems
          item={item}
          itemCount={itemCount}
          isInCart={isInCart}
          onUpdateItemCount={handleUpdateItem}
          onAdditem={onAddItem}
        />
        <span className={styles.message}>
          {cartItems.some((prod) => prod.id === item.id)
            ? `ya tienes agregado ${cartItems.at(itemsList.findIndex((prod) => prod.id === item.id))?.qty} de este producto en el carrito`
            : ""}
        </span>
        <button className={styles.closeBtn} onClick={onCloseModal}>
          Cerrar Detalles
        </button>
      </div>
    </>
  );
}

export default DetailsModal;
