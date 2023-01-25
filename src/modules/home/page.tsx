import React from 'react'
import { NavbarAuth, SubMenu } from "@/src/components/modal";
import { Header, SecondSection, ThirdSection } from './components';
import { Footer } from '@/src/components/footer';
import type { MenuProps } from 'antd';

export const HomePage = () => {
    const items: MenuProps['items'] = [
        {
          label: 'Home',
          key: 'home',
        },
        {
          label: 'Find Jobs',
          key: 'find-jobs',
        },
        {
          label: 'Hire Freelancers',
          key: 'hire-freelancers',
        },
        {
          label: 'Get Ideas',
          key: 'get-ideas',
        },
        {
          label: 'About',
          key: 'about',
        },
        {
          label: 'Resources',
          key: 'resources',
        },
        {
          label: 'How It Works',
          key: 'how-it-works',
        },
        {
          label: 'Browse Jobs',
          key: 'browse-jobs',
        },
      ];
      
  return (
    <div className='relative'>
        <NavbarAuth/>
        <div className="relative pt-16 pb-96">
            <SubMenu items={items} currentPage={'home'}/>
            <Header/>
            <SecondSection/>
            <ThirdSection/>
        </div>
        <Footer/>
    </div>
  )
}
