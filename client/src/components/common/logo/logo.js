import React from "react";
import styles from "./logo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Logo = () => (
  <div className={styles.logo}>
    <FontAwesomeIcon icon={faCoffee} className={styles.logoIcon} />
  </div>
);

export default Logo;
