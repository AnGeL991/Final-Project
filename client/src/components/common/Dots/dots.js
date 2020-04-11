/** @jsx jsx */
import React from "react";
import styles from "./dots.module.scss";
import { css, jsx } from "@emotion/core";

const Dot = ({ active }) => (
  <span
    className={styles.dot}
    css={css`
      background: ${active ? "black" : "white"};
    `}
  />
);

const Dots = ({ slides,activeIndex}) => (
    <div className={styles.dots}>
        {slides.map((slide,i) => (
            <Dot key={slide} active={activeIndex === i}/>
        ))}
    </div>
)

export default Dots;