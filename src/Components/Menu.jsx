import React from 'react'
import TextReveal from './TextReveal'

const Menu = () => {
  return (
    <div className='max-w-screen -top-full right-0 left-0 absolute flex-col h-[90vh] px-5 lg:px-8 flex py-5 justify-between bg-black text-white font-[FontOne]'>
      <div className="top w-full h-fit flex items-center justify-end">

      </div>
      <div className=" w-full  flex items-center justify-center ">
        <div className="flex flex-col text-3xl">
          <TextReveal animateOnScroll={false} delay={0.2} >
            <h1>Home</h1>
          </TextReveal>
          <TextReveal animateOnScroll={false} delay={0.3} >
            <h1>About</h1>
          </TextReveal>
          <TextReveal animateOnScroll={false} delay={0.4} >
            <h1>Work</h1>
          </TextReveal>
          <TextReveal animateOnScroll={false} delay={0.5} >
            <h1>Service</h1>
          </TextReveal>
          <TextReveal animateOnScroll={false} delay={0.6} >
            <h1>Contact Us</h1>
          </TextReveal>
        </div>
      </div>
      <div className="w-full">
        <TextReveal animateOnScroll={false} delay={0.7}>
          <div className="text-[12px] text-white/50">
            <h1 className='border-b-2 border-zinc-600/50'>EMAIL</h1>
            <h1>Hello@NOBIFLY.COM</h1>
          </div>
        </TextReveal>
      </div>
    </div>
  )
}

export default Menu
