import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useStoreContext } from "../../context/StoreContext";
import styles from "./ItemView.module.css";
import NumOrderedItems from "../NumOrderedItems/NumOrderedItems";
import { useEffect, useState } from "react";
import { getSingleItem } from "../../firebase/firebase";

function ItemView() {
  const { id } = useParams();
  const { cartItems, handleAddToCart } = useStoreContext();
  const [item, setItem] = useState([]);
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const [itemCount, setItemCount] = useState(0);
  function handleUpdateItem(operation) {
    if (operation === "substract" && itemCount > 0)
      setItemCount((count) => count - 1);
    if (operation === "add") setItemCount((count) => count + 1);
  }

  useEffect(
    function () {
      getSingleItem(id).then((data) => {
        setItem(data);

        const cartIndex = cartItems.findIndex((item) => item.id === data.id);

        setItemCount(cartItems.at(cartIndex)?.qty || 0);
      });
    },
    [id, cartItems],
  );

  return (
    <>
      <NavBar />
      <div className={styles.ItemView}>
        <img src={item.img} alt={item.name} className={styles.image} />
        <div className={styles.infoContainer}>
          <span className={styles.name}>{item.nombreProducto}</span>
          <span className={styles.price}>Ref. {item.precioProducto}</span>
        </div>
        <p>
          {item.descripcion ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nesciunt quam perferendis. Odio aspernatur quidem, asperiores quam rem omnis cumque. Quos distinctio esse, animi delectus sit incidunt ipsum aut odio"}
        </p>

        <NumOrderedItems
          item={item}
          itemCount={itemCount}
          isInCart={isInCart}
          onUpdateItemCount={handleUpdateItem}
          onAdditem={handleAddToCart}
        />
      </div>

      <Footer />
    </>
  );
}

export default ItemView;
