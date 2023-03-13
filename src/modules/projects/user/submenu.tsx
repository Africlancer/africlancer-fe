import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ConfigProvider, MenuProps } from 'antd';
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
];

export const ProjectSubMenu = ({}) => 
{
    const [current, setCurrent] = useState('');
    const [subMenuItems, setSubMenuItems] = useState<MenuProps['items']>()

    useEffect(() => 
    {
      setSubMenuItems(items)
    }, [items])

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <ConfigProvider
        theme={
          {
            token: {
              colorPrimary: 'white',
              fontFamily: ''
            }
          }
        }
      >
        <Menu className='bg-skin-inverted text-white shadow' onClick={onClick} style={{ paddingLeft:10, paddingRight:10, width: '100%'}} selectedKeys={[current]} mode="horizontal" items={items} />
      </ConfigProvider>
    )
}