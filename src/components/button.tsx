import React, { useEffect, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'

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

const filledClassName =
  'py-3 px-5 flex bg-skin-accent text-white rounded-md items-center justify-center gap-2 disabled:cursor-not-allowed'
const outlineClassName =
  'py-2 px-3 border border-green-500 flex text-skin-accent rounded items-center justify-center gap-2'

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
  const defaultClassName = outline ? outlineClassName : filledClassName
  const [isLoading, setLoading] = useState(loading)
  useEffect(() => {
    setLoading(loading)
  }, [loading])

  return (
    <button
      type={type}
      className={className ? className : defaultClassName}
      onClick={onClick}
      disabled={loading}
    >
      {isLoading ? (
        <div className="flex gap-4 items-center">
          <LoadingOutlined style={{ fontSize: 25, color: '#fff' }} spin />
          {loadingText ? loadingText : 'Loading...'}
        </div>
      ) : (
        title ? title : children
      )}
    </button>
  )
}
