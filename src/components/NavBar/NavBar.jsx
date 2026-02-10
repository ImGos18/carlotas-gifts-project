import { NavLink } from "react-router";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navPrimary}>
      <NavLink to={"/"}>
        <img src="/carlotagifts-logo.png" alt="" className={styles.navLogo} />
      </NavLink>
      <ul className={styles.linkList}>
        <NavLink to={"/"} className={styles.linkItem}>
          Home
        </NavLink>
        <NavLink to={"/Catalog?filter=all-gifts"} className={styles.linkItem}>
          Catalog
        </NavLink>
        <NavLink to={"/About"} className={styles.linkItem}>
          About
        </NavLink>
      </ul>
      <div className={styles.cartProfile}>
        <CartWidget />
      </div>
    </nav>
  );
}
