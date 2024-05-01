import React from 'react'
import testimonialData from '@/data/testimonial.json'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { Boxes } from './ui/background-boxes'

const TestimonialCards = () => {
  const  items  = testimonialData.courses 
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-evenly relative overflow-hidden">
      <h1 className='text-5xl font-extrabold leading-loose gap-2 text-center'>Hear Our Harmony : Voice of Success</h1>
      <Boxes />
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />

    </div>
  )
}

export default TestimonialCards