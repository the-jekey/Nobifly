import React from 'react'
import TextReveal from './TextReveal'

const Footer = () => {
       return (
              <div>
                     <footer className='max-w-screen relative h-screen px-5  lg:px-8 flex-col bg-black  py-5 justify-between  text-white font-[FontOne]'>
                            <div className="w-full h-[97%]   flex items-center justify-center">
                                   <div className="h-full w-1/2 flex py-10 flex-col items-center justify-center text-7xl">
                                          <TextReveal>
                                                 <h1>N</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>O</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>B</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>I</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>F</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>L</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1>Y</h1>
                                          </TextReveal>

                                   </div>
                                   <div className="w-1/2 h-[60%] flex flex-col justify-around   bg--800">

                                          <div className="w-full flex flex-col gap-2 ">
                                                 <div className=" w-full text-[14px] ">
                                                        <TextReveal>
                                                               <h1 className='border-b-1 border-zinc-600/50 '>E:</h1>
                                                        </TextReveal>
                                                        <TextReveal>
                                                               <h1>Hello@Nobifly.com</h1>
                                                        </TextReveal>
                                                 </div>
                                                 <div className=" w-full text-[14px] ">
                                                        <TextReveal>
                                                               <h1 className='border-b-1 border-zinc-600/50 '>W:</h1>
                                                        </TextReveal>
                                                        <TextReveal>
                                                               <h1>Hello@Nobifly.com</h1>
                                                        </TextReveal>
                                                 </div>
                                          </div>
                                          <div className="w-full flex flex-col gap-5">

                                                 <div className="link w-full text-[12px]">
                                                        <TextReveal>
                                                               <h1 className='border-b-2 border-zinc-600/50 '>Menu</h1>
                                                               <h1 className=''>Home</h1>
                                                               <h1 className=''>About</h1>
                                                               <h1 className=''>Services</h1>
                                                               <h1 className=''>Contact Us</h1>
                                                        </TextReveal>
                                                 </div>

                                                 <div className="link w-full text-[12px]">
                                                        <TextReveal>
                                                               <h1 className='border-b-2 border-zinc-600/50 '>Social</h1>
                                                               <h1 className=''>Instagram</h1>
                                                               <h1 className=''>Linkedin</h1>
                                                               <h1 className=''>Dribble</h1>
                                                               <h1 className=''>Youtube</h1>
                                                        </TextReveal>
                                                 </div>
                                          </div>

                                   </div>
                            </div>
                           

                            <div className="border-t-2 bg-black border-zinc-600/50 flex justify-between text-[10px] border-dotted ">
                                   <div className="">
                                          <TextReveal animateOnScroll={false} delay={0.5}>
                                                 <h1>@2025 <span>NOBIFLY</span></h1>
                                                 <h1>All Rights Are Reserved</h1>
                                          </TextReveal>
                                   </div>
                                   <div className="">
                                          <TextReveal animateOnScroll={false} delay={0.5}>
                                                 <h1>Website by <span>Jekey</span></h1>
                                          </TextReveal>
                                   </div>


                            </div>
                     </footer>
              </div>
       )
}

export default Footer
