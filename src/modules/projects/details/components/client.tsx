import React from 'react'
import { Rate } from 'antd';
import {ClockCircleFilled} from '@ant-design/icons'

export const AboutClient = () => {
  return (
    <div>
        <h1 className='text-xl font-bold px-5 py-3 border-b'>About The Client</h1>

        <div className='px-5 py-5 flex flex-col gap-2'>
            <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <p>Abuja</p>
            </div>

            <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
                </svg>
                <p>Nigeria</p>
            </div>

            <div>
                <Rate disabled defaultValue={2} />
            </div>

            <div className='flex gap-1 items-center'>
                <ClockCircleFilled className='w-5 h-5 text-gray-400'/>
                <p>Member since Mar 20, 2023</p>
            </div>
        </div>
    </div>
  )
}
