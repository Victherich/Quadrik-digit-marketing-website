
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AutoTrendingNews from './components/AutoTrendingNews';
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
  <ScrollToTop/>
  <Snowfall2/>
{/* {<AutoRefresh/>} */}
  {reRender&&<Header/>}
 
  {loading && <LoadingSpinner onComplete={() => setLoading(false)} />}
 { reRender&&<Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/autotrendingnews' element={<AutoTrendingNews/>}/>
     <Route path='/carshowroompage2' element={<CarShowroomPage2/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/servicesandsupport' element={<ServicesAndSupport/>}/>
     <Route path='/brandandtechnology' element={<BrandAndTechnology/>}/>
    </Routes>}

   
   {reRender&& <ThemeSwitch/>}
   { reRender&& <Hero2/>}
    {reRender && <Footer/>}
    <LiveChat/>
  </BrowserRouter>
    
    
  );
}

export default App;
