import React from 'react'
const Hero = () => {
    return (
        <div className="min-h-screen bg-[url('/desktop/image-header.jpg')] bg-no-repeat bg-cover w-full">
            <nav className='flex justify-between items-center px-4 py-6'>
                <img src="../../public/logo.svg" alt="" />
                <ul className='text-slate-100 flex justify-center items-center gap-4 font-semibold'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li className='px-4 py-2 bg-slate-50 text-slate-800 rounded-full'>Contact</li>
                </ul>
            </nav>
            <h2 className='font-Frau font-black text-4xl text-slate-50 tracking-widest text-center mt-10'>WE ARE CREATIVES</h2>
            <div className="flex justify-center mt-28">
                <img src="../../public/icon-arrow-down.svg" alt="arrow" />
            </div>
        </div>
    )
}

export default Hero
