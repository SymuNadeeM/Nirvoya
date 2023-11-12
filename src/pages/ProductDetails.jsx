import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleProductDe from '../productDetails/SingleProductDe'
import Breadcrumb from '../productDetails/Breadcrumb'
import Description from '../productDetails/Description'

const ProductDetails = () => {
  return (
    <>
      <div className='bg-[#FAfaFA]'>

      
       <Navbar/>
       <Breadcrumb/>
       <SingleProductDe />
       <Description />
       <Footer/>
      </div>
    </>
  )
}

export default ProductDetails
