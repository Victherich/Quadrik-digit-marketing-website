
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // No delete/edit for landing page view
import Swal from 'sweetalert2'; // Still useful for loading feedback
import { Navigate, useNavigate } from 'react-router-dom';

// --- Themed Colors for Outer Space Aesthetic ---
const spaceThemeColors = {
  mainBackground: '#0D0E1F', // Deep, dark space background
  cardBackground: 'rgba(25, 27, 48, 0.85)', // Slightly translucent dark card
  cardBorder: 'rgba(50, 55, 90, 0.6)', // Subtle border for cards
  mainText: '#E0E6F6', // Light, legible text for cosmic feel
  secondaryText: '#BCC2D9', // Slightly muted text
  accent: '#7EE0FF', // Bright, ethereal blue/cyan for highlights
  accentHover: '#5CD2FF', // Brighter accent on hover
  gold: '#FFD700', // For premium features or titles
  starColor: '#FFFFFF', // For stars
};

// --- Keyframe Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulsate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// --- Styled Components ---

const LandingPageContainer = styled.div`
  background: radial-gradient(circle at top left, #1A1C30, #0D0E1F 70%);
  min-height: 100vh;
  padding: 4rem 1.5rem;
  font-family: 'Poppins', sans-serif; /* A more modern, spacey font */
  color: ${spaceThemeColors.mainText};
  overflow: hidden; /* Hide overflowing stars */
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      url('https://www.transparenttextures.com/patterns/stardust.png'), /* Subtle star texture */
      radial-gradient(circle at 10% 20%, rgba(126, 224, 255, 0.1), transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.08), transparent 60%);
    background-size: cover;
    opacity: 0.8;
    z-index: 0;
  }
`;

const Star = styled.div`
  position: absolute;
  background-color: ${spaceThemeColors.starColor};
  border-radius: 50%;
  opacity: 0;
  animation: ${starTwinkle} ${props => props.duration}s infinite alternate ease-in-out,
             ${fadeIn} 2s ease-out forwards;
  z-index: 1;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 ${props => props.size * 2}px ${props => props.size / 2}px ${spaceThemeColors.starColor};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* Ensure content is above background effects */
  max-width: 1300px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 640px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  color: ${spaceThemeColors.accent};
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  text-shadow: 0 0 15px ${spaceThemeColors.accent}, 0 0 30px ${spaceThemeColors.accentHover};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: ${spaceThemeColors.secondaryText};
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PackageCard = styled.div`
  background-color: ${spaceThemeColors.cardBackground};
  border: 1px solid ${spaceThemeColors.cardBorder};
  backdrop-filter: blur(5px); /* Subtle glassmorphism */
  padding: 2.5rem;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out forwards;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(126, 224, 255, 0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  ${props => props.isFeatured && `
    border-color: ${spaceThemeColors.gold};
    box-shadow: 0 8px 40px rgba(255, 215, 0, 0.3);
    animation: ${fadeIn} 0.8s ease-out forwards, ${pulsate} 3s infinite ease-in-out;

    &::before {
      background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
    }
  `}
`;

const CardTitle = styled.h3`
  color: ${spaceThemeColors.accent};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  text-align: center;
  text-shadow: 0 0 8px rgba(126, 224, 255, 0.5);

  ${props => props.isFeatured && `
    color: ${spaceThemeColors.gold};
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  `}
`;

const CardDescription = styled.p`
  color: ${spaceThemeColors.secondaryText};
  font-size: 1rem;
  margin-bottom: 0rem;
  text-align: center;
  flex-grow: 1; /* Allow description to take available space */
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.98rem;
  color: ${spaceThemeColors.mainText};
  margin-bottom: 0.8rem;
  line-height: 1.5;

  &:before {
    content: '🚀'; /* Rocket emoji for cosmic feel */
    color: ${spaceThemeColors.accent};
    margin-right: 0.8rem;
    font-weight: bold;
    flex-shrink: 0;
  }
`;

const PriceDisplay = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Price = styled.span`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${spaceThemeColors.gold};
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);

  sup {
    font-size: 1.2rem;
    vertical-align: super;
    margin-left: 5px;
    color: ${spaceThemeColors.accent};
  }
