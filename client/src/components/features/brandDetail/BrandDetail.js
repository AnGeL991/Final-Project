import React from "react";
import styles from "./BrandDetail.module.scss";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";

const BrandDetail = ({
  img,
  title,
  description,
}) => (
  <div className={styles.container}>
      <div className={styles.brandDetailbox}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.brandImg} src={img} alt="brand" />
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonPosition}>
          <div className={styles.position}>
            <button className={styles.button}>Zobacz Więcej</button>
          </div>
          <div className={styles.position}>
            <button className={styles.button}>Kup Product</button>
          </div>
        </div>
      </div>
    </div>
);
BrandDetail.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BrandDetail;
