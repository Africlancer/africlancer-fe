import { ApButton } from '@/src/components'
import React from 'react'

interface IProps 
{
    summary: any
    details: any
    isEdit?: any
    setShowEdit?: any
}

export const Details: React.FC<IProps> = ({summary, details, isEdit, setShowEdit}) => {

  return (
    <div>
        <div className='px-5 py-5'>
            <div>
                <p className='font-bold mb-2'>Summary</p>
                <p>{summary}</p>
            </div>

            <div className='mt-8'>
                <p className='font-bold mb-2'>Details</p>
                <p>{details}</p>
            </div>

            <div className='mt-8'>
                <p className='font-bold mb-2'>Skills Required</p>
                <div>

                </div>
            </div>

            <div className='flex justify-end'>
                { isEdit && <ApButton onClick={() => setShowEdit(true)}>Edit Project</ApButton>}
            </div>
        </div>
    </div>
  )
}
