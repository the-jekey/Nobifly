import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from './Button';
import TextReveal from './TextReveal';

const Service = () => {
       return (
              <div>
                     <div className="max-w-screen px-5 py-20 lg:px-8 flex-col  justify-between bg-black text-white font-[FontOne]">
                            <div className="txt w-full ">
                                   <TextReveal>
                                          <h1 className='text-4xl'>Services <sup className='text-2xl opacity-50'>( 5+ )</sup></h1>
                                   </TextReveal>
                            </div>
                            <div className="serives mt-10 w-full bg--500">
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Web Development </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>App Development</h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Social-Media Marketing </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>AI Automation </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Web Design </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Web Design </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Web Design </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="1 w-full h-20 flex items-center justify-between border-t-1 border-zinc-600/50 ">
                                          <TextReveal>
                                                 <h1>Web Design </h1>
                                          </TextReveal>
                                          <TextReveal>
                                                 <h1><MdOutlineArrowOutward /></h1>
                                          </TextReveal>
                                   </div>
                                   <div className="btn w-full flex items-center justify-center">
                                          <Button text="Explore" />
                                   </div>
                            </div>


                     </div>
              </div>
       )
}

export default Service
