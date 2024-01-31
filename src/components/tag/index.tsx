import React from 'react'

interface IProps {
    title: string
}

export const ApTag: React.FC<IProps> = ({ title }) => {
  return (
    <div className='bg-green-500/10 text-center text-skin-accent rounded-full px-5 py-1.5 text-sm font-semibold'>
        {title}
    </div>
  )
}