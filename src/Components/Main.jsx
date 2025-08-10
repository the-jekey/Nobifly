import React from 'react'
import TextReveal from './TextReveal'
import Navbar from './Navbar'
import TextPressure from './TextPressure'

const Main = () => {
       return (
              <div className='max-w-screen h-screen px-5 lg:px-8 flex-col py-5 justify-between bg-black text-white font-[FontOne]'>
                     <div className="w-full h-full overflow-hidden relative">

                            <Navbar />
                            <div className="w-full mt-20">

                                   <div className="txt">
                                          <div className='px-6 relative lg:h-[400px] h-[90px] select-none' >
                                                 <TextPressure
                                                        text="NOBIFLY"
                                                        flex={true}
                                                        alpha={false}
                                                        stroke={false}
                                                        width={true}
                                                        weight={true}
                                                        italic={true}
                                                        textColor="#fff"
                                                        strokeColor="#ff0000"
                                                        minFontSize={60}
                                                 />
                                          </div>
                                   </div>
                                   <div className="pera w-full  flex justify-between lg:px-6 px-7 font-light pr-6 lg:text-xl lg:pr-10 text-[10px]">
                                          <TextReveal delay={3.1} animateOnScroll={false}>
                                                 <h1>Design</h1>
                                          </TextReveal>
                                          <TextReveal delay={3.1} animateOnScroll={false}>
                                                 <h1>&</h1>
                                          </TextReveal>
                                          <TextReveal delay={3.1} animateOnScroll={false}>
                                                 <h1>Deveolpment</h1>
                                          </TextReveal>
                                          <TextReveal delay={3.1} animateOnScroll={false}>
                                                 <h1>Company</h1>
                                          </TextReveal>
                                   </div>
                                   <div className="about mt-30">
                                          <TextReveal delay={3.1} animateOnScroll={false}>
                                                 <p className='opacity-50 lg:w-[30%] text-[12px] w-[80%]  lg:text-[20px]  lg:px-1'>
                                                        Nobifly is a Creative web & app Deveolpment company who gives their serivce national and international and work with creative brands and startups.

                                                 </p>
                                          </TextReveal>
                                   </div>
                                   <div className="video w-full mt-40">
                                          <div className="vid w-full h-[60vh] bg-white">
                                                 <img className='w-full h-full bg-center object-cover ' src="https://images.unsplash.com/photo-1735905131227-88f4942d1d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D" alt="" />
                                          </div>
                                   </div>
                            </div>

                     </div>
              </div>

       )
}

export default Main
