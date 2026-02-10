import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { getItems } from "../firebase/firebase";

const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [itemsList, setItems] = useState([]);
  const [modalDesc, setModalDesc] = useState(null);

  function getItemsDb() {
    getItems().then((items) => setItems(items));
  }

  function handleOpenModal(item) {
    setModalDesc(item);
  }

  function handleCloseModal() {
    setModalDesc(null);
  }

  function handleAddToCart(item) {
    if (cartItems.some((producto) => item.id === producto.id)) {
      const upDateQty = cartItems.map((product) =>
        product.id === item.id ? { ...item, qty: item.qty } : { ...product },
      );

      setCartItems(upDateQty);

      Swal.fire({
        icon: "success",
        title: "Cantidad de producto actualizada",
        confirmButtonColor: "#ee2b6c",
      });
    } else {
      setCartItems((cartItems) => [...cartItems, item]);
      Swal.fire({
        icon: "success",
        title: "agregaste el producto al carrito",
        confirmButtonColor: "#ee2b6c",
      });
    }

    handleCloseModal();
  }

  function handleRemoveFromCart(item) {
    Swal.fire({
      title: `¿seguro que quieres eliminar ${item.nombreProducto} del carrito?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ee2b6c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems((cart) =>
          cart.filter((cartItem) => cartItem.id !== item.id),
        );

        Swal.fire({
          icon: "success",
          title: `se eliminó ${item.nombreProducto} del carrito`,
          confirmButtonColor: "#ee2b6c",
        });
      }
    });
  }

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        itemsList,
        handleAddToCart,
        handleOpenModal,
        handleCloseModal,
        modalDesc,
        getItemsDb,
        handleRemoveFromCart,
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
