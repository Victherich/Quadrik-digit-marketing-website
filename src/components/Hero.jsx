

// // HeroSection.js
// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';  
// import car1 from '../Images/car1.jpeg';
// import car2 from '../Images/car2.jpeg';
// import car3 from '../Images/car3.jpeg';
// import car4 from '../Images/car4.jpeg';
// import car5 from '../Images/car5.jpeg';
// import car6 from '../Images/car6.jpeg';
// import car7 from '../Images/car7.jpeg';

// // Styled Components
// const HeroContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: linear-gradient(90deg, #0f172a, #1e293b);
//   overflow: hidden;
//   color: #ffffff;
// `;

// const HeroContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   z-index: 2;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   color: #fbbf24;
//   margin-bottom: 1rem;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.5rem;
//   line-height: 1.5;
//   max-width: 600px;
//   margin: 0 auto;
//   opacity: 0.9;
//   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;


// const Slider = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transition: transform 1s linear;
// `;

// const CarImage = styled.img`
//   width: 100vw;
//   height: 100vh;
//   object-fit: cover;
//   flex-shrink: 0;
// `;

// // Hero Component
// const Hero = () => {
//   const sliderRef = useRef(null);
//   const [position, setPosition] = useState(0);

//   const carImages = [
//     car1, car2, car3, car4, car5, car6, car7
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prev) => {
//         const totalImages = carImages.length;
//         const nextPosition = (prev + 1) % totalImages;
//         return nextPosition;
//       });
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [carImages.length]);

//   return (
//     <HeroContainer>
//       <HeroContent>
//         <HeroTitle>FAC TRADE TRACK LTD</HeroTitle>
//         {/* <HeroSubtitle>Explore our innovative cars designed for performance, luxury, and sustainability. Your dream car awaits!</HeroSubtitle> */}
//         <HeroSubtitle>Transforming Africa’s Transportation, Infrastructure & Energy Landscape.</HeroSubtitle>
    
//       </HeroContent>
//       <Slider
//         ref={sliderRef}
//         style={{ transform: `translateX(-${position * 100}vw)` }}
//       >
//         {carImages.concat(carImages).map((car, index) => (
//           <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
//         ))}
//       </Slider>
//     </HeroContainer>
//   );
// };

// export default Hero;




import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
import car7 from '../Images/car7.jpeg';

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: linear-gradient(90deg, #0f172a, #1e293b);
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
  font-size: 3rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @keyframes flyInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @keyframes flyInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  height: 100vh;
  object-fit: cover;
  flex-shrink: 0;
`;

// Hero Component
const Hero = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const carImages = [car1, car2, car3, car4, car5, car6, car7];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        const nextPosition = (prev + 1) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carImages.length]);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sliderRef}>
      <HeroContent>
        <HeroTitle isVisible={isVisible}>FAC TRADE TRACK LTD</HeroTitle>
        <HeroSubtitle isVisible={isVisible}>
          Transforming Africa’s Transportation, Infrastructure & Energy Landscape.
        </HeroSubtitle>
      </HeroContent>
      <Slider
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero;

