import React from "react";
import styles from "./yerba.module.scss";
import HeaderShop from "../../features/headerShop/headerShop";
import Best from "../../features/BestSeller/best";
import ProductYerbaView from "../../features/ProductView/yerba/ProductYerbaViewContainer";
import arg from '../../db';

const Yerba = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Cos na lepszy dzień" />
      <section className={styles.bestProductBox}>
      {arg.map(el =><Best key={el.id}{...el}/>)}
      </section>
      <ProductYerbaView />
    </div>
  </div>
);

export default Yerba;
