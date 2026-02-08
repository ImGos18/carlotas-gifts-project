import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <div className={styles.PresentationContainer}>
        <h1 className={styles.title}>
          Carlota's Gifts, el detalle siempre importa
        </h1>
        <p className={styles.presentationText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sit
          rerum deleniti earum officia voluptatem minus! Sed aliquid officiis
          iusto tempore dolorum fugiat quas praesentium. Esse dignissimos
          asperiores corporis nobis.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
