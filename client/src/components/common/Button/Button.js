import React from 'react';
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

const Button =({children})=> (
    <button
    type='submit'
    className={styles.component}>
        {children}
    </button>
);



export default Button;