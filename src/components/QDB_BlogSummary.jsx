


// AutoTrendingSummary.js
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import car11 from "../Images4/p1.jpg";
import car12 from "../Images4/p2.jpg";
import car13 from "../Images4/p3.jpg";
import car14 from "../Images4/p4.jpg";
import car15 from "../Images4/p5.jpg";
import car16 from "../Images4/p6.jpg";
import car17 from "../Images4/p7.jpg";
import car18 from "../Images4/p8.jpg";
import car19 from "../Images4/p9.jpg";
import car20 from "../Images4/p10.png";

import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { useSelector } from 'react-redux';

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
  position: relative;
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #1e293b, #0f172a)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#7611D1')};
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => (theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)')};
    z-index: 0;
    pointer-events: none;
  }
`;



const HeroSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
`;

const Content = styled.div`
  margin-top: 2rem;
  z-index: 1;
  position: relative;
  animation: ${fadeIn} 1.5s ease;

  p {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }
`;


const HeroText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'white')};
  text-align: center;
  animation: ${fadeIn} 1s ease;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SlidingImages = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  animation: ${slide} 50s linear infinite;
  flex-direction: column;
`;

const CarImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

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

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  // font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#ffffff')};
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
  // const { theme } = useContext(Context);
  const theme = useSelector((state)=>state.theme)
  const navigate = useNavigate();

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      {/* Hero Section */}
      <HeroSection theme={theme === true ? 'light' : 'dark'}>
        <HeroText theme={theme === true ? 'light' : 'dark'}>OUR BLOGS</HeroText>
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
    
        </SlidingImages>
      </HeroSection>

      {/* Summary Section */}
      <Content>
        <p>
        Stay ahead with insights that drive results. From the latest in digital marketing and branding trends to breakthroughs in web technology, content creation, and design — our blog keeps you informed and inspired. Discover practical tips, industry updates, and creative ideas tailored for businesses in today’s fast-paced digital world.
        </p>
        <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/blogs")}>
          Explore <FaArrowRight />
        </Button>
      </Content>
    </Container>
  );
};

export default AutoTrendingSummary;
