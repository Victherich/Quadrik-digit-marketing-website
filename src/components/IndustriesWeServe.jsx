
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

// Light & dark theme values
const lightTheme = {
  background: '#ffffff',
  text: '#1e293b',
  cardBackground: '#f1f5f9',
  accent: '#7611D1',
};

const darkTheme = {
  background: '#0f172a',
  text: '#f1f5f9',
  cardBackground: '#1e293b',
  accent: '#FDE910',
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
  transition: background 0.3s, color 0.3s;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) =>
    theme === darkTheme
      ? '0 4px 12px rgba(0,0,0,0.3)'
      : '0 4px 12px rgba(0,0,0,0.5)'};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  animation: ${fadeIn} 1s ease;
`;

const Checkmark = styled.span`
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
`;

const IndustriesWeServe = () => {
  const isLight = useSelector((state) => state.theme); // true = light
  const theme = isLight ? lightTheme : darkTheme;

  const industries = [
    'E-commerce',
    'Online Retail',
    'Health & Wellness',
    'Fashion & Beauty',
    'Travel & Tourism',
    'Education & Training',
    'Real Estate & Property',
    'Food and Beverages',
    'Automotive (Dealers, Rental Services)',
  ];

  return (
    <Container theme={theme}>
      <Title theme={theme}>Industries We Serve</Title>
      <Grid>
        {industries.map((industry, index) => (
          <Card key={index} theme={theme}>
            <Checkmark theme={theme}>✔</Checkmark>
            {industry}
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default IndustriesWeServe;
