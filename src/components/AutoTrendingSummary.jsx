
// // AutoTrendingSummary.js
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowRight } from 'react-icons/fa';
// import car10 from "../Images/car10.jpg";
// import car11 from "../Images/car11.jpg";
// import car12 from "../Images/car12.jpg";
// import car13 from "../Images/car13.jpg";
// import car14 from "../Images/car14.jpg";
// import car15 from "../Images/car15.png";
// import car16 from "../Images/car16.jpg";
// import car17 from "../Images/car17.jpg";
// import car18 from "../Images/car18.jpg";
// import car19 from "../Images/car19.jpg";
// import car20 from "../Images/car20.jpg";
// import car21 from "../Images/car21.jpg";
// import car22 from "../Images/car22.jpg";
// import { useNavigate } from 'react-router-dom';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slide = keyframes`
//   from {
//     transform: translateY(50%);
//   }
//   to {
//     transform: translateY(-50%);
//   }
// `;

// const Container = styled.div`
//   background: linear-gradient(90deg, #1e293b, #0f172a);
//   color: #ffffff;
//   padding: 2rem;
//   font-family: Arial, sans-serif;
//   text-align: center;
// `;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 100px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: #1e293b;
// `;

// const HeroText = styled.h1`
//   position: absolute;
//   z-index: 2;
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: #fbbf24;
//   text-align: center;
//   animation: ${fadeIn} 1s ease;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 100s linear infinite;
//   flex-direction:column;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 200px;
//   object-fit: cover;
// `;

// const Content = styled.div`
//   margin-top: 2rem;
//   animation: ${fadeIn} 1.5s ease;

//   p {
//     font-size: 1rem;
//     line-height: 1.5;
//     max-width: 600px;
//     margin: 0 auto 2rem auto;
//   }
// `;

// const Button = styled.a`
//   display: inline-block;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   color: #ffffff;
//   background: #fbbf24;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     background: #eab308;
//   }

//   svg {
//     margin-left: 0.5rem;
//   }
// `;

// const AutoTrendingSummary = () => {
//     const navigate = useNavigate();
//   return (
//     <Container>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroText>Auto Trending News</HeroText>
//         <SlidingImages>
//          <CarImage src={car11} alt="Car 11" />
//          <CarImage src={car12} alt="Car 12" />
//          <CarImage src={car13} alt="Car 13" />
//          <CarImage src={car14} alt="Car 14" />
//          <CarImage src={car15} alt="Car 15" />
//          <CarImage src={car16} alt="Car 16" />
//          <CarImage src={car17} alt="Car 17" />
//          <CarImage src={car18} alt="Car 18" />
//          <CarImage src={car19} alt="Car 19" />
//          <CarImage src={car20} alt="Car 20" />
//          <CarImage src={car21} alt="Car 21" />
//          <CarImage src={car22} alt="Car 22" />
//         </SlidingImages>
//       </HeroSection>

//       {/* Summary Section */}
//       <Content>
//         <p>
//           Stay updated with the latest trends and advancements in the automotive world. From electric
//           vehicles (EVs) and solar-powered technologies to autonomous driving and innovative designs,
//           the auto industry is evolving rapidly. Dive into the most exciting news and breakthroughs shaping
//           the future of transportation.
//         </p>
//         <Button onClick={()=>navigate("/autotrendingnews")}>
//           Explore More <FaArrowRight />
//         </Button>
//       </Content>
//     </Container>
//   );
// };

// export default AutoTrendingSummary;





// AutoTrendingSummary.js
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import car11 from "../Images/car11.jpg";
import car12 from "../Images/car12.jpg";
import car13 from "../Images/car13.jpg";
import car14 from "../Images/car14.jpg";
import car15 from "../Images/car15.png";
import car16 from "../Images/car16.jpg";
import car17 from "../Images/car17.jpg";
import car18 from "../Images/car18.jpg";
import car19 from "../Images/car19.jpg";
import car20 from "../Images/car20.jpg";
import car21 from "../Images/car21.jpg";
import car22 from "../Images/car22.jpg";
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slide = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(-50%);
  }
`;

const Container = styled.div`
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #1e293b, #0f172a)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
`;

const HeroText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  text-align: center;
  animation: ${fadeIn} 1s ease;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SlidingImages = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  animation: ${slide} 100s linear infinite;
  flex-direction: column;
`;

const CarImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 2rem;
  animation: ${fadeIn} 1.5s ease;

  p {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  // font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#eab308')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => (theme === 'dark' ? '#eab308' : '#fbbf24')};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const AutoTrendingSummary = () => {
  const { theme } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      {/* Hero Section */}
      <HeroSection theme={theme === true ? 'light' : 'dark'}>
        <HeroText theme={theme === true ? 'light' : 'dark'}>Auto Trending News</HeroText>
        <SlidingImages>
          <CarImage src={car11} alt="Car 11" />
          <CarImage src={car12} alt="Car 12" />
          <CarImage src={car13} alt="Car 13" />
          <CarImage src={car14} alt="Car 14" />
          <CarImage src={car15} alt="Car 15" />
          <CarImage src={car16} alt="Car 16" />
          <CarImage src={car17} alt="Car 17" />
          <CarImage src={car18} alt="Car 18" />
          <CarImage src={car19} alt="Car 19" />
          <CarImage src={car20} alt="Car 20" />
          <CarImage src={car21} alt="Car 21" />
          <CarImage src={car22} alt="Car 22" />
        </SlidingImages>
      </HeroSection>

      {/* Summary Section */}
      <Content>
        <p>
          Stay updated with the latest trends and advancements in the automotive world. From electric
          vehicles (EVs) and solar-powered technologies to autonomous driving and innovative designs,
          the auto industry is evolving rapidly. Dive into the most exciting news and breakthroughs shaping
          the future of transportation.
        </p>
        <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/autotrendingnews")}>
          Explore More <FaArrowRight />
        </Button>
      </Content>
    </Container>
  );
};

export default AutoTrendingSummary;
