import { ConfigProvider, Table, TableProps } from 'antd'
import React from 'react'

export const ApTable: React.FC<TableProps<any>> = (props) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: '',
                colorPrimary: '#22c55e',
            }
        }}
    >
        <Table
            {...props}
        />
    </ConfigProvider>
  )
}