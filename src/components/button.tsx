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

const defaultClassName = "py-2 px-3 flex bg-skin-accent text-white rounded items-center justify-center gap-2"

export const ApButton: React.FC<Iprops> = ({className, children, onClick, type, disabled}) => {

  return (
      <button 
        type={type} 
        disabled={disabled} 
        className={className ? className : defaultClassName} 
        onClick={onClick}
      >
          {children}
      </button>
  )
}
