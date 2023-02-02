import { ConfigProvider, Button } from 'antd'
import React from 'react'

interface Iprops 
{
  children: React.ReactNode,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  type? : "button" | "submit" | "reset"
}

export const ApButton: React.FC<Iprops> = ({className, children, onClick, type, disabled}) => {
  return (
      <button type={type} disabled={disabled} className={className} onClick={onClick}>
          {children}
      </button>
  )
}
