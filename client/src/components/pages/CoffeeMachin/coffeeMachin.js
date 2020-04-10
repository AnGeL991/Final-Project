import React from "react";
import styles from "./coffeeMachin.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import BestSeller from '../../features/BestSeller/bestSeller';
import ProductMachinView from '../../features/ProductView/machin/ProductMachinViewContainer';


const CoffeeMachin = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Idealne maszyny dla ciebie"/>
      <section className={styles.bestProductBox}>
        <BestSeller title='Product tygodnia' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
        <BestSeller title='Bestsellery' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
      </section>
     <ProductMachinView/>
    </div>
  </div>
);


export default CoffeeMachin;
