import React from 'react'
import { TabsProps } from 'antd';
import { ApTabs } from '@/src/components';
import { OpenProjects } from './open-projects';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Open Projects',
      children: <OpenProjects/>,
    },
    {
      key: '2',
      label: 'Closed Projects',
      children: <></>,
    },
    {
      key: '3',
      label: 'Work in Progress',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '4',
      label: 'Completed Projects',
      children: 'Content of Tab Pane 3',
    },
];

export const MyProjectsTabs = () => {
  return (
    <div>
        <ApTabs defaultActiveKey="1" items={items} />
    </div> 
  )
}