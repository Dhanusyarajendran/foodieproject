import React from 'react'
import Navbar from '../../Component/Navbar/Navbar.jsx'
import Banner from '../../Component/Banner/Banner.jsx'
import SpecialOffer from '../../Component/SpecialOffer/SpecialOffer.jsx'
import HomeAbout from '../../Component/HomeAbout/HomeAbout.jsx'
import OurHomeMenu from '../../Component/OurHomeMenu/OurHomeMenu.jsx'

const Home = () => {
  return (
    <>
   <Navbar />
   <Banner />
   <SpecialOffer />
   <HomeAbout />
   <OurHomeMenu />
   </>
  )
}

export default Home