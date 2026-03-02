import Categories from "./Categories/Categories";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h3 className={styles.titleFilter}>Categorias</h3>
      <Categories />
    </div>
  );
}

export default SideBar;
