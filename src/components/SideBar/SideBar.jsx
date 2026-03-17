import Categories from "./Categories/Categories";
import styles from "./SideBar.module.css";

function SideBar({ mobile }) {
  return (
    <div className={`${styles.sideBar} ${mobile}`}>
      <h3 className={styles.titleFilter}>Categorias</h3>
      <Categories />
    </div>
  );
}

export default SideBar;
