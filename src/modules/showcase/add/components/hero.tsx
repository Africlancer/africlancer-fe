import React from 'react'
// import BgImg from "../../../../a"
import { Image } from 'antd'

export const AddShowcaseHero = () => {
  return (
    <div className='relative w-full h-[400px]'>
        <Image 
            src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?w=740&t=st=1699226894~exp=1699227494~hmac=874c1e342c43219ec8ec81ebeca9ef23790ba54496e722a034ec350cb455a2a6"
            preview={false}
            width="100%"
            height="100%"
            className='object-cover'
            alt='ff'
        />

        <div className='absolute top-0 w-full h-full bg-black/50'>
            <div className='flex flex-col items-center justify-center text-skin-base h-full w-full'>
                <h1 className='text-5xl font-black mb-2'>Africlancer Showcase</h1>
                <p className='text-center text-lg leading-loose'>
                    Explore the best creative work from the world's largest<br/>
                    freelancing and crowdsourcing platform.
                </p>
            </div>

            <div className='absolute bottom-8 flex w-full justify-between items-center px-10'>
                <div className='text-skin-base flex items-center gap-1'>
                    <h1 className='font-bold'>UI Design made by</h1>
                    <p className='underline'>Paul Andrew</p>
                </div>

                <button className='underline text-skin-base'>
                    Submit To Showcase
                </button>
            </div>
        </div>
    </div>
  )
}