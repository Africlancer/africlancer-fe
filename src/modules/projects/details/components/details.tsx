import { ApButton } from '@/src/components'
import React from 'react'

export const Details = ({summary, details, showProposals, setShowProposals}) => {

  return (
    <div>
        <div className='px-5 py-3 border-b flex flex-row justify-between items-center'>
            <h1 className='text-xl font-bold'>Project Details</h1>
            <ApButton
                onClick={() => setShowProposals(true)}
            >
                View Proposals
            </ApButton>
        </div>

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
        </div>
    </div>
  )
}
