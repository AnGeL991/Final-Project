import React from "react";
import styles from "./logo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
const Logo = () => (
  <div className={styles.logo}>
    <NavLink to='/'>
    <FontAwesomeIcon icon={faCoffee} className={styles.logoIcon} />
    </NavLink>
  </div>
);

export default Logo;
