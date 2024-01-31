import React from 'react'
import { ConfigProvider, Dropdown, DropdownProps } from 'antd';

export const ApDropdown: React.FC<DropdownProps> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: '#22c55e',
            }
        }}
    >
        <Dropdown
            {...props}
        />
    </ConfigProvider>
  )
}