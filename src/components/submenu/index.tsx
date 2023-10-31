import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ConfigProvider, MenuProps } from 'antd'
import { Menu } from 'antd'

const ApSubMenu = ({ items, current, setCurrent }) => {
  const [subMenuItems, setSubMenuItems] = useState<MenuProps['items']>()

  useEffect(() => {
    setSubMenuItems(items)
  }, [items])

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#22c55e',
          fontFamily: '',
        },
      }}
    >
      <Menu
        className="bg-white text-inverted shadow rounded-t-md"
        onClick={onClick}
        style={{ paddingLeft: 10, paddingRight: 10, width: '100%' }}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </ConfigProvider>
  )
}

export default ApSubMenu
