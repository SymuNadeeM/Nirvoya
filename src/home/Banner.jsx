import React from 'react'
import bansid1 from "../assets/bannpic1.png"
import banner1 from "../assets/bannerPme.png"
import bansid2 from "../assets/bannpic2.png"

const Banner = () => {
  return (
    <>
      <section className=' z-0 xs:px-[10px] sm:px-[20px] md:px-[90px] mx-auto pt-[10px] xs:pb-[30px] sm:pb-[40px] md:pb-[50px]'>
        <div className=' grid md:grid-cols-3 gap-[26px]'>
           <div className=' grid md:col-span-2 '>
              <div className=' relative'>
                <img src={banner1} alt="" className=' w-full sm:h-[200px] md:h-[563.55px] rounded-[10px] ' />
                <div className=' absolute xs:left-[15px] xs:top-[15px] sm:left-[20px] sm:top-[20px] md:left-[60px] md:top-[32%] md:bottom-[32%]'>
                      <div className=' xs:w-[190px] xs:h-[] sm:w-[217px] md:w-[486px] sm:h-[153px] md:h-[216px] '>
                         <h2 className=' font-montser font-bold sm:text-[20px] md:text-[45px] sm:leading-[24px] md:leading-[54.86px] text-blue'>Explore Men’s Winter Collection</h2>
                         <p className=' sm:mt-[10px] md:mt-[30px] sm:text-[12px]  md:text-[20px] sm:leading-[20px]  md:leading-[40px] font-normal font-poppins text-[#646464]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                         <button className=' mt-[10px] md:mt-[25px] xs:w-[80px] xs:h-[35px] sm:w-[99px] sm:h-[28px] md:w-[139px] md:h-[44px] xs:text-[10px] sm:text-[12px] font-poppins sm:leading-[18px] md:font-semibold leading-[24px] text-white rounded-[5px] xs:px-[10px] xs:py-[4px] sm:px-[10px] md:px-[25px] sm:py-[4px] md:py-[10px] bg-Secblue'>SHOP NOW</button>
                      </div>
                     
                </div>
              </div>
           </div>
           <div className=' hidden md:grid md:col-span-1 gap-[26px] '>
               <div className=' relative'>
                 <img src={bansid1} alt="" className=' w-full h-[267.77px] rounded-md ' />
                 <div className=' absolute left-[50px]  right-[50px] bottom-[20px] rounded-[5px]  h-[56px] px-[32px] py-[16px] bg-[#FAFAFA] opacity-[80%]'>
                     <h3 className=' font-montser font-semibold text-[18px] leading-[24.38px] text-Secblue'>Groceries collection</h3>
                 </div>
               </div>
               <div className=' relative'>
                 <img src={bansid2} alt="" className=' w-full h-[267.77px] rounded-md ' />
                 <div className=' absolute left-[20px]  right-[20px] bottom-[20px] rounded-[5px]  h-[56px] px-[32px] py-[16px] bg-[#FAFAFA] opacity-[80%]'>
                     <h3 className=' font-montser font-semibold text-[18px] leading-[24.38px] text-Secblue'>Health & Beauty collection</h3>
                 </div>
               </div>
               
           </div>
        </div>
      </section>
    </>
  )
}

export default Banner
