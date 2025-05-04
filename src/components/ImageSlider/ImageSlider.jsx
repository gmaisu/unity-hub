import React, { useRef, useState } from "react";

import { Slider, Slides, Slide } from "./styles.js";

const ImageSlider = ({ photos }) => {
  const sliderRef = useRef(null);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [startX, setStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const slideWidth = 600;
  const imageCount = 3;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const moveX = e.touches[0].clientX;
    const diff = moveX - startX;

    sliderRef.current.style.transform = `translateX(${
      currentTranslate + diff
    }px)`;
  };

  const handleTouchEnd = () => {
    setDragging(false);

    const matrix = new WebKitCSSMatrix(
      getComputedStyle(sliderRef.current).transform
    );

    let offset = Math.round(matrix.m41 / -slideWidth) * slideWidth;

    if (offset < 0) offset = 0;
    if (offset > (imageCount - 1) * slideWidth)
      offset = (imageCount - 1) * slideWidth;

    setCurrentTranslate(-offset);

    sliderRef.current.style.transition = "transform 0.3s ease";
    sliderRef.current.style.transform = `translateX(${-offset}px)`;

    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "";
      }
    }, 300);
  };

  return (
    <Slider
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Slides ref={sliderRef}>
        {photos.map((item, index) => (
          <Slide key={index} src={item} />
        ))}
      </Slides>
    </Slider>
  );
};

export default ImageSlider;
