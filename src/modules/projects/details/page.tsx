import { ApButton } from '@/src/components'
import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import React, { useEffect } from 'react'
import { useBiddingContext } from '../../bidding/context'
import { CreateBid } from '../../bidding/create'
import { useProjectContext } from '../context'

export const ProjectDetailsPage = ({id}) => {

    const {fetchProject, activeProject} = useProjectContext()
    const {getTotalBids, projectTotalBids} = useBiddingContext()

    useEffect(() => {
        fetchProject({title: id})
        getTotalBids(id)
    }, [])
    
  return (
    <div>
      <div className="h-full relative bg-skin-alt">
      <Navbar avatar=''/>
      
      <div className='pt-14'>
            <div className='relative h-72 w-full bg-browse-hero-pattern bg-center bg-cover'>
                <div className='absolute h-full w-full bg-black/50 text-white flex flex-col justify-between'>
                    <div className='px-10 pt-8 flex justify-between'>
                        <div>
                            <h1 className='text-5xl font-bold mb-3'>{activeProject?.title}</h1>
                            <p className='mb-5'>Project Status - {activeProject?.status}</p>
                            <ApButton>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                Bookmark This Project
                            </ApButton>
                        </div>

                        <div>
                            <p className='font-medium'>Total bids for this project - {projectTotalBids}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='-translate-y-20 px-10'>
          <div className='flex justify-between gap-10'>
             <div className='flex flex-col gap-10'>
                <div className='w-full bg-skin-base shadow-md rounded-md'>
                    <h1 className='text-xl font-bold px-5 py-3 border-b'>Project Details</h1>
                    <div className='px-5 py-5'>
                        <div>
                            <p className='font-bold mb-2'>Summary</p>
                            <p>{activeProject?.summary}</p>
                        </div>

                        <div className='mt-8'>
                            <p className='font-bold mb-2'>Details</p>
                            <p>{activeProject?.details}</p>
                        </div>

                        <div className='mt-8'>
                            <p className='font-bold mb-2'>Skills Required</p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <CreateBid projectID={activeProject?._id}/>
             </div>

            <div className="bg-skin-base w-[500px] shadow-md rounded-md">
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
