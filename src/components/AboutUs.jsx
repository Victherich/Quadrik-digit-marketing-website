
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaLeaf, FaSolarPanel, FaTruck, FaChargingStation } from 'react-icons/fa';
// import car1 from '../Images/car1.jpeg';
// import car2 from '../Images/car2.jpeg';
// import car3 from '../Images/car3.jpeg';

// // Animations
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

// const slideBackground = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -200% 0; }
// `;

// // Styled Components
// const AboutContainer = styled.div`
//   animation: ${fadeIn} 1s ease;
// `;

// const HeroSection = styled.section`
//   height: 50vh;
//   background: url(${car1}) no-repeat center center/cover;
//   animation: ${slideBackground} 15s linear infinite;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   padding: 1rem;
// `;

// const Section = styled.section`
//   padding: 3rem 2rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-wrap: nowrap;
//   }
// `;

// const ContentColumn = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
// `;

// const ImageColumn = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   animation: ${fadeIn} 1.5s ease;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #333;
//   animation: ${fadeIn} 1.2s ease;
// `;

// const Text = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   color: #555;
//   animation: ${fadeIn} 1.4s ease;
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin: 1rem 0;
//   animation: ${fadeIn} 1.6s ease;

//   svg {
//     font-size: 2rem;
//     color: #fbbf24;
//   }
// `;

// const Slideshow = styled.div`
//   display: flex;
//   overflow-x: auto;
//   gap: 1rem;
//   padding: 1rem;
//   animation: ${fadeIn} 1.8s ease;

//   img {
//     width: 300px;
//     height: auto;
//     border-radius: 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `;

// // About Component
// const AboutUs = () => {
//   return (
//     <AboutContainer>
//       <HeroSection>
//         <HeroTitle>About FAC Trade Track Ltd.</HeroTitle>
//       </HeroSection>
//       <Section>
//         <ContentColumn>
//           <SectionTitle>Who We Are</SectionTitle>
//           <Text>
//             FAC Trade Track Ltd. is a trailblazer in Africa’s journey toward sustainable development, redefining the future of transportation, infrastructure, and energy solutions across the continent. Rooted in innovation and sustainability, we are committed to delivering world-class services and technologies that elevate industries, empower communities, and drive economic transformation.
//           </Text>
//           <IconWrapper>
//             <FaLeaf />
//             <FaSolarPanel />
//             <FaTruck />
//             <FaChargingStation />
//           </IconWrapper>
//         </ContentColumn>
//         <ImageColumn>
//           <img src={car2} alt="Sustainable Development" />
//         </ImageColumn>
//       </Section>
//       <Section>
//         <ImageColumn>
//           <img src={car3} alt="Global Partnerships" />
//         </ImageColumn>
//         <ContentColumn>
//           <SectionTitle>Our Vision</SectionTitle>
//           <Text>
//             To pioneer transformative infrastructure, transportation, and clean energy projects that position Africa as a leader in sustainable development, fostering prosperity for future generations.
//           </Text>
//         </ContentColumn>
//       </Section>
//       <Slideshow>
//         <img src={car1} alt="Car Slide 1" />
//         <img src={car2} alt="Car Slide 2" />
//         <img src={car3} alt="Car Slide 3" />
//       </Slideshow>
//     </AboutContainer>
//   );
// };

// export default AboutUs;










// import React, { useContext, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaLeaf, FaSolarPanel, FaTruck, FaChargingStation } from 'react-icons/fa';
// import car11 from '../Images4/p11.jpg';
// import car12 from '../Images4/p12.jpg';
// import car15 from '../Images4/p10.png';
// import car14 from '../Images4/p9.jpg';
// import car1 from '../Images4/p1.jpg'
// import { Context } from './Context'; // Assuming you have a theme context
// // import whoWeAre from '../Images/who we are.png'
// import whoWeAre from '../Images/whoweare2.jpeg'
// import strategic from '../Images/strategic2.jpeg'
// import scope from '../Images/scope.png'
// import { useSelector } from 'react-redux';


