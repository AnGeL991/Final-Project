import React from 'react';
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

const Button =({children,click})=> (
    <button
    onClick={click}
    type='submit'
    className={styles.component}>
        {children}
    </button>
);
Button.propTypes = {
    click:PropTypes.func,
}


export default Button;