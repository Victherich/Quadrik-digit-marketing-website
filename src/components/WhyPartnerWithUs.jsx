import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaGlobe, FaLeaf, FaChartLine, FaTools } from 'react-icons/fa';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import car10 from '../Images/car10.jpg'
import car17 from '../Images/car17.jpg'

// Define fade-in and slide animations
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

// Define light and dark theme colors
const lightTheme = {
//   background: 'linear-gradient(90deg, #f8fafc, #e2e8f0)',
  background: '#f8fafc',
  text: '#1e293b',
  primary: '#FF7133',
  secondary: '#eab308',
  accent: '#fbbf24',
  carT:car17,
  cardBackground:"rgba(255,255,255,0.5)"
};

const darkTheme = {
  background: 'linear-gradient(90deg, #0f172a, #1e293b)',
  text: '#ffffff',
  primary: '#fbbf24',
  secondary: '#eab308',
  accent: '#FF7133',
  carT:car10,
  cardBackground:"rgba(0,0,0,0.5)"
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: ${({ theme }) => theme.background};
  // background-image: url(${({ theme }) => (theme === 'dark' ? car10 : car17)});
   background-image: url(${({ theme }) => theme.carT});
   background-position:center;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  animation: ${fadeIn} 1s ease;

`;

const TitleSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
`;

const TitleText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  // color:#1e293b;
  color: ${({ theme }) => theme.primary};
  text-align: center;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 1rem;
//    background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
 
  background: ${({ theme }) => (theme === 'dark' ?  'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)')};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

// #1e293b

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  // color: ${({ theme }) => theme.primary};
  // color:${({ theme }) => (theme === 'dark' ? '#f4f4f4' : '#94a3b8')}:
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.accent};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const WhyPartnerWithUs = () => {
  const { theme } = useContext(Context); // Get the current theme from context
  const navigate = useNavigate();

  return (
    <Container theme={theme === true ? lightTheme : darkTheme}>
      <TitleSection theme={theme === true ? lightTheme : darkTheme}>
        <TitleText theme={theme === true ? 'light' : 'dark'}>Why Partner with FAC Trade Track Ltd.?</TitleText>
      </TitleSection>

      <ContentSection>
        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? lightTheme : darkTheme}>
            <FaGlobe />
          </IconWrapper>
          <Title theme={theme === true ? lightTheme : darkTheme}>Global Expertise, Local Impact</Title>
          <Text>Combining international partnerships with deep local knowledge to deliver world-class projects.</Text>
        </Column>

        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? lightTheme : darkTheme}>
            <FaLeaf />
          </IconWrapper>
          <Title theme={theme === true ? lightTheme : darkTheme}>Sustainability Focus</Title>
          <Text>A commitment to reducing carbon emissions and promoting renewable energy.</Text>
        </Column>

        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? lightTheme : darkTheme}>
            <FaChartLine />
          </IconWrapper>
          <Title theme={theme === true ? lightTheme : darkTheme}>Economic Growth Catalyst</Title>
          <Text>Driving industrial growth, creating jobs, and fostering innovation.</Text>
        </Column>

        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? lightTheme : darkTheme}>
            <FaTools />
          </IconWrapper>
          <Title theme={theme === true ? lightTheme : darkTheme}>End-to-End Solutions</Title>
          <Text>Offering a comprehensive suite of services, from vehicle manufacturing to infrastructure development.</Text>
        </Column>
      </ContentSection>

      {/* <Button theme={theme === true ? lightTheme : darkTheme} onClick={() => navigate('/aboutus')}>
        View More <FaArrowRight />
      </Button> */}
    </Container>
  );
};

export default WhyPartnerWithUs;
