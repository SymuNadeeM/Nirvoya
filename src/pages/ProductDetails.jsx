import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleProductDe from '../productDetails/SingleProductDe'
import Breadcrumb from '../productDetails/Breadcrumb'

const ProductDetails = () => {
  return (
    <>
      <Navbar/>
       <Breadcrumb/>
       <SingleProductDe />
      <Footer/>
    </>
  )
}

export default ProductDetails
