import { ApButton } from '@/src/components'
import React from 'react'

export const Proposals = ({projectBids, showProposals, setShowProposals}) => {

  return (
    <div>
        <div className='px-5 py-3 border-b flex flex-row justify-between items-center'>
            <h1 className='text-xl font-bold'>Project Proposals</h1>
            <ApButton
                onClick={() => setShowProposals(false)}
                outline
            >
                View Details
            </ApButton>
        </div>

        <div className='px-5 py-5'>
          {
            projectBids ? projectBids?.map((bid) => (
              <div>
                <div className='flex justify-between mb-5'>
                  <p>User Info</p>

                  <div className='flex flex-col items-end'>
                      <h1 className='font-bold text-xl'>${bid.budget} USD</h1>
                      <p className=''>to be delivered in {bid.deliveredIn} days.</p>
                  </div>
                </div>

                <h1>
                  {bid.proposal}
                </h1>

                <div className='flex justify-end items-center gap-4'>
                  <ApButton>
                    Retract
                  </ApButton>

                  <ApButton outline>
                    Edit Bid
                  </ApButton>
                </div>
              </div>
            )) : <></>
          }
        </div>
    </div>
  )
}
