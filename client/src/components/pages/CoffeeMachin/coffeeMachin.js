import React from "react";
import styles from "./coffeeMachin.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import Best from '../../features/BestSeller/best';
import ProductMachinView from '../../features/ProductView/machin/ProductMachinViewContainer';
import arg from '../../db';

const CoffeeMachin = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Idealne maszyny dla ciebie"/>
      <section className={styles.bestProductBox}>
      {arg.map(el =><Best key={el.id}{...el}/>)}
      </section>
     <ProductMachinView/>
    </div>
  </div>
);


export default CoffeeMachin;
