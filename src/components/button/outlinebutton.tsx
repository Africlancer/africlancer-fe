import { ConfigProvider, Button } from 'antd'
import React from 'react'

export const CustomOutlineButton = ({size, children}) => {
  return (
    <ConfigProvider
    theme={{
        token: {
          colorPrimary: '#22c55e',
        },
    }}
    >
        <Button size={size} style={{borderColor: '#22c55e', color: '#22c55e', display: 'flex', alignItems: 'center'}}>
            {children}
        </Button>
    </ConfigProvider>
  )
}
