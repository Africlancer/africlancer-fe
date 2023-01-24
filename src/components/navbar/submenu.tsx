import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

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
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        My Rewards
      </a>
    ),
    key: 'my-rewards',
  },
];

export const SubMenu = () => 
{
    const [current, setCurrent] = useState('improve-profile');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} style={{paddingLeft: 10}} selectedKeys={[current]} mode="horizontal" items={items} />
}
