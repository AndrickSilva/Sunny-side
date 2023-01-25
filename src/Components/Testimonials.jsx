import React from 'react'

const Testimonials = () => {
    return (
        <div className='py-28'>
            <h1 className='font-Frau tracking-widest text-lg text-slate-400 text-center pb-28'>CLIENT TESTIMONIALS</h1>
            <div className="flex justify-center items-center gap-10">
                <div className="flex flex-col items-center gap-5">
                    <img src="/public/image-emily.jpg" alt="profile" className='rounded-full h-14' />
                    <p className='w-72 text-center text-slate-500'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <p className='font-Frau'>Emily R.</p>
                    <p className='text-slate-400'>Marketing Director</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <img src="/public/image-thomas.jpg" alt="profile" className='rounded-full h-14' />
                    <p className='w-72 text-center text-slate-500'>  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                    </p>
                    <p className='font-Frau'>Thomas S.</p>
                    <p className='text-slate-400'>Chief Operating Officer</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <img src="/public/image-jennie.jpg" alt="profile" className='rounded-full h-14' />
                    <p className='w-72 text-center text-slate-500'>  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <p className='font-Frau'>Jennie F.</p>
                    <p className='text-slate-400'>Business Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials