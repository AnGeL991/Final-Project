import React from "react";
import styles from "./boxBrands.module.scss";
import Button from "../../common/Button/Button";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../common/Arrow/ArrowLeft";
import ArrowRight from "../../common/Arrow/ArrowRight";
import Slider from '../../common/Slider/Slider';

const images = [
  'https://images.unsplash.com/photo-1520251096133-9a1b83041b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
];

const BoxBrands = () => (
  <div className={styles.container}>
    <div className={styles.opinion}>
      <div className={styles.arrow}>
        <ArrowRight />
      </div>
      <section className={styles.slider}>
      <Slider slides={images}/>
      </section>
      <div className={styles.arrow}>
        <ArrowLeft />
      </div>

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

    {/* <div className={styles.imgBorder}>
          <img
            alt="product brands"
            src="https://images.unsplash.com/photo-1520251096133-9a1b83041b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          ></img>
        </div>
        <div className={styles.imgBorder}>
          <img
            alt="product brands"
            src="https://images.unsplash.com/photo-1520251096133-9a1b83041b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          ></img>
        </div>
        <div className={styles.imgBorder}>
          <img
            alt="product brands"
            src="https://images.unsplash.com/photo-1520251096133-9a1b83041b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          ></img>
        </div>
        <div className={styles.imgBorder}> */}
          {/* <img
            alt="product brands"
            src="https://images.unsplash.com/photo-1491931648265-8f68c1dc731b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          ></img>
        </div> */}