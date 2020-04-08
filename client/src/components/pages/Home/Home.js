import React from 'react';
import styles from './Home.module.scss';
import BoxSlider from '../../common/boxSlider/boxSlider';
import ProductInfo from '../../common/productInfo/productInfo';
import BoxBrands from '../../features/boxBrands/boxBrands';

const Home=()=>(
    <div className={styles.container}>
        <BoxSlider/>
        <ProductInfo/>
        <BoxBrands/>
      
    </div>
);


export default Home;