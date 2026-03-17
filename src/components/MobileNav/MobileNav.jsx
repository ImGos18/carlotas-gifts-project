import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MobileNav.module.css";
import { Link, NavLink, useNavigate } from "react-router";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

// function MobileNav() {
//   return (
//     <div className={styles.navLogoContainer}>
//       <Link to={"/"}>
//         <img src="/carlotagifts-logo.png" alt="" className={styles.navLogo} />
//       </Link>
//       <Navbar
//         variant="light"
//         bg="light"
//         expand="lg"
//         className={styles.navMobile}
//       >
//         <Container fluid>
//           <Navbar.Toggle aria-controls="navbar-dark-example" />
//           <Navbar.Collapse id="navbar-dark-example">
//             <Nav>
//               <ul className={styles.linkList}>
//                 <NavLink to={"/"} className={styles.linkItem}>
//                   Inicio
//                 </NavLink>
//                 <NavLink
//                   to={"/Catalog?filter=all-gifts"}
//                   className={styles.linkItem}
//                 >
//                   Catalogo
//                 </NavLink>
//                 <NavLink to={"/About"} className={styles.linkItem}>
//                   Acerca de
//                 </NavLink>
//                 <CartWidget />
//               </ul>
//               <div className={styles.cartProfile}></div>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <div className={styles.navLogoContainer}>
      <div className={styles.homeLink}>
        <img
          src="/carlotagifts-logo.png"
          alt=""
          className={styles.navLogo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <Button
        variant="light"
        className={`${styles.navToggleBtn}`}
        onClick={handleShow}
      >
        <i className={`bi bi-list ${styles.navToggleBtnIcon}`}></i>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="end"
        className={styles.navMenu}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className={styles.navBody}>
          <ul className={styles.linkList}>
            <NavLink to={"/"} className={styles.linkItem}>
              Inicio
            </NavLink>

            <NavLink
              to={"/Catalog?filter=all-gifts"}
              className={styles.linkItem}
            >
              Catalogo
            </NavLink>
            <NavLink to={"/About"} className={styles.linkItem}>
              Acerca de
            </NavLink>
            <CartWidget />
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileNav;
