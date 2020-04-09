import React from 'react';
import styles from './productBox.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const productBox =({title,type,composition,weight,availability,price})=> (
    <div className={styles.conteiner}>
        <div className={styles.img}>
            <img src='https://images.unsplash.com/photo-1474683396613-94f0629b3a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' alt='Product'/>
        </div>
        <div className={styles.specification}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.specificationBox}>
            <p>Rodzaj: <b>{type}</b></p>
            <p>Skład: <b>{composition}</b></p>
            <p>Waga: <b>{weight}</b></p>
            </div>
            <div>
                <p>Dostępność:icona (true or false)</p>
                <p className={styles.price}>{price} zł</p>
            </div>

            <Button>Do koszyka</Button>
        </div>

    </div>
);

productBox.propTypes ={
    title: PropTypes.string.isRequired,
    //image:PropTypes.image,
    type:PropTypes.string.isRequired,
    composition:PropTypes.string.isRequired,
    weight:PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    price: PropTypes.number,
    discount: PropTypes.number,
}
export default productBox;
