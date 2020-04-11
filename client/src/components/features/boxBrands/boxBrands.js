import React from "react";
import styles from "./boxBrands.module.scss";
import Button from "../../common/Button/Button";
import { NavLink } from "react-router-dom";
import Slider from '../../common/Slider/Slider';
import images from '../../../img/image';

const BoxBrands = () => (
  <div className={styles.container}>
    <div className={styles.opinion}>
      <section className={styles.slider}>
      <Slider slides={images} autoPlay={2}/>
      </section>
    

      <div className={styles.Position}>
        <Button className={styles.button}>
          <NavLink to="/producenci">
            Nasze Marki
          </NavLink>
        </Button>
      </div>
    </div>
  </div>
);

export default BoxBrands;

   