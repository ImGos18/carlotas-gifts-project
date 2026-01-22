import styles from "./Item.module.css";

export default function Item({ item, onOpenModal }) {
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={item.imgSrc} alt="product img" />
      </div>
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button className={styles.testBtn} onClick={() => onOpenModal(item)}>
        Ver Detalles
      </button>
    </li>
  );
}
