// CoreOfferingsPage.js
import React, { useContext, useState } from 'react';
import styled, {ThemeProvider, keyframes } from 'styled-components';
import { FaCar, FaWrench, FaLeaf, FaBus, FaCogs, FaTruck, FaSun, FaMoon } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
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
import { Context } from './Context';
import tiresolution from '../Images/tire solution.png'
import leasing from '../Images/leasing.png'
import busstop from '../Images/busstop.png'
import media1 from '../media/media1.mp4'
import media3 from '../media/media3.mp4'

const lightTheme = {
  background: '#f8fafc',
  color: '#1e293b',
  highlight: 'rgba(255, 68, 0, 0.8)',
  secondary: '#e5e7eb',
};

const darkTheme = {
  background: '#0f172a',
  color: '#f1f5f9',
  highlight: '#eab308',
  secondary: '#1e293b',
};


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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-family: Arial, sans-serif;
  transition: background 0.3s, color 0.3s;
  width:100%;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 200px;
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

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SectionImage = styled.div`
width:50%;
  animation: ${slideIn} 1s ease;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Video = styled.video`
    width:100%;
`

const SectionContent = styled.div`
  flex: 1;
  animation: ${slideIn} 1s ease;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.highlight};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;



const offerings = [
//   {
//     title: "Clean Energy & Green Transportation Solutions",
//     icon: <FaLeaf />,
//     image: car1,
//     details: [
//       "Electric Vehicles (EVs): Leading Africa's shift to zero-emission mobility with robust EV infrastructure, including solar-powered charging stations.",
//       "CNG, LPG, and Hybrid-Powered Vehicles: Offering diverse options for fuel-efficient and eco-friendly transportation.",
//       "Solar-Powered Infrastructure: Deploying renewable energy solutions to reduce carbon emissions and drive sustainability.",
//     ],
//   },
//   {
//     title: "Comprehensive Automotive Services",
//     icon: <FaWrench />,
//     image: car2,
//     details: [
//       "Vehicle Repair and Maintenance Trading Workshops: State-of-the-art facilities providing expert diagnostics, repairs, and maintenance for all Dongfeng vehicles and other brands.",
//       "Automotive Spare Parts: Direct access to genuine Dongfeng spare parts, ensuring quality, reliability, and longevity.",
//     ],
//   },
  {
    title: "Advanced Tyre and Rubber Solutions",
    icon: <FaCogs />,
    image: tiresolution,
    details: [
      "Tyre Manufacturing & Sales: Establishing world-class tire production plants to support the growing automotive market.",
      "Rubber Recycling: Promoting circular economies by converting used tires into valuable products.",
      "Natural Rubber Plantations: Driving local industrial growth through plantation development and processing centers.",
    ],
  },
  {
    title: "Vehicle Leasing & Hailing Solutions",
    icon: <FaTruck />,
    image: leasing,
    details: [
      "Leasing & Hiring Services: Affordable leasing and hiring options for vehicles and machinery to support businesses and individuals.",
      "Ride-Hailing Business Support: Offering fleet solutions and operational support for ride-hailing companies.",
    ],
  },
  {
    title: "Infrastructure & Urban Development",
    icon: <FaBus />,
    image: busstop,
    details: [
      "Bus Stop Design and Construction: Modern, eco-friendly bus stops equipped with solar panels and smart features.",
      "CNG and Mini CNG Stations: Convenient refueling infrastructure to support the growing demand for alternative fuels.",
      "Logistics Hubs: Integrated solutions for urban logistics, ensuring efficient goods movement across the continent.",
    ],
  },
];



const offerings2 = [
    {
      title: "Clean Energy & Green Transportation Solutions",
      icon: <FaLeaf />,
      media: media1,
      details: [
        "Electric Vehicles (EVs): Leading Africa's shift to zero-emission mobility with robust EV infrastructure, including solar-powered charging stations.",
        "CNG, LPG, and Hybrid-Powered Vehicles: Offering diverse options for fuel-efficient and eco-friendly transportation.",
        "Solar-Powered Infrastructure: Deploying renewable energy solutions to reduce carbon emissions and drive sustainability.",
      ],
    },
    {
      title: "Comprehensive Automotive Services",
      icon: <FaWrench />,
      media: media3,
      details: [
        "Vehicle Repair and Maintenance Trading Workshops: State-of-the-art facilities providing expert diagnostics, repairs, and maintenance for all Dongfeng vehicles and other brands.",
        "Automotive Spare Parts: Direct access to genuine Dongfeng spare parts, ensuring quality, reliability, and longevity.",
      ],
    },
   
  ];

const CoreOfferingsPage = () => {

const {theme,setTheme}=useContext(Context);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <Container>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </ThemeToggle>

   
            <HeroSection theme={theme === true ? 'light' : 'dark'}>
                  <HeroText theme={theme === true ? 'light' : 'dark'}>Our Core Offerings</HeroText>
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
          

                {offerings2.map((offering, index) => (
          <Section key={index}>
            <SectionImage>
              {/* <img src={offering.image} alt={offering.title} /> */}
              <Video autoPlay muted>
    <source src={offering.media} type="video/mp4" />
</Video>


            </SectionImage>
            <SectionContent>
              <h2>
                {offering.icon} {offering.title}
              </h2>
              {offering.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </SectionContent>
          </Section>
        ))} 


        {/* Offerings Sections */}
        {offerings.map((offering, index) => (
          <Section key={index}>
            <SectionImage>
              <img src={offering.image} alt={offering.title} />
            </SectionImage>
            <SectionContent>
              <h2>
                {offering.icon} {offering.title}
              </h2>
              {offering.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </SectionContent>
          </Section>
        ))}


      </Container>
    </ThemeProvider>
  );
};

export default CoreOfferingsPage;
