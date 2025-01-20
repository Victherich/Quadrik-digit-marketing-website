// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import { Context } from './Context';

// // Animation for the switch toggle
// const bounce = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// `;

// // Styled components for the switch
// const SwitchContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   z-index: 1000;
//   display: flex;
//   flex-direction: column; /* Changed to column for vertical layout */
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 120px;
//   // background:#fbbf24;
//   background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
//   border-radius: 20px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
//     // animation: ${bounce} 0.6s;
//   }

//   @media (max-width: 768px) {
//     width: 30px;
//     height: 60px;
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   flex-direction:column;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 90%;
//   transition: transform 0.3s ease-in-out;

//   svg {
//     color:#0f172a;
//     // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#0f172a')};
//     font-size: 1.2rem;

//     @media (max-width: 768px) {
//       font-size: 1rem;
//     }
//   }
// `;

// const SwitchToggle = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: ${({ theme }) =>
//     theme === 'dark' ? 'translate(-50%, 120%)' : 'translate(-50%, -120%)'};
//   width: 20px;
//   height: 20px;
//   background:#0f172a;
// //   background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#0f172a')};
//   transition: transform 0.5s ease, background 0.3s ease;
//   border-radius: 50%;

//   @media (max-width: 768px) {
//     width: 15px;
//     height: 15px;
//   }
// `;

// // Switch Component
// const VerticalThemeSwitch = () => {
//   const { theme, setTheme } = useContext(Context);

//   const toggleTheme = () => {
//     setTheme((prev) => !prev);
//   };


  

//   return (
//     <SwitchContainer theme={theme === true ? 'light' : 'dark'} onClick={toggleTheme}>
//       <IconWrapper theme={theme === true ? 'light' : 'dark'}>
//         <FaSun  style={{color:"white"}}/>  <FaMoon style={{color:"white"}}/>
//       </IconWrapper>
//       <SwitchToggle theme={theme === true ? 'light' : 'dark'} />
//     </SwitchContainer>
//   );
// };

// export default VerticalThemeSwitch;



import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Context } from './Context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/Slice';

// Animation for the switch toggle
const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Styled components for the switch
const SwitchContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column; /* Changed to column for vertical layout */
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 120px;
  // background:#fbbf24;
  background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
    // animation: ${bounce} 0.6s;
  }

  @media (max-width: 428px) {
    width: 30px;
    height: 100px;
    right:5px;
    bottom:5px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  transition: transform 0.3s ease-in-out;

  svg {
    color:#0f172a;
    // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#0f172a')};
    font-size: 1.2rem;

    // @media (max-width: 768px) {
    //   font-size: 1rem;
    // }
  }
`;

const SwitchToggle = styled.div`
  position: absolute;
  left: 50%;
  transform: ${({ theme }) =>
    theme === 'dark' ? 'translate(-50%, 120%)' : 'translate(-50%, -120%)'};
  width: 20px;
  height: 20px;
  background:#0f172a;
//   background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#0f172a')};
  transition: transform 0.5s ease, background 0.3s ease;
  border-radius: 50%;

  @media (max-width: 428px) {
    width: 15px;
    height: 15px;
  }
`;

// Switch Component
const VerticalThemeSwitch = () => {
  // const { theme, setTheme } = useContext(Context);
  const dispatch = useDispatch()
  const theme = useSelector((state)=>state.theme)

  // const toggleTheme = () => {
  //   setTheme((prev) => !prev);
  // };


  

  return (
    <SwitchContainer theme={theme === true ? 'light' : 'dark'} onClick={()=>dispatch(toggleTheme())} title="YOU CAN SWITCH TO DAY 0R NIGHT MODE">
      <IconWrapper theme={theme === true ? 'light' : 'dark'}>
        <FaSun  style={{color:"white"}}/>  <FaMoon style={{color:"white"}}/>
      </IconWrapper>
      <SwitchToggle theme={theme === true ? 'light' : 'dark'} />
    </SwitchContainer>
  );
};

export default VerticalThemeSwitch;

