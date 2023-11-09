import React from 'react'
import {PiLighthouseLight, PiShirtFoldedThin, PiDress} from "react-icons/pi"
import {MdOutlineMapsHomeWork} from "react-icons/md"
import {BsHandbag} from "react-icons/bs"
import {SlEarphonesAlt} from "react-icons/sl"
import {LiaSwatchbookSolid} from "react-icons/lia"
import {GiBasket, GiJeweledChalice, GiClothes, GiWatch} from "react-icons/gi"
import {TbHorseToy} from "react-icons/tb"
import {GoChevronRight} from "react-icons/go"

const Category = () => {
  return (
    <>
    <section className=' xs:px-[10px] sm:px-[20px] md:px-[90px] mx-auto pt-[10px] xs:pb-[30px] sm:pb-[40px] md:pb-[50px]'>
        <h2 className=' font-poppins font-medium text-[26px] leading-[39px] text-black38'>Category</h2>
        <div className=' mt-[20px] grid sm:grid-cols-2 md:grid-cols-5 gap-2'>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <PiLighthouseLight className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '>Health & Household </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <GiClothes className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Kids Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <TbHorseToy className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Toys </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <GiBasket className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Groceries </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <MdOutlineMapsHomeWork className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Home & Lifestyle </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <PiShirtFoldedThin className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Men Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <PiDress className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Women's Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <LiaSwatchbookSolid className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Stationary & Books </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <BsHandbag className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Leather Goods </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <GiJeweledChalice className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Jewelleries </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <GiWatch className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Watches </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <SlEarphonesAlt className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Men Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <MdOutlineMapsHomeWork className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Home & Lifestyle </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <GiClothes className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6 text-[#394146] '> Kids Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
            <div className=' w-full h-[65px] flex items-center justify-between rounded-[6px] bg-white  shadow-md px-[8px] py-[8px]'>
                   <div className=' flex items-center gap-[4px]'>
                       <PiDress className=' w-[30px] h-[32.51px] text-Secblue' />
                       <p className=' font-poppins font-normal text-[16px] tracking-tighter leading-6
                        text-[#394146] '> Women's Fashion </p>
                   </div>
                   <div>
                      <GoChevronRight  size={20} className=' w-[20px] h-[20px] text-[#999999]' />
                   </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Category
