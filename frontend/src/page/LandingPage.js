import React from 'react'
import Populardestinations from '../components/PopularDesination'
import SpecialOffers from '../components/SpecialOffers'
import { Search } from '../components/Search'
import Header from '../components/Header'
import WhyHiking from '../components/WhyHiking'
import OurBestBlog from '../components/OurBestBlog'
import ShowCase from '../components/ShowCase'
import DestinationGallery from '../components/DestinationGallery'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs'


const LandingPage = () => {
  return (
    <div>
      
      <Header/>
      <div>
        <Search />
      </div>
    <Populardestinations/>
    <SpecialOffers />
    <DestinationGallery />
    <WhyHiking/>
    <OurBestBlog/>
    <ShowCase/>
    <WhyChooseUs/>
    <Footer/>
    </div>
  )
}

export default LandingPage