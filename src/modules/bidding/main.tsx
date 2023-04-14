import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useBiddingContext } from './context'
import { CreateBid } from './create'
import { EditBid } from './edit'
import { FIND_ONE_BID } from './gql/query'

export const BidEditor = ({projectID}) => {
    const {userBid, setUserBid} = useBiddingContext()
    const session:any = useSession()
    
    const {data, loading, error, refetch} = useQuery(FIND_ONE_BID, {
        variables: {query: {userID: session?.data?.user?._id, projectID }},
    })

    useEffect(() => {
        console.log(data)
        setUserBid(data?.findOneBid)
    }, [data, loading, error])

  return (
        <div>
            {
                !loading ? 
                <div>
                    {
                        userBid ? <EditBid refetch={refetch} projectID={projectID} userBid={userBid}/>
                        : <CreateBid refetch={refetch} query={{userID: session?.data?.user?._id, projectID: projectID}} projectID={projectID}/>                
                    }
                </div> : <></>
            }
        </div>
  )
}
