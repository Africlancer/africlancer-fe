import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    label: (
      <p className="flex items-center gap-1 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        Browse
      </p>
    ),
    key: 'browse',
  },
  {
    label: (
      <p className="flex items-center gap-1 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
        Manage
      </p>
    ),
    key: 'manage',
  },
  {
    label: (
      <p className="flex items-center gap-1 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        Groups
      </p>
    ),
    key: 'groups',
  },
  {
    label: (
      <p className="flex items-center gap-1 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        Notifications
      </p>
    ),
    key: 'notifications',
  },
  {
    label: (
      <p className="flex items-center gap-1 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
        Messages
      </p>
    ),
    key: 'messages',
  },
  {
    label: (
      <div className="ml-5 flex items-center">
        <div className="border-l-2 border-gray-200 h-10 w-2 mr-5"></div>
        <button className="w-32 rounded-lg h-10 flex items-center justify-center bg-green-500 text-white">
          <span>Post a Project</span>
        </button>
      </div>
    ),
    key: '',
  },
  {
    label: (
      <div className="flex items-center text-lg">
        <p className="font-bold text-lg">Paul.A</p>
        <div className="test-user-pic h-10 w-10 bg-center bg-cover rounded ml-5"></div>
      </div>
    ),
    key: 'messages',
    children: [
      {
        type: 'group',
        label: 'Account',
        children: [
          {
            label: 'View Profile',
            key: 'setting:1',
          },
          {
            label: 'Membership',
            key: 'setting:2',
          },
          {
            label: <p>Account Analytics</p>,
            key: 'setting:3',
          },
          {
            label: 'Bid Insights',
            key: 'setting:4',
          },
          {
            label: 'Settings',
            key: 'setting:5',
          },
        ],
      },
      {
        type: 'group',
        label: 'Finances',
        children: [
          {
            label: 'Balance',
            key: 'setting:3',
          },
          {
            label: 'Add Funds',
            key: 'setting:4',
          },
          {
            label: 'Balance',
            key: 'setting:5',
          },
          {
            label: 'Withdraw Funds',
            key: 'setting:6',
          },
          {
            label: 'Transaction History',
            key: 'setting:7',
          },
          {
            label: 'Financial Dashboard',
            key: 'setting:8',
          },
          {
            label: 'Payment Sharing',
            key: 'setting:9',
          },
        ],
      },
    ],
  },
]

const authItems: MenuProps['items'] = [
  {
    label: <p className="flex items-center gap-1 text-lg">Sign In</p>,
    key: 'browse',
  },
  {
    label: <a className="flex items-center gap-1 text-lg">Sign Up</a>,
    key: 'manage',
  },
  {
    label: (
      <div className="ml-5 flex items-center">
        <div className="border-l-2 border-gray-200 h-10 w-2 mr-5"></div>
        <button className="w-32 rounded-lg h-10 flex items-center justify-center bg-green-500 text-white">
          <span>Post a Project</span>
        </button>
      </div>
    ),
    key: '',
  },
]

export const NavItems = ({ mode }) => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
      selectedKeys={[current]}
      mode={mode}
      items={items}
    />
  )
}

export const NavAuthItems = ({ mode }) => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
      selectedKeys={[current]}
      mode={mode}
      items={authItems}
    />
  )
}
