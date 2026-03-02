import Swal from "sweetalert2";
import { useStoreContext } from "../../context/StoreContext";
import styles from "./CartCheckout.module.css";
import { useNavigate } from "react-router";
import { createInvoice } from "../../firebase/firebase";
function CartSideBar() {
  const { cartItems, handleDeleteCart } = useStoreContext();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => item.precioProducto * item.qty + acc,
    0,
  );

  function handleConfirmOrder() {
    Swal.fire({
      title: "Quieres confirmar el pedido? ",
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
      confirmButtonColor: "rgba(238, 43, 108, 0.633)",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = crypto.randomUUID();

        createInvoice(cartItems, id, total);
        handleDeleteCart();
        navigate("/Catalog");
      } else if (result.isDenied) {
        navigate("/Catalog");
        Swal.fire("orden no confirmada");
      }
    });
  }
  return (
    <div className={styles.checkoutContainer}>
      <h2>
        total:{" Ref. "}
        {total}
      </h2>
      <button
        className={styles.checkoutBtn}
        // onClick={async () => {
        //   await fetch("http://localhost:3001/api/email", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       to: "gustavoesoler0@gmail.com",
        //       name: "gustavo",
        //     }),
        //   }).then((res) => console.log(res));
        // }}
        onClick={() => {
          handleConfirmOrder();
        }}
      >
        Realizar Pedido
      </button>
    </div>
  );
}

export default CartSideBar;
