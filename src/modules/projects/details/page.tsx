import { ApButton } from '@/src/components'
import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useBiddingContext } from '../../bidding/context'
import { CreateBid } from '../../bidding/create'
import { FIND_ONE_BID } from '../../bidding/gql/query'
import { useProjectContext } from '../context'
import { ProjectStatus } from '../model'
import { Details } from './components/details'
import { Proposals } from './components/proposals'
import {ClockCircleFilled} from '@ant-design/icons'

export const ProjectDetailsPage = ({id}) => {

    const {fetchProject, activeProject} = useProjectContext()
    const {getTotalBids, projectTotalBids, findBids, projectBids, getAverageBid, averageBid} = useBiddingContext()
    const session:any = useSession()

    const {data, loading} = useQuery(FIND_ONE_BID, {
        variables: {query: {userID: session?.data?.user?._id, projectID: id }}
    })
    const [showProposals, setShowProposals] = useState(false)
    
    useEffect(() => {
        console.log(data);
        fetchProject({_id: id})
        findBids({projectID: id}, session?.data?.user?._id)
        getTotalBids(id)
        getAverageBid(id)
    }, [])
    
  return (
    <div>
      <div className="h-full relative bg-skin-alt">
      <Navbar avatar=''/>
      
      <div className='pt-14'>
            <div className='relative h-72 w-full bg-browse-hero-pattern bg-center bg-cover'>
                <div className='absolute h-full w-full bg-black/50 text-white flex flex-col'>
                    <div className='px-10 pt-8 flex justify-between mb-5'>
                        <div>
                            <h1 className='text-5xl font-bold mb-2'>{activeProject?.title}</h1>
                            <div className='flex items-center gap-1'>
                                <p className='font-medium'>Project Budget: </p>
                                <p className='font-medium'>${activeProject?.minBudget} - {activeProject?.maxBudget} USD</p>
                            </div>


                        </div>

                        <div className='flex items-end flex-col'>
                            <div className='gap-2 flex items-center'>
                                <p className='text-lg font-bold'>Status -</p>
                                {
                                    activeProject?.status === 'BIDDING_OPEN' && 
                                    <div className='bg-blue-500 py-1 px-2 text-[13px] font-bold rounded'>OPEN</div>
                                }
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-between px-10 items-end'>
                        <div>
                            <div className='mb-5'>
                                <p className='font-medium'>Total Bids - {projectTotalBids}</p>
                                <p className='font-medium'>Average Bids - ${averageBid} USD</p>
                            </div>

                            <ApButton>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                Bookmark This Project
                            </ApButton>
                        </div>

                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-200">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <p className='font-bold text-lg'>Bidding ends in 5 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='-translate-y-8 px-10'>
          <div className='flex justify-between w-full gap-5'>
             <div className='flex flex-col gap-10 w-full'>
                <div className='bg-skin-base shadow-md rounded-md min-w-[60%]'>
                    {
                        showProposals ? <Proposals projectBids={projectBids} setShowProposals={setShowProposals} showProposals={showProposals}/>
                        : <Details setShowProposals={setShowProposals} showProposals={showProposals} details={activeProject?.details} summary={activeProject?.summary}/>
                    }
                </div>
                
                <>
                {/* <CreateBid projectID={activeProject?._id}/> */}
                    {
                        !loading ? 
                        <div>
                            {
                                data?.findOneBid ? <></>
                                : <CreateBid projectID={activeProject?._id}/>                
                            }
                        </div> : <></>
                    }
                </>
             </div>

            <div className="bg-skin-base w-[40%] shadow-md rounded-md">
                <h1 className='text-xl font-bold px-5 py-3 border-b'>About The Client</h1>
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
