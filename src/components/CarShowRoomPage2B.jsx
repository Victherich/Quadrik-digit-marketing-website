

import React, { useContext, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaCarSide } from 'react-icons/fa';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
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
import Hero3 from './Hero3';
import Hero from './Hero';
import { useSelector } from 'react-redux';

// Animation keyframes for fading and sliding
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
    transform: translateX(-300%);
  }
  to {
    transform: translateX(300%);
  }
`;

// Define theme colors for light and dark mode
const lightTheme = {
  background: 'linear-gradient(90deg, #f8fafc, #e2e8f0)',
  text: '#1e293b',
  primary: '#FF7133',
  secondary: '#eab308',
  accent: '#fbbf24',
};

const darkTheme = {
  background: 'linear-gradient(90deg, #0f172a, #1e293b)',
  text: '#ffffff',
  primary: '#fbbf24',
  secondary: '#eab308',
  accent: '#FF7133',
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  animation: ${fadeIn} 1s ease;
`;

const CarGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  animation: ${fadeIn} 1.5s ease;
`;

const CarCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.accent};
  }
`;

const CarImageThumb = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

const CarTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
`;

const CarShowroomPage2B = () => {
  const { cars } = useContext(Context);
const theme = useSelector((state)=>state.theme)
  const navigate = useNavigate();
  const observer = useRef(null);



  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.tagName === 'H1' || element.tagName === 'H2') {
            // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
          } else if (element.tagName === 'P') {
            // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
          }

          // Stop observing the element after animation is triggered
          observer.current.unobserve(element);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of the element is visible
    });

    // Observe elements
    const heading = document.querySelector('h1');
    const paragraphs = document.querySelectorAll('p');

    if (heading) observer.current.observe(heading);
    paragraphs.forEach((paragraph) => observer.current.observe(paragraph));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <Container theme={theme === true ? lightTheme : darkTheme}>
      {/* <h1 ref={observer}>Explore Our Cars</h1> */}
      <CarGrid>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            theme={theme === true ? 'light' : 'dark'}
            // onClick={() => navigate(`/car/${car.id}`)}
          >
            <CarImageThumb src={car.image} alt={car.name} />
            <CarTitle theme={theme === true ? 'light' : 'dark'}>
              {car.name}
            </CarTitle>
            {/* <p theme={theme === true ? lightTheme : darkTheme}>
              Click to Explore...
            </p> */}
          </CarCard>
        ))}
      </CarGrid>
    </Container>
  );
};

export default CarShowroomPage2B;

