/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import styles from './Slider.module.scss'
import Arrow from '../Arrow/Arrow'
import { jsx } from '@emotion/core'
import Slide from './Slide'
import SliderContent from './SliderContent';

const getWidth = () => window.innerWidth

const Slider = (props) => {
  const { slides } = props

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const thirdSlide = slides[2];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: [lastSlide,firstSlide,secondSlide,thirdSlide]
  })

  const { translate, transition, activeIndex,_slides } = state;

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const smooth = () => {
      transitionRef.current()
    }
    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize',resize);
    let interval = null;
    if(props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }
    
    return () => {
     
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
      if(props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  const handleResize = ()=> {
    setState({...state,translate:170, transition:0})
  }

  useEffect(()=> {
    if(transition === 0) setState({ ...state,transition: 0.45})
  },[transition]);

  const smoothTransition = () => {
    let _slides = []
    if (activeIndex === slides.length -1)
      _slides = [slides[slides.length - 2], lastSlide,firstSlide,]
    else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide,thirdSlide]
    else _slides = slides.slice(activeIndex -1 , activeIndex + 3)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: 0,
    })
  }

  const nextSlide = () => {
   
    setState({
      ...state,
      activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
      translate: translate + 170,
    })
  }

  const prevSlider = () => {
    setState({
      ...state,
      activeIndex: activeIndex === 0 ? slides.length -1 : activeIndex -1,
      translate: 0,
    })
  }

  return (
    <div className={styles.Slider}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>
          <Arrow direction="left" handleClick={prevSlider} />
          <Arrow direction="right" handleClick={nextSlide} />
    </div>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}
export default Slider
