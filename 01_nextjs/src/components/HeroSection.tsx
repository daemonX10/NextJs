import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { Meteors } from './ui/meteors'

const HeroSection = () => {
  return (
    <div className='h-auto  md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <Meteors number={20} />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'> Be the Wizard of Coding</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive Into Our Comprehensive coding Courses and transform your coding Journey Today . Whether you&apos;re a beginner or looking to refine your skills , join us to unlock your True Potential . <span> UI project With Aceternity ui</span> </p>
            <div className='mt-4'>
                <Link href={'/courses'}>
                    <Button
                        borderRadius="1.75rem"
                        className='bg-black text-white hover:text-sky-100 border border-black font-semibold px-6 py-2 transition duration-300 ease-in-out hover:bg-transparent hover:border-gray-900 hover:shadow-none'
                    >Explore Courses</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection