import { Image, Rate } from 'antd'
import React from 'react'
import UserImg from "../../../assets/images/user.png"
import {BsHeart} from "react-icons/bs"

export const ShowcaseItem = () => {
  return (
    <div className='overflow-hidden rounded-md shadow-lg bg-skin-base'>
        <div className='w-full relative'>
            <Image
                preview={false}
                src="https://img.freepik.com/free-vector/beautiful-purple-woman-surrounded-by-nature-illustration_53876-119239.jpg?w=740&t=st=1674843592~exp=1674844192~hmac=9cd4dd2b40a752e42870d199d314dc711a46f141c1c1c83423137c581061514d"        
                width="100%"
                height="100%"
                className='object-cover'
            />

            <div className='absolute bg-white right-3 top-3 py-2 px-3 rounded-md flex justify-end items-center gap-2 text-base'>
                <BsHeart/>
                <p>305</p> 
            </div>
        </div>

        <div className='py-3 px-5'>     
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <Image
                        preview={false}
                        src={UserImg.src}
                        width={45}
                        height={45}
                        className='object-cover rounded-full'
                    />

                    <div>
                        <h1 className='font-bold'>Paul Andrew</h1>
                        <p className='text-sm'>Abuja, Nigeria</p>
                    </div>
                </div>

                <button className='bg-skin-accent text-skin-base text-base rounded-md py-2 px-5'>
                    Hire
                </button>
            </div>

            <div className='flex mt-2'>
                <div className='flex items-center gap-3'>
                    <Rate 
                        value={4}
                        defaultValue={4} 
                        allowHalf 
                        className='!text-base'
                    />
                    <p className='text-sm mt-0.5'>4.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

