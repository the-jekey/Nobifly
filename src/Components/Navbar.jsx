import React from 'react'
import TextReveal from './TextReveal';
const Navbar = () => {
  return (
    <>
      <nav className='max-w-screen px-5 lg:px-8 flex py-3 items-center justify-between bg-black text-white font-[FontOne]'>
        <TextReveal delay={0.2} animateOnScroll={false}>
          <div className="logo font-light uppercase">
            NobiFly
          </div>
        </TextReveal>
        <div className="menu md:hidden lg:hidden">
          <div className="round size-10 flex items-center justify-center flex-col gap-1 bg-white rounded-full">
            <div className="w-[50%] origin-center rounded-full h-[2px] bg-black "></div>
            <div className="w-[50%]  origin-center transition-transform rounded-full h-[2px] bg-black "></div>
          </div>
        </div>
        <div className="hidden md:flex lg:flex">
          <div className="hidden  md:flex lg:flex">

          </div>
        </div>
        <div className="links hidden md:flex-col md:inline lg:inline gap-2 font-[FontTwo] lg:text-xs  lg:flex-col">
          <TextReveal animateOnScroll={false} delay={0.2}>
            <h1 className='cursor-pointer hover:underline'>About</h1>
            <h1 className='cursor-pointer hover:underline'>Work</h1>
            <h1 className='cursor-pointer hover:underline'>Services</h1>
            <h1 className='cursor-pointer hover:underline'>Contact Us</h1>
          </TextReveal>
        </div>
        <div className="links hidden md:flex-col  md:inline lg:inline gap-2 font-[FontTwo] lg:text-xs lg:flex-col">
          <TextReveal animateOnScroll={false} delay={0.2}>
            <h1 className='cursor-pointer hover:underline'>Instagram</h1>
            <h1 className='cursor-pointer hover:underline'>Linkedin</h1>
            <h1 className='cursor-pointer hover:underline'>X</h1>
          </TextReveal>

        </div>
      </nav>
    </>
  )
}

export default Navbar
