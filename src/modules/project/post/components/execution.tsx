import React, { useState } from 'react'
import { FolderCheck, Trophy  } from 'lucide-react';
import { ApButton } from '@/src/components';

interface IProps {
    onNavigate: (index: number, data?: any) => void
    updatePayload: (val: any) => void
    payload: any
}

export const ProjectExecution: React.FC<IProps> = ({ onNavigate, updatePayload, payload }) => {
  const handleNext = () => {
    onNavigate(2)
  }

  const handlePrevious = () => {
    onNavigate(0)
  }

  return (
    <div className='pt-5 flex flex-col gap-5'>
      <button onClick={() => updatePayload({method: 'post-project'})} className={
        `shadow-sm flex gap-5 duration-150 ease-in-out px-5 py-2 rounded-lg border w-full items-center hover:shadow-md hover:border-skin-accent
          ${payload?.method == "post-project" ? "shadow-md border-skin-accent" : ""}
        `
      }>
        <FolderCheck strokeWidth={1} className={`h-32 w-32 text-gray-700`}/>
        <div className='flex flex-col items-start justify-start text-start gap-2'>
          <h1 className='font-bold text-xl'>Post a Project</h1>
          <p>Receive free quotes, best for when you have a specific idea, the project is not visual in nature or the project is complex.</p>
        </div>
      </button>

      <button onClick={() => updatePayload({method: 'contest'})} className={
        `shadow-sm flex gap-5 duration-150 ease-in-out px-5 py-2 rounded-lg border w-full items-center hover:shadow-md hover:border-skin-accent
          ${payload?.method == "contest" ? "shadow-md border-skin-accent" : ""}
        `
      }>
        <Trophy strokeWidth={1} className={`h-32 w-32 text-gray-700`}/>
        <div className='flex flex-col items-start justify-start text-start gap-2'>
          <h1 className='font-bold text-xl'>Start a Contest</h1>
          <p>Crowdsource ideas. Post a prize and get competing entries which you can iterate on with feedback. Great for visual designs.</p>
        </div>
      </button>

      <div className='flex justify-end mt-5 gap-5'>
          <ApButton
              outline
              title="Previous"
              type='submit'
              onClick={handlePrevious}
          />

          <ApButton
              title="Next"
              type='submit'
              onClick={handleNext}
          />
      </div>
    </div>
  )
}