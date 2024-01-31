import React from 'react'
import { ConfigProvider, Tabs, TabsProps } from 'antd';

export const ApTabs: React.FC<TabsProps> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: '#22c55e',
            }
        }}
    >
        <Tabs
            {...props}
        />
    </ConfigProvider>
  )
}