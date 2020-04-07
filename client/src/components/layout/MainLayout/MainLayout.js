import React from "react";
import styles from "./MainLayout.module.scss";
import Footer from "../Footer/Footer";
import MainMenu from "../MainMenu/MainMenu";

const MainLayout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.layout}>
      <div className={styles.bgc}>
        <MainMenu />
        {children}
      </div>
    </div>
    <Footer/>
  </div>
);

export default MainLayout;
