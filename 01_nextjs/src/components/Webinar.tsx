"use client"
import  Link  from 'next/link'
import data from '@/data/webinar.json'
import { HoverEffect } from './ui/card-hover-effect'

const Webinar = () => {
  const UpcomingWebinar = data?.courses

  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Coding Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={UpcomingWebinar} />
            </div>
            <div className="text-center mt-10">
                <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View All Webinar
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Webinar