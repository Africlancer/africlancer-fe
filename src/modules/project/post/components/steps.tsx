import { ApSteps } from '@/src/components'
import React from 'react'

interface IProps {
    current: number
}

export const PostProjectSteps: React.FC<IProps> = ({ current }) => {
  const steps = [
    {
      key: 0,
      title: 'Basic Details',
    },
    // {
    //   key: 1,
    //   title: 'Execution',
    // }, 
    {
      key: 1,
      title: 'Payment',
    },
    {
      key: 2,
      title: 'Review',
    },
  ];

  return (
    <ApSteps
        items={steps}
        current={current}
    />
  )
}