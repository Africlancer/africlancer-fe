import { ConfigProvider, Steps, StepsProps } from 'antd'
import React from 'react'

interface IProps extends StepsProps {}

export const ApSteps: React.FC<IProps> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: '#22c55e'
            }
        }}
    >
        <Steps
            {...props}
        />
    </ConfigProvider>
  )
}