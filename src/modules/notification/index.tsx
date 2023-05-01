import React, { useState } from 'react'
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import ApSubMenu from '@/src/components/submenu';
import { RecentUpdates, SavedAlerts } from './components';

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
  const [current, setCurrent] = useState<"1" | "2">("1");

  return (
    <div className=''>
      <ApSubMenu items={items} current={current} setCurrent={setCurrent}/>
        {
          current === "1" ? <RecentUpdates/>
          : <SavedAlerts/>
        }   
    </div>
  ) 
}

export default Notification
