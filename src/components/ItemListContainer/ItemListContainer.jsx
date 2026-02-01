import { useEffect, useMemo, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { useSearchParams } from "react-router";
import Swal from "sweetalert2";
import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import { useStoreContext } from "../../context/StoreContext";

const items = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1648959855748-aa385fca0f68?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "flor 1",
    price: "30$",
    category: "flower",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1669997826684-785d9039f547?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "flor 2",
    price: "20$",
    category: "flower",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "flor 3",
    price: "10$",
    category: "flower",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1674068281258-7618321e30f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "caja 1",
    price: "30$",
    category: "box",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1617118601021-4992c028fe5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "caja 2",
    price: "20$",
    category: "box",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1575384043001-f37f48835528?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "caja 3",
    price: "10$",
    category: "box",
  },
]; //variable provisional

export default function ItemListContainer() {
  const [itemsList, setItems] = useState([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const { modalDesc, handleOpenModal, handleCloseModal, handleAddToCart } =
    useStoreContext();

  useEffect(function () {
    const id = setTimeout(() => {
      setItems(items);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  const filteredItems = useMemo(() => {
    if (!filter || filter === "all-gifts") return itemsList;
    if (filter === "flowers")
      return itemsList.filter((item) => item.category === "flower");
    if (filter === "gift-boxes")
      return itemsList.filter((item) => item.category === "box");
  }, [filter, itemsList]);

  return (
    <>
      <ul className={styles.itemContainer}>
        {itemsList.length === 0 ? (
          <SpinnerCircularFixed
            size={90}
            thickness={100}
            speed={100}
            color="rgba(238, 43, 108)"
            secondaryColor="rgba(172, 57, 57, 0)"
          />
        ) : (
          filteredItems.map((item, i) => (
            <Item item={item} key={i} onOpenModal={handleOpenModal} />
          ))
        )}
      </ul>

      {modalDesc && (
        <DetailsModal
          item={modalDesc}
          onCloseModal={handleCloseModal}
          onAddItem={handleAddToCart}
        />
      )}
    </>
  );
}
