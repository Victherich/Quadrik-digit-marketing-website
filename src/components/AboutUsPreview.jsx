

// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowRight, FaCarSide } from 'react-icons/fa';
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
// import { Context } from './Context';
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

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   padding: 2rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   animation: ${fadeIn} 1s ease;
// `;

// const TitleSection = styled.div`
//   width: 100%;
//   height: 100px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
// `;

// const TitleText = styled.h1`
//   position: absolute;
//   z-index: 2;
//   font-size: 2.5rem;
//   font-weight: bold;
// //   color:#fbbf24;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   text-align: center;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//   animation: ${fadeIn} 1s ease;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 100s linear infinite;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 300px;
//   object-fit: cover;
//   z-index: 999;
// `;

// const ContentSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   margin-top: 2rem;
//   justify-content: center;
// `;

// const Column = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   padding: 1rem;
//   background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   animation: ${fadeIn} 1s ease;
// `;

// const IconWrapper = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Text = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;

// const Button = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 1rem;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   // font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#eab308')};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     background: ${({ theme }) => (theme === 'dark' ? '#eab308' : '#fbbf24')};
//   }

//   svg {
//     margin-left: 0.5rem;
//   }
// `;

// const AboutUsPreview = () => {
//   const { theme } = useContext(Context);
//   const navigate = useNavigate();

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <TitleSection theme={theme === true ? 'light' : 'dark'}>
//         <TitleText theme={theme === true ? 'light' : 'dark'}>Learn More About Us</TitleText>
//         <SlidingImages>
//           <CarImage src={car10} alt="Car 10" />
//           <CarImage src={car11} alt="Car 11" />
//           <CarImage src={car12} alt="Car 12" />
//           <CarImage src={car13} alt="Car 13" />
//           <CarImage src={car14} alt="Car 14" />
//           <CarImage src={car15} alt="Car 15" />
//           <CarImage src={car16} alt="Car 16" />
//           <CarImage src={car17} alt="Car 17" />
//           <CarImage src={car18} alt="Car 18" />
//           <CarImage src={car19} alt="Car 19" />
//           <CarImage src={car20} alt="Car 20" />
//           <CarImage src={car21} alt="Car 21" />
//           <CarImage src={car22} alt="Car 22" />
//         </SlidingImages>
//       </TitleSection>

//       <ContentSection>
//         <Column theme={theme === true ? 'light' : 'dark'}>
//           <IconWrapper theme={theme === true ? 'light' : 'dark'}>
//             <FaCarSide />
//           </IconWrapper>
//           <Title theme={theme === true ? 'light' : 'dark'}>Our Vision</Title>
//           <Text>
//             To pioneer transformative infrastructure, transportation, and clean energy projects that position Africa as a
//             leader in sustainable development, fostering prosperity for future generations.
//           </Text>
//         </Column>

//         <Column theme={theme === true ? 'light' : 'dark'}>
//           <IconWrapper theme={theme === true ? 'light' : 'dark'}>
//             <FaCarSide />
//           </IconWrapper>
//           <Title theme={theme === true ? 'light' : 'dark'}>Our Mission</Title>
//           <Text>
//             FAC Trade Track Ltd. is dedicated to introducing cutting-edge technologies like electric vehicles,
//             solar-powered charging stations, and CNG-powered trucks to the African market, driving economic growth and
//             sustainability.
//           </Text>
//         </Column>
//       </ContentSection>

//       <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate('/aboutus')}>
//         View More <FaArrowRight />
//       </Button>
//     </Container>
//   );
// };

// export default AboutUsPreview;





import React, { useEffect, useRef, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaCarSide } from 'react-icons/fa';
import car10 from "../Images/car10.jpg";
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
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import 'animate.css'; // For animations
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

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  padding: 2rem;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
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
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
`;

const TitleText = styled.h2`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SlidingImages = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  animation: ${slide} 50s linear infinite;
`;

const CarImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  z-index: 999;
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
  background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
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

const AboutUsPreview = () => {
  // const { theme } = useContext(Context);
const theme = useSelector((state)=>state.theme)
  const navigate = useNavigate();
  const observer = useRef(null);

  // useEffect(() => {
  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const element = entry.target;

  //         if (element.tagName === 'H1') {
  //           element.classList.add('animate__animated', 'animate__rollInRight', 'animate__slow');
  //         } else if (element.tagName === 'H2' || element.tagName === 'P') {
  //           element.classList.add('animate__animated', 'animate__rollInLeft', 'animate__slower');
  //         } else if (element.tagName === 'A') {
  //           element.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
  //         }

  //         // Stop observing the element after animation is triggered
  //         observer.current.unobserve(element);
  //       }
  //     });
  //   };

  //   observer.current = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.3, // Trigger when 30% of the element is visible
  //   });

  //   // Observe elements
  //   const titleText = document.querySelector('h1');
  //   const headings = document.querySelectorAll('h2');
  //   const paragraphs = document.querySelectorAll('p');
  //   const button = document.querySelector('a');

  //   if (titleText) observer.current.observe(titleText);
  //   headings.forEach((heading) => observer.current.observe(heading));
  //   paragraphs.forEach((paragraph) => observer.current.observe(paragraph));
  //   if (button) observer.current.observe(button);

  //   return () => {
  //     if (observer.current) observer.current.disconnect();
  //   };
  // }, []);



  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
  
          if (element.tagName === 'H1') {
            console.log('Animating H1', element); // Debugging
            // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slow');
            
          } else if (element.tagName === 'H2') {
            // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
            
          } else if (element.tagName === 'P') {
            // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
            
          }
          
          else if (element.tagName === 'A') {
            element.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
          }
  
          // Stop observing the element after animation is triggered
          observer.current.unobserve(element);
        }
      });
    };
  
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Adjusted threshold
    });
  
    // Select elements
    const titleText = document.querySelector('h1'); // Update if styled-component changes this
    const headings = document.querySelectorAll('h2');
    const paragraphs = document.querySelectorAll('p');
    const button = document.querySelector('a');
  
    if (titleText) observer.current.observe(titleText);
    headings.forEach((heading) => observer.current.observe(heading));
    paragraphs.forEach((paragraph) => observer.current.observe(paragraph));
    if (button) observer.current.observe(button);
  
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);
  

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      <TitleSection theme={theme === true ? 'light' : 'dark'}>
        <TitleText theme={theme === true ? 'light' : 'dark'}>Learn More About Us</TitleText>
        <SlidingImages>
          <CarImage src={car10} alt="Car 10" />
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
      </TitleSection>

      <ContentSection>
        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? 'light' : 'dark'}>
            <FaCarSide />
          </IconWrapper>
          <Title theme={theme === true ? 'light' : 'dark'}>Our Vision</Title>
          <Text>
            To pioneer transformative infrastructure, transportation, and clean energy projects that position Africa as
            a leader in sustainable development.
          </Text>
        </Column>

        <Column theme={theme === true ? 'light' : 'dark'}>
          <IconWrapper theme={theme === true ? 'light' : 'dark'}>
            <FaCarSide />
          </IconWrapper>
          <Title theme={theme === true ? 'light' : 'dark'}>Our Mission</Title>
          <Text>
            FAC Trade Track Ltd. introduces cutting-edge technologies like electric vehicles, solar-powered charging
            stations, and CNG-powered trucks to the African market.
          </Text>
        </Column>
      </ContentSection>

      <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate('/aboutus')}>
        View More <FaArrowRight />
      </Button>
    </Container>
  );
};

export default AboutUsPreview;
