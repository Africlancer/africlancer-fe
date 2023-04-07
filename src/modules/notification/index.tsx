import React from 'react'
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import ApSubMenu from '@/src/components/submenu';
import { FaUserCheck, FaUserCircle } from 'react-icons/fa';

const items: MenuProps['items'] = [
  {
    label: 'Recent Updates',
    key: '1',
  },
  {
    label: 'Saved Alerts',
    key: '2',
  },
];


const Notification = () => {
  return (
    <div className=''>
      <ApSubMenu items={items} currentTab="1"/>
      <main className='flex flex-col overflow-y-scroll'>
      <div className=' flex p-3 text-center'>
        <FaUserCircle className='text-green-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Pdf Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>1m ago</p>
                    </div>
                </div>
                <div className=' flex p-3 text-center'>
                <FaUserCircle className='text-red-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Pdf Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>3m ago</p>
                    </div>
                </div>
                <div className=' flex p-3 text-center'>
                <FaUserCircle className='text-blue-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Graphic Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>5m ago</p>
                    </div>
                </div>
                <div className=' flex p-3 text-center'>
                <FaUserCircle className='text-pink-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Graphic Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>2m ago</p>
                    </div>
                </div>
                <div className=' flex p-3 text-center'>
                <FaUserCircle className='text-orange-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Graphic Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>6m ago</p>
                    </div>
                </div>
                 <div className=' flex p-3 text-center'>
                <FaUserCircle className='text-orange-500 text-5xl' />
                    <div className='flex ml-3 flex-col justify-space-between'>
                      <h1 className='text-left text-lg font-semibold'>Graphic Editing</h1>
                        <p>Hi Guys, I'm Anna Kim, I'm from United States. I'm 25 years old Computer Engineer.</p>
                        <p className='text-right'>6m ago</p>
                    </div>
                </div>
      </main>
    </div>
  ) 
}

export default Notification
