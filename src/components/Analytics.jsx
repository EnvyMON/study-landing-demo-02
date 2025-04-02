import React from 'react'
import Laptop from '../assets/analytics_img.jpeg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto' src={Laptop} />
                <div className='flex flex-col justify-center'>
                    <div className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</div>
                    <div className='text-3xl font-bold my-2'>Manage Data Analytics Centrally</div>
                    <div className='font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </div>
                    <button className='bg-black rounded-md py-3 px-10 my-4 text-[#00df9a] font-semibold w-fit mx-auto md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics