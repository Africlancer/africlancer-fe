import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useBiddingContext } from './context'
import { CreateBid } from './create'
import { EditBid } from './edit'
import { FIND_ONE_BID } from './gql/query'

export const BidEditor = ({projectID}) => {

    console.log(projectID);
    
    const {notificationContext, findOneBid, userBid} = useBiddingContext()
    const session:any = useSession()

    const {data, loading} = useQuery(FIND_ONE_BID, {
        variables: {query: {userID: session?.data?.user?._id, projectID }}
    })

    console.log(data)

    // useEffect(() => {
    //     findOneBid({userID: session?.data?.user?._id, projectID: projectID})
    // },[])

  return (
    <>
        {notificationContext}
        <div>
            {
                !loading ? 
                <div>
                    {
                        data?.findOneBid ? <EditBid projectID={projectID} userBid={data?.findOneBid}/>
                        : <CreateBid query={{userID: session?.data?.user?._id, projectID: projectID}} projectID={projectID}/>                
                    }
                </div> : <></>
            }
        </div>
    </>
  )
}
