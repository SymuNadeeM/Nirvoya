import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../home/Banner'
import Category from '../home/Category'
import FlashDeals from '../home/FlashDeals'
import FeaturesProducts from '../home/FeaturesProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className=' xs:bg-[#9FBB73] sm:bg-[#EC8F5E] md:bg-blue  lg:bg-[#FAfaFA] xl:bg-red'>
       
       <Navbar />
       <Banner />
       <Category />
       <FlashDeals />
       <FeaturesProducts />
       <Footer />
       </div>
    </>
  )
}

export default Home
