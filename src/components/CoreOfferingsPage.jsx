


// // CoreOfferingsPage.js
// import React from 'react';
// import styled, { ThemeProvider, keyframes } from 'styled-components';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from 'react-redux';

// import car11 from "../Images4/p12.jpg";
// import car12 from "../Images4/p11.jpg";
// import car13 from "../Images4/p4.jpg";
// import car14 from "../Images4/p5.jpg";

// const lightTheme = {
//   background: '#f8fafc',
//   color: '#1e293b',
//   highlight: '#7611D1',
//   secondary: '#e5e7eb',
// };

// const darkTheme = {
//   background: '#0f172a',
//   color: '#f1f5f9',
//   highlight: '#FDE910',
//   secondary: '#1e293b',
// };

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

// const slideIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Container = styled.div`
//   background: ${({ theme }) => theme.background};
//   color: ${({ theme }) => theme.color};
//   font-family: Arial, sans-serif;
//   transition: background 0.3s, color 0.3s;
//   width: 100%;
// `;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 200px;
//   padding-top:50px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
// `;

// const HeroText = styled.h1`
//   position: absolute;
//   z-index: 2;
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? 'white' : 'white')};
//   text-align: center;
//   animation: ${fadeIn} 1s ease;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 50s linear infinite;
//   flex-direction: column;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 200px;
//   object-fit: cover;
// `;

// const Section = styled.section`
//   padding: 3rem 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;

//   @media (min-width: 768px) {
//     flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
//     text-align:${({ reverse }) => (reverse ? 'right' : 'left')};
//     align-items: center;
//   }
// `;

// const SectionImage = styled.div`
//   width: 100%;

//   @media (min-width: 768px) {
//     width: 50%;
//   }

//   animation: ${slideIn} 1s ease;

//   img {
//     width: 100%;
//     border-radius: 8px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   }
// `;

// const SectionContent = styled.div`
//   flex: 1;
//   animation: ${slideIn} 1s ease;
//   margin-top: 1rem;

//   h2 {
//     font-size: 1.8rem;
//     margin-bottom: 1rem;
//     color: ${({ theme }) => theme.highlight};
//   }

//   p {
//     font-size: 1rem;
//     line-height: 1.5;
//     margin-bottom: 0.5rem;
//   }
// `;

// const offerings = [
//   {
//     title: "📱 Social Media & Digital Marketing",
//     image: car11,
//     details: [
//       "Social Media Management (Facebook, Instagram, etc.)",
//       "Facebook & Instagram Ads",
//       "Google Ads Campaigns",
//       "Brand Awareness Campaigns",
//       "E-commerce Store Marketing",
//       "Digital Strategy & Analytics"
//     ],
//   },
//   {
//     title: "🎨 Graphic Design & Branding",
//     image: car12,
//     details: [
//       "Logo Design",
//       "Business Cards & ID Cards",
//       "Flyers, Posters & Brochures",
//       "Roll-Up Banners & Signage",
//       "Custom Social Media Graphics",
//       "Complete Brand Identity Design"
//     ],
//   },
//   {
//     title: "💻 Web & Tech Solutions",
//     image: car13,
//     details: [
//       "Website Design & Development",
//       "Landing Pages & Funnels",
//       "E-commerce Store Setup",
//       "SEO Optimization",
//       "Website Maintenance"
//     ],
//   },
//   {
//     title: "🎥 Content Creation",
//     image: car14,
//     details: [
//       "Social Media Content",
//       "Marketing Copywriting",
//       "Reels, Videos & Motion Graphics",
//       "Product Photography & Editing"
//     ],
//   },
// ];

// const CoreOfferingsPage = () => {
//   const theme = useSelector((state) => state.theme);

//   return (
//     <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
//       <Container>
//         <HeroSection theme={theme === true ? 'light' : 'dark'}>
//           <HeroText theme={theme === true ? 'light' : 'dark'}>OUR SERVICES</HeroText>
//           <SlidingImages>
//             <CarImage src={car11} alt="Slide 1" />
//             <CarImage src={car12} alt="Slide 2" />
//             <CarImage src={car13} alt="Slide 3" />
//             <CarImage src={car14} alt="Slide 4" />
//           </SlidingImages>
//         </HeroSection>

//         {offerings.map((offering, index) => (
//           <Section key={index} reverse={index % 2 !== 0}>
//             <SectionImage>
//               <img src={offering.image} alt={offering.title} />
//             </SectionImage>
//             <SectionContent>
//               <h2>{offering.title}</h2>
//               {offering.details.map((detail, idx) => (
//                 <p key={idx}>• {detail}</p>
//               ))}
//             </SectionContent>
//           </Section>
//         ))}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default CoreOfferingsPage;





