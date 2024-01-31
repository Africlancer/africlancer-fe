import { ConfigProvider, Menu, MenuProps } from 'antd'
import Link from 'next/link'
import React from 'react'

const items: MenuProps['items'] = [
    {
      label: <Link href="/dashboard" className='hover:!text-white !text-white'>Dashboard</Link>,
      key: 'dashboard',
    },
    {
        label: <Link href="" className='hover:!text-white !text-white'>Lists</Link>,
        key: 'lists',
    },
    {
        label: <Link href="" className='hover:!text-white !text-white'>Tasklists</Link>,
        key: 'tasklists',
    },
    {
        label: <Link href="/my-projects" className='hover:!text-white !text-white'>My Projects</Link>,
        key: 'my-projects',
    },
    {
        label: <Link href="" className='hover:!text-white !text-white'>Inbox</Link>,
        key: 'inbox',
    },
    {
        label: <Link href="" className='hover:!text-white !text-white'>Feedback</Link>,
        key: 'feedback',
    },
    {
        label: <Link href="" className='hover:!text-white !text-white'>Free Credit</Link>,
        key: 'free-credit',
    },
]

interface IProps {
    current: string
}

export const DashboardSubMenu: React.FC<IProps> = ({ current }) => {
  return (
    <ConfigProvider
        theme={{
            token: {
            colorPrimary: 'white',
            fontFamily: '',
            },
        }}
    >
        <Menu
            className="bg-skin-submenu text-white shadow"
            style={{ paddingLeft: 20, position: 'fixed', marginTop: 55, width: '100%', zIndex: 20 }} 
            items={items}
            mode="horizontal"
            selectedKeys={[current]} 
        />
    </ConfigProvider>
  )
}