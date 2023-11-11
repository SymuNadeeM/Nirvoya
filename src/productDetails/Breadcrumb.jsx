import React from 'react'
import {BiChevronRight} from "react-icons/bi"

const Breadcrumb = () => {
  return (
    <>
            <section className=' z-0 xs:px-[10px] sm:px-[20px] md:px-[40px] lg:px-[90px] mx-auto  lg:pt-[50px] lg:pb-[20px]'>
                <div className=' flex items-center font-poppins font-[400] text-[16px] text-brandColor leading-[24px] gap-2'>
                   <p>Home</p>
                   <BiChevronRight />
                   <p>Men's fashion</p>
                   <BiChevronRight />
                   <p className='text-[#757575]'>Men's Stand Collar Leather Jacket</p>
                </div>
            </section>
    </>
  )
}

export default Breadcrumb
