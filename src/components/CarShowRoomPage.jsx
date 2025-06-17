// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowRight, FaCarSide } from 'react-icons/fa';
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';
// import car11 from "../Images4/p11.jpg";
// import car12 from "../Images4/p12.jpg";
// import car1 from "../Images4/p1.jpg";
// import car2 from "../Images4/p2.jpg";
// import car3 from "../Images4/p3.jpg";
// import car4 from "../Images4/p4.jpg";
// import car5 from "../Images4/p5.jpg";
// import car6 from "../Images4/p6.jpg";
// import car7 from "../Images4/p7.jpg";
// import car8 from "../Images4/p8.jpg";
// import car9 from "../Images4/p9.jpg";
// import car10 from "../Images4/p10.png";
// import Hero3 from './Hero3';
// import Hero from './Hero';
// import { useSelector } from 'react-redux';
// import car12b from '../Images/car12bc.png'

// // Animation keyframes for fading and sliding
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
//     transform: translateX(-300%);
//   }
//   to {
//     transform: translateX(300%);
//   }
// `;

// // Define theme colors for light and dark mode
// const lightTheme = {
//   background: 'linear-gradient(90deg, #f8fafc, #e2e8f0)',
//   text: '#7611D1',
//   primary: '#FF7133',
//   secondary: '#eab308',
//   accent: '#fbbf24',
// };

// const darkTheme = {
//   background: 'linear-gradient(90deg, #0f172a, #1e293b)',
//   text: '#ffffff',
//   primary: '#fbbf24',
//   secondary: '#eab308',
//   accent: '#FF7133',
// };

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: ${({ theme }) => theme.background};
//   padding: 2rem;
//   color: ${({ theme }) => theme.text};
//   animation: ${fadeIn} 1s ease;
// `;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 50vh;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;

// const HeroText = styled.h1`
//   position: absolute;
//   z-index: 2;
//   font-size: 3rem;
//   font-weight: bold;
//   color: ${({ theme }) => theme.primary};
//   text-align: center;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//   animation: ${fadeIn} 1s ease;
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 10s linear infinite;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 100%;
//   object-fit: cover;
//   z-index: 999;
// `;

// const CarGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   margin-top: 2rem;
//   justify-content: center;
//   animation: ${fadeIn} 1.5s ease;
// `;

// const CarCard = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 400px;
//   background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
//   padding: 1rem;
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     background: ${({ theme }) => theme.accent};
//   }
// `;

// // const CarImageThumb = styled.img`
// //   width: 100%;
// //   height: 250px;
// //   object-fit: cover;
// //   border-radius: 8px;
// // `;

// const CarImageThumb = styled.img`
//   width: 100%;
//   height: 250px;
//   // object-fit: cover;
//   border-radius: 8px;

//   //  &:nth-of-type(2) {
//   //   object-fit: contain;
//   // }

//   @media(max-width:768px){
//     height:170px;
//   }

// `;

// const CarImageThumb2 = styled.img`
//   width: 100%;
//   height: 250px;
//   // object-fit: cover;
//   border-radius: 8px;

//   //  &:nth-of-type(2) {
//   //   object-fit: contain;
//   // }
// `;

// const CarTitle = styled.p`
//   font-size: 1rem;
//   font-weight: bold;
//   margin-top: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};

// `;

// const ExploreButton = styled.button`
//   margin-top: 1rem;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   color: ${({ theme }) => theme.text};
//   background: ${({ theme }) => theme.secondary};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     background: ${({ theme }) => theme.accent};
//   }
// `;

// const H1 = styled.h1`
//   font-size:3rem;
//   color: ${({ theme }) => theme.text};
// `

// const CarShowroomPage = () => {

// const theme = useSelector((state)=>state.theme)
//   const navigate = useNavigate();


//   const cars = [
//     { id: 23, name: '', image: car1 },
    
//     { id: 27, name: '', image: car2 },
//     { id: 28, name: '', image: car3 },
  
//     { id: 32, name: '', image: car4 },
//     { id: 33, name: '', image: car5 },
  
//     { id: 35, name: '', image: car5 },

   
//   ];

  

//   return (
//     <Container theme={theme === true ? lightTheme : darkTheme}>

//       <H1>Gallery</H1>

//       <CarGrid>
//         {cars.slice(0,6).map((car) => (
//           <CarCard
//             key={car.id}
//             theme={theme ===  true ? 'light' : 'dark'}
          
//           >
//             <CarImageThumb src={car.image} alt={car.name} />
//             <CarTitle theme={theme ===  true ? 'light' : 'dark'}>
           
//             </CarTitle>
        
//           </CarCard>
//         ))}
      
        
//       </CarGrid>

//     </Container>
//   );
// };

// export default CarShowroomPage;

import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import styled, { keyframes } from 'styled-components';
// Removed unused imports: FaArrowRight, FaCarSide, Context, useNavigate, Hero3, Hero, car11-car10, car12b
import { useSelector } from 'react-redux';
import { db } from '../firebaseConfig'; // Ensure this path is correct for your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // Import Firestore functions

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
  text: '#7611D1',
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

  @media(max-width:768px){
    height:170px;
  }
`;

const CarTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
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

const H1 = styled.h1`
  font-size:3rem;
  color: ${({ theme }) => theme.text};
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-top: 2rem;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
  margin-top: 2rem;
`;

// --- NEWLY ADDED STYLED COMPONENT ---
const NoImagesMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text}; /* Uses theme for consistent styling */
  margin-top: 2rem;
  width: 100%; /* Ensures it spans the full width if inside CarGrid */
  grid-column: 1 / -1; /* Spans all columns in a grid if it's placed there */
`;
// --- END NEWLY ADDED STYLED COMPONENT ---


const CarShowroomPage = () => {
  const theme = useSelector((state) => state.theme);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesCollection = collection(db, 'uploaded_images2');
        const q = query(imagesCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedImages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(fetchedImages);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <Container theme={theme === true ? lightTheme : darkTheme}>
        <H1>Gallery</H1>
        <LoadingMessage theme={theme === true ? lightTheme : darkTheme}>Loading images...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container theme={theme === true ? lightTheme : darkTheme}>
        <H1>Gallery</H1>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container theme={theme === true ? lightTheme : darkTheme}>
      <H1>Gallery</H1>

      <CarGrid>
        {images.length > 0 ? (
          images.map((imageObj) => (
            <CarCard
              key={imageObj.id}
              theme={theme === true ? 'light' : 'dark'}
            >
              <CarImageThumb src={imageObj.url} alt={`Image ${imageObj.id}`} />
              <CarTitle theme={theme === true ? 'light' : 'dark'}>
                {/* You can add a title from Firestore if you store one for images,
                    otherwise, keep it empty or use a generic descriptor. */}
              </CarTitle>
            </CarCard>
          ))
        ) : (
          <NoImagesMessage theme={theme === true ? lightTheme : darkTheme}>
            No images found in the gallery.
          </NoImagesMessage>
        )}
      </CarGrid>
    </Container>
  );
};

export default CarShowroomPage;