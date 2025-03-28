

// HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
import car7 from '../Images/car7.jpeg';
import car11 from "../Images/car11.jpg";
import car12 from "../Images/car12.jpg";
import car13 from "../Images/car15.png";
import car14 from "../Images/car14.jpg";
import car15 from "../Images/car15.png";
import car16 from "../Images/car16.jpg";
import car17 from "../Images/car17.jpg";
import car18 from "../Images/car18.jpg";
import car19 from "../Images/car19.jpg";
import car20 from "../Images/car20.jpg";
import car21 from "../Images/car21.jpg";
import car22 from "../Images/car22.jpg";
import { useLocation } from 'react-router-dom';
import globe from '../Images/globe.gif'
import car2d from '../Images/car2d.jpeg'
import car3d from '../Images/car3d.jpeg'
import car4d from '../Images/car4d.jpeg'
import car5d from "../Images/car5d.jpeg"
import car6d from "../Images/car6d.jpeg"
import car7d from "../Images/car7d.jpeg"
import car11d from "../Images/car11d.jpg"
// import car12d from "../Images/car12d.png"
import car14d from "../Images/car14d.jpg"
import car15d from "../Images/car15d.png"
import car16d from "../Images/car16d.jpg";
import car17d from "../Images/car17d.jpg";
import car18d from "../Images/car18d.jpg";
import car19d from "../Images/car19d.jpg";
import car20d from "../Images/car20d.jpg";
import car21d from "../Images/car21d.jpg";
import car22d from "../Images/car22d.jpg";
import car23d from "../Images/car23d.jpeg";
import car24d from "../Images/car24d.jpeg";
import car25d from "../Images/car25d.jpeg";
import car26d from "../Images/car26d.jpeg";
import car27d from "../Images/car27d.jpeg";
import car28d from "../Images/car28d.jpeg";
import car29d from "../Images/car29d.jpeg";
import car30d from "../Images/car30d.jpeg";
import car31d from "../Images/car31d.jpeg";
import car32d from "../Images/car32d.jpeg";
import car33d from "../Images/car33d.jpeg";

import car35d from "../Images/car35d.jpeg";

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
  height:350px;
   padding-top:120px;
}

@media(max-width:428px){
  height:250px;
   padding-top:120px;
}

`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;

  @media(max-width:768px){
    top:60%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  padding-top:80px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 428px) {
    font-size: 1.2rem;
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
  // object-fit: cover;
  // object-position: bottom;  // This will align the image's bottom edge to the container's bottom edge
  flex-shrink: 0;
`;

const Img = styled.img`
    border-radius:50%;

     @media(max-width:768px){
    width:100px;
  }

    @media(max-width:428px){
    width:50px;
  }

     @media(max-width:320px){
    width:40px;
  }
`

// Hero Component
const Hero5 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const locattion = useLocation();

  const carImages = [
    car2d,
    car3d,
    car4d,
    car5d,
    car6d,
    car7d,
    car11d,
    // car12d,
    car14d,
    car15d,
    car16d,
    car17d,
    car18d,
    car19d,
    car20d,
    car21d,
    car22d,
    car23d,
    car24d,
    car25d,
    car26d,
    car27d,
    car28d,
    car29d,
    car30d,
    car31d,
    // car32d,
    // car33d,
    // car35d,
    // car1, car2, car3, car4, car5, car6, car7,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21,car22
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
        {locattion.pathname==='/carshowroompage2'&&<HeroTitle>OUR SHOW ROOM</HeroTitle>}
        {locattion.pathname==='/autotrendingnews'&&<HeroTitle>AUTO <br/> TRENDING NEWS </HeroTitle>}
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

export default Hero5;
