import React from 'react'
import { DollarCircleFilled, QuestionCircleFilled } from '@ant-design/icons'
import { GlobeFolderIcon } from '@/src/components/icons'

export const SecondSection = () => {
  return (
    <div>
      <div className='px-10'>
      <div className='border-b text-skin-inverted border-skin-border w-full pb-5'>
          <h1 className='text-cusf font-bold'>Need Something Done ?</h1>
            <p className='text-lg ring-offset-indigo-800'>Quickly Get Your Work Completed By Our Top Notch African Freelancers</p>
        </div>

        <div className='grid grid-cols-4 gap-4 mt-10'>
            <div className='bg-skin-base rounded-lg w-full flex flex-col justify-center shadow-xl p-5'>
              <div className='flex items-center  gap-4 mb-3 text-skin-accent'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                  <h1 className='font-medium text-cusf2'>Post a Job</h1>            
              </div>
                <p className='text-lg text-skin-inverted'>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
            </div>

            <div className='bg-skin-base rounded-lg w-full flex flex-col justify-center shadow-lg p-5'>
            <div className='flex items-center gap-4 mb-3  text-skin-accent'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                </svg>                
                <h1 className='font-medium text-cusf2'>Hire Freelancers</h1>            
            </div>
                <p className='text-lg text-skin-inverted'>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills.</p>
            </div>

            <div className='bg-skin-base rounded-lg w-full flex flex-col justify-center shadow-lg p-5'>
              <div className='flex items-center gap-4 mb-3'>
                <DollarCircleFilled className='text-skin-accent' style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2 text-skin-accent'>Pay Safely</h1>            
              </div>
                <p className='text-lg text-skin-inverted'>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
            </div>

            <div className='bg-skin-base rounded-lg w-full shadow-lg p-6'>
              <div className='flex items-center gap-4 mb-3 text-skin-accent'>
                <QuestionCircleFilled style={{fontSize: '30px'}}/>
                <h1 className='font-medium text-cusf2'>Need Help ?</h1>            
              </div>
                <p className='text-lg text-skin-inverted'>Our talented team of recruiters can help you find the best freelancer for the job, get quality assistance.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
