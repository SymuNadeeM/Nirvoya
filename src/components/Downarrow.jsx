import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'


const Downarrow = ({onClick}) => {
  return (
    <div className=' absolute  bottom-[-50px]  right-[50%]  left-[40%] z-20 ' onClick={onClick}>
       <div className=' '>
         <FaAngleDown className='  w-[20px] h-[20px] text-[#baba] ' />
       </div>
    </div>
  )
}

export default Downarrow
