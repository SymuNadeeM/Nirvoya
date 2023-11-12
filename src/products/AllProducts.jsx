import React from 'react'
import flash1 from '../assets/flash/flash1.png'
// import flash2 from '../assets/flash/flash2.png'
import flash3 from '../assets/flash/flash3.png'
import flash4 from '../assets/flash/flash4.png'
import feat1 from '../assets/features/fea1.png'
import feat2 from '../assets/features/fea2.png'
import feat3 from '../assets/features/fea3.png'
import feat4 from '../assets/features/fea4.png'
import feat5 from '../assets/features/fea5.png'
import feat6 from '../assets/features/fea6.png'
import feat7 from '../assets/features/fea7.png'
import feat8 from '../assets/features/fea8.png'
import feat9 from '../assets/features/fea9.png'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { BsBasket2 } from 'react-icons/bs'
import ProductSidbar from './ProductSidbar'


const AllProducts = () => {
  return (
    <>
      <section className='  z-0 xs:px-[10px] sm:px-[20px] md:px-[40px] lg:px-[90px] mx-auto pt-[10px] xs:pb-[30px] sm:pb-[40px] lg:py-[50px] '>
         <div className=' grid md:grid-cols-4  '>
            <div className=' grid md:col-span-1 h-fit '>
                <ProductSidbar />
            </div>
            <div className='xs:mt-3 lg:ml-[40px] grid md:col-span-3 '>
               <div className=' flex items-center justify-between'>
                 <p className=' font-poppins text-[16px] leading-[27px] font-medium text-[#424241] opacity-50'>Showing 
                 <strong className='  text-blackText opacity-100'> 20</strong> of <strong className=' text-blackText opacity-100'>160</strong> product</p>
                 <div className=' flex items-center gap-2'>
                 <p className=' font-poppins text-[16px] leading-[27px]  text-[#424241] opacity-50'>Sort by:</p>
                  <select name="" id="" className='  bg-[#E9E9E9] px-[5px] py-[2px] border-[1px] border-[#e9e9e9]  font-poppins text-[18px] leading-[27px]  text-[#424241] opacity-50'>
                    <option value="">Newest Items </option>
                    <option value="">Newest Items 2</option>
                    <option value="">Newest Items 3</option>

                  </select>
                 </div>
               </div>
               <div className='xs:mt-[10px] sm:mt-[15px] md:mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 xs:gap-[10px] sm:gap-[15px] md:gap-[26px]'>
               <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={flash1} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
                 
              </div>
              <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={flash3} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
              </div>
              <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={flash4} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
              </div>
             <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat1} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
               </div>
              <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat2} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
              </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat3} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat4} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat5} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat6} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat7} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat8} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
            <div className=' xs:h-[280px]  sm:h-[280px] w-full md:h-[430px] border-[1px] border-[#E9E9E9] xs:rounded-[4px] sm:rounded-[5px] md:rounded-[10px] bg-white xs:p-[4px] sm:p-[5px] md:p-[10px] '>
                 <div className=' relative w-full h-[277px]  rounded-[10px] '>
                   <img src={feat9} alt="" className='xs:rounded-[4px] sm:rounded-[5px]  md:rounded-[10px] xs:h-[167px] sm:h-[167px] w-full  md:h-full bg-[#e9e9e9]' />
                   
                      
                      <div className='absolute top-[20px] right-[12px]'>
                        <AiOutlineHeart className=' w-[23.17px] h-[19.67px] text-[#999999]' />
                      </div>
                      <div className=' xs:py-[7px] xs:px-[10px] sm:px-[10px]  md:p-[5px]  md:pt-[15px] '>
                        <div className=' sm:space-y-[5px] md:space-y-[10px]'>
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[12px] font-normal font-poppins text-[#333333]'>(0)</p>
                     </div>
                     <div>
                        <h3 className=' font-normal font-poppins sm:text-[14px] md:text-[18px] sm:leading-[18.2px] md:leading-[21.6px] text-black38'>Headrest Executive Mesh Office Chair set</h3>
                     </div>
                     <div className=' flex items-center justify-between'>
                       <h2 className=' font-poppins font-medium sm:text-[16px] md:text-[22px] sm:leading-[24px] md:leading-[33px] text-blue' >৳10500</h2>
                       <BsBasket2 className=' text-blue sm:w-[16px] md:w-[24px] sm:h-[13.82px] md:h-[20.23px]' />
                     </div>
                     </div>
                 </div>
                 </div>
                 
            </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default AllProducts
