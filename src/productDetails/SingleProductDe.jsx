import React, { useState } from 'react'
import Slider from "react-slick";
// import ReactImageZoom from "react-image-zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import pic1 from '../assets/features/fea1.png'
import pic2 from '../assets/features/fea2.png'
import pic3 from '../assets/features/fea3.png'
import pic4 from '../assets/features/fea4.png'
import pic5 from '../assets/features/fea5.png'
import { AiFillHeart, AiFillLinkedin, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ImCheckmark } from 'react-icons/im';
import { BsPatchCheck, BsPatchCheckFill, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import NextArrow from '../components/Downarrow';
import Downarrow from '../components/Downarrow';
import UpArrow from '../components/UpArrow';


const SingleProductDe = () => {
    const [incre, setIncre] = useState(1)
    const [imag, setimag] = useState(pic1);
  const imagepack = [
    {
      id: 1,
      img: pic1,
    },
    {
      id: 2,
      img: pic2,
    },
    {
      id: 3,
      img: pic3,
    },
    {
      id: 4,
      img: pic4,
    },
    {
      id: 5,
      img: pic5,
    },
    {
      id: 6,
      img: pic2,
    },
    {
      id: 7,
      img: pic4,
    },
    {
      id: 8,
      img: pic3,
    },
  ];
 
  const increment =()=>{
    setIncre(incre + 1)
  }
  const decrement =()=>{
    if(incre > 0){
      setIncre(incre - 1)
    }
    
  }

  // const prop1 = {
  //   width: 470,
  //   height: 470,
  //   img: imag,
  //   zoomPosition: "original",
  // };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<Downarrow />,
    prevArrow: <UpArrow /> ,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <>
      <section className=' z-0 xs:px-[10px] sm:px-[20px] md:px-[40px] lg:px-[90px] mx-auto pt-[10px] xs:pb-[30px] sm:pb-[40px] md:pb-[50px]'>
         <div className=' grid grid-cols-2 gap-[33px]'>
          <div>
            <div className=' w-full lg:h-[640px]'>
              <div className=' flex items-center justify-center gap-[25px] '>
                         <div className=" w-[80%]">
                         {/* <ReactImageZoom {...prop1} /> */}
                            <img src={`${imag}`} alt="" className="w-[550px] h-[550px] " />
                          
                           </div>   
                         
                 
                  <div className=' w-[20%] relative space-y-[7px] flex flex-col items-center justify-center '>
                  <Slider {...settings} className='w-[92px]  '>
                       {imagepack.map((imgitem)=>{
                        return(
                            <div onClick={()=>setimag(imgitem.img)}  className=' w-[92px] h-[92px]  ' >
                                <img src={imgitem.img} alt="" className=' w-[92px] h-[92px]  ' />
                            </div>    
                        )
                        })}
                    </Slider>    
                  </div>
              </div>
            </div>
            <div className='  flex items-center gap-[10px]'>
                          <p className=' font-poppins text-[20px] leading-[30px] font-normal text-blackText'>Share</p>
                          <div className=' flex items-center justify-center w-[44px] h-[44px] bg-[#5d9db126] rounded-full'>
                           <AiFillLinkedin  className=' text-[#268aa9]' />
                          </div>
                          <div className=' flex items-center justify-center w-[44px] h-[44px] bg-[#53d1e226] rounded-full'>
                           <BsTwitter  className=' text-[#53d1e2]' />
                          </div>
                          <div className=' flex items-center justify-center w-[44px] h-[44px] bg-[#4391da26] rounded-full'>
                           <FaFacebookF  className=' text-[#4391da]' />
                          </div>
                          <div className=' flex items-center justify-center w-[44px] h-[44px] bg-[#3ab13726] rounded-full'>
                           <BsWhatsapp  className=' text-[#3ab137]' />
                          </div>
              </div>
          </div>   
            
              
            <div>
               <div>
                   <h3 className=' font-poppins font-[500] text-[26px] leading-[39px] text-blackText'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h3>
                   <div className=' mt-[17px] flex items-center gap-[30px]'>
                        <div className=' flex items-center gap-[3px]'>
                            <p className='text-[26px] leading-[39px] text-brandColor'>4.0</p>
                            <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FAC96B]' />
                             <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FAC96B]' />
                            <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FAC96B]' />
                            <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FAC96B]' />
                            <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#bababa] ' />
                            <p className='text-[18px] leading-[21px] texct-[#bababa]'>(223)</p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                           <ImCheckmark className=' w-[21px] h-[15px] text-lightGreen' />
                          <h5 className=' text-blackText font-poppins font-[600] text-[18px] leading-[27px]'>4,320 <small className=' font-[400] '>Sold</small></h5>
                        </div>
                        <div className='flex items-center gap-[8px]'>
                           <AiFillHeart className=' w-[22px] h-[19px] text-[#c7c7c7]' />
                          <h5 className='  text-Secblue  font-lato font-[700] text-[18px] leading-[21px]'>Add to wishlist </h5>
                        </div>
                   </div>
                   <div className=' mt-[35px] flex items-center gap-[15px]'>
                       <h2 className='  font-poppins text-[36px] font-[600] leading-[54px] text-Secblue'>$976.33</h2>
                       <p className=' line-through font-[400] text-[20px] leading-[30px] font-poppins text-[#8d8d8d]'>$1,020.99</p>
                       <div className=' flex items-center justify-center w-[48px] h-[30px] bg-gradient-to-r  from-[#FF7A00] to-[#FFB800]'>
                       <h5 className=' font-poppins text-white font-[600] text-[14px] leading-[21px]'>20%</h5>
                       </div>
                   </div>
                   <div className=' mt-[10px] flex items-center gap-[18px]'>
                      <h5 className=' text-blackText font-[500] text-[16px] leading-[24px]'>SKU <small className=' text-[#bababa] font-[400]'>124411585164</small></h5>
                     <div className='flex items-center gap-[2px]'>
                         <BsPatchCheckFill className=' w-[16px] h-[16px]   text-[#3ab137]' />
                         <p className='text-[#bababa] text-[16px] leading-[24px] font-[400]'>In Stock</p>
                     </div>
                    </div>
                    <div className=' mt-[40px]'>
                          <p className=' font-poppins text-[18px] font-[400] leading-[30px] text-black38'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                            dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                            <ol className=' ml-[40px] list-disc mt-[10px] font-poppins text-[18px] font-[400] leading-[36.5px] text-black38'>
                              <li>Direct Full Array</li>
                              <li> Quantum Dot Technology</li>
                              <li> Ambient Mode </li>
                              <li>One Remote Control</li>
                              
                            </ol>
                    </div>
               </div>
               <div className=' mt-[40px] flex items-center gap-[16px]'>
                   <h4 className='text-[19px] font-poppins leading-[28px] text-blackText'>Size</h4>
                   <div className=' flex items-center gap-[10px]'>
                       <div className=' px-[13px] py-[4px] text-[14px] leading-[21px] text-[#6e6e6f] rounded-[1px] border-[1px] border-[#bababa]'>S</div>              
                       <div className=' px-[13px] py-[4px] text-[14px] leading-[21px]  rounded-[1px] border-[1px]  bg-blue text-white '>M</div>              
                       <div className=' px-[13px] py-[4px] text-[14px] leading-[21px] text-[#6e6e6f] rounded-[1px] border-[1px] border-[#bababa]'>L</div>              
                       <div className=' px-[13px] py-[4px] text-[14px] leading-[21px] text-[#6e6e6f] rounded-[1px] border-[1px] border-[#bababa]'>XL</div>              
                       <div className=' px-[13px] py-[4px] text-[14px] leading-[21px] text-[#6e6e6f] rounded-[1px] border-[1px] border-[#bababa]'>XXL</div>              
                   </div>
               </div>
               <div className=' mt-[40px] flex items-center gap-[30px]'>
                  <div className=' flex items-center gap-2'>
                        <p className='text-[14px] leading-[21px] font-poppins text-[#3d3d3f]'>Quantity:</p>
                        <div className='  flex items-center border-[1px] rounded-sm border-[#eaeaea]'>
                           <div className=' bg-[#bababa] text-blackText px-[8px] py-[6px]' onClick={decrement} >-</div>
                           <h4 className=' bg-white text-blackText px-[12px] py-[6px]'>{incre}</h4>
                           <div className=' bg-[#bababa] text-blackText px-[8px] py-[6px]' onClick={increment}>+</div>
                        </div>
                  </div>
                  <div className=' px-[40px] py-[13px] bg-blue text-white rounded' >
                        <p className=' font-poppins font-medium text-[20px] leading-[23.44px]'>Add cart</p>
                  </div>
                  <div className=' px-[40px] py-[13px] bg-[#ebf4f9] text-blue border-[1.5px] border-blue rounded' >
                        <p className=' font-poppins font-medium text-[20px] leading-[23.44px]'>Buy Now</p>
                  </div>
               </div>
            </div>
         </div> 
      </section>
    </>
  )
}

export default SingleProductDe
