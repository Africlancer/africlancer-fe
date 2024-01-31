import React, { useEffect } from 'react'
import { MyProjectsTabs } from './components'
import { useProjectContext } from '../context'
import { useSession } from 'next-auth/react'

const MyProjectsPage = () => {
  const {findUserProjects} = useProjectContext()
  const user: any = useSession()

  useEffect(() => {
    if(user?.data){
      findUserProjects({
        userId: user?.data?.user?._id
      })
    }
  }, [user])

  return (
    <div className='w-full shadow-lg p-10 bg-white pb-32'>
      <h1 className='text-2xl font-black'>My Projects</h1>
      <MyProjectsTabs/>
    </div>
  )
}

export default MyProjectsPage