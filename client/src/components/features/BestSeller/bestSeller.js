import React from "react";
import styles from "./bestSeller.module.scss";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import ArrowRight from "../../common/Arrow/ArrowRight";
import ArrowLeft from "../../common/Arrow/ArrowLeft";

const bestSeller = ({
  title,
  secondTitle,
  price,
  type,
  composition,
  weight,
}) => (
  <div className={styles.bestProduct}>
    <div className={styles.arrow}>
      <ArrowLeft />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <h4 className={styles.secondTitle}>{secondTitle}Nazwa</h4>
    <img
      src="https://images.unsplash.com/photo-1542109545-6cf5d8a3bcd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      alt="produkt"
      className={styles.img}
    />
    <p className={styles.price}>{price}</p>
    <p>
      Rodzaj: <b>{type}</b>{" "}
    </p>
    <p>
      skład: <b>{composition}</b>{" "}
    </p>
    <p>
      Waga: <b>{weight}</b>
    </p>
    <Button>Do Koszyka</Button>
    <div className={styles.arrow}>
      <ArrowRight />
    </div>
  </div>
);

bestSeller.propTypes = {
  title: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  //image: PropTypes.image.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  composition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default bestSeller;
