import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllProducts from '../products/AllProducts'

const Products = () => {
  return (
    <div className='bg-[#FAfaFA]'>
       <Navbar/>
        <AllProducts />
       <Footer/>
    </div>
  )
}

export default Products
