import React from 'react'

const Footer = () => {
    return (
        <div className='py-10 flex items-center justify-center flex-col gap-9' style={{ backgroundColor: "#8dd2c5" }}>
            <img src="/public/logoGreen.svg" alt="" className='' />
            <ul className='flex gap-14'>
                <li className='text-green-700 hover:text-slate-100 cursor-pointer transition duration-150'>About</li>
                <li className='text-green-700 hover:text-slate-100 cursor-pointer transition duration-150'>Services</li>
                <li className='text-green-700 hover:text-slate-100 cursor-pointer transition duration-150'>Projects</li>
            </ul>
            <div className="flex gap-5">
                <img src="/icon-facebook.svg" alt="logo" />
                <img src="/icon-instagram.svg" alt="logo" />
                <img src="/icon-twitter.svg" alt="logo" />
                <img src="/icon-pinterest.svg" alt="logo" />
            </div>
        </div>
    )
}

export default Footer