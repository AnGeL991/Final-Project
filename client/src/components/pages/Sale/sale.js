import React from "react";
import styles from "./sale.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import Best from '../../features/BestSeller/best';
import ProductBox from '../../common/ProductBox/productBox';
import arg from '../../db';

const Sale = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Promocje Tygodnia"/>
      <section className={styles.bestProductBox}>
      {arg.map(el =><Best key={el.id}{...el}/>)}
      </section>
      <section className={styles.productSection}>
        <div className={styles.productViewFull}>
        <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        />
        </div>
      </section>
    </div>
  </div>
);

export default Sale;
