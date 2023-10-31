import { ErrorMessage, useField } from 'formik'
import React from 'react'

interface IProps {
  children: React.ReactNode
  label?: string
  type?: string
  name: string
  className?: string
  placeholder?: string
  ref?: any
  props?: {
    [x: string]: any
  }
  disabled?: boolean
  value?: any
}

const defaultClassName = 'w-full border rounded px-5 py-2.5 outline-none focus:border-green-500'

export const ApSelectInput: React.FC<IProps> = (props: IProps) => {
  const { name, type, label, className, value, children, disabled } = props

  const [field] = useField(name)

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="flex items-center justify-between">
          {label}
          <ErrorMessage className="text-red-500 text-cusf3" name={name} component="p" />
        </label>
      )}
      <select
        // value={value}
        {...props}
        {...field}
        disabled={disabled}
        className={`${defaultClassName} ${className}`}
      >
        {children}
      </select>
      {!label && (
        <ErrorMessage
          className="text-red-500 text-cusf3 text-left mt-3"
          name={name}
          component="div"
        />
      )}
    </div>
  )
}
