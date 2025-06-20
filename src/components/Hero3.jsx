


// HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images4/p1.jpg';
// import car2 from '../Images4/p2.jpg';
import car3 from '../Images4/p3.jpg';
import car4 from '../Images4/p4.jpg';
import car5 from '../Images4/p5.jpg';
import car6 from '../Images4/p6.jpg';
import car7 from '../Images4/p7.jpg';
import car8 from "../Images4/p8.jpg";
import car9 from "../Images4/p9.jpg";
import car10 from "../Images4/p10.png";
import car11 from "../Images4/p11.jpg";
import car12 from "../Images4/p12.jpg";

import { useLocation } from 'react-router-dom';
import globe from '../Images/globe.gif'

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 650px;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
 


@media(max-width:768px){
  height:250px;
  //  padding-top:120px;
}

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
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  padding-top:80px;

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
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s linear;
`;

const CarImage = styled.img`
  width: 100vw;
  // height: 100vh;
  object-fit: cover;
  // object-position: bottom;  // This will align the image's bottom edge to the container's bottom edge
  flex-shrink: 0;
`;

const Img = styled.img`
    border-radius:50%;
`

// Hero Component
const Hero3 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const locattion = useLocation();

  const carImages = [
  car1, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12 
  
  ];


useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        // Decrement the position and ensure it wraps around (circular behavior)
        const nextPosition = (prev - 1 + totalImages) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds
  
    return () => clearInterval(interval);
  }, [carImages.length]);
  


  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>CHARTING SUCCESS TOGETHER</HeroTitle>
        {locattion.pathname==='/blogs'&&<HeroTitle>OUR BLOGS</HeroTitle>}
        {locattion.pathname==='/autotrendingnews'&&<Img src={globe} alt="globe"/>}
        {/* <HeroSubtitle>Explore our innovative cars designed for performance, luxury, and sustainability. Your dream car awaits!</HeroSubtitle> */}
        {/* <HeroSubtitle>Transforming Africa’s Transportation, Infrastructure & Energy Landscape.</HeroSubtitle> */}
    
      </HeroContent>
      <Slider
        ref={sliderRef}
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero3;

