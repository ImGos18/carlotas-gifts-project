import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [modalDesc, setModalDesc] = useState(null);

  function handleOpenModal(item) {
    setModalDesc(item);
  }

  function handleCloseModal() {
    setModalDesc(null);
  }

  function handleAddToCart(item) {
    setCartItems((cartItems) => [...cartItems, item]);
    handleCloseModal();
    Swal.fire({
      icon: "success",
      title: "item added to cart",
      confirmButtonColor: "#ee2b6c",
    });
    console.log(cartItems);
  }

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleOpenModal,
        handleCloseModal,
        modalDesc,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStoreContext() {
  const context = useContext(StoreContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { StoreContextProvider, useStoreContext };
