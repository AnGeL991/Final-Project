import React from "react";
import styles from "./boxBrands.module.scss";
import Button from "../../common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BoxBrands = () => (
  <div class={styles.container}>
    <div className={styles.opinion}>
      <div className={styles.leftArrow}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowCenter} />
      </div>

      <div className={styles.imgBorder}>
        <img
          alt="product brands"
          src="https://images.unsplash.com/photo-1560842877-e8fdccf4a751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
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
          src="https://images.unsplash.com/photo-1491931648265-8f68c1dc731b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        ></img>
      </div>
      <div className={styles.rightArrow}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowCenter} />
      </div>
      <div className={styles.Position}>
        <Button className={styles.button}> Nasze Marki</Button>
      </div>
    </div>
  </div>
);

export default BoxBrands;
