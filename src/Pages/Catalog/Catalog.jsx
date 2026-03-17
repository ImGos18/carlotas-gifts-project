import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Catalog.module.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Catalog() {
  return (
    <>
      <NavBar />
      <SideBar mobile="onMobile" />
      <div className={styles.catalogLayout}>
        <SideBar mobile="onDesktop" />
        <ItemListContainer />
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
