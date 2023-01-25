import React from 'react'
import { FolderFilled, ScheduleFilled, CheckCircleFilled, ClockCircleFilled } from '@ant-design/icons'

export const ThirdSection = () => {
  return (
    <div>
      <div className='px-10 py-20'>
        <h1 className='text-cusf font-bold'>What's Great About It ?</h1>
        <div className="w-full h-0.5 bg-gray-400 my-5"></div>
        <div className='grid grid-cols-4 gap-4'>
            <div className='bg-white w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-end gap-4 text-green-500 mb-3'>
              <FolderFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2 '>Browse Portfolios</h1>            
              </div>
                <p className='text-lg'>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
            </div>

            <div className='bg-white w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-end gap-4 text-green-500 mb-3'>
              <ScheduleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2 '>Fast Bids</h1>            
              </div>
                <p className='text-lg'>Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.</p>
            </div>

            <div className='bg-white w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-end gap-4 text-green-500 mb-3'>
              <CheckCircleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2 '>Quality Work</h1>            
              </div>
                <p className='text-lg'>Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.</p>
            </div>

            <div className='bg-white w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-end gap-4 text-green-500 mb-3'>
              <ClockCircleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2 '>Track Progress</h1>            
              </div>
                <p className='text-lg'>Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.</p>
            </div>
        </div>
      </div>
    </div>
  )
}