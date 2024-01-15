import React from 'react'
import BgImg from "../../../assets/images/announce.png"
import { Image } from 'antd'
import Link from 'next/link'

export const ShowcaseHero = () => {
  return (
    <div className='relative w-full h-[400px]'>
        <Image 
            src={BgImg.src}
            preview={false}
            width="100%"
            height="100%"
            className='object-cover'
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

                <Link href="/showcase/add" className='underline text-skin-base'>
                    Submit To Showcase
                </Link>
            </div>
        </div>
    </div>
  )
}