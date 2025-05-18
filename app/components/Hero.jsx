'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { GLBModel } from './GLBModel'


function Hero() {
    return (
        <div className='relative h-[700px] container mx-auto'>
            <div className="absolute inset-0 z-0">
                <h1 className='text-[270px] font-black mt-[-90px]'>HI, I’M JOB</h1>
            </div>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 100, 150], fov: 50 }}>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <Environment preset="sunset" />
                    <GLBModel position={[0, 0, 0]} />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className='absolute z-10 pb-4 top-[300] w-[345px]'>
                <p className='text-2xl'>
                    Frontend developer building modern, high-performance UIs with WordPress, React, and Next.js.
                </p>
            </div>
            <div className='absolute z-10 pb-4 top-[300] right-[15px] w-[345px]'>
                <button className='text-white p-4 rounded-lg border border-white rounded-full px-6 text-2xl w-full hover:bg-white hover:text-black transition duration-300 ease-in-out'>Download CV</button>
            </div>
        </div>
    )
}

export default Hero