import React from 'react'
import rev1 from '../assets/gdf.png'
import rev2 from '../assets/repic.png'
import rev3 from '../assets/repic2.png'
import rev4 from '../assets/repic3.png'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { GrStar } from 'react-icons/gr'

const Description = () => {
  return (
    <section className='  z-0 xs:px-[10px] sm:px-[20px] md:px-[40px] lg:px-[90px] mx-auto pt-[10px] xs:pb-[30px] sm:pb-[40px] md:pb-[50px]'>
           <div className=' w-full border-[1px] border-[#F1F1F1] bg-white px-[40px] pb-[40px] pt-[30px] '>
                <h3 className=' font-poppins font-medium text-[24px] leading-[36px] text-Secblue'>Producr details of LED Monitor With High Quality In The World</h3>
                <p className=' mt-[40px] font-lato font-bold text-[24px] leading-[28.8px] text-[#333333] '>See the best picture no matter where you sit</p>
             <div className=' flex'>
                <ol className=' ml-[30px] list-disc w-1/2 mt-[15px] font-lato text-[18px] font-[400] leading-[34px] text-blackText'>
                   <li>Size : M, L, XL </li>   
                   <li>Product Type : Jogger </li>
                   <li>Main Material : Cotton </li>
                   <li>Gender : Male </li>
                   <li>Waist : Mid-rise </li>
                   <li>Zip : Fly</li>
                </ol>
                <ol className=' list-disc w-1/2 mt-[15px] font-lato text-[18px] font-[400] leading-[34px] text-blackText'>
                   <li>Zipper : Yes  </li>   
                   <li>Pocket : Two front and One Back Pockets. </li>
                   <li> 100% Authentic Product </li>
                   <li>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices  </li>
                   
                </ol>
            </div>  
                <div className=' mt-[40px] '>
                     <h4 className=' font-lato font-bold text-[24px] leading-[28.8px] text-blackText' >Powerful intelligence for perfection</h4>   
                     <p className='mt-[15px] font-lato font-[400] text-[18px] leading-[34px] text-blackText '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                     At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita </p>
                </div>
           </div> 
           <div className=' w-full border-[1px] border-[#F1F1F1] bg-white  '>
               <div className=' flex items-center gap-[75px] p-[40px]'>
                    <div >
                         <p className=' font-poppins text-[20px] leading-[30px] text-blackText'>Customer reviews</p>  
                         <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[2px]'>
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiFillStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] text-[#FAC96B]' />
                         <AiOutlineStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px text-[#D3D3D3] ' />
                         <p className='ml-[2px] text-[15px] font-[400] font-poppins text-[#333333]'>4.6 out of 5</p>
                     </div>
                    </div>
                    <div className=' space-y-[3px]'>
                        <div className=' flex items-center gap-2'>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>5 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#FFB340]'></div>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>79%</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>4 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#DBDEDF] '>
                            <div className=' w-[165px] h-[8px] rounded-[5px] bg-[#FFB340] '></div>
                            </div>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>12%</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>3 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#DBDEDF] '>
                            <div className=' w-[140px] h-[8px] rounded-[5px] bg-[#FFB340] '></div>
                            </div>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>4%</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>2 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#DBDEDF] '>
                            <div className=' w-[110px] h-[8px] rounded-[5px] bg-[#FFB340] '></div>
                            </div>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>2%</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>1 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#DBDEDF] '>
                            <div className=' w-[80px] h-[8px] rounded-[5px] bg-[#FFB340] '></div>
                            </div>
                            <p className=' font-poppins text-[14px] leading-[21px] text-[#3d3d3d]'>4%</p>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center w-[200px] h-[40px]  rounded-[3px] font-poppins font-[500] text-[14px] leading-[21px]  bg-Secblue text-white'>
                    Write a Review
                    </div>
               </div>
            <div className=' bg-white  '>
               <div className=' px-[40px] border-b-[2px] border-[#f1f1f1] border-opacity-[70%]'>
                   <h3 className=' py-[20px] font-poppins font-[500] text-[24px] leading-[28.8px] text-blackText'>Reviews (4)</h3>
               </div>
               <div className=' w-full border-[1px] border-[#F1F1F1] bg-white px-[40px] pt-[20px] pb-[40px] '>
                   <div className=' w-full'>
                       <div className=' flex items-center gap-[12px]'>
                         <img src={rev1} alt="" className=' w-[56px] h-[56px]  rounded' />
                         <div className=''>
                             <p className=' pb-[4px] font-poppins text-[18px] leading-[27px] font-[500] text-blackText'>Vanille</p>
                             <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[8px]'>
                                <p className='font-poppins text-[18px] leading-[27px] font-[500] text-[#636363]'>5.0</p>
                              <div className=" flex items-center">
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              </div>
                               
                               <p className='ml-[2px] text-[18px] font-[400] font-poppins text-[#A7A7A7]'>1 Month Ago</p>
                             </div>
                         </div>
                        
                       </div>
                       <p className=' py-[25px] font-poppins text-[18px] leading-[27px] font-[400] text-blackText '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   </div>
                   <div className=' w-full'>
                       <div className=' flex items-center gap-[12px]'>
                         <img src={rev2} alt="" className=' w-[56px] h-[56px]  rounded' />
                         <div className=''>
                             <p className=' pb-[4px] font-poppins text-[18px] leading-[27px] font-[500] text-blackText'>Vanille</p>
                             <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[8px]'>
                                <p className='font-poppins text-[18px] leading-[27px] font-[500] text-[#636363]'>5.0</p>
                              <div className=" flex items-center">
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              </div>
                               
                               <p className='ml-[2px] text-[18px] font-[400] font-poppins text-[#A7A7A7]'>1 Month Ago</p>
                             </div>
                         </div>
                        
                       </div>
                       <p className=' py-[25px] font-poppins text-[18px] leading-[27px] font-[400] text-blackText '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   </div>
                   <div className=' w-full'>
                       <div className=' flex items-center gap-[12px]'>
                         <img src={rev3} alt="" className=' w-[56px] h-[56px]  rounded' />
                         <div className=''>
                             <p className=' pb-[4px] font-poppins text-[18px] leading-[27px] font-[500] text-blackText'>Vanille</p>
                             <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[8px]'>
                                <p className='font-poppins text-[18px] leading-[27px] font-[500] text-[#636363]'>5.0</p>
                              <div className=" flex items-center">
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              </div>
                               
                               <p className='ml-[2px] text-[18px] font-[400] font-poppins text-[#A7A7A7]'>1 Month Ago</p>
                             </div>
                         </div>
                        
                       </div>
                       <p className=' py-[25px] font-poppins text-[18px] leading-[27px] font-[400] text-blackText '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   </div>
                   <div className=' w-full'>
                       <div className=' flex items-center gap-[12px]'>
                         <img src={rev4} alt="" className=' w-[56px] h-[56px]  rounded' />
                         <div className=''>
                             <p className=' pb-[4px] font-poppins text-[18px] leading-[27px] font-[500] text-blackText'>Vanille</p>
                             <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[8px]'>
                                <p className='font-poppins text-[18px] leading-[27px] font-[500] text-[#636363]'>5.0</p>
                              <div className=" flex items-center">
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[24px] lg:h-[24px] text-[#FFB340]' />
                              </div>
                               
                               <p className='ml-[2px] text-[18px] font-[400] font-poppins text-[#A7A7A7]'>1 Month Ago</p>
                             </div>
                         </div>
                        
                       </div>
                       <p className=' py-[25px] font-poppins text-[18px] leading-[27px] font-[400] text-blackText '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   </div>
               </div>
              <div className=' p-[40px]'>
                     <div>
                       <h4 className=' font-poppins font-semibold text-[24px] leading-[36px] text-blackText'>Add Your Review</h4>
                        <p className=' space-y-[30px] text-[#A7A7A7] font-poppins font-[400] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                     </div>
                     <form action="" className=' space-y-[30px]'>
                        <div className=' flex flex-col'>
                          <label htmlFor="" className='font-poppins font-[400] text-[18px] leading-[27px] text-blackText' >Name *</label>
                          <input type="text" className=' px-[20px] w-[65%] h-[60px] bg-[#FAfaFA] rounded-[5px] border-[1px] border-[#A7A7A7] border-opacity-70 outline-none ' />
                        </div>
                        <div className=' flex flex-col'>
                          <label htmlFor="" className='font-poppins font-[400] text-[18px] leading-[27px] text-blackText' >Email *</label>
                          <input type="email" className=' px-[20px] w-[65%] h-[60px] bg-[#FAfaFA] rounded-[5px] border-[1px] border-[#A7A7A7] border-opacity-70 outline-none ' />
                        </div>
                        <div className=' flex flex-col'>
                          <label htmlFor="" className='font-poppins font-[400] text-[18px] leading-[27px] text-blackText' >Review *</label>
                          <textarea type="email" className=' p-[20px] w-[65%] h-[120px] bg-[#FAfaFA] rounded-[5px] border-[1px] border-[#A7A7A7] border-opacity-70 outline-none ' />
                        </div>
                        <div className=' sm:mt-[4px] md:mt-0 flex items-center gap-[8px]'>
                                <p className='font-poppins text-[18px] leading-[27px] font-[500] text-blackText'>Rating</p>
                              <div className=" flex items-center">
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[32px] lg:h-[32px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[32px] lg:h-[32px] text-[#FFB340]' />
                              <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[32px] lg:h-[32px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[32px] lg:h-[32px] text-[#FFB340]' />
                               <GrStar className=' sm:w-[13px] md:w-[16px] sm:h-[13px] md:h-[16px] lg:w-[32px] lg:h-[32px] text-[#FFB340]' />
                              </div>
                           </div>   
                           <div className=' flex items-center justify-center w-[180px] h-[60px] rounded-[8px] font-poppins text-[18px] leading-[27px] font-[500] p-[16px] bg-Secblue text-white' >
                                Submit
                           </div>
                     </form>
              </div>
           </div>
           </div>
           

    </section>    
  )
}

export default Description
