import { ApButton } from '@/src/components'
import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useBiddingContext } from '../../bidding/context'
import { FIND_ONE_BID } from '../../bidding/gql/query'
import { useProjectContext } from '../context'
import { Details } from './components/details'
import { Proposals } from './components/proposals'
import { BidEditor } from '../../bidding/main'
import { AboutClient } from './components/client'
import { ProjectDetailsSubMenu } from './components/submenu'

export const ProjectDetailsPage = ({id}) => {
    const {fetchProject, activeProject, hasBiddingEnded, daysLeft, status} = useProjectContext()
    const {getTotalBids, projectTotalBids, findBids, projectBids, getAverageBid, averageBid} = useBiddingContext()
    const session:any = useSession()

    const {data, loading} = useQuery(FIND_ONE_BID, {
        variables: {query: {userID: session?.data?.user?._id, projectID: id }}
    })
    

    const [current, setCurrent] = useState('details');

    useEffect(() => {
        console.log(activeProject);
        fetchProject({_id: id})
        findBids({projectID: id}, session?.data?.user?._id)
        getTotalBids(id)
        getAverageBid(id)
    }, [])

  return (
    <div>
      <div className="h-full relative bg-skin-alt">
      <Navbar/>
      
      <div className='pt-14'>
            <div className='relative h-72 w-full bg-browse-hero-pattern bg-center bg-cover'>
                <div className='absolute h-full w-full bg-black/50 text-white flex flex-col'>
                    <div className='px-10 pt-8 flex justify-between mb-10'>
                        <div className='w-full'>
                            <div className='flex w-full items-center justify-between mb-2'>
                                <h1 className='text-5xl font-bold mr-3'>{activeProject?.title}</h1>
                                {
                                    status &&
                                    <div className='flex gap-2 items-center'>
                                        <h1 className='font-medium'>Bidding Status <span className='ml-1'>:</span></h1>
                                        <div className={`${status === "OPEN" ? 'bg-blue-500' 
                                            :  status === "CLOSED" ? 'bg-red-500' : ''}
                                            py-1 px-2 text-[13px] font-bold rounded`}
                                        >
                                            {status}
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className='flex items-center gap-1'>
                                <p className='font-medium'>Project Budget: </p>
                                <p className='font-medium'>${activeProject?.minBudget} - {activeProject?.maxBudget} USD</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between px-10 items-end'>
                        <div>
                            <div className=''>
                                <p className='font-medium'>Total Bids - {projectTotalBids}</p>
                                <p className='font-medium'>Average Bids - ${averageBid} USD</p>
                            </div>
                        </div>

                        <div className='flex items-end flex-col gap-4'>
                            <ApButton>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                Bookmark This Project
                            </ApButton>

                            <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-200">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <p className='font-bold text-lg'>{
                                hasBiddingEnded ? 'Bidding has officially ended for this project' 
                                : daysLeft === 1 ? `Bidding ends in ${daysLeft} day`
                                : `Bidding ends in ${daysLeft} days`
                            }</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='-translate-y-8 px-10'>
          <div className='flex justify-between w-full gap-5'>
             <div className='flex flex-col gap-10 w-full'>
                <div className='bg-skin-base shadow-md rounded-md min-w-[60%]'>
                    <ProjectDetailsSubMenu current={current} setCurrent={setCurrent}/>
                    <div className='bg-skin-base shadow-md rounded-md min-w-[60%]'>
                        {
                            current === 'proposals' ? <Proposals userProposal={data?.findOneBid.userID} projectId={id}/>
                            : <Details details={activeProject?.details} summary={activeProject?.summary}/>
                        }
                    </div>
                </div>

                <BidEditor projectID={activeProject?._id}/>
             </div>

            <div className="bg-skin-base w-[40%] shadow-md rounded-md">
                <AboutClient/>
            </div>
          </div>
        </div>  
      </div>

      <div className="">
      <Footer/>
    </div>
    </div>
  )
}
