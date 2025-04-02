import React from 'react'
import { ReactTyped  } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] h-screen flex flex-col mx-auto items-center justify-center'>
            <div className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</div>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold pb-2'>Grow with data.</h1>
            <div className='flex items-center justify-center'>
                <div className='text-xl md:text-2xl font-bold py-4'>Fast, Flexible Financing for</div>
                <ReactTyped 
                    className='text-xl md:text-2xl font-bold pl-3 text-gray-500'
                    strings={['BTB', 'BTC', 'SASS']} 
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <div className='text-md md:text-xl font-bold text-gray-500 text-center'>
                Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
            </div>
            <button className='bg-[#00df9a] rounded-md py-3 px-10 my-6 text-black font-semibold'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero