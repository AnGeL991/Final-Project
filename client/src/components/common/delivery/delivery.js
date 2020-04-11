import React from 'react';
import styles from './delivery.module.scss';
import PropTypes from 'prop-types';

const Delivery =({
    label,
    description
})=> (
    <div className={styles.delivery}>
    <span className={styles.name}>
        <span className={styles.radioWrap}>
            <input type="radio" checked="checked"></input>
        </span>
        <label>{label}</label>
        <span className={styles.desription}>{description}</span>
    </span>
</div>

);
Delivery.propTypes ={
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Delivery;