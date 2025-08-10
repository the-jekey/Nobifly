import React from 'react'
import TextReveal from './TextReveal'
import Noise from './Noise'

const About = () => {
       return (
              <div className='max-w-screen h-screen px-5 lg:px-8 flex py-5 justify-between bg-black text-white font-[FontOne]'>
                     <div className="about w-full h-full relative overflow-hidden ">


                            <div className="aboutfounder lg:flex gap-10">
                                   <div className="img w-full  h-[60vh] lg:h-[80vh]  lg:w-[60vh]  bg-white ">
                                          <img className='w-full h-full object-cover grayscale-100 ' src="https://images.unsplash.com/photo-1649712041612-021cf78bca23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Founder Image" />
                                          <div className="fou text-white/50 text-[10px] flex items-center justify-between">
                                                 <TextReveal>
                                                        <h1>MR.NITIN</h1>
                                                 </TextReveal>
                                                 <TextReveal>
                                                        <h1>FOUNDER:NOBIFLY</h1>
                                                 </TextReveal>

                                          </div>
                                   </div>
                                   <div className="txtfiunder mt-15 lg:mt-0 lg:w-1/2 ">
                                          <TextReveal>
                                                 <p className='border-b-2 border-zinc-700/50 opacity-50'>( About Me )</p>
                                          </TextReveal>
                                          <TextReveal>
                                                 <p className='opacity-90 pt-2 text-[14px]  lg:w-[70%] leading-[130%]'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi saepe architecto illum porro rem distinctio unde veniam modi sequi, illo doloremque perferendis fugiat soluta quo excepturi tempora vero a. Obcaecati ullam nam veritatis, minus dicta ipsa perferendis molestias, sapiente praesentium soluta culpa! In harum expedita laborum, praesentium porro ea.
                                                        <br />

                                                        <br />
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi saepe architecto illum porro rem distinctio unde veniam modi sequi, illo doloremque perferendis fugiat soluta quo excepturi tempora vero a. Obcaecati ullam nam veritatis, minus dicta ipsa perferendis molestias, sapiente praesentium soluta culpa! In harum expedita laborum, praesentium porro ea.
                                                        <br />
                                                        <br />
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi saepe architecto illum porro rem distinctio unde veniam modi sequi, illo doloremque
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi saepe architecto illum porro rem distinctio unde veniam modi sequi, illo doloremque
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi saepe architecto illum porro rem distinctio unde veniam modi sequi, illo doloremque
                                                 </p>
                                          </TextReveal>
                                   </div>
                            </div>

                     </div>
                     <Noise
                            patternSize={300}
                            patternScaleX={1}
                            patternScaleY={10}
                            patternRefreshInterval={2}
                            patternAlpha={15}
                     />
              </div>
       )
}

export default About
