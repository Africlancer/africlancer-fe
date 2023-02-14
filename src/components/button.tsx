import { ConfigProvider, Button } from 'antd'
import React from 'react'

interface Iprops 
{
  children: React.ReactNode,
  outline?: boolean,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  type? : "button" | "submit" | "reset"
}

const filledClassName = "py-2 px-3 flex bg-skin-accent text-white rounded items-center justify-center gap-2"
const outlineClassName = "py-2 px-3 border border-green-500 flex text-skin-accent rounded items-center justify-center gap-2"

export const ApButton: React.FC<Iprops> = ({outline, className, children, onClick, type, disabled}) => {

 const defaultClassName = outline ? outlineClassName : filledClassName

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
