import { ConfigProvider, Button } from 'antd'
import React from 'react'

export const CustomButton = ({size, children}) => {
  return (
    <ConfigProvider
    theme={{
        token: {
          colorPrimary: '#22c55e',
        },
    }}
    >
        <Button size={size} style={{border: 'none', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center'}}>
            {children}
        </Button>
    </ConfigProvider>
  )
}