// // Animations
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

// const slideBackground = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -200% 0; }
// `;

// // Styled Components
// const AboutContainer = styled.div`
//   animation: ${fadeIn} 1s ease;
//   background: ${({ theme }) =>
//     theme === 'dark'
//       ? 'linear-gradient(180deg, #1e293b, #0f172a)'
//       : 'linear-gradient(180deg, #f8fafc, #e2e8f0)'};
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   padding: 2rem;
// `;

// const HeroSection = styled.section`
//   height: 50vh;
//   background: url(${car1}) no-repeat center center/cover;
//   animation: ${slideBackground} 15s linear infinite;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);


//   @media (max-width:884px){
//     height:300px;
//   }

// @media (max-width:884px){
//     height:250px;
//   }

// `;

// const HeroTitle = styled.h2`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   padding: 1rem;

//   @media (max-width:768px){
//     font-size:2rem;
//   }

// `;

// const Section = styled.section`
//   padding: 3rem 2rem;
//   display: flex;
//   // flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 884px) {
//     // flex-wrap: nowrap;
//     flex-direction:column;
//   }
// `;

// const ContentColumn = styled.div`

//   min-width: 300px;
//   max-width: 600px;
// `;

// const ImageColumn = styled.div`
//   animation: ${fadeIn} 1.5s ease;
//   width:50%;

//   @media (max-width:884px){
//     width:100%;
//   }

// `;

// const Img = styled.img`
//   width:100%
// `

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   animation: ${fadeIn} 1.2s ease;
// `;

// const Text = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#555')};
//   animation: ${fadeIn} 1.4s ease;
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin: 1rem 0;
//   animation: ${fadeIn} 1.6s ease;

//   svg {
//     font-size: 2rem;
//     color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   }
// `;

// const Slideshow = styled.div`
//   display: flex;
//   // overflow-x: auto;
//   flex-wrap:wrap;
//   justify-content:center;
//   align-items:center;
//   gap: 1rem;
//   padding: 1rem;
//   animation: ${fadeIn} 1.8s ease;

//   img {
//     width: 300px;
//     height: 150px;
//     border-radius: 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `;

// // About Component
// const AboutUs = () => {
//   // const { theme } = useContext(Context); // Access theme context
//   const theme = useSelector((state)=>state.theme)


    

//   return (
//     <AboutContainer  theme={theme === true ? 'light' : 'dark'}>
//       <HeroSection>
//         <HeroTitle>About FAC Trade Track Ltd.</HeroTitle>
//       </HeroSection>
//       <Section>
//         <ContentColumn>
//           <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Who We Are</SectionTitle>
//           <Text  theme={theme === true ? 'light' : 'dark'}>
//             FAC Trade Track Ltd. is a trailblazer in Africa’s journey toward sustainable development, redefining the
//             future of transportation, infrastructure, and energy solutions across the continent.
//           </Text>
//           <IconWrapper  theme={theme === true ? 'light' : 'dark'}>
//             <FaLeaf />
//             <FaSolarPanel />
//             <FaTruck />
//             <FaChargingStation />
//           </IconWrapper>
//         </ContentColumn>
//         <ImageColumn>
//           <Img src={whoWeAre} alt="Sustainable Development" />
//         </ImageColumn>
//       </Section>
//       <Section>
//         <ContentColumn>
//           <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Strategic Initiatives</SectionTitle>
//           <Text  theme={theme === true ? 'light' : 'dark'}>
//             <b>Renewable Energy Leadership:</b> FAC Trade Track Ltd. is championing renewable energy projects across
//             Africa, focusing on solar, wind, and CNG solutions to create cleaner cities.
//           </Text>
//           <Text  theme={theme === true ? 'light' : 'dark'}>
//             <b>Advanced Mobility Solutions:</b> From fuel-powered to electric and hybrid vehicles, we address the full
//             spectrum of mobility needs, ensuring the seamless movement of people and goods.
//           </Text>
//           <Text  theme={theme === true ? 'light' : 'dark'}>
//             <b>Economic Empowerment:</b> Through investments in natural rubber plantations and manufacturing plants, we
//             empower local communities.
//           </Text>
//         </ContentColumn>
//         <ImageColumn>
//           <Img src={strategic} alt="Renewable Energy" />
//         </ImageColumn>
//       </Section>
//       <Section>
//         <ImageColumn>
//           <Img src={scope} alt="Pan-African Scope" />
//         </ImageColumn>
//         <ContentColumn>
//           <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Our Pan-African Scope</SectionTitle>
//           <Text  theme={theme === true ? 'light' : 'dark'}>
//             Although headquartered in Nigeria, our operations span the entire African continent, delivering scalable
//             solutions tailored to diverse regional needs.
//           </Text>
//         </ContentColumn>
//       </Section>
//       <Slideshow>
//         <img src={car11} alt="Car Slide 1" />
//         <img src={car12} alt="Car Slide 2" />
//         <img src={car15} alt="Car Slide 3" />
//         <img src={car14} alt="Car Slide 3" />
//       </Slideshow>
//     </AboutContainer>
//   );
// };

