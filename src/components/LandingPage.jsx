import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import AboutUsPreview from './AboutUsPreview'
import AutoTrendingSummary from './AutoTrendingSummary'
import CoreOfferingsPage from './CoreOfferingsPage'
import WhyPartnerWithUs from './WhyPartnerWithUs'
import CarShowroomPage from './CarShowRoomPage'
import Hero3 from './Hero3'

const LandingPage = () => {
  return (
    <div>

      <Hero/>
      
      <AboutUsPreview/>
      <CoreOfferingsPage/>
      <Hero3/>
      <CarShowroomPage/>
      <AutoTrendingSummary/>
      <WhyPartnerWithUs/>



    </div>
  )
}

export default LandingPage
