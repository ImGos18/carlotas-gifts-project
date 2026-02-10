import styles from "./Item.module.css";

export default function Item({ item, onOpenModal }) {
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <img
          src={item.img}
          alt="product img"
          onClick={() => onOpenModal(item)}
        />
      </div>
      <p>{item.nombreProducto}</p>
      <span>{item.precioProducto}</span>
      <button className={styles.testBtn} onClick={() => onOpenModal(item)}>
        Ver Detalles
      </button>
    </li>
  );
}
