import { ApButton } from '@/src/components'
import { useBiddingContext } from '@/src/modules/bidding/context'
import { FIND_ONE_PROFILE } from '@/src/modules/profile/gql/query'
import { useQuery } from '@apollo/client'
import { Image } from 'antd'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { AwardedBid } from './awardedBid'
import { OtherBids } from './otherBids'
import { UnAwardedBid } from './unawardedBid'

interface IProps {
  isEdit?: boolean
  userProfile?: any
  userProposal?: any
  projectId?: any
}

export const Proposals: React.FC<IProps> = ({ isEdit, userProposal, projectId }) => {
  const sess = useSession()
  const user: any = sess.data?.user
  const [userBid, setUserBid] = useState<any[]>()
  const [otherBids, setOtherBids] = useState<[]>()
  const userProfile = useQuery(FIND_ONE_PROFILE)
  const { findBids, projectBids, awardedBids, unawardedBids } = useBiddingContext()

  // const [awardedBids, setAwardedBids] = useState<[]>()
  // const [unawardedBids, setUnawardedBids] = useState<[]>()

  useEffect(() => {
    findBids({ projectID: projectId }, user?._id)

    if (!isEdit) {
      if (userProposal) {
        setUserBid(projectBids.filter((item) => item?.userID === userProposal))
        setOtherBids(projectBids.filter((item) => item.userID !== userProposal))
      } else {
        // setAwardedBids(projectBids.filter((item) => item?.isAwarded === true))
        // setUnawardedBids(projectBids.filter((item) => item?.isAwarded === false))
        //setOtherBids(projectBids)
      }
    }
  }, [])

  //console.log(awardedBids, unawardedBids);

  return (
    <div>
      {!isEdit ? (
        <>
          {userProposal ? (
            <div className="px-5 py-5 border-b">
              <h1 className="text-xl font-bold mb-5">Your Bid</h1>
              <div>
                <div className="flex justify-between mb-5">
                  <div className="flex gap-5 items-start">
                    <Image
                      alt=""
                      src={userProfile.data?.findOneProfile.avatar}
                      width="100px"
                      height="100px"
                      className="rounded-md"
                    />

                    <div className="">
                      <p className="font-bold text-xl">{user?.name}</p>
                      <p className="text-gray-400">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    {userBid ? (
                      <>
                        <h1 className="font-bold text-xl">${userBid[0]?.budget} USD</h1>
                        <p className="">to be delivered in {userBid[0]?.deliveredIn} days.</p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                {userBid ? <h1>{userBid[0]?.proposal}</h1> : <></>}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      <div className="">
        {!isEdit ? <h1 className="text-xl font-bold mb-5">Other Bids</h1> : <></>}

        <div>
          {isEdit ? (
            <div>
              {awardedBids?.map((bid: any) => (
                <AwardedBid key={bid?._id} bid={bid} projectId={projectId} />
              ))}

              {unawardedBids?.map((bid: any) => (
                <UnAwardedBid key={bid?._id} bid={bid} projectId={projectId} />
              ))}
            </div>
          ) : projectBids?.length > 0 ? (
            projectBids?.map((bid: any) => (
              <OtherBids key={bid?._id} projectId={projectId} isEdit={isEdit} bid={bid} />
            ))
          ) : (
            <p className="text-center">No Bids</p>
          )}
        </div>
      </div>
    </div>
  )
}
