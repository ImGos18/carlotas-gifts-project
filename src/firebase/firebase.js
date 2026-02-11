// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyV77Ck4NGlIqdLIN9ktipbAgLIx0qSnw",
  authDomain: "carlotagifts-ed7ff.firebaseapp.com",
  projectId: "carlotagifts-ed7ff",
  storageBucket: "carlotagifts-ed7ff.firebasestorage.app",
  messagingSenderId: "322084482310",
  appId: "1:322084482310:web:266a34c641a79953680287",
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

export { getItems, getSingleItem };
