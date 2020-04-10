import React from "react";
import styles from "./Coffee.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import BestSeller from '../../features/BestSeller/bestSeller';
import ProductCoffeeView from '../../features/ProductView/coffee/ProductCoffeeViewContainer';


class Coffee extends React.Component{ 
  
  render(){
    return (
      <div className={styles.container}>
      <div className={styles.shopBox}>
        <HeaderShop title="Najlepsza palona kawa"/>
        <section className={styles.bestProductBox}>
          <BestSeller title='Product tygodnia' price={123} type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
          <BestSeller title='Bestsellery' price={123} type='Kawa ziarnista' composition='40% Arabica' weight='5kg'/>
        </section>
      <ProductCoffeeView/>
      </div>
    </div>
  );
    
  }
 
}

export default Coffee;
