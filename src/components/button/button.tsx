import { ConfigProvider, Button } from 'antd'
import React from 'react'

interface Iprops 
{
  children: React.ReactNode,
  onClick: () => void,
  className?: string,
  type? : "button" | "submit" | "reset"
}

export const ApButton: React.FC<Iprops> = ({className, children, onClick, type}) => {
  return (
      <button type={type} className={className} onClick={onClick}>
          {children}
      </button>
  )
}
