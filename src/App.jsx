import DetailsModal from "./components/DetailsModal/DetailsModal";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />

      <Footer />
    </>
  );
}

export default App;
