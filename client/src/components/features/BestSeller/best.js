import React from 'react'
import styles from './bestSeller.module.scss'
import PropTypes from 'prop-types'
import Button from '../../common/Button/Button'



const best = ({ title, secondTitle,image, composition, weight, type, price }) => (
  <div className={styles.bestProduct}>
    <h3 className={styles.title}>{title}</h3>
    <h4 className={styles.secondTitle}>{secondTitle}</h4>
    <img
      src={image}
      alt="produkt"
      className={styles.img}
    />
    <p className={styles.price}>{price} zł</p>
    <p>
      Rodzaj: <b>{type}</b>
    </p>
    {!composition  ? '' : <p>
      skład: <b>{composition}</b>
    </p>}
    <p>
      Waga: <b>{weight}</b>
    </p>
    <div className={styles.position}>
    <Button>Do Koszyka</Button>
    </div>
    
  </div>
)

best.propTypes = {
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  composition: PropTypes.string,
  weight: PropTypes.string
}
export default best
