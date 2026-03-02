// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Swal from "sweetalert2";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getItems() {
  const querySnapShot = await getDocs(collection(db, "productos"));
  const arr = [];

  querySnapShot.forEach((prod) => arr.push({ id: prod.id, ...prod.data() }));

  return arr;
}

async function getSingleItem(id) {
  const ref = doc(db, "productos", id);
  const snap = await getDoc(ref);
  const item = await snap.data();

  return { ...item, id: id };
}

async function createInvoice(carrito, id, carritoPrecio) {
  try {
    const docRef = await addDoc(collection(db, "facturas"), {
      idCompra: id,
      precioTotal: carritoPrecio,
      productos: [...carrito],
    });

    Swal.fire({
      title: `Compra agendada`,
      html: `Tu compra con id <b>${docRef.id}</b> ha sido agendada exitosamente, puedes seguir viendo mas de nuestros productos en el catalogo`,
      icon: "success",
      confirmButtonColor: "rgba(238, 43, 108, 0.633)",
    });
  } catch (err) {
    console.error(err);
  }
}

export { getItems, getSingleItem, createInvoice };
