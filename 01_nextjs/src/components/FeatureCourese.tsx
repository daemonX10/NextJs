'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_courses.json'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'
import { Meteors } from './ui/meteors'

interface Course {
      id: number,
      title: string,
      slug: string,
      description: string,
      price: number,
      instructor: string,
      isFeatured: boolean,
      image: string
}

const FeatureCourese = () => {

  const FeatureCourese = courseData.courses.filter((course:Course) => course.isFeatured === true)

  return (
    <div className='py-12 bg-gray-950'>

        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wider uppercase'>
                  Featured Courses
                </h2>
                <p className='mt-2 text-3xl font-extrabold leading-8 text-white sm:text-4xl'>
                  Learn from the best
                </p>
            </div>
            <div className='mt-10 px-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                {
                  FeatureCourese.map((course:Course) => (
                    // <div key={course.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    //   <Image 
                    //     className='w-full h-56 object-cover object-center' 
                    //     src={course.image} 
                    //     alt={course.title} 
                    //     width={500} // replace with your desired width
                    //     height={300} // replace with your desired height
                    //   />
                    //   <div className='p-4'>
                    //     <h2 className='text-teal-600 font-semibold tracking-wider uppercase'>
                    //       {course.title}
                    //     </h2>
                    //     <p className='mt-2 text-gray-600'>
                    //       {course.description}
                    //     </p>
                    //     <div className='mt-3 flex justify-between items-center'>
                    //       <span className='text-teal-600 font-semibold'>
                    //         ${course.price}
                    //       </span>
                    //       <Link href={`/courses/${course.slug}`} className='px-4 py-2 rounded border border-teal-700 text-teal-700 bg-white transition duration-300 ease-in-out hover:border-black hover:bg-teal-600 hover:text-white'>
                    //         View Course
                    //       </Link>
                    //     </div>
                    //   </div>
                    // </div>
                    <div key={course.id}>
                      <BackgroundGradient className="flex flex-col overflow-hidden items-center rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <div>
                        <Image
                          src={course.image}
                          alt="jordans"
                          height="400"
                          width="400"
                          className="object-contain"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-white">
                          {course.title}
                        </p>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.description}
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-gray-800">
                          <span>Buy now </span>
                          <span className="bg-gray-700 rounded-full text-xs px-2 py-0 text-white">
                            ${course.price}
                          </span>
                        </button>
                      </div>
                      </BackgroundGradient>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='mt-20 text-center'>
              <Link href={'/courses'} className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Browse Courses
              </Link>
            </div>
        </div>
    </div>
  )
}

export default FeatureCourese