`;

const PricePer = styled.span`
  font-size: 0.9rem;
  color: ${spaceThemeColors.secondaryText};
  margin-left: 5px;
`;


const CallToAction = styled.button`
  background: linear-gradient(45deg, ${spaceThemeColors.accent}, ${spaceThemeColors.accentHover});
  color: ${spaceThemeColors.mainBackground};
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  text-align: center;
  box-shadow: 0 5px 20px rgba(126, 224, 255, 0.4);

  &:hover {
    background: linear-gradient(45deg, ${spaceThemeColors.accentHover}, ${spaceThemeColors.accent});
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(126, 224, 255, 0.6);
  }
`;

const NoPackagesMessage = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  color: ${spaceThemeColors.secondaryText};
  font-size: 1.2rem;
  padding: 2.5rem;
  background-color: ${spaceThemeColors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
`;

const generateStars = (numStars) => {
 
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2 + 1; // 1px to 3px
    const duration = Math.random() * 3 + 2; // 2s to 5s
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    stars.push(
      <Star
        key={i}
        size={size}
        duration={duration}
        top={top}
        left={left}
        style={{ animationDelay: `${Math.random() * 2}s` }}
      />
    );
  }
  return stars;
};

// --- Landing Page Component ---

const LandingPagePackages = () => {
       const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPackages = async () => {
    setLoading(true);
    // Swal.fire({
    //   title: 'Journeying through the cosmos...',
    //   allowOutsideClick: false,
    //   didOpen: () => Swal.showLoading(),
    //   background: spaceThemeColors.mainBackground,
    //   color: spaceThemeColors.mainText,
    // });

    try {
      const q = query(collection(db, 'packages'), orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPackages(data);
    //   Swal.close();
    } catch (error) {
      console.error('Error fetching packages:', error);
    //   Swal.fire('Cosmic Anomaly!', 'Failed to retrieve packages. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <LandingPageContainer>
      {generateStars(100)} {/* Generate 100 stars */}
      <ContentWrapper>
        <HeaderContainer>
          <Title>Explore Our Cosmic Packages</Title>
          <Subtitle>
            Embark on an interstellar journey with our meticulously crafted packages.
            Choose the plan that propels you to new heights!
          </Subtitle>
        </HeaderContainer>

        {loading ? (
          <NoPackagesMessage>Loading cosmic data...</NoPackagesMessage>
        ) : (
          <PackageGrid>
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <PackageCard key={pkg.id} isFeatured={pkg.isFeatured}> {/* Assuming 'isFeatured' field */}
                  <CardTitle isFeatured={pkg.isFeatured}>{pkg.title || 'Untitled Package'}</CardTitle>
                  <CardDescription>{pkg.description || 'A journey beyond the stars awaits.'}</CardDescription>

                  <FeatureList>
                    {pkg.items && pkg.items.length > 0 ? (
                      pkg.items.map((item, index) => (
                        <FeatureItem key={index}>{item}</FeatureItem>
                      ))
                    ) : (
                      <FeatureItem>No cosmic features listed.</FeatureItem>
                    )}
                  </FeatureList>

                  {/* <PriceDisplay>
                    <Price>
                      ${pkg.price || 'N/A'}
                      <sup>/month</sup> 
                    </Price>
                    <PricePer>{pkg.priceDetails || ''}</PricePer> 
                  </PriceDisplay> */}
                  
                  <CallToAction onClick={() => navigate('/contactus')}>
                    Launch Your Journey
                  </CallToAction>
                </PackageCard>
              ))
            ) : (
              <NoPackagesMessage>No packages found in this galaxy. Check back soon!</NoPackagesMessage>
            )}
          </PackageGrid>
        )}
      </ContentWrapper>
    </LandingPageContainer>
  );
};

export default LandingPagePackages;