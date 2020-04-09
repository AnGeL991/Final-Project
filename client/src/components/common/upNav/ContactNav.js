import React from "react";
import styles from "./ContactNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faPhone,
  faRegistered,
  faMailBulk,
  faSignInAlt,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from '../SearchBox/searchBox';
const ContactNav = () => (
  <div>
    <div className={styles.data}>
      <ul className={styles.firstnav}>
        <li>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <a>+48 999 999 999</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faMobile} className={styles.icon} />
          <a> +48 321 323 323</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faMailBulk} className={styles.icon} />
          <a> sklep-z-kawa@test.pl</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} className={styles.icon} />
          <a>Zarejestruj się</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} />
          <a>Zaloguj się</a>
        </li>
      </ul>
    </div>
    <div className={styles.purchase}>
      <div className={styles.widthSearch}>
     <SearchBox placeholder='Wyszukaj'/>
     </div>
      <div className={styles.basket}>
       <a href="#" title="koszyk" className={styles.count}>
         <img></img>Koszyk
       </a>
       <div className={styles.circleSearch}>
         <FontAwesomeIcon icon={faShoppingBasket} className={styles.circleIcon}/>
       </div>
      </div>
    </div>
  </div>
);

export default ContactNav;
