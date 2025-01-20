import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { Context } from './Context';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Light and dark theme colors
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
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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
`;

const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;
  justify-content: center;
`;

const CarImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
`;

const CarDescription = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Button = styled.button`
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

const CarDetailPage = () => {
  // const { theme } = useContext(Context);
  const theme = useSelector((state)=>state.theme)
  const { carId } = useParams();
  const navigate = useNavigate();

  const car = {
    id: 1,
    name: 'Car Model 1',
    images: ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg'],
    description: 'This is a beautiful car with great performance and style.',
  };

  return (
    <Container theme={theme === 'light' ? lightTheme : darkTheme}>
      <HeroSection theme={theme === 'light' ? lightTheme : darkTheme}>
        <HeroText theme={theme === 'light' ? lightTheme : darkTheme}>
          {car.name}
        </HeroText>
      </HeroSection>

      <CarDetails>
        {car.images.map((img, index) => (
          <CarImage key={index} src={img} alt={car.name} />
        ))}
        <CarDescription>
          <p>{car.description}</p>
        </CarDescription>
      </CarDetails>

      <Button onClick={() => navigate('/showroom')} theme={theme === 'light' ? lightTheme : darkTheme}>
        <FaArrowLeft /> Back to Showroom
      </Button>
    </Container>
  );
};

export default CarDetailPage;
