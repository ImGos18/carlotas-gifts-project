import { useNavigate, useParams } from "react-router";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useStoreContext } from "../../context/StoreContext";
import styles from "./ItemView.module.css";
import NumOrderedItems from "../NumOrderedItems/NumOrderedItems";
import { useEffect, useState } from "react";
import { getSingleItem } from "../../firebase/firebase";
import { SpinnerCircularFixed } from "spinners-react";

function ItemView() {
  const { id } = useParams();
  const { cartItems, handleAddToCart } = useStoreContext();
  const [item, setItem] = useState([]);
  const isInCart = cartItems.some((cartItem) => cartItem.id === id);
  const [itemCount, setItemCount] = useState(function () {
    if (isInCart) {
      return cartItems.find((item) => item.id === id).qty;
    } else {
      return 0;
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  function handleUpdateItem(operation) {
    if (operation === "substract" && itemCount > 0)
      setItemCount((count) => count - 1);
    if (operation === "add") setItemCount((count) => count + 1);
  }

  useEffect(
    function () {
      getSingleItem(id)
        .then((data) => {
          if (!data.nombreProducto) navigate("/notfound");
          setItem(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [id, cartItems, navigate],
  );

  return (
    <>
      <NavBar />
      <div className={`${styles.ItemView} ${isLoading ? "loading" : ""}`}>
        {isLoading && (
          <SpinnerCircularFixed
            size={90}
            thickness={100}
            speed={100}
            color="rgba(238, 43, 108)"
            secondaryColor="rgba(172, 57, 57, 0)"
            className={styles.loader}
          />
        )}
        {!isLoading && (
          <>
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
              cantidad={item.cantidadDisponible}
            />
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ItemView;
