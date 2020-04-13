import React from "react";
import styles from "./Coffee.module.scss";
import HeaderShop from '../../features/headerShop/headerShop';
import Best from '../../features/BestSeller/best';
import ProductCoffeeView from '../../features/ProductView/coffee/ProductCoffeeViewContainer';
import arg from '../../db';


class Coffee extends React.Component{ 
 
  render(){
    return (
      <div className={styles.container}>
      <div className={styles.shopBox}>
        <HeaderShop title="Najlepsza palona kawa"/>
        <section className={styles.bestProductBox}>
        {arg.map(el =><Best key={el.id}{...el}/>)}
        
        </section>
      <ProductCoffeeView />
      </div>
    </div>
  );
    
  }
 
}

export default Coffee;
