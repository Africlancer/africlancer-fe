import React from 'react'
import { FolderCheck } from 'lucide-react';
import { ApButton, ApTag } from '@/src/components';
import { useProjectContext } from '../../context';
import { ProjectType } from '../../model';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface IProps {
    onNavigate: (index: number, data?: any) => void
    updatePayload: (val: any) => void
    payload: any
}

export const ProjectReview: React.FC<IProps> = ({ onNavigate, updatePayload, payload }) => {
    const {actionLoading, createProject} = useProjectContext()
    const router = useRouter()
    const session: any = useSession()    

    const handlePrevious = () => {
        onNavigate(1)
    }

    const handleSubmit = () => {
        const presentDate = new Date()
        const sevenDaysLater = new Date()
        sevenDaysLater.setDate(sevenDaysLater.getDate() + 7)

        createProject({
            title: payload?.title,
            skills: payload?.skills?.map((item) => item?.value),
            summary: payload?.summary,
            details: payload?.summary,
            minBudget: payload?.minBudget,
            maxBudget: payload?.maxBudget,
            type: payload?.payment == "fixed" ? ProjectType[0] as any : ProjectType[1] as any,
            startDate: presentDate,
            endDate: sevenDaysLater,
            userId: session?.data?.id
        }).then(() => {
            router.push(`/my-projects`)
        })
    }
      
  return ( 
    <div className='pt-5'>
        <div className='flex justify-between'>
            <div className="flex items-center gap-5">
                <FolderCheck strokeWidth={1} className={`h-24 w-24 text-gray-700`}/>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>{payload?.title}</h1>
                    <p>${payload?.minBudget} - ${payload?.maxBudget} ({payload?.payment})</p>
                </div>
            </div>

            {/* <p>Type: {payload?.method}</p> */}
        </div>

        <p className='leading-loose'>{payload?.summary}</p>

        <div className='flex items-center gap-3 mt-5'>
            {payload?.skills?.map((item: any, i: any) => (
                <ApTag title={item?.value} key={i}/>
            ))}
        </div>

        <div className='flex justify-end mt-5 gap-5'>
          <ApButton
              outline
              title="Previous"
              onClick={handlePrevious}
          />

          <ApButton
              title="Submit"
              onClick={handleSubmit}
              loading={actionLoading}
          />
      </div>
    </div>
  )
}