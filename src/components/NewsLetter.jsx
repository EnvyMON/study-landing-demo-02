import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-black py-16 px-4 text-white'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-3'>
            <div className='lg:col-span-2 flex flex-col justify-center'>
                <div className='text-2xl md:text-4xl font-bold'>Want tips & tricks to optimize your flow?</div>
                <div>Sign up to our newsletter and stay up to date.</div>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between gap-3 my-8 md:my-0'>
                    <input 
                        className='bg-white rounded-md text-black w-full pl-3 outline-none' 
                        placeholder='Enter your email ...'
                        type='email'
                    />
                    <button className='bg-[#00df9a] w-fit px-10 py-3 text-black font-semibold rounded-md text-nowrap'>Notify me</button>
                </div>
                <div className='mt-2'>We care bout the protection of your data. Read our</div>
                <div className='text-[#00df9a]'>Privacy Policy.</div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter