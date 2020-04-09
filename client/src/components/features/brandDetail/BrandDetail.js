import React from "react";
import styles from "./BrandDetail.module.scss";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";

const BrandDetail = ({
  img,
  title,
  firstButton,
  secondButton,
  description,
}) => (
  <div>
    <div className={styles.box}>
      <div className={styles.brandDetailbox}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.brandImg} src={img} alt="brand" />
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonPosition}>
          <div className={styles.position}>
            <Button>{firstButton}</Button>
          </div>

          <div className={styles.position}>
            <Button>{secondButton}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
BrandDetail.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  firstButton: PropTypes.string.isRequired,
  secondButton: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BrandDetail;
