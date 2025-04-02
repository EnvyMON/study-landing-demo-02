import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
    "Home",
    "Company",
    "Resources",
    "About",
    "Contact"
]

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    } 


    return (
        <div className='flex items-center max-w-7xl mx-auto px-4 text-white h-24'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                {
                    navItems.map((item, idx)=>(
                        <li key={idx} className='p-4' >{item}</li>
                    ))
                }
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {
                    nav ? <AiOutlineClose size={20}/>
                    : <AiOutlineMenu size={20}/>
                }
            </div>

            {/* <div className='fixed left-0 top-0 w-[60%] h-full bg-[#000300]'> */}
            <div className={`fixed top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] mx-4 mt-8'>REACT.</h1>
                <ul className='p-4 uppercase'>
                    {
                        navItems.map((item, idx)=>(
                            <li key={idx} className='p-4 border-b border-gray-600' >{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar