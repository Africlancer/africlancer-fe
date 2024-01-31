import React from 'react'
import { ConfigProvider, Tooltip , TooltipProps } from 'antd';

export const ApTooltip: React.FC<TooltipProps> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: '#22c55e',
            }
        }}
    >
        <Tooltip 
            {...props}
        />
    </ConfigProvider>
  )
}