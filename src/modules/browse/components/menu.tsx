import { ApMenu } from '@/src/components'
import { MenuProps } from 'antd';
import Link from 'next/link';
import React, { SetStateAction } from 'react'

const items: MenuProps['items'] = [
    {
      label: <Link href="/browse/search/projects" className='!text-white'>Projects</Link>,
      key: 'projects',
    },
    {
      label: <Link href="/browse/search/freelancers" className='!text-white'>Freelancers</Link>,
      key: 'freelancers',
    },
];

interface IProps {
    current: "projects" | "freelancers"
}

export const BrowseMenu: React.FC<IProps> = ({current}) => {

  return (
    <div className='bg-skin-accent text-white shadow-lg px-10 pt-10'>
        <h1 className='font-black text-3xl mb-5 capitalize'>Browse {current}</h1>

        <div className='align-antd-menu'>
            <ApMenu
                mode="horizontal" 
                items={items}
                selectedKeys={[current]}
                className="bg-skin-submenu text-white"
                configColorPrimary='#fff'
            />
        </div>
    </div>
  )
}