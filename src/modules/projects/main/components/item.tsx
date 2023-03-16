import { AVERAGE_BID, TOTAL_BIDS } from '@/src/modules/bidding/gql/query'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'

export const ProjectItem = ({project}) => {
    const {data} = useQuery(TOTAL_BIDS, {
        variables: {projectId: project._id}
    })

    const avgBid = useQuery(AVERAGE_BID, {
      variables: {projectId: project._id}
    })

    console.log(avgBid.data?.averageBids);
    

  return (
    <Link href={`/browse/projects/project/${project._id}`}>
        <div className='p-5 hover:bg-black/5 cursor-pointer'>
            <div className=''>
              <div className='flex justify-between'>
                <div>
                  <h1 className='text-skin-accent text-3xl font-bold'>{project.title}</h1>
                  <p className='mb-3'>Budget ${project.minBudget} - {project.maxBudget}</p>
                </div>

                <div className='flex flex-col items-end'>
                  <p className='text-lg flex gap-1'><span>Total num of bids -</span> {data?.totalBids} </p>
                  <p className='font-bold text-lg gap-2'> <span className='text-base'>Average Bid -</span>
                    ${avgBid.data?.averageBids ? avgBid.data?.averageBids : 0} USD</p>
                </div>
              </div>

                <p>{project.summary}</p>
            </div>
        </div>
    </Link>
  )
}
