import { ApButton } from '@/src/components'
import { FIND_ONE_PROFILE } from '@/src/modules/profile/gql/query'
import { useQuery } from '@apollo/client'
import { Image } from 'antd'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { OtherBids } from './otherBids'

interface IProps
{
  isEdit?: boolean
  userProfile?: any
  userProposal?: any
  projectBids?: any
}

export const Proposals: React.FC<IProps> = ({isEdit, userProposal, projectBids}) => {

  const sess = useSession()
  const user: any = sess.data?.user
  const [userBid, setUserBid] = useState<any[]>()
  const [otherBids, setOtherBids] = useState<[]>()
  const userProfile = useQuery(FIND_ONE_PROFILE);

  useEffect(( ) => {
    
    if(!isEdit)
    {
      if(userProposal)
      {
        setUserBid(projectBids.filter(item => item.userID === userProposal))
        setOtherBids(projectBids.filter(item => item.userID !== userProposal))  
      }
      else {setOtherBids(projectBids)}
    }

  },[])

  useEffect(() => {
    console.log(userProfile);
  })

  return (
    <div>
        {
          !isEdit ? (
            <>
              {
                userProposal ? (
                  <div className='px-5 py-5 border-b'>
                  <h1 className='text-xl font-bold mb-5'>Your Bid</h1>
                    <div>
                      <div className='flex justify-between mb-5'>
                      <div className='flex gap-5 items-start'>
                        <Image alt='' src={userProfile.data?.findOneProfile.avatar} width='100px' height='100px' className='rounded-md' />
                        
                        <div className=''>
                          <p className='font-bold text-xl'>{user?.name}</p>
                          <p className='text-gray-400'>{user?.email}</p>
                        </div>
                      </div> 
        
                        <div className='flex flex-col items-end'>
                          {
                            userBid ? (
                              <>
                                <h1 className='font-bold text-xl'>${userBid[0]?.budget} USD</h1>
                                <p className=''>to be delivered in {userBid[0]?.deliveredIn} days.</p>
                              </>
                            ) :<></>
                          }
                        </div>
                      </div>
        
                      {
                        userBid ? (
                          <h1>
                            {userBid[0]?.proposal}
                          </h1>
                        ) : <></>
                      }
                    </div>
                </div>
                ) : <></>
              }
            </>
          ) : <></>
        }

        <div className='px-5 py-5 border-b'>
          { !isEdit ? <h1 className='text-xl font-bold mb-5'>Other Bids</h1> 
           : <></>
          }

          <div>
            {
              !isEdit ? (
                  otherBids?.length > 0 ? otherBids?.map((bid) => (
                      <OtherBids bid={bid}/>
                  )) : <p className='text-center'>No Bids</p>
                
              ) : (
                
                projectBids?.length > 0 ? projectBids?.map((bid) => (
                      <OtherBids bid={bid}/>
                  )) : <p className='text-center'>No Bids</p>
              )
            }
          </div>
        </div>
    </div>
  )
}
