import React from "react";
import styles from "./Coffee.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import BestSeller from '../../features/BestSeller/bestSeller';
import ProductBox from '../../common/ProductBox/productBox';

const Coffee = () => (
  <div className={styles.container}>
    <div className={styles.shopBox}>
      <HeaderShop title="Najlepsza palona kawa"/>
      <section className={styles.bestProductBox}>
        <BestSeller title='Product tygodnia' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
        <BestSeller title='Bestsellery' price='123 zł.' type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
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
         <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        />
         <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        /> <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        /> <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        /> <ProductBox 
        title='title' 
        type='kawa ziarniska'
        composition='100% arabica'
        weight='5kg'
        price='249'
        />
        </div>
        <div className={styles.centerWrap}>
          <ul className={styles.paginator}>
            <li className={styles.first}><a>..</a></li>
            <li><a>1</a></li>
            <li><a>...</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
            <li><a>4</a></li>
          </ul>
        </div>
       
      </section>
    </div>
  </div>
);

export default Coffee;
