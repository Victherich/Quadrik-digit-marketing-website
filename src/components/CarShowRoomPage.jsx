import React, { useContext } from 'react';
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

const HeroSection = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 1s ease;
`;

const SlidingImages = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  animation: ${slide} 10s linear infinite;
`;

const CarImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  z-index: 999;
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
//   color: ${({ theme }) => theme.primary};
`;

const ExploreButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.accent};
  }
`;

const CarShowroomPage = () => {
  const { cars } = useContext(Context);
const theme = useSelector((state)=>state.theme)
  const navigate = useNavigate();

  

  return (
    <Container theme={theme === true ? lightTheme : darkTheme}>
      {/* <HeroSection theme={theme === true ? lightTheme : darkTheme}>
        <HeroText theme={theme === true ? lightTheme : darkTheme}>
          Explore Our Cars
        </HeroText>
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
      </HeroSection> */}
        
      <CarGrid>
        {cars.slice(0,6).map((car) => (
          <CarCard
            key={car.id}
            theme={theme ===  true ? 'light' : 'dark'}
            // onClick={() => navigate(`/car/${car.id}`)}
          >
            <CarImageThumb src={car.image} alt={car.name} />
            <CarTitle theme={theme ===  true ? 'light' : 'dark'}>
              {car.name}
            </CarTitle>
            {/* <p
              theme={theme === true ? lightTheme : darkTheme}
            >
             Click to Explore...
            </p> */}
          </CarCard>
        ))}

        
      </CarGrid>
      <ExploreButton
              theme={theme === true ? lightTheme : darkTheme}
              style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"10px",marginTop:"50px"}}
              onClick={()=>navigate('/carshowroompage2')}
            >
              Explore More <FaArrowRight/>
            </ExploreButton>
    </Container>
  );
};

export default CarShowroomPage;
