import React from "react";
import styles from "./tea.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import Best from '../../features/BestSeller/best';
import ProductTeaView from '../../features/ProductView/tea/ProductTeaViewContainer';
import arg from '../../db';
const Tea = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Czas na herbate"/>
      <section className={styles.bestProductBox}>
      {arg.map(el =><Best key={el.id}{...el}/>)}
      </section>
     < ProductTeaView/>
    </div>
  </div>
);

export default Tea;
