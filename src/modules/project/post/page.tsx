import React, { useState } from 'react'
import { PostProjectSteps, ProjectBasicDetails, ProjectExecution, ProjectPayment, ProjectReview } from './components'

const PostProjectPage = () => {
  const [current, setCurrent] = useState(0);
  const [payload, setPayload] = useState<any>({
    title: '',
    skills: '',
    summary: '',
    method: 'post-project',
    payment: 'fixed',
    minBudget: 0,
    maxBudget: 0
  })

  const handleNavigate = (index: number, data?: any) => {
    setCurrent(index)


    if(data) {
      let p = payload    
  
      setPayload({
        ...p,
        ...data
      })
    }
  }

  const handleUpdatePayload = (val: any) => {
    let p = payload    
  
    setPayload({
      ...p,
      ...val
    })
  }

  return (
    <div className='p-10'>
      <p className='text-skin-accent'>Post a Project</p>
      <h1 className='font-bold text-3xl mb-5'>What needs to be done ?</h1>

      <PostProjectSteps
        current={current}
      />

      <div>
        {current == 0 && (
           <ProjectBasicDetails 
              payload={payload} 
              onNavigate={handleNavigate}
              updatePayload={handleUpdatePayload} 
            />
        )}
        {/* {current == 1 && (
          <ProjectExecution 
            updatePayload={handleUpdatePayload} 
            payload={payload} 
            onNavigate={handleNavigate}
          />
        )} */}
        {current == 1 && (
          <ProjectPayment
            updatePayload={handleUpdatePayload} 
            payload={payload} 
            onNavigate={handleNavigate}
          />
        )}
        {current == 2 && (
          <ProjectReview
            updatePayload={handleUpdatePayload} 
            payload={payload} 
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  )
}

export default PostProjectPage