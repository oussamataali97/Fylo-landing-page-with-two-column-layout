import React from 'react'
import hero from '../images/illustration-1.svg'
import Button from './UI/Button'

function Hero() {
  return (
    <section className='prodcution  md:flex items-center  flex flex-col-reverse md:flex-row  px-5 md:px-0 py-20 md:py-10 gap-10 max-w-[75rem] mx-auto'>
    
        <div className="text">
            <p className='font-[700] text-3xl px-7 md:px-0 text-center md:text-left md:text-4xl'>  All your files in one secure location, accessible anywhere.</p>
            <p className='py-10 font-[700] text-gray-700'>  Fylo stores your most important files in one secure location. 
                ccess them wherever you need, share and collaborate with friends, 
                    family, and co-workers.</p>
            <div className="mail">
                <form action="" className='flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-4 '>
                    <input type="email" required className='md:flex-1 border border-1 border-gray-300 py-1'/>
                    <Button>Get Started</Button>
                </form>
            </div>
        </div>
        <img src={hero} alt="" className='md:w-1/2'/>
    </section>
  )
}

export default Hero