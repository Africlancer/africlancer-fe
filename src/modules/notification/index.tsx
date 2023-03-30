import React from 'react'
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import ApSubMenu from '@/src/components/submenu';

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
    <div>
      <ApSubMenu items={items} currentTab="1"/>
      <div>
        <h1>ddddddddf</h1>
      </div>
    </div>
  )
}

export default Notification
