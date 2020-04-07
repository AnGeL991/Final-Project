import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.box}>
      <h3>Moje konto</h3>
      <Link to="/">Twoje zamówienia</Link>
      <Link to="/">Ustawienia konta</Link>
      <Link to="/">Zgarnij rabat</Link>
      <Link to="/">Dołącz do nas</Link>
    </div>
    <div className={styles.box}>
      <h3>Dostawa</h3>
      <Link to="/">Płatności</Link>
      <Link to="/">Czas i koszt dostawy</Link>
      <Link to="/">Odbiór osobisty</Link>
      <Link to="/">Faktury i paragony</Link>
    </div>
    <div className={styles.box}>
      <h3>Bezpieczeństwo</h3>
      <Link to="">Bezpieczeństwo i RODO</Link>
      <Link to="">Reklamacja i zwroty</Link>
      <Link to="">Regulamin</Link>
    </div>
  </footer>
);

export default Footer;
