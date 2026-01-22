import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="/carlotagifts-logo.png"
        alt="footer logo"
        className={styles.footerImg}
      />
      <p>
        Todos los derechos reservados {new Date().getFullYear()} Carlota's Gifts
      </p>
    </footer>
  );
}

export default Footer;
