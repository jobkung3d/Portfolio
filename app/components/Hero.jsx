import React from 'react'

function Hero() {
    return (
        <div className='container mx-auto py-4'>
            <div className='grid grid-cols-12 gap-5'>
                <h1 className='col-span-12 text-[265px] font-black leading-[1.2] mt-[-98px]'>HI, I’M JOB</h1>
                <div className='col-span-3'>
                    Frontend developer building modern, high-performance UIs with WordPress, React, and Next.js.
                </div>
            </div>
        </div>
    )
}

export default Hero