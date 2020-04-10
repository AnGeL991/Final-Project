import React from "react";
import styles from "./yerba.module.scss";
import HeaderShop from "../../features/headerShop/headerShop";
import BestSeller from "../../features/BestSeller/bestSeller";
import ProductYerbaView from "../../features/ProductView/yerba/ProductYerbaViewContainer";

const Yerba = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Cos na lepszy dzień" />
      <section className={styles.bestProductBox}>
        <BestSeller
          title="Product tygodnia"
          price="123 zł."
          type="Kawa ziarnista"
          composition="40% Arabica"
          weight="5kg"
        />
        <BestSeller
          title="Bestsellery"
          price="123 zł."
          type="Kawa ziarnista"
          composition="40% Arabica"
          weight="5kg"
        />
      </section>
      <ProductYerbaView />
    </div>
  </div>
);

export default Yerba;
