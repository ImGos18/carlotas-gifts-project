import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div>
      <NavBar />
      <div className={styles.notFound}>
        <p>401</p>

        <p>Page Not found</p>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
