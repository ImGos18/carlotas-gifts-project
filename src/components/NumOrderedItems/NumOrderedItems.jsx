import { useNavigate } from "react-router";
import styles from "./NumOrderedItems.module.css";

function NumOrderedItems({
  item,
  onUpdateItemCount,
  itemCount,
  onAdditem,
  isInCart,
  cantidad,
}) {
  const navigate = useNavigate();
  const disponible = cantidad > 0;

  return (
    <div className={styles.itemCountDiv}>
      {disponible && (
        <>
          {" "}
          <div className={styles.inputCountItem}>
            <button
              onClick={() => onUpdateItemCount("substract")}
              className={styles.actionButton}
              disabled={!disponible}
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
              disabled={!disponible}
            >
              +
            </button>
          </div>
          <button
            className={`${styles.addToCart} ${!disponible ? "disabled" : ""}`}
            onClick={() => {
              onAdditem({ ...item, qty: itemCount });
              navigate("/Catalog");
            }}
            disabled={!disponible}
          >
            {isInCart ? "Modificar Cantidad" : "Agregar al Carrito"}
          </button>
        </>
      )}

      {!disponible && (
        <h2 className={styles.message}>
          Este Producto no se encuentra disponible por el momento
        </h2>
      )}
    </div>
  );
}

export default NumOrderedItems;
