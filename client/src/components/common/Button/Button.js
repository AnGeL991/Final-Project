import React from 'react';
import styles from './Button.module.scss'


const Button =({children})=> (
    <button
    type='button'
    className={styles.component}>
        {children}
    </button>
);


export default Button;