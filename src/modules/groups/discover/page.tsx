import { Navbar, SubMenu } from '@/src/components'
import { ApSearchInput } from '@/src/components/input/search';
import ApSubMenu from '@/src/components/submenu'
import { MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Onboarding from '../../../assets/images/onboarding.jpg'
import Announce from '../../../assets/images/announce.png'
import NG from '../../../assets/images/ng.png'
import Logo from '../../../../public/logo.png'
import { Footer } from '@/src/components/footer';
import { GlobalOutlined } from '@ant-design/icons'

const items: MenuProps['items'] = [
    {
      label: (
        <div className='py-[2.8px]'>
          <Link href="/groups/my-groups">
            <span className='text-base'>My Groups</span>
          </Link>
        </div>
      ),
      key: 'my',
    },
    {
      label: (
          <div className='py-[2.8px]'>
          <Link href="/groups/discover">
            <span className='text-base'>Discover</span>
          </Link>
          </div>
      ),
      key: 'discover',
    },
  ];

export const DiscoverGroupsPage = () => {

  const [currentTab, setCurrentTab] = useState<string>("discover") 

  return (
    <div>
        <Navbar/>
        <SubMenu items={items} currentPage={currentTab}/>
        {/* <div className='pt-[100px]'>
            <div className='relative h-80 w-full bg-browse-hero-pattern bg-center bg-cover'>
                <div className='absolute p-10 h-full w-full bg-black/40 text-white flex flex-col justify-between'>
                    <div>
                        <h1 className='font-bold text-4xl mb-2'>Discover Groups</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam placeat dolore aut culpa iste sint inventore est assumenda iusto voluptas praesentium quod minima perferendis quidem ut quia harum, repellat ratione quaerat. Eligendi obcaecati, dolorem repellat assumenda minima impedit expedita, voluptatem tempore eveniet unde ut minus exercitationem atque eum perferendis sint.</p>
                    </div>

                    <div>
                        <ApSearchInput/>
                    </div>
                </div>
            </div>

            <div className='pt-10 px-12 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <p>Filter By</p>
                    <p>:</p>
                    <div className='flex gap-5'>
                        <div className='flex gap-2 items-center border-2 py-1 px-3 rounded-md'>
                            <Image src={Logo} height={20} alt="Logo" width={20}/>
                            <h1>Official</h1>
                        </div>

                        <div className='flex gap-2 items-center border-2 py-1 px-3 rounded-md'>
                            <GlobalOutlined className='text-skin-accent text-lg'/>
                            <h1>Community</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center pt-20 pb-20 h-full w-full gap-10'>
            <div className="bg-white w-96 shadow-lg rounded-md ">
                    <div className='relative w-full h-52'>
                        <Image className='rounded-t-md' alt='ob' src={NG} fill/>
                        <div className='absolute bg-black/10 h-full w-full rounded-t-md'>

                        </div>
                        <div className="bg-white text-xl rounded-full px-2 py-1 absolute left-3 top-3 text-skin-accent">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className='px-5 py-3'>
                        <h1 className='font-bold text-lg mb-2'>Nigeria Freelancers</h1>
                        <p >Help starting your freelance career, Let's take you into the amazing</p>
                        <div className='flex justify-between items-end mt-5'>
                            <div className='text-sm flex gap-2'>
                                <p className='font-bold'>Last Active</p> 
                                <p>:</p>
                                <p>14 Minutes Ago</p>
                            </div>

                            <button className='text-white bg-skin-accent text-sm px-3 py-1.5 rounded'>
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-96 shadow-lg rounded-md ">
                    <div className='relative w-full h-52'>
                        <Image className='rounded-t-md' alt='ob' src={NG} fill/>
                        <div className='absolute bg-black/10 h-full w-full rounded-t-md'>

                        </div>
                        <div className="bg-white text-xl rounded-full px-2 py-1 absolute left-3 top-3 text-skin-accent">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className='px-5 py-3'>
                        <h1 className='font-bold text-lg mb-2'>Nigeria Freelancers</h1>
                        <p >Help starting your freelance career, Let's take you into the amazing</p>
                        <div className='flex justify-between items-end mt-5'>
                            <div className='text-sm flex gap-2'>
                                <p className='font-bold'>Last Active</p> 
                                <p>:</p>
                                <p>14 Minutes Ago</p>
                            </div>

                            <button className='text-white bg-skin-accent text-sm px-3 py-1.5 rounded'>
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-96 shadow-lg rounded-md ">
                    <div className='relative w-full h-52'>
                        <Image className='rounded-t-md' alt='ob' src={NG} fill/>
                        <div className='absolute bg-black/10 h-full w-full rounded-t-md'>

                        </div>
                        <div className="bg-white text-xl rounded-full px-2 py-1 absolute left-3 top-3 text-skin-accent">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className='px-5 py-3'>
                        <h1 className='font-bold text-lg mb-2'>Nigeria Freelancers</h1>
                        <p >Help starting your freelance career, Let's take you into the amazing</p>
                        <div className='flex justify-between items-end mt-5'>
                            <div className='text-sm flex gap-2'>
                                <p className='font-bold'>Last Active</p> 
                                <p>:</p>
                                <p>14 Minutes Ago</p>
                            </div>

                            <button className='text-white bg-skin-accent text-sm px-3 py-1.5 rounded'>
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <Footer/>
    </div>
  )
}
