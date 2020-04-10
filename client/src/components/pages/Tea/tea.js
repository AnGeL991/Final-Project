import React from "react";
import styles from "./tea.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import BestSeller from '../../features/BestSeller/bestSeller';
import ProductTeaView from '../../features/ProductView/tea/ProductTeaViewContainer';

const Tea = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Czas na herbate"/>
      <section className={styles.bestProductBox}>
        <BestSeller title='Product tygodnia' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
        <BestSeller title='Bestsellery' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
      </section>
     < ProductTeaView/>
    </div>
  </div>
);

export default Tea;
