import React from "react";
import styles from "./Brand.module.scss";
import BrandList from "../../features/BrandList/BrandListContainer";

const Brand = () => (
  <div className={styles.container}>
     <BrandList/>
  </div>
);

export default Brand;
