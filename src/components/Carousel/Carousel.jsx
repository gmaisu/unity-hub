import React, { useState, useRef } from "react";

import {
  Container,
  Track,
  Slide,
  SlideImage,
  ArrowLeft,
  ArrowRight,
} from "./styles";

const Carousel = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    else if (deltaX < -50) handleNext();
  };

  return (
    <Container>
      <Track
        index={index}
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {photos.map((src, i) => (
          <Slide key={i}>
            <SlideImage src={src} />
          </Slide>
        ))}
      </Track>
      <ArrowLeft onClick={handlePrev}>&#10094;</ArrowLeft>
      <ArrowRight onClick={handleNext}>&#10095;</ArrowRight>
    </Container>
  );
};

export default Carousel;
