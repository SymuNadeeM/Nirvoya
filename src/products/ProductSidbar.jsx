import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { GrStar } from 'react-icons/gr'

const ProductSidbar = () => {
  return (
    <div className=' bg-white'>
        <div className=' border-b-[2px] border-[#F4F4F4]'>
           <div className=' px-[20px] py-[30px]'>
                <p className=' font-poppins font-medium text-[18px] leading-[27px] text-[#3D3D3F]'>Related Categories</p>
                 <div className='mt-[5px] ml-[10px] space-y-[4px]'>
                    <p className=' font-poppins font-[400] text-[16px] leading-[24px] text-[#757575] '>Men’s fashion</p>
                    <p className=' font-poppins font-[400] text-[16px] leading-[24px]  text-Secblue '>Men’s Jacket</p>
                    <p className=' font-poppins font-[400] text-[16px] leading-[24px] text-[#757575] '>Men's T-Shirts</p>
                    <p className=' font-poppins font-[400] text-[16px] leading-[24px] text-[#757575] '>Casual Shirts</p>
                    <p className=' font-poppins font-[400] text-[16px] leading-[24px] text-[#757575] '>Summer T-Shirts</p>
                 </div>
           </div>
        </div>
        <div className=' border-b-[2px] border-[#F4F4F4]'>
           <div className=' px-[20px] py-[25px]'>
               <div className=' flex items-center justify-between'>
                 <p className='font-poppins font-[400] text-[18px] leading-[27px] text-[#383838]'>Filter by Price</p>
                 <BiChevronDown   className=' w-[24px] h-[24px] text-[#383838]' />
               </div>
           </div>
           <div className=' px-[20px] py-[30px]'>
               <input type="range" className=' w-full' />
               <p className=' mt-[5px] font-poppins font-[400] text-[18px] leading-[27px] text-[#a7a7a7]'>Price: <strong className='font-[500]  text-black38'>৳1000 - ৳2500</strong></p>
           </div>
        </div>  
     
           <div className='  px-[20px] py-[25px] space-y-[5px]'>
               <div className=' mb-[30px] flex items-center justify-between'>
                 <p className='font-poppins font-[400] text-[18px] leading-[27px] text-[#383838]'>Filter by Price</p>
                 <BiChevronDown   className=' w-[24px] h-[24px] text-[#383838]' />
               </div>
               <div className=''>
                   <div className='flex items-center gap-[15px]'>
                     <input type="checkbox"  className='  w-[24px] h-[24px] rounded-sm text-[#D0D0D2]'   />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                    </div>
                    <div className='flex items-center gap-[15px]'>
                     <input type="checkbox"  className='  w-[24px] h-[24px] rounded-sm text-[#D0D0D2]'   />
                     <div className=' flex items-center gap-[3px] '>
                     <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                     </div>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                     <input type="checkbox"  className='  w-[24px] h-[24px] rounded-sm text-[#D0D0D2]'   />
                     <div className=' flex items-center gap-[3px] '>
                     <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                     </div>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                     <input type="checkbox"  className='  w-[24px] h-[24px] rounded-sm text-[#D0D0D2]'   />
                     <div className=' flex items-center gap-[3px] '>
                     <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                     </div>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                     <input type="checkbox"  className='  w-[24px] h-[24px] rounded-sm text-[#D0D0D2]'   />
                     <div className=' flex items-center gap-[3px] '>
                     <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                      <GrStar className='text-[#FFB340] w-[30px] h-[30px] '  />
                     </div>
                    </div>
                    
               </div>
           </div>
          
    </div>
  )
}

export default ProductSidbar
