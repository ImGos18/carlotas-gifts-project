import { Link, NavLink } from "react-router";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import MobileNav from "../MobileNav/MobileNav";
export default function NavBar() {
  return (
    <>
      <nav className={`${styles.navPrimary} ${styles.mobilePrimary}`}>
        <Link to={"/"}>
          <img src="/carlotagifts-logo.png" alt="" className={styles.navLogo} />
        </Link>
        <ul className={styles.linkList}>
          <NavLink to={"/"} className={styles.linkItem}>
            Inicio
          </NavLink>
          <NavLink to={"/Catalog?filter=all-gifts"} className={styles.linkItem}>
            Catalogo
          </NavLink>
          <NavLink to={"/About"} className={styles.linkItem}>
            Acerca de
          </NavLink>
        </ul>
        <div className={styles.cartProfile}>
          <CartWidget />
        </div>
      </nav>

      <nav className={`${styles.mobileSecundary}`}>
        <MobileNav />
      </nav>
    </>
  );
}
