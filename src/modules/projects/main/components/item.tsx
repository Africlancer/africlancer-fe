import { AVERAGE_BID, TOTAL_BIDS } from '@/src/modules/bidding/gql/query'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd';

export const ProjectItem = ({project, length}) => {
    const [manualLoading, setManualLoading] = useState(true)

    const {data, loading} = useQuery(TOTAL_BIDS, {
        variables: {projectId: project._id}
    })
    const avgBid = useQuery(AVERAGE_BID, {
      variables: {projectId: project._id}
    })   
    
    useEffect(() => {
      if(loading === false && avgBid.loading === false)
      {
        setTimeout(() => {
          setManualLoading(false)
        }, 2000);
      }
    },[loading, avgBid.loading])

  return (
    <div>
      {
          !manualLoading ?  
              <Link href={`/browse/projects/project/${project._id}`}>
              <div className={`p-5 hover:bg-black/5 cursor-pointer ${length > 1 ? 'border-b' : ''}`}>
                  <div className=''>
                    <div className='flex justify-between'>
                      <div>
                        <h1 className='text-skin-accent text-3xl font-bold'>{project.title}</h1>
                        <p className='mb-3'>Budget ${project.minBudget} - {project.maxBudget}</p>
                      </div>
  
                      <div className='flex flex-col items-end'>
                        <p className=' flex gap-1'><span>Total bids -</span> {data?.totalBids} </p>
                        <p className='font-bold gap-1 flex'> <span>Average Bid -</span>
                          ${avgBid.data?.averageBids ? avgBid.data?.averageBids : 0} USD</p>
                      </div>
                    </div>
  
                      <p>{project.summary}</p>
                  </div>
              </div>
              </Link> 
          : <div className='px-5 py-5'><Skeleton active /></div>
      }
    </div>
  )
}
