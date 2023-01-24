import React from 'react'

const Content = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-2/4 px-28 py-10 gap-7">
          <h1 className='font-Frau font-extrabold text-2xl text-blue-900'>Transform your brand</h1>
          <p className='text-slate-400 font-light text-sm'>We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <p className='font-bold font-Frau uppercase text-xs underline decoration-4 decoration-yellow-200'>Learn more</p>
        </div>
        <div className="w-2/4">
          <img className='w-full' src="/public/desktop/image-transform.jpg" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-row-reverse">
        <div className="flex flex-col w-2/4 px-28 py-10 gap-7">
          <h1 className='font-Frau font-extrabold text-2xl text-blue-900'>Stand out to the right audience</h1>
          <p className='text-slate-400 font-light text-sm'>  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
          <p className='font-bold font-Frau uppercase text-xs underline decoration-4 decoration-yellow-200'>Learn more</p>
        </div>
        <div className="w-2/4">
          <img className='w-full' src="/public/desktop/image-stand-out.jpg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-2/4 relative">
          <img className='w-full' src="/public/desktop/image-graphic-design.jpg" alt="" />
          <div className="flex flex-col items-center absolute bottom-20 left-56 gap-4">
            <h2 className='font-Frau text-green-800 font-black text-3xl'>Graphic Design</h2>
            <p className='text-center w-72 leading-1 text-green-800'>  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </p>
          </div>
        </div>
        <div className="w-2/4 relative">
          <img className='w-full' src="/public/desktop/image-photography.jpg" alt="" />
          <div className="flex flex-col items-center absolute bottom-20 left-56 gap-4">
            <h2 className='font-Frau font-black text-3xl text-blue-900'>Photography</h2>
            <p className='text-center w-72 leading-1 text-blue-900'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Content