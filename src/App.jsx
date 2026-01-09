import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  function toggleCart() {
    setCartOpen((toggle) => !toggle);
  }

  return (
    <>
      <NavBar onToggleCart={toggleCart} />
      {cartOpen ? (
        <ItemListContainer />
      ) : (
        <div className="message">
          Haga click en el carrito para mostrar los items
        </div>
      )}
    </>
  );
}

export default App;
