import React from 'react'
import logo from '../assets/final png 1.png'
import {FaCaravan, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {MdOutlinePayment} from 'react-icons/md'
import {CiTimer} from 'react-icons/ci'
import {BsFillStarFill, BsInstagram} from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import payimg from '../assets/image 1.png'
import { SlEarphonesAlt } from 'react-icons/sl'

const Footer = () => {
  return (
    <>
     <footer className=' bg-white'>
      {/* <section className='px-[90px] mx-auto pb-[50px]'> */}
       <div className=' border-b-[1px] border-[#e9e9e9] '>
          <div className=' xs:px-[10px] sm:px-[20px] md:px-[140px]  py-[60px]'>
             <div className=' grid  md:grid-cols-4 xs:gap-[20px] sm:gap-[25px] md:gap-0  md:justify-around'>
                       <div className=' flex items-center gap-[15px]'>
                          <FaCaravan className=' xs:w-[35px] xs:h-[50px] sm:w-[40px] md:w-[61px] sm:h-[32px] md:h-[44.4px] text-Secblue' />
                          <div>
                          <h4 className=' font-poppins font-[500] text-[20px] leading-[30px] text-blackText '>FREE SHIPPING</h4>
                           <p className=' font-poppins text-[16px] leading-[24px] text-[#757575]'>Order via Campaign</p>
                          </div>
                           
                        </div> 
                       <div className=' flex items-center gap-[15px]'>
                          <BsFillStarFill className=' xs:w-[35px] xs:h-[50px] sm:w-[40px] md:w-[61px] sm:h-[32px] md:h-[44.4px] text-Secblue' />
                          <div>
                          <h4 className=' font-poppins font-[500] text-[20px] leading-[30px] text-blackText uppercase '>Best Price</h4>
                           <p className=' font-poppins text-[16px] leading-[24px] text-[#757575]'>Quality products</p>
                          </div>
                           
                        </div> 
                       <div className=' flex items-center gap-[15px]'>
                          <CiTimer className=' xs:w-[35px] xs:h-[50px] sm:w-[40px] md:w-[61px] sm:h-[32px] md:h-[44.4px] text-Secblue' />
                          <div>
                          <h4 className=' font-poppins font-[500] text-[20px] leading-[30px] text-blackText '>FREE RETERN</h4>
                           <p className=' font-poppins text-[16px] leading-[24px] text-[#757575]'>Within 7 days returns</p>
                          </div>
                           
                        </div> 
                       <div className=' flex items-center gap-[15px]'>
                          <MdOutlinePayment className=' xs:w-[35px] xs:h-[50px] sm:w-[40px] md:w-[61px] sm:h-[32px] md:h-[44.4px] text-Secblue' />
                          <div>
                          <h4 className=' font-poppins font-[500] text-[20px] leading-[30px] text-blackText uppercase '>Secure Payment</h4>
                           <p className=' font-poppins text-[16px] leading-[24px] text-[#757575]'>100% secure payment</p>
                          </div>
                           
                        </div> 
             </div>
          </div>
       </div>
         



       <div className=' border-b-[1px] border-[#e9e9e9] '>
        <div className=' xs:px-[10px] sm:px-[20px] md:px-[90px] mx-auto xs:py-[15px] sm:py-[20px] md:py-[60px]'>
            <div className=' grid  md:grid-cols-4 gap-[26px]'>
                 <div className=' space-y-[20px]'>
                     <img src={logo} alt="" className=' ' />
                     <p className=' font-poppins text-[16px]  leading-[28px]  text-[#333333] opacity-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className=' flex items-center gap-[14px]'>
                          <div className=' flex items-center justify-center w-[41.64px] h-[41.64px] bg-Secblue text-white rounded-full' >
                          <FaFacebookF size={28} />
                          </div>
                          <div className=' flex items-center justify-center w-[41.64px] h-[41.64px] bg-[#1DA1F2] text-white rounded-full' >
                          <AiOutlineTwitter size={28} />
                          </div>
                          <div className=' flex items-center justify-center w-[41.64px] h-[41.64px] bg-[#0077B5] text-white rounded-full' >
                          <FaLinkedinIn size={28} />
                          </div>
                          <div className=' flex items-center justify-center w-[41.64px] h-[41.64px] bg-[#405DE6] text-white rounded-full' >
                          <BsInstagram size={28} />
                          </div>
                      </div>
                 </div>
                 <div>
                     <h4 className=' font-poppins font-medium text-[20px] leading-[30px] text-blackText'>QUICK LINKS</h4>
                      <ul className=' mt-[20px] font-poppins text-[18px] leading-[44px] text-black38'>
                        <li className=' '><Link to={"/about"} className=''>About Us</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Contact Us</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Products</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Login</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Sign Up</Link></li>
                      </ul>
                     
                 </div>
                 <div>
                     <h4 className=' font-poppins font-medium text-[20px] leading-[30px] text-blackText'>CUSTOMER AREA</h4>
                      <ul className=' mt-[20px] font-poppins text-[16px] leading-[44px] text-black38'>
                        <li className=' '><Link to={"/about"} className=''>My Account</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Orders</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Terms</Link></li>
                        <li className=' '><Link to={"/about"} className=''> Privacy Policy</Link></li>
                        <li className=' '><Link to={"/about"} className=''>Shipping Information</Link></li>
                      </ul>
                     
                 </div>
                 <div>
                     <h4 className=' font-poppins font-medium text-[20px] leading-[30px] text-blackText'>CONTACT</h4>
                     <p className=' font-poppins text-[14px]  leading-[28px]  text-[#333333] opacity-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                      <div className=' flex items-center gap-[26px] mt-[30px]'>
                              <SlEarphonesAlt  className=' w-[48px] h-[51px] text-lightText'/>
                              <div className=' space-y-[10px]'>
                                 <p className=' font-poppins text-[18px] leading-[24px] text-blackText'>Have any question?</p>
                                 <h3 className=' font-poppins font-[600] text-[28px] leading-[24px] text-Secblue'>099 456 789</h3>
                              </div>
                      </div>
                 </div>
            </div>
        </div>
       </div>
       <div className=' sm:px-[20px]  md:px-[90px] mx-auto py-[20px]'>
          <div className=' flex items-center sm:justify-center md:justify-between'>
              <p className=' font-poppins text-[16px] leading-[24px]'>Projectnirvoya - © 2021 All Rights Reserved</p>
             <div className=' hidden md:flex items-center'>
                   <p className=' font-poppins text-[18px] text-blue leading-[27px] font-medium'>Pay With</p>
                   <img src={payimg} alt="" className=' ' />
                   
             </div>
          </div>
       </div>

      </footer>
    </>
  )
}

export default Footer
