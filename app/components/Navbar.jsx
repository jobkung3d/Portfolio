import React from 'react'

function Navbar() {
    return (
        <nav className='py-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 text-center'>About</div>
                    <div className='col-span-3 text-center'>Experience</div>
                    <div className='col-span-3 text-center'>Project</div>
                    <div className='col-span-3 text-center'>Contact</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar