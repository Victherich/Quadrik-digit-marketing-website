


// import React, { useState, useEffect, useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBars, FaTimes, FaCar } from 'react-icons/fa';
// import carlogo from '../Images/carlogo.jpeg';
// import smallCar from '../Images/car5Flip.png';
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';

// // Animation Keyframes
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideFastContinuous = keyframes`
//   from {
//     transform: translateX(-200%);
//   }
//   to {
//     transform: translateX(200%);
//   }
// `;

// // Styled Components
// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background: linear-gradient(90deg, #0f172a, #1e293b);
//   color: #ffffff;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   animation: ${fadeIn} 0.8s ease;
//   position:fixed;
//   top:0px;
//   z-index:999;
//   width:100%;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #fbbf24;
//   cursor: pointer;
//   gap: 10px;

//   svg {
//     margin-right: 0.5rem;
//     animation: ${fadeIn} 1s ease;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   @media (max-width: 768px) {
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     position: absolute;
//     top: 100%;
//     right: 0;
//     background: #1e293b;
//     width: 100%;
//     padding: 1rem 0;
//     z-index: 10;
//     animation: ${fadeIn} 0.5s ease;
//   }
// `;

// const NavItem = styled.a`
//   font-size: 0.8rem;
//   text-decoration: none;
//   color: #ffffff;
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #fbbf24;
//     text-decoration:underline;
//   }
// `;

// const Hamburger = styled.div`
//   display: none;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Img = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `;

// const FastCar = styled.img`
//   width: 80px;
//   height: auto;
//   animation: ${slideFastContinuous} 5s linear infinite;
  
// `;

// const CarContainer = styled.div`
//   position: relative;
//   display: flex;
//   overflow: hidden;
//   width: 20%;
//   height: 30px;
//   // background-color: #f8fafc;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// `;

// // Header Component
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useContext(Context);
//   const navigate = useNavigate()

//   return (
//     <HeaderContainer>
//       <Logo>
//         <Img src={carlogo} alt="logo" /> FAC TRADE TRACK <FaCar />
//       </Logo>
//       <CarContainer>
//         <FastCar src={smallCar} alt="Fast Car" />
//       </CarContainer>
//       <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         {isMenuOpen ? <FaTimes /> : <FaBars />}
//       </Hamburger>
//       <Nav isOpen={isMenuOpen}>
//         <NavItem onClick={()=>navigate('/')}>Home</NavItem>
//         <NavItem onClick={()=>navigate('/aboutus')}>About Us</NavItem>
//         <NavItem >Show Room</NavItem>
//         <NavItem >Services & Support</NavItem>
//         <NavItem >Brands & Technology</NavItem>
//         <NavItem >Auto Trending News</NavItem>

//         <NavItem >Contact Us</NavItem>
//       </Nav>
//     </HeaderContainer>
//   );
// };

// export default Header;




import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaCar } from 'react-icons/fa';
import carlogo from '../Images/carlogo.jpeg';
import smallCar from '../Images/car5Flip.png';
import { Context } from './Context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Animation Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideFastContinuous = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(200%);
  }
`;

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background: ${({ theme }) => (theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)')};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.8s ease;
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
  // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#1e293b')};
  cursor: pointer;
  gap: 10px;

  svg {
    margin-right: 0.5rem;
    animation: ${fadeIn} 1s ease;
  }
`;

const Logo2 = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
  // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#1e293b')};
  cursor: pointer;
  gap: 10px;

  svg {
    margin-right: 0.5rem;
    animation: ${fadeIn} 1s ease;
  }

  @media (max-width:428px){
    display:none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align:center;

  @media (max-width: 884px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
    width: 100%;
    padding: 1rem 0;
    z-index: 10;
    animation: ${fadeIn} 0.5s ease;
  }
`;

const NavItem = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : 'orangered')};
  cursor: pointer;
  transition: color 0.3s;
  font-weight:500;

  &:hover {
    // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#94a3b8')};
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 884px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const FastCar = styled.img`
  width: 80px;
  height: auto;
  animation: ${slideFastContinuous} 5s linear infinite;
`;

const CarContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 20%;
  height: 30px;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width:428px){
    width:70%;
  }
`;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { theme, setTheme } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
const theme = useSelector((state)=>state.theme)
const sideMenuRef = useRef();
const {loading,setLoading}=useContext(Context);




  // Handle click outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);



   useEffect(() => {
        setLoading(true)
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds
    
        return () => clearTimeout(timeout); // Cleanup timeout
      }, [location.pathname]);
  

  return (
    <HeaderContainer theme={theme === true ? 'light' : 'dark'}>
      <Logo theme={theme === true ? 'light' : 'dark'}>
        <Img src={carlogo} alt="logo" /> <Logo2 theme={theme === true ? 'light' : 'dark'} >FAC TRADE TRACK <FaCar /></Logo2>
      </Logo>
      <CarContainer>
        <FastCar src={smallCar} alt="Fast Car" />
      </CarContainer>
      <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Nav isOpen={isMenuOpen} theme={theme === true ? 'light' : 'dark'} ref={sideMenuRef}>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() => {navigate('/');window.scroll(0,0);setIsMenuOpen(false)}}>Home</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() => {navigate('/aboutus');setIsMenuOpen(false)}}>About Us</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=> {navigate('/carshowroompage2');setIsMenuOpen(false)}}>Show Room</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=>{navigate('/servicesandsupport');setIsMenuOpen(false)}}>Services & Support</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=> {navigate('/brandandtechnology');setIsMenuOpen(false)}}>Brands & Technology</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() =>{ navigate("/autotrendingnews");setIsMenuOpen(false)}}>Auto Trending News</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=>{navigate("/contactus");setIsMenuOpen(false)}}>Contact Us</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
