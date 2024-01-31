import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { ApLoader } from './loader'

interface Iprops {
  children?: React.ReactNode
  outline?: boolean
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  title?: React.ReactNode
  loadingText?: string
  loading?: boolean
}

export const ApButton: React.FC<Iprops> = ({
  outline,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
  title,
  loading,
  loadingText,
}) => {

  return (
    <button
      type={type}
      className={`px-5 min-w-[120px] flex rounded-md items-center justify-center gap-2 disabled:cursor-not-allowed
        ${outline ? `border border-green-500 text-skin-accent ${loading ? 'py-0' : 'py-[11px]'}` 
        :`bg-skin-accent text-white ${loading ? 'py-0' : 'py-3'}`}
        ${className}
      `}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <ApLoader color='#fff' size={48}/>
        </div>
      ) : (
        title || children
      )}
    </button>
  )
}