// export default AboutUs;




import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBullhorn, FaLightbulb, FaCode, FaCamera } from 'react-icons/fa'; // Updated icons
import { useSelector } from 'react-redux'; // Assuming you still use Redux for theme

// Import images for Quadrik Digit Marketing - replace with your actual paths
import heroImage from '../Images4/p9.jpg'; // Placeholder, replace with a relevant hero image
import aboutUsImage from '../Images4/p13.png'; // Placeholder for "Who We Are"
import missionImage from '../Images4/p3.jpg'; // Placeholder for "Our Mission"
import industriesImage from '../Images4/p15.jpg'; // Placeholder for "Industries We Serve"
import service1 from '../Images4/p14.png'; // Placeholder for slideshow
import service2 from '../Images4/p16.png'; // Placeholder for slideshow
import service3 from '../Images4/p7.jpg'; // Placeholder for slideshow
import service4 from '../Images4/p8.jpg'; // Placeholder for slideshow


// Animations (keeping these as they are good)
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

const slideBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

// Styled Components (retaining your excellent structure and theming logic)
const AboutContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(180deg, #1e293b, #0f172a)'
      : 'linear-gradient(180deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  padding: 2rem;
`;

const HeroSection = styled.section`
  height: 50vh;
  background: url(${heroImage}) no-repeat center center/cover;
  /* Adjust animation or remove if static image is preferred */
  /* animation: ${slideBackground} 15s linear infinite; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

  @media (max-width: 884px) {
    height: 300px;
  }

  @media (max-width: 480px) { /* Added for smaller phones */
    height: 200px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 884px) {
    flex-direction: column;
  }
`;

const ContentColumn = styled.div`
  min-width: 300px;
  max-width: 600px;
`;

const ImageColumn = styled.div`
  animation: ${fadeIn} 1.5s ease;
  width: 50%;

  @media (max-width: 884px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto; /* Ensure image scales correctly */
  border-radius: 8px; /* Added for softer corners */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#FDE910' : '#7611D1')};
  animation: ${fadeIn} 1.2s ease;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#555')};
  animation: ${fadeIn} 1.4s ease;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1.5rem; /* Increased gap for better spacing */
  margin: 1.5rem 0; /* Increased margin */
  animation: ${fadeIn} 1.6s ease;

  svg {
    font-size: 2.5rem; /* Slightly larger icons */
    color: ${({ theme }) => (theme === 'dark' ? '#FDE910' : '#7611D1')};
  }
`;

const BulletList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 1rem 0;
  
  li {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#555')};
    margin-bottom: 0.5rem;
    &:before {
      content: '✔'; /* Custom checkmark bullet */
      color: ${({ theme }) => (theme === 'dark' ? '#FDE910' : '#7611D1')};
      margin-right: 0.8rem;
    }
  }
`;

const Slideshow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* Slightly increased gap for images */
  padding: 2rem 1rem; /* Increased padding */
  animation: ${fadeIn} 1.8s ease;

  img {
    width: 320px; /* Slightly larger image width */
    height: 180px; /* Adjusted height */
    object-fit: cover; /* Ensure images cover the area */
    border-radius: 12px; /* More prominent border-radius */
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25); /* Stronger shadow */
    transition: transform 0.3s ease-in-out; /* Smooth transition */

    &:hover {
      transform: scale(1.06); /* Slightly more prominent hover effect */
    }
  }
