import React, { useEffect, useRef, useState } from 'react'
import { ApButton, BrowseLayout } from '@/src/components';
import { Image } from 'antd';

const FilterComponent = ({browseFunc: fetchFree}) =>
{
    return (
        <div>
            <h1 className='text-xl font-bold px-5 py-3 border-b'>Filters</h1>
            <div className='px-5 py-3 border-b'>
          <div className='flex justify-between'>
          <form>
              <div>
              <div className='flex items-center justify-between'>
                <p className='font-bold'>Hourly Rate</p>
                <p className='text-skin-accent cursor-pointer'>Clear</p>
              </div>
              <div className='flex justify-between gap-4 mt-3'>
                <div>
                  <p className='mb-2'>Min</p>
                  <input placeholder='0' className='border border-gray-400 py-2 rounded-md w-32 px-5 ' type='text'/>
                </div>
                  
                <div>
                  <p className='mb-2'>Max</p>
                  <input placeholder='80+' className='border border-gray-400 py-2 rounded-md w-32 mr-10 px-5' type='text'/>
                </div>
              </div>
              </div>

              <div className='mt-8'>
              <div className='flex items-center justify-between'>
                <p className='font-bold'>Skills</p>
                <p className='text-skin-accent cursor-pointer'>Clear</p>
              </div>
              <div className='mt-3'>
                  <input placeholder="Seacrh Skills" className='border border-gray-400 py-2 rounded-md w-80 px-5' type='text'/>
              </div>
              </div>

            <br />
            <div className='mt-8'>
              <div className='flex items-center justify-between'>
                <p className='font-bold'>Countries</p>
                <p className='text-skin-accent cursor-pointer'>Clear</p>
              </div>
              <div className='mt-3'>
                  <input placeholder="Seacrh Countries" className='border border-gray-400 py-2 rounded-md w-80 px-5' type='text'/>
              </div>
              </div>
         
          <h1 className='font-bold mb-2 mt-6'>Online</h1>
          <div className='flex justify-between'></div>
          <div>Online Freelancers Only</div>
          <br />
          <h1 className='font-bold mb-2'>Rating</h1>
          <div className='flex justify-between'></div>
          <br />
          <div>
              <div className='flex items-center justify-between'>
                <p className='font-bold'>Reviews</p>
                <p className='text-skin-accent cursor-pointer'>Clear</p>
              </div>
              <div className='flex justify-between gap-4 mt-3'>
                <div>
                  <p className='mb-2'>Min</p>
                  <input placeholder='0' className='border border-gray-500 py-2 rounded-md w-32 px-5' type='text'/>
                </div>

                <div>
                  <p className='mb-2'>Max</p>
                  <input placeholder='500+' className='border border-gray-400 py-2 rounded-md w-32 px-5 mr-10' type='text'/>
                </div>
              </div>
              </div>

          <br />
          <div className='mt-8'>
              <div className='flex items-center justify-between'>
                <p className='font-bold'>Exams</p>
                <p className='text-skin-accent cursor-pointer'>Clear</p>
              </div>
              <div className='mt-3'>
                  <input placeholder="Seacrh Exams" className='border border-gray-400 py-2 rounded-md w-80 px-5' type='text'/>
              </div>
              </div>
          </form>
          </div>
       </div>

        </div>
    )
}

export const FreelancersPage = () => {

    const fetchFree = () => {}

  const MainContent = () =>
  {    
    return(
      <div>
        <div className='flex justify-between py-3 border-b px-5'>
          <h1 className='text-lg font-bold'>Top Results</h1>
          <p>Sort By</p>
        </div>

        <div className='py-5 px-5 flex flex-row justify-between'>
            <div className='flex gap-2'>
                <Image src='https://img.freepik.com/free-photo/man-black-t-shirt-smiles-sweetly-orange-wall_197531-23228.jpg?w=740&t=st=1679492455~exp=1679493055~hmac=3f88a93f0591d9fb0d5a94f83c97c5536b2ddabb747ed46dfbbcd88e0ca9ba48' 
                height={100} width={100} alt='' preview={false}/>

                <div>
                        <h1 className='text-blue-500 text-lg font-bold'>BrightDock LLC</h1>
                        <p>Bio for more - #1 ranked in Africlancer.com search</p>
                </div>
            </div>

            <div className=''>          
                <div className='flex flex-col items-end'>
                    <p className='font-bold text-xl'>$85</p>
                    <p>per hour</p>
                </div>
                
                <ApButton>Request Quote</ApButton>
            </div>
            </div>
      </div>
    )
  }

  return (
    <BrowseLayout browseFunc={fetchFree} FilterComponent={FilterComponent} MainContent={MainContent} page="freelancers" />
  )
}