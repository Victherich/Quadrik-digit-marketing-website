


import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Context } from './Context'; // Assuming you have a theme context
import { FaCar, FaCogs, FaLightbulb } from 'react-icons/fa'; // React Icons

// Background Images
import brandBackground from '../Images/car1.jpeg';
import techBackground from '../Images/tech2.png';
// import facLogo from '../Images/carlogo.jpeg';
import { useSelector } from 'react-redux';
import facLogo from '../Images/logo4.png'; 

// Define theme colors for light and dark mode
const lightTheme = {
  background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)',
  text: '#1e293b',
  primary: '#FF7133',
  primary2: '#0f172a',
  secondary: '#eab308',
  inputBackground: 'rgba(255,255,255,0.3)',
  inputBackground2: 'rgba(255,255,255,0.5)',
  inputTextColor: '#333',
};

const darkTheme = {
  background: 'linear-gradient(90deg, #0f172a, #1e293b)',
  text: '#ffffff',
  primary: '#fbbf24',
  primary2: '#f4f4f4',
  secondary: '#eab308',
  inputBackground: 'rgba(30, 41, 59, 0.3)',
  inputBackground2: 'rgba(255,255,255,0.3)',
  inputTextColor: '#e2e8f0',
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding-top: 50px;
`;

const HeroSection = styled.section`
  background-image: url(${brandBackground});
  background-size: cover;
  background-position: center;
//   height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  padding-top:50px;
        padding-bottom:50px;


    @media (max-width:428px){
        padding-top:50px;
        padding-bottom:50px;
    }

`;

const HeroOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const HeroContent = styled.div`
  z-index: 1;
  font-size: 2rem;
`;

const BrandLogo = styled.img`
  width: 100px;
  height:100px;
  border-radius: 50%;
`;

const BrandTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

    @media (max-width:428px){
        font-size:2rem;
    }

`;

const BrandSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;


   @media (max-width:428px){
        font-size:1rem;
    }
`;

const Section = styled.section`
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.inputBackground};
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin: 3rem 0;
`;

const SectionTitle2 = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary2};
  text-align: center;
  margin: 3rem 0;
`;

const TextContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;

@media (max-width:768px){
    text-align:center;
}

`;

const TechnologySection = styled.section`
  background-image: url(${techBackground});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 5%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
`;

const TechnologyContent = styled.div`
  z-index: 1;
`;

const TechnologyTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const TechnologyText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: center;
  margin: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.inputBackground2};
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary2};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const BrandAndTechnology = () => {
//   const { theme } = useContext(Context);
const theme = useSelector((state)=>state.theme)
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.tagName === 'H1' || element.tagName === 'H2') {
            element.classList.add(
              'animate__animated',
              'animate__fadeInDown',
              'animate__slower'
            );
          } else if (element.tagName === 'P') {
            element.classList.add(
              'animate__animated',
              'animate__fadeInUp',
              'animate__slower'
            );
          }

          observer.current.unobserve(element);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    const headings = document.querySelectorAll('h1, h2');
    const paragraphs = document.querySelectorAll('p');

    headings.forEach((heading) => observer.current.observe(heading));
    paragraphs.forEach((paragraph) => observer.current.observe(paragraph));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <PageContainer theme={theme ? lightTheme : darkTheme}>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <BrandLogo src={facLogo} alt="FAC TRADE TRACK LTD Logo" />
          <BrandTitle>FAC TRADE TRACK LTD</BrandTitle>
          <BrandSubtitle>
            Innovation and Excellence in Automotive Engineering
          </BrandSubtitle>
        </HeroContent>
      </HeroSection>

      <Section theme={theme ? lightTheme : darkTheme}>
        <SectionTitle theme={theme ? lightTheme : darkTheme}>
          About Our Brand
        </SectionTitle>
        <TextContent theme={theme ? lightTheme : darkTheme}>
          FAC TRADE TRACK LTD is a renowned car dealer and manufacturer
          committed to providing top-tier automotive solutions. Our cars embody
          performance, reliability, and cutting-edge technology, ensuring that
          every customer enjoys the ultimate driving experience. We focus on
          continuous innovation to stay at the forefront of the automotive
          industry.
        </TextContent>
      </Section>

      <TechnologySection theme={theme ? lightTheme : darkTheme}>
        <TechnologyContent>
          <TechnologyTitle theme={theme ? lightTheme : darkTheme}>
            Innovative Technology
          </TechnologyTitle>
          <TechnologyText theme={theme ? lightTheme : darkTheme}>
            At FAC TRADE TRACK LTD, we embrace the future of mobility. From
            electric vehicles to autonomous driving technology, we invest in
            the latest innovations to enhance our vehicles' efficiency, safety,
            and performance.
          </TechnologyText>
          {/* <CTAButton theme={theme ? lightTheme : darkTheme}>Learn More</CTAButton> */}
        </TechnologyContent>
      </TechnologySection>

      <Section theme={theme ? lightTheme : darkTheme}>
        <SectionTitle2 theme={theme ? lightTheme : darkTheme}>
          Our Cutting-Edge Features
        </SectionTitle2>
        <FeatureList>
          <FeatureItem theme={theme ? lightTheme : darkTheme}>
            <FeatureIcon theme={theme ? lightTheme : darkTheme}>
              <FaCar />
            </FeatureIcon>
            <FeatureTitle theme={theme ? lightTheme : darkTheme}>
              Performance
            </FeatureTitle>
            <FeatureDescription theme={theme ? lightTheme : darkTheme}>
              Experience unmatched performance with our advanced engine
              technology and cutting-edge performance systems.
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme ? lightTheme : darkTheme}>
            <FeatureIcon theme={theme ? lightTheme : darkTheme}>
              <FaCogs />
            </FeatureIcon>
            <FeatureTitle theme={theme ? lightTheme : darkTheme}>
              Precision Engineering
            </FeatureTitle>
            <FeatureDescription theme={theme ? lightTheme : darkTheme}>
              Every car we produce undergoes rigorous testing to ensure it meets
              the highest standards of quality and precision.
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme ? lightTheme : darkTheme}>
            <FeatureIcon theme={theme ? lightTheme : darkTheme}>
              <FaLightbulb />
            </FeatureIcon>
            <FeatureTitle theme={theme ? lightTheme : darkTheme}>
              Sustainability
            </FeatureTitle>
            <FeatureDescription theme={theme ? lightTheme : darkTheme}>
              We are dedicated to sustainable development with our
              environmentally friendly electric vehicles and eco-friendly
              manufacturing practices.
            </FeatureDescription>
          </FeatureItem>
        </FeatureList>
      </Section>
    </PageContainer>
  );
};

export default BrandAndTechnology;
