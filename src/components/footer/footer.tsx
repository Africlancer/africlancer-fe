import React from 'react'
import { CameraIcon, GlobeIcon } from '../icons/customIcons'
import { QuestionCircleFilled, FacebookFilled, TwitterOutlined, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full pt-8 px-10 bg-footer text-white'>
        <div>
            <div className='flex items-center justify-between h-full'>
            <div className='flex items-center justify-between h-full'>
            <div className='mr-8'>
                <h1 className='font-bold w-20 border-b-2 border-gray-400 mb-3'>Freelancer</h1>
                <div className='flex items-center'>
                <ul className=''>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul className='ml-5'>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                </div>
            </div>

            <div className='mr-8'>
            <h1 className='font-bold border-b-2 border-gray-400 mb-3'>About</h1>
            <ul className=''>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            </div>

            <div className='mr-8'>
            <h1 className='font-bold border-b-2 border-gray-400 mb-3'>Terms</h1>
            <ul className=''>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            </div>

            <div className=''>
            <h1 className='font-bold border-b-2 border-gray-400 mb-3'>Partners</h1>
            <ul className=''>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            </div>
            </div>


            <div>
            <h1 className='text-6xl font-bold'>Afric<span className='text-green-500'>lancer</span></h1>
            <div className='w-full h-0.5 bg-gray-200 my-2'></div>
            <div className='flex justify-between mt-4'>
                <div className='flex flex-col'>
                    <p>200,000</p>
                    <p>Registered Users</p>
                </div>
                <div className='flex flex-col'>
                    <p>200,000</p>
                    <p>Total Jobs Posted</p>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <button className='border rounded-lg'>
                    <Image style={{borderRadius: '20px'}} src='/play-store.jpg' alt='google play' width={140} height={60}/>
                </button>
                <button className='border rounded-lg'>
                    <Image style={{borderRadius: '20px'}} src='/apple-store.jpg' alt='google play' width={140} height={70}/>
                </button>
            </div>
            </div>


            <div className='bg-green-500 w-96 p-8 rounded-lg'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio omnis praesentium fugiat sunt laudantium facilis similique ipsam cupiditate voluptate?</p>
            <div className='w-full h-0.5 bg-white my-2'></div>
            <div className='flex flex-col items-end'>
                <p className='mb-1'><GlobeIcon style={{color: 'white', fontSize: '20px'}}/> US (International) - English</p>
                <p><QuestionCircleFilled /> Help and Support</p>
                <div className='mt-3 flex gap-3'>
                    <FacebookFilled style={{fontSize: '30px'}}/>
                    <TwitterOutlined style={{fontSize: '30px'}}/>
                    <InstagramFilled style={{fontSize: '30px'}}/>
                    <YoutubeFilled style={{fontSize: '30px'}}/>
                </div>
            </div>
            </div>
            </div>
            
            <div className='my-5'>
            <div className='w-full h-0.5 bg-gray-200 mb-3'></div>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum harum quo, numquam accusamus culpa quos aliquam laudantium cupiditate! Dolore.</p>
            </div>
        </div>
    </footer>
  )
}