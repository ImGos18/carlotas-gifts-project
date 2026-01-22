import { useEffect, useState } from "react";
import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import DetailsModal from "../DetailsModal/DetailsModal";

const items = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8LMirApgj_R-O4aqqlDLVyLeIF_Dhtkepg&s",
    name: "ramo girasoles y rosas",
    price: "30$",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyOZnXvwjlPnv6JW7-BHkm9eRfQ2JjAdAvw&s",
    name: "ramo de rosas",
    price: "20$",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LX1HMtwtql4lhA33GxmHoxBTd-5bPzHpNQ&s",
    name: "ramo flores amarillas",
    price: "10$",
  },
]; //variable provisional

export default function ItemListContainer() {
  const [itemsList, setItems] = useState([]);
  const [modalDesc, setModalDesc] = useState(null);

  function handleOpenModal(item) {
    setModalDesc(item);
  }

  function handleCloseModal() {
    setModalDesc(null);
  }

  function getItems() {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setItems(items));
      }, 2000);
    });
  }

  useEffect(function () {
    getItems();
  }, []);

  return (
    <>
      <ul className={styles.itemContainer}>
        {itemsList.map((item, i) => (
          <Item item={item} key={i} onOpenModal={handleOpenModal} />
        ))}
      </ul>

      {modalDesc && (
        <DetailsModal item={modalDesc} onCloseModal={handleCloseModal} />
      )}
    </>
  );
}