// CoreOfferingsPage.js
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import styled, { ThemeProvider, keyframes } from 'styled-components';
import Slider from "react-slick"; // Not used in this specific layout, but kept if you plan to use it
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { db } from '../firebaseConfig'; // Make sure this path is correct for your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // Import Firestore functions

// --- Image imports are now only for the Hero Section, as service images come from Firestore ---
import car11 from "../Images4/p12.jpg";
import car12 from "../Images4/p11.jpg";
import car13 from "../Images4/p4.jpg";
import car14 from "../Images4/p5.jpg";

const lightTheme = {
  background: '#f8fafc',
  color: '#1e293b',
  highlight: '#7611D1',
  secondary: '#e5e7eb',
};

const darkTheme = {
  background: '#0f172a',
  color: '#f1f5f9',
  highlight: '#FDE910',
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
  width: 100%;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 50px;
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
  color: white; /* Always white for contrast on the image background */
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
  height: 100%; /* Ensure it fills the hero section */
  animation: ${slide} 10s linear infinite;
  flex-direction: column;
`;

const CarImage = styled.img`
  width: 100%;
  height: 100%; /* Make images fill their container vertically */
  object-fit: cover;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
    align-items: center;
  }
`;

const SectionImage = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  animation: ${slideIn} 1s ease;

  img {
    width: 100%;
    height: auto; /* Allow height to adjust naturally */
    max-height: 400px; /* Optional: Limit max height for consistency */
    object-fit: cover; /* Ensure image covers the area */
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const SectionContent = styled.div`
  flex: 1;
  animation: ${slideIn} 1s ease;
  margin-top: 1rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.highlight};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: red;
`;

const CoreOfferingsPage = () => {
  const theme = useSelector((state) => state.theme);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesCollection = collection(db, 'services');
        // Order by 'createdAt' to ensure consistent display order
        const q = query(servicesCollection, orderBy('createdAt', 'asc'));
        const querySnapshot = await getDocs(q);
        const fetchedServices = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(fetchedServices);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
        <Container>
          <HeroSection theme={theme === true ? 'light' : 'dark'}>
            <HeroText theme={theme === true ? 'light' : 'dark'}>OUR SERVICES</HeroText>
            <SlidingImages>
              <CarImage src={car11} alt="Slide 1" />
              <CarImage src={car12} alt="Slide 2" />
              <CarImage src={car13} alt="Slide 3" />
              <CarImage src={car14} alt="Slide 4" />
            </SlidingImages>
          </HeroSection>
          <LoadingMessage>Loading services...</LoadingMessage>
        </Container>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
        <Container>
          <HeroSection theme={theme === true ? 'light' : 'dark'}>
            <HeroText theme={theme === true ? 'light' : 'dark'}>OUR SERVICES</HeroText>
            <SlidingImages>
              <CarImage src={car11} alt="Slide 1" />
              <CarImage src={car12} alt="Slide 2" />
              <CarImage src={car13} alt="Slide 3" />
              <CarImage src={car14} alt="Slide 4" />
            </SlidingImages>
          </HeroSection>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <Container>
        <HeroSection theme={theme === true ? 'light' : 'dark'}>
          <HeroText theme={theme === true ? 'light' : 'dark'}>OUR SERVICES</HeroText>
          <SlidingImages>
            <CarImage src={car11} alt="Slide 1" />
            <CarImage src={car12} alt="Slide 2" />
            <CarImage src={car13} alt="Slide 3" />
            <CarImage src={car14} alt="Slide 4" />
          </SlidingImages>
        </HeroSection>

        {services.length === 0 && !loading && !error ? (
          <LoadingMessage>No services available yet. Please check back later!</LoadingMessage>
        ) : (
          services.map((service, index) => (
            <Section key={service.id} reverse={index % 2 !== 0}>
              <SectionImage>
                {/* Use the imageUrl from Firestore for the service */}
                <img src={service.imageUrl} alt={service.title} />
              </SectionImage>
              <SectionContent>
                <h2>{service.title}</h2>
                {service.items && service.items.map((detail, idx) => (
                  <p key={idx}>• {detail}</p>
                ))}
              </SectionContent>
            </Section>
          ))
        )}
      </Container>
    </ThemeProvider>
  );
};

export default CoreOfferingsPage;
