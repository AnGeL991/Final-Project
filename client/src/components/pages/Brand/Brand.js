import React from "react";
import styles from "./Brand.module.scss";
import BrandDetail from '../../features/brandDetail/BrandDetail';

const Brand = () => (
  <div className={styles.container}>
      <BrandDetail
      img='https://images.unsplash.com/photo-1491931648265-8f68c1dc731b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
      title='Brand'
      firstButton='Zobacz Więcej'
      secondButton='Kup Product'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
      
      ></BrandDetail>
  </div>
);

export default Brand;
