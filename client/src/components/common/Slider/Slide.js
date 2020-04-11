/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styles from './Slider.module.scss';

const Slide = ({content}) => (
    <div
    className={styles.slide}
    css={css`
    background-image:url('${content}');
    `}
    > 
    </div>
)

export default Slide;