import { ConfigProvider, Button } from 'antd'
import React from 'react'

interface Iprops 
{
  children: React.ReactNode,
  onClick: () => void,
  className?: string,
  type? : "button" | "submit" | "reset"
}

const defaultClass = 'px-4 py-2 text-lg bg-green-500 flex gap-2 items-center text-white font-medium rounded';

export const ApButton: React.FC<Iprops> = ({className, children, onClick, type}) => {
  return (
      <button type={type} className={`${defaultClass} ${className}`} onClick={onClick}>
          {children}
      </button>
  )
}
