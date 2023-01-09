import React, { useState } from "react";
import "./carousel.scss";

const Carousel = (appartment) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstSlide = currentIndex === 0;
  const slidesLength = appartment.pictures.length;
  const isLastSlide = currentIndex === slidesLength - 1;
  

  const goToPrevious = () => {
    const newIndex = isFirstSlide ? slidesLength - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  
  return (
    <div className="carouselContainer">
     <div className="carousel">
     { slidesLength > 1 &&
        <>
          <div className="leftArrow" onClick={goToPrevious}>❮</div>
          <div className="rightArrow" onClick={goToNext}>❯</div>
          <div className="pictureCount">{currentIndex + 1}/{slidesLength}</div>
        </>
     }
        {/* <!-- slide 1 --> */}
        <div className="imgContainer visible">
          <img
            src={appartment.pictures[currentIndex]}
            alt="photos du bien"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
