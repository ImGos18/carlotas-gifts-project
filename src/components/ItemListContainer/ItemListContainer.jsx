import { useEffect, useMemo } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { useSearchParams } from "react-router";
import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
// import DetailsModal from "../DetailsModal/DetailsModal";
import { useStoreContext } from "../../context/StoreContext";

export default function ItemListContainer() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const {
    modalDesc,
    handleOpenModal,
    handleCloseModal,
    handleAddToCart,
    itemsList,
    getItemsDb,
  } = useStoreContext();

  useEffect(
    function () {
      getItemsDb();
    },
    [getItemsDb],
  );

  const filteredItems = useMemo(() => {
    if (!filter || filter === "all-gifts") return itemsList;
    if (filter === "flowers")
      return itemsList.filter((item) => item.categoriaProducto === "flor");
    if (filter === "gift-boxes")
      return itemsList.filter((item) => item.categoriaProducto === "caja");
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

      {/* {modalDesc && (
        <DetailsModal
          item={modalDesc}
          onCloseModal={handleCloseModal}
          onAddItem={handleAddToCart}
          key={modalDesc.id}
        />
      )} */}
    </>
  );
}
