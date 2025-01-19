
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AutoTrendingNews from './components/AutoTrendingNews';
import Hero2 from './components/Hero2';
import ThemeSwitch from './components/ThemeSwitch';
import CarShowroomPage2 from './components/CarShowRoomPage2';
import ScrollAnimation from './components/scrollAnimation';
import ContactUs from './components/ContactUs';
import ServicesAndSupport from './components/ServicesAndSupport';

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop/>
  <Header/>
  <ScrollAnimation>
  <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/autotrendingnews' element={<AutoTrendingNews/>}/>
     <Route path='/carshowroompage2' element={<CarShowroomPage2/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/servicesandsupport' element={<ServicesAndSupport/>}/>
    </Routes>
  </ScrollAnimation>
   
    <ThemeSwitch/>
    <Hero2/>
    <Footer/>
  </BrowserRouter>
    
    
  );
}

export default App;
