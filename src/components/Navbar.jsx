import React from 'react'
import {FiSearch} from "react-icons/fi"
import {LiaUser} from "react-icons/lia"
import {CiHeart} from "react-icons/ci"
import {PiShoppingCartLight} from "react-icons/pi"
import logo from "../assets/final png 1.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className=' border-b-[1.5px] border-[#EFEEEE]'>
        
        <div className=' md:px-[40px]  lg:px-[90px] mx-auto  '>
           <div className=' md:py-[15px] lg:py-[20px]  hidden md:grid grid-cols-3 '>
              <div className=' grid col-span-2 '>
                   <div className=' flex items-center md:gap-[30px] lg:gap-[50px]'>
                    <img src={logo} alt="" className=' md:w-[70px] md:h-[80px] lg:w-[141px] lg:h-[80px] ' />
                    
                   <div className='  flex items-center justify-end  w-full '>
                      <input type="text" placeholder="I'm looking for..." className=' bg-[#F1F1F1] w-full  md:h-[40px]  lg:h-[50px] border-[1px] border-[#F1F1F1] outline-none p-[16px]'  />
                      <div className=' flex items-center justify-center md:h-[40px] lg:h-[50px] w-[65px] rounded-tr-[5px] rounded-br-[5px] bg-Secblue text-white'>
                       <FiSearch size={24} />
                      </div>   
                   </div>
                  </div> 
                  
              </div>
              <div className=' grid col-span-1 gap-4 '>
                <div className=' flex items-center md:justify-center lg:justify-end md:gap-3 lg:gap-6'>

                
                    <div className=' flex items-center md:gap-[2px] lg:gap-[6px]'>
                     <LiaUser className=' md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                     <p className=' font-poppins font-[400] md:text-[12px] lg:text-[16px] md:leading-[9px] lg:leading-[19.2px] text-lightText'>Login</p>
                    </div>
                    <div className=' flex items-center md:gap-[2px] lg:gap-[6px]'>
                     <CiHeart className=' md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                     <p className=' font-poppins font-[400] md:text-[12px] lg:text-[16px] md:leading-[9px] lg:leading-[19.2px] text-lightText'>WishList</p>
                    </div>
                    <div className=' flex items-center md:gap-[2px] lg:gap-[6px]'>
                     <PiShoppingCartLight className=' md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                     <p className=' font-poppins font-[400] md:text-[12px] lg:text-[16px] md:leading-[9px] lg:leading-[19.2px] text-lightText'>My Cart</p>
                     <div className=' md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] bg-red rounded-full flex items-center justify-center'>
                        <p className=' md:text-[8px] lg:text-[12px] text-white font-poppins font-[500]'>1</p>
                     </div>
                  </div>
                  </div>
              </div>
           </div>
          <div className=' '>
             <ul className=' hidden md:flex items-center md:justify-center lg:justify-around pb-[4px] '>
                


                <li className='  group '><Link href={"/"} className=' font-poppins font-[500]  text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Women's Fashion  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/singledetails"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li>
                <li className='  group '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>men's Fashion  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li> 
                <li className='  group  '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Kid's Fashion  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px] duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li> 
                <li className='  group  '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Home & Lifestyle  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li>  
                <li className='  group '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Arts & Crafts  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li> 
                <li className='  group  '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Computer & Electronics  </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li> 
                <li className='  group  '><Link href={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] uppercase text-blackText opacity-[85%]'>Food & Grocery   </Link>
                        <div className="z-10  absolute md:w-[687px] lg:w-[1170px] md:top-[163px] md:left-[40px] lg:top-[150px] lg:left-[90px]  duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white border-[2px] border-red rounded-[3px]   ">
                            <div className=' px-[74px] py-[30px] grid grid-cols-5'>
                                <ul>
                                  <li><Link to={"/layout/my-account"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Clothes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>T-shirt</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sharts</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tracksuit</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jeans</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Cosmetic</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Perfume</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Eye-make-up</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Hair-care</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Sports & Outdoors</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Jamdani</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Georgette</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Nakshi Kantha</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Linen</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Khadi</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Tangail Taant</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Monipuri</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Dhakai Benaroshi</Link></li>
                                 
                                </ul>
                                <ul>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Saree</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Cotton</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Silk</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Katan</Link></li>
                                  <li><Link to={"/"} className='  font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Muslin</Link></li>
                                  
                                  <ul className=' mt-[20px]'>
                                  <li><Link to={"/"} className=' font-poppins font-[500] text-[16px] leading-[24px] text-blackText'>Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Heeled shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>sneakers</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Casual Shoes</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Babet</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Sandals</Link></li>
                                  <li><Link to={"/"} className=' font-poppins font-[400] text-[14px] leading-[21px] text-[#757575]'>Slipper</Link></li>
                                  </ul>
                                </ul>
                            </div>
                       </div>
                </li> 
                
             </ul>
          </div>
      </div>
      
        <div className=' sm:flex md:hidden px-[20px] pt-[37px] pb-[23px]'>
            <div className='  flex items-center justify-end  w-full '>
                      <input type="text" placeholder="I'm looking for..." className=' bg-[#F1F1F1] w-full   h-[50px] border-[1px] border-[#F1F1F1] outline-none p-[16px]'  />
                      <div className=' flex items-center justify-center h-[50px] w-[65px] rounded-tr-[5px] rounded-br-[5px] bg-Secblue text-white'>
                       <FiSearch size={24} />
                      </div>   
                   </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
