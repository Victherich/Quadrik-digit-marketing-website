// LoadingSpinner.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../Images/carlogo.jpeg'; // Replace with the path to your car logo image

// Keyframes for spinning animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Keyframes for fading in and out
const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// Styled container for the loading screen
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
//   background-color: rgba(0, 0, 0, 0.8); /* Dark background */
  z-index: 9999; /* Always on top */
//   animation: ${fadeInOut} 2s ease;
`;

// Styled logo for spinning
const SpinningLogo = styled.img`
  width: 200px;
  height: 200px;
  border-radius:50%;
  animation: ${spin} 5s linear infinite;
`;

const LoadingSpinner = ({ onComplete }) => {
  useEffect(() => {
    // Automatically call onComplete after 2 seconds
    const timeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [onComplete]);

  return (
    <LoadingContainer>
      <SpinningLogo src={logo} alt="Car Logo" />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
