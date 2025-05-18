import React from 'react'

function Navbar() {
    return (
        <nav className='pt-8 pb-2 relative z-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 text-center text-2xl'>About</div>
                    <div className='col-span-3 text-center text-2xl'>Experience</div>
                    <div className='col-span-3 text-center text-2xl'>Project</div>
                    <div className='col-span-3 text-center text-2xl'>Contact</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar