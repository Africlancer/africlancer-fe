import { SubMenu } from '@/src/components'
import { MenuProps } from 'antd'
import React from 'react'

const items: MenuProps['items'] = [
    {
      label: 'Improve Profile',
      key: 'improve-profile',
    },
    {
      label: 'Get Certified',
      key: 'get-certified',
    },
    {
      label: 'Promote Profile',
      key: 'promote-profile',
    },
    {
      label: 'My Rewards',
      key: 'my-rewards',
    },
]

export const ProfileSubMenu = () => {
  return (
    <SubMenu items={items} currentPage="improve-profile" />
  )
}