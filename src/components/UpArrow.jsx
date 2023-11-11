import React from 'react'

import { FaAngleUp } from 'react-icons/fa'

const UpArrow = ({onClick}) => {
  return (
    <div className=' absolute top-[-50px]  right-[50%]  left-[40%] z-20 ' onClick={onClick}>
       <div className=' '>
         <FaAngleUp className=' w-[20px] h-[20px] text-[#baba] ' />
       </div>
    </div>
  )
}

export default UpArrow
