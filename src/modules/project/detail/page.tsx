import { ApButton } from '@/src/components'
import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useBiddingContext } from '../../bidding/context'
import { FIND_ONE_BID } from '../../bidding/gql/query'
import { useProjectContext } from '../context'
import { Proposals } from './components/proposals'
import { BidEditor } from '../../bidding/main'
import { AboutClient } from './components/client'
import { ProjectDetailsSubMenu } from './components/submenu'
import { useBookMarkContext } from '../../bookmark/context'
import { IProject } from '../model'
import { MainDetail, ProjectDetailMenu } from './components'
import { CreateBid } from '../../bidding'
import { calculateDaysLeft } from '@/src/services';

interface IProps {
  isMyProject?: boolean
}

export const ProjectDetailsPage: React.FC<IProps> = ({ isMyProject }) => {
  const [current, setCurrent] = useState<"details" | "proposals" | "files">('details');
  const {project} = useProjectContext()

  return (
    <div>
      <div className='bg-skin-accent text-white shadow-lg px-10 pt-10'>
        <div className='flex justify-between mb-5'>
          <h1 className='font-black text-3xl'>{project?.title}</h1>
          <div className='flex gap-5'>
            <p>Total Bids: {project?.totalBids}</p>
            <p>Average Bid: ${project?.averageBid?.toFixed(2)}</p>
          </div>
        </div>

        <ProjectDetailMenu
          current={current}
          setCurrent={setCurrent}
        />
      </div>

      <div className='mt-10 px-10 pb-20'>
        {current == "details" && (
          <div className='flex flex-col gap-10'>
            <MainDetail
              isMyProject={isMyProject}
            />

            {!isMyProject && calculateDaysLeft(project?.endDate as any) && (
              <CreateBid projectID={project?._id}/>
            )}
          </div>
        )}
      </div>
    </div>
  )
}