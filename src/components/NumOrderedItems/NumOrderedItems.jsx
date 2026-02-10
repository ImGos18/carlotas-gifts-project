import styles from "./NumOrderedItems.module.css";

function NumOrderedItems({
  item,
  onUpdateItemCount,
  itemCount,
  onAdditem,
  isInCart,
}) {
  return (
    <div className={styles.itemCountDiv}>
      <div className={styles.inputCountItem}>
        <button
          onClick={() => onUpdateItemCount("substract")}
          className={styles.actionButton}
        >
          -
        </button>
        <input
          type="number"
          disabled
          value={itemCount}
          className={styles.inputStyle}
        />
        <button
          onClick={() => onUpdateItemCount("add")}
          className={styles.actionButton}
        >
          +
        </button>
      </div>
      <button
        className={`${styles.addToCart} ${itemCount <= 0 ? "disabled" : ""}`}
        onClick={() => onAdditem({ ...item, qty: itemCount })}
        disabled={itemCount <= 0}
      >
        {isInCart ? "Modificar Cantidad" : "Agregar al Carrito"}
      </button>
    </div>
  );
}

export default NumOrderedItems;
