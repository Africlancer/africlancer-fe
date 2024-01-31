import React from 'react'
import { Menu, ConfigProvider, MenuProps } from 'antd';

interface IProps extends MenuProps {
    configColorPrimary?: string
}

export const ApMenu: React.FC<IProps> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: props?.configColorPrimary || '#22c55e',
            }
        }}
    >
        <Menu 
            {...props}
        />
    </ConfigProvider>
  )
}