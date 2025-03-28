import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import your images
import carnow1 from "../Images/carnow (1).jpeg";
import carnow2 from "../Images/carnow (2).jpeg";
import carnow3 from "../Images/carnow (3).jpeg";
import carnow4 from "../Images/carnow (4).jpeg";
import carnow5 from "../Images/carnow (5).jpeg";
import carnow6 from "../Images/carnow (6).jpeg";
import carnow7 from "../Images/carnow (7).jpeg";
import carnow8 from "../Images/carnow (8).jpeg";
import carnow9 from "../Images/carnow (9).jpeg";
import carnow10 from "../Images/carnow (10).jpeg";
import carnow11 from "../Images/carnow (11).jpeg";
import carnow12 from "../Images/carnow (12).jpeg";
import carnow13 from "../Images/carnow (13).jpeg";
import carnow14 from "../Images/carnow (14).jpeg";
import carnow15 from "../Images/carnow (15).jpeg";
import carnow16 from "../Images/carnow (16).jpeg";
import carnow17 from "../Images/carnow (17).jpeg";
import carnow18 from "../Images/carnow (18).jpeg";
import carnow19 from "../Images/carnow (19).jpeg";
import carnow20 from "../Images/carnow (20).jpeg";

const images = [
  carnow1, carnow2, carnow3, carnow4, carnow5, 
  carnow6, carnow7, carnow8, carnow9, carnow10, 
  carnow11, carnow12, carnow13, carnow14, carnow15, 
  carnow16, carnow17, carnow18, carnow19, carnow20
];


const CarouselContainer = styled.div`
padding-top:20px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

const Slide = styled.div`
  min-width: 100%;
  transition: 0.5s;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  ${(props) => (props.left ? 'left: 10px;' : 'right: 10px;')}
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Hero6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <SlideWrapper translate={-currentIndex * 100}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <Arrow left onClick={prevSlide}>
        ❮
      </Arrow>
      <Arrow onClick={nextSlide}>❯</Arrow>
    </CarouselContainer>
  );
};

export default Hero6;
