import React, { useState, useEffect, useRef} from "react";
import styles from "./Slider.module.scss";
import styled from "@emotion/styled";
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/dots";
import { css, jsx } from '@emotion/core';
/* @function Slider */

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;
const Slide = ({ content }) => (
  <div
    css={css`
        height: 100;
        width: 100%;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
  />
);

const Slider = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlider = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: props.slides.length - 1,
    });
  };
  return (
    <div className={styles.Slider}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlider} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={props.slides} activeIndex={activeIndex}/>
    </div>
  );
};

export default Slider;