`;

// About Component
const AboutUs = () => {
  const theme = useSelector((state) => state.theme); // Access theme from Redux

  return (
    <AboutContainer theme={theme === true ? 'light' : 'dark'}>
      <HeroSection style={{ backgroundImage: `url(${heroImage})` }}>
        <HeroTitle>About Quadrik Digit Marketing</HeroTitle>
      </HeroSection>

      <Section>
        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Who We Are</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
             Quadrik Digit Marketing  is a dynamic and creative  digital agency based in the UAE . We are passionate about helping businesses like yours thrive in the ever-evolving digital landscape. Our approach combines  smart strategies  with  impactful designs  to deliver real, measurable growth.
          </Text>
          <IconWrapper theme={theme === true ? 'light' : 'dark'}>
            <FaBullhorn title="Digital Marketing" />
            <FaLightbulb title="Branding & Design" />
            <FaCode title="Web Development" />
            <FaCamera title="Content Creation" />
          </IconWrapper>
        </ContentColumn>
        <ImageColumn>
          <Img src={aboutUsImage} alt="Quadrik Digit Marketing Team" />
        </ImageColumn>
      </Section>

      <Section style={{ flexDirection: 'row-reverse' }}> {/* Reverse order for alternating layout */}
        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Our Mission</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
            Our mission is to  empower businesses with innovative digital solutions that drive real results . We are deeply committed to helping brands establish a strong and influential online presence.
          </Text>
          <Text theme={theme === true ? 'light' : 'dark'}>
            We achieve this through:
          </Text>
          <BulletList theme={theme === true ? 'light' : 'dark'}>
            <li>Expert  social media management  to connect with your audience.</li>
            <li> Targeted advertising  to reach your ideal customers.</li>
            <li> Creative content  that captivates and converts.</li>
            <li>Impactful  design and branding  that leave a lasting impression.</li>
          </BulletList>
          <Text theme={theme === true ? 'light' : 'dark'}>
            By seamlessly combining  strategy, creativity, and technology , we aim to deliver  measurable growth and long-term value  for every client we serve.
          </Text>
        </ContentColumn>
        <ImageColumn>
          <Img src={missionImage} alt="Our Mission" />
        </ImageColumn>
      </Section>

      <Section>
        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Industries We Serve</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
            We pride ourselves on our versatility and ability to tailor digital strategies for a diverse range of sectors. Our expertise spans across:
          </Text>
          <BulletList theme={theme === true ? 'light' : 'dark'}>
            <li> E-commerce & Online Retail </li>
            <li> Health & Wellness </li>
            <li> Fashion & Beauty </li>
            <li> Travel & Tourism </li>
            <li> Education & Training </li>
            <li> Real Estate & Property </li>
            <li> Food and Beverages </li>
            <li> Automotive  (Dealers, Rental Services)</li>
          </BulletList>
          <Text theme={theme === true ? 'light' : 'dark'}>
            No matter your industry, we're equipped to elevate your brand's digital presence.
          </Text>
        </ContentColumn>
        <ImageColumn>
          <Img src={industriesImage} alt="Industries We Serve" />
        </ImageColumn>
      </Section>

      <Slideshow>
        <img src={service1} alt="Social Media Marketing" />
        <img src={service2} alt="Graphic Design" />
        <img src={service3} alt="Web Development" />
        <img src={service4} alt="Content Creation" />
      </Slideshow>
    </AboutContainer>
  );
};

export default AboutUs;
