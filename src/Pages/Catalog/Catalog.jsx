import Filters from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Catalog.module.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Catalog() {
  return (
    <div>
      <NavBar />
      <div className={styles.catalogLayout}>
        <Filters />
        <ItemListContainer />
        <Footer />
      </div>
    </div>
  );
}

export default Catalog;
