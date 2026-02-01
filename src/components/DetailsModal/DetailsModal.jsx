import { useEffect, useState } from "react";
import styles from "./DetailsModal.module.css";
import NumOrderedItems from "../NumOrderedItems/NumOrderedItems";

function DetailsModal({ item, onCloseModal, onAddItem }) {
  const [itemCount, setItemCount] = useState(0);
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
          <img src={item.imgSrc} alt="product img" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </div>

        <p className={styles.description}>
          {item.description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nesciunt quam perferendis. Odio aspernatur quidem, asperiores quam rem omnis cumque. Quos distinctio esse, animi delectus sit incidunt ipsum aut odio"}
        </p>
        <NumOrderedItems
          item={item}
          itemCount={itemCount}
          onUpdateItemCount={handleUpdateItem}
          onAdditem={onAddItem}
        />
        <button className={styles.testBtn} onClick={onCloseModal}>
          Cerrar Detalles
        </button>
      </div>
    </>
  );
}

export default DetailsModal;
