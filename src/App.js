
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AutoTrendingNews from './components/QDM_Blog';
import Hero2 from './components/Hero2';
import ThemeSwitch from './components/ThemeSwitch';
import CarShowroomPage2 from './components/CarShowRoomPage2';
import ScrollAnimation from './components/scrollAnimation';
import ContactUs from './components/ContactUs';
import ServicesAndSupport from './components/ServicesAndSupport';
import BrandAndTechnology from './components/BrandAndTechnology';
import { useContext, useEffect , useState} from 'react';
import Snowfall2 from './components/snowFall';
import { Context } from './components/Context';
import AutoRefresh from './components/AutoRefresh';

import LoadingSpinner from './components/LoadingSpinner';
import LiveChat from './components/Chat';
import CoreOfferingsPage from './components/CoreOfferingsPage';
import ArticleDetail from './components/ArticleDetail';
import AdminSignup from './components/AdminSignUp';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashborad';
import PrivateAdminDashboard from './components/PrivateAdminDashboard';
import AdminForgotPassword from './components/AdminForgotPassword';
import AdminResetPassword from './components/AdminResetPassword';
import TermsAndConditions from './components/TermsAndConditions';
import HostingExpiryGuard from './components/HostingExpiryGuard';
import AppUpdate from './components/AppUpdate';
import GoogleTranslate from './components/GoogleTranslate';
import wp from './Images4/whatsapplogo.png';

function App() {

  
  const {loading,setLoading,location2}=useContext(Context)

 
  const [reRender,setRerender]=useState(true)
 console.log(reRender, "rerender")

 useEffect(()=>{

    const interalId = setTimeout(()=>{
        setRerender(false)
    },200)

    const interalId2 = setTimeout(()=>{
        setRerender(true)
    },1000)

    return ()=>{clearInterval(interalId) ; clearInterval(interalId2)}

  },[])


  return (
  <BrowserRouter>
  <GoogleTranslate/>
  <ScrollToTop/>
  <Snowfall2/>
  <HostingExpiryGuard/>
  <AppUpdate/>
{/* {<AutoRefresh/>} */}
  <Header/>
 
  {loading && <LoadingSpinner onComplete={() => setLoading(false)} />}
 <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/services' element={<CoreOfferingsPage/>}/>
      <Route path='/blogs' element={<AutoTrendingNews/>}/>
     <Route path='/carshowroompage2' element={<CarShowroomPage2/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/servicesandsupport' element={<ServicesAndSupport/>}/>
     <Route path='/brandandtechnology' element={<BrandAndTechnology/>}/>
     <Route path='/blog/:articleId' element={<ArticleDetail/>}/>
     <Route path='/termsandconditions' element = {<TermsAndConditions/>}/>




   {/* Admin routes */}

     <Route path='/admindashboard' element={<PrivateAdminDashboard/>}>
          <Route path='' element={<AdminDashboard/>}/>
        </Route>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignup/>}/>
        <Route path='/adminforgotpassword' element={<AdminForgotPassword/>}/>
        <Route path='/adminresetpassword' element={<AdminResetPassword/>}/>



    </Routes>

 

   <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/971528895565", "_blank")} /></a> 
     
    <ThemeSwitch/>
    <Hero2/>
    <Footer/>
    <LiveChat/>
  </BrowserRouter>
    
    
  );
}

export default App;
