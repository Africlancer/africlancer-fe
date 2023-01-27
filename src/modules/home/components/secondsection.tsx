import React from 'react'
import { DollarCircleFilled, QuestionCircleFilled } from '@ant-design/icons'
import { GlobeFolderIcon } from '@/src/components/icons/customIcons'

export const SecondSection = () => {
  return (
    <div>
      <div className='px-10'>
        <h1 className='text-cusf text-skin-base font-bold'>Need Something Done ?</h1>
        <div className="w-full h-0.5 bg-skin-muted my-5"></div>

        <div className='grid grid-cols-4 gap-4 mt-10'>
            <div className='bg-skin-alt w-full flex flex-col justify-center shadow-xl p-5'>
              <div className='flex items-end gap-4 mb-3'>
                <>{/*Icon*/}</>
                <h1 className='font-medium text-cusf2 text-skin-primary'>Post a Job</h1>            
              </div>
                <p className='text-lg text-skin-base'>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
            </div>

            <div className='bg-skin-alt w-full flex flex-col justify-center shadow-lg p-5'>
            <div className='flex items-center gap-4 mb-3'>                
                <h1 className='font-medium text-cusf2 text-skin-primary'>Hire Freelancers</h1>            
              </div>
                <p className='text-lg text-skin-base'>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills.</p>
            </div>

            <div className='bg-skin-alt w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-center gap-4 mb-3 text-skin-primary'>
                <DollarCircleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2'>Pay Safely</h1>            
              </div>
                <p className='text-lg text-skin-base'>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
            </div>

            <div className='bg-skin-alt w-full shadow-lg p-6'>
              <div className='flex items-center gap-4 mb-3 text-skin-primary'>
                <QuestionCircleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2'>Need Help ?</h1>            
              </div>
                <p className='text-lg text-skin-base'>Our talented team of recruiters can help you find the best freelancer for the job, get quality assistance.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
