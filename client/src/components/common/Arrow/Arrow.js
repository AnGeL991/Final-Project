import React from 'react'
import styles from "./Arrow.module.scss";
import { css, jsx } from '@emotion/core'
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

const Arrow =({ direction,handleClick}) => (
    <div
    onClick={handleClick}
    className={styles.arrow}
    css ={
        css
        `${direction === 'right' ? `right:25px`: `left: 25px`};
        img{
            transform:translateX(${direction === 'left' ? '-2': '2'}px);
        }`
    }
    >
    {direction === 'right' ? <ArrowRight/> : <ArrowLeft/>}
    </div>
)

export default Arrow;