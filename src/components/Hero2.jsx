






import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images4/p1.jpg';
import car2 from '../Images4/p2.jpg';
import car3 from '../Images4/p3.jpg';
import car4 from '../Images4/p4.jpg';
import car5 from '../Images4/bgdark.png';
import car6 from '../Images4/p6.jpg';
import car7 from '../Images4/p7.jpg';
import car8 from '../Images4/p8.jpg';
import car9 from '../Images4/p9.jpg';
import car10 from "../Images4/p10.png";
import car11 from "../Images4/p11.jpg";
import car12 from "../Images4/p12.jpg";

import car22 from "../Images4/bglight.png";
import { Context } from './Context';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
 background-image: url(${({ theme }) => (theme === 'dark' ? car5 : car22)});
background-position:center;
background-size:cover;
  // background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fbbf24;

  margin-bottom: 1rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Slider = styled.div`
  display: flex;

  align-items:center;
  position: absolute;
//   bottom: 0;
  width: fit-content;
  white-space: nowrap;
  transition: transform 0.5s linear;
`;

const CarImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 100px;
  margin: 0 2rem;
  transition: transform 0.3s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.1);
  }
`;

// Hero Component
const Hero2 = () => {
  //  const { theme } = useContext(Context);
const theme = useSelector((state)=>state.theme)
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);

  const carImages = [
    car1, car2, car3, car4, car6, car7,car8,car9, car10,car11,car12
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const sliderWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.parentElement.offsetWidth;

        // Calculate next position
        const nextPosition = prev - containerWidth / 2;
        return nextPosition <= -sliderWidth ? 0 : nextPosition;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer theme={theme === true ? 'light' : 'dark'}>
      <HeroContent>
        {/* <HeroTitle>Explore our innovative cars designed for performance, luxury, and sustainability. Your dream car awaits!</HeroTitle> */}
        {/* <HeroSubtitle>Explore our innovative cars designed for performance, luxury, and sustainability. Your dream car awaits!</HeroSubtitle> */}
      </HeroContent>
      <Slider
        ref={sliderRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {carImages.map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero2;







