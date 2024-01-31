import React, { useEffect, useRef, useState } from 'react'
import { ApButton, BrowseLayout } from '@/src/components'
import { MainContent } from './components/main'
import { useFreelancersContext } from './context'
import { BrowseMenu } from '../browse/components'
import { FreelancerItem, FreelancersFilter } from './components'
import { Skeleton } from 'antd'
import { useSession } from 'next-auth/react'

const FreelancersPage = () => {
  const { findFreelancers, freelancers, loading } = useFreelancersContext()
  const session: any = useSession()

  useEffect(() => {
    if(session?.data){
      findFreelancers({}, false, session?.data?.id)
    }
  }, [session])

  return (
    <div>
      <BrowseMenu
        current='freelancers'
      />

      <div className='mt-10 pb-20 flex gap-10 px-10 items-start'>
        <div className='pt-3 w-[30%] bg-white shadow-lg rounded-lg'>
          <h1 className='border-b pb-3 px-5 font-bold text-xl'>Filters</h1>
          <FreelancersFilter/>
        </div>

        <div className='w-[70%] bg-white shadow-lg rounded-lg'>
          {!loading ? (
            <>            
              <div className='flex justify-between py-3 border-b px-5'>
                <div>
                  <h1 className="text-lg font-bold">Top Results</h1>
                  <p className="text-sm">
                    Showing {freelancers?.length} out of {freelancers?.length} freelancers
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <p>Sort By</p>
                  <p>:</p>
                  <select className="border px-1 rounded py-1 text-sm">
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                    <option>Fewest Bids</option>
                    <option>Most Bids</option>
                  </select>
                </div>
              </div>
              {freelancers?.length > 0 ? freelancers?.map((item, i) => (
                <FreelancerItem freelancer={item} key={i} length={freelancers?.length}/>
              )) : (
                <></>
              )}
            </>
          ) : (
            <div className='flex flex-col gap-5 p-5'>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FreelancersPage