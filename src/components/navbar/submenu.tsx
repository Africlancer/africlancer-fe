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

export const SubMenu = ({items, currentPage}) => 
{
    const [current, setCurrent] = useState(currentPage);
    const [subMenuItems, setSubMenuItems] = useState<MenuProps['items']>()

    useLayoutEffect(() => 
    {
      setSubMenuItems(items)
    }, [])

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <ConfigProvider
        theme={
          {
            token: {
              colorPrimary: 'limegreen',
              fontFamily: ''
            }
          }
        }
      >
        <Menu onClick={onClick} style={{background: '#fff', paddingLeft: 20, position: 'fixed', marginTop: 55, width: '100%', zIndex: 20}} selectedKeys={[current]} mode="horizontal" items={subMenuItems} />
      </ConfigProvider>
    )
}
