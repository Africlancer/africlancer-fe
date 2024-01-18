import { ConfigProvider, Modal } from 'antd'
import React from 'react'

interface IPros {
  open: boolean
  titile?: string
  onDismiss?: () => void
  width?: string | number
  children: React.ReactNode
}

export const ApModal: React.FC<IPros> = ({ open, titile, children, onDismiss, width }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '',
        },
      }}
    >
      <Modal wrapClassName='!py-5' destroyOnClose open={open} centered width={width} title={titile} onCancel={onDismiss} footer={null}>
        {children}
      </Modal>
    </ConfigProvider>
  )
}
