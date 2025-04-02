import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
    return (
        <div className='w-full bg-white py-32 px-4'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-24 md:gap-8'>
                <div className='shadow-xl flex flex-col rounded-md items-center hover:scale-105 ease-in-out duration-500 will-change-transform'>
                    <img src={Single} className='w-20 mt-[-35px] bg-white'/>
                    <div className='my-8 font-bold text-3xl'>Single User</div>
                    <div className='font-bold text-4xl mb-8'>$ 149</div>
                    <div className='flex flex-col text-center'>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 w-full'>500 GB Storage</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>1 Granted User</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>Send Up to 2 GB</div>
                        <button className='bg-[#00df9a] w-full px-10 py-3 text-black font-semibold rounded-md text-nowrap my-10'>Start Trial</button>    
                    </div>
                </div>

                <div className='shadow-xl flex flex-col rounded-md items-center hover:scale-105 ease-in-out duration-500 will-change-transform'>
                    <img src={Double} className='w-20 mt-[-35px] bg-white'/>
                    <div className='my-8 font-bold text-3xl'>Single User</div>
                    <div className='font-bold text-4xl mb-8'>$ 149</div>
                    <div className='flex flex-col text-center'>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 w-full'>500 GB Storage</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>1 Granted User</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>Send Up to 2 GB</div>
                        <button className='bg-black w-full px-10 py-3 text-[#00df9a] font-semibold rounded-md text-nowrap my-10'>Start Trial</button>    
                    </div>
                </div>

                <div className='shadow-xl flex flex-col rounded-md items-center hover:scale-105 ease-in-out duration-500 will-change-transform'>
                    <img src={Triple} className='w-20 mt-[-35px] bg-white'/>
                    <div className='my-8 font-bold text-3xl'>Single User</div>
                    <div className='font-bold text-4xl mb-8'>$ 149</div>
                    <div className='flex flex-col text-center'>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 w-full'>500 GB Storage</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>1 Granted User</div>
                        <div className='font-semibold text-xl border-b border-gray-300 pb-3 pt-3 w-full'>Send Up to 2 GB</div>
                        <button className='bg-[#00df9a] w-full px-10 py-3 text-black font-semibold rounded-md text-nowrap my-10'>Start Trial</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards