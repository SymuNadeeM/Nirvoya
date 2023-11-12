import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
     <Navbar />
       <div className=' w-full flex'>
         <div className=" w-1/6 min-h-screen  bg-[#025464] dark:bg-darkCard md:shadow-md ">
          <div className=" text-white ">
            <div>
              <div className=" flex mt-8 px-6 py-3 items-center  text-bold font-semibold  duration-150">
                
                <Link
                  className="px-4 text-bold hover:text-gray-400 duration-150 "
                  to="my-account"
                >
                  My Account
                </Link>
              </div>
              <div className=" flex mt-8 px-6 py-3 items-center  text-bold font-semibold  duration-150">
                
                <Link
                  className="px-4 text-bold hover:text-gray-400 duration-150 "
                  to="my-orders"
                >
                  My orders
                </Link>
              </div>
              

              
            </div>
          </div>
        </div>
        

        {/* ********* OUT-LET ******* */}

        <div className=" w-5/6  bg-[#C0DBEA] dark:bg-darkMain ">
          <Outlet />
        </div> 
        </div> 
      <Footer />  
    </>
  )
}

export default Layout

