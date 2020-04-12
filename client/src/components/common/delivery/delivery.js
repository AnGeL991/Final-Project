import React from 'react';
import styles from './delivery.module.scss';
import PropTypes from 'prop-types';

const Delivery =({
    label,
    description,
    price,
})=> (
    <div className={styles.delivery}>
    <span className={styles.name}>
        <span className={styles.radioWrap}>
            <input type="checkbox" ></input>
        </span>
        <label>{label}</label>
        <span className={styles.desription}>{description}</span>
    </span>
    {!price ? '' : <span className={styles.price}>{price.toFixed(2)} zł</span>}
</div>

);
Delivery.propTypes ={
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number,
}

export default Delivery;