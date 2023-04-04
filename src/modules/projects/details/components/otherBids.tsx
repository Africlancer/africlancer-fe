import { ApButton } from '@/src/components'
import { useBiddingContext } from '@/src/modules/bidding/context'
import { FIND_PROFILES, FIND_USERS } from '@/src/modules/profile/gql/query'
import { useQuery } from '@apollo/client'
import { Image } from 'antd'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

interface IProps 
{
  bid: any
  isEdit?: boolean
  projectId?: string
}

export const OtherBids: React.FC<IProps> = ({bid, isEdit, projectId}) => {

    const {data} = useQuery(FIND_PROFILES, {
        variables: {query: {_id: bid.userID }}
    })

    const user = useQuery(FIND_USERS, {
        variables: {query: {profileID: bid.userID }}
    })

    const {awardBid, loading, unawardBid} = useBiddingContext()
    
  return (
    <div>
    <div className='flex justify-between mb-5'>
      <div className='flex gap-5 items-start'>
        <Image alt='' src={data?.findProfiles[0].avatar} width='100px' height='100px' className='rounded-md' />
        
        <div className=''>
          <p className='font-bold text-xl'>{user.data?.findUsers[0]?.firstName + '' + '' + user.data?.findUsers[0]?.lastName}</p>
            <p className='text-gray-400'>{user.data?.findUsers[0]?.email}</p>
        </div>
      </div>  

      <div className='flex flex-col items-end'>
          <h1 className='font-bold text-xl'>${bid.budget} USD</h1>
          <p className=''>to be delivered in {bid.deliveredIn} days.</p>
      </div>
    </div>

    <h1>
      {bid.proposal}
    </h1>

    {
      isEdit ? (
        <div className='flex justify-end items-center gap-4'>
            {
              bid?.isAwarded ? (
                <ApButton loading={loading} outline onClick={() => unawardBid(projectId, bid?._id)}>
                   Unaward Bid          
                </ApButton>
              ) : (
                  <ApButton loading={loading} onClick={() => awardBid(projectId, bid?._id)}>
                    Award Bid 
                  </ApButton>
              )
            }
        </div>
      ) : <></>
    }
  </div>
  )
}
