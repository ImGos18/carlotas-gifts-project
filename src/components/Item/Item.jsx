import { Link } from "react-router";
import styles from "./Item.module.css";

export default function Item({ item, onOpenModal }) {
  const id = item.id;
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <Link to={`/Catalog/${id}`}>
          <img
            src={item.img}
            alt="product img"
            onClick={() => onOpenModal(item)}
          />
        </Link>
      </div>
      <p>{item.nombreProducto}</p>
      <span>{item.precioProducto}</span>
      <Link to={`/Catalog/${id}`}>
        <button className={styles.testBtn} onClick={() => onOpenModal(item)}>
          Ver Detalles
        </button>
      </Link>
    </li>
  );
}
