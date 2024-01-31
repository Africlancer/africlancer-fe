import React, { useEffect } from 'react'
import { BrowseMenu } from '../browse/components'
import { ProjectItem, ProjectsFilter } from './components'
import { useProjectContext } from './context'
import { Skeleton } from 'antd'

const ProjectsPage = () => {
  const {loading, projects, findProjects} = useProjectContext()

  useEffect(() => {
    findProjects({}, false)
  }, [])

  return (
    <div>
      <BrowseMenu
        current='projects'
      />

      <div className='mt-10 pb-20 flex gap-10 px-10 items-start'>
        <div className='pt-3 w-[30%] bg-white shadow-lg rounded-lg'>
          <h1 className='border-b pb-3 px-5 font-bold text-xl'>Filters</h1>
          <ProjectsFilter/>
        </div>

        <div className='w-[70%] bg-white shadow-lg rounded-lg'>
          {!loading ? (
            <>            
              <div className='flex justify-between py-3 border-b px-5'>
                <div>
                  <h1 className="text-lg font-bold">Top Results</h1>
                  <p className="text-sm">
                    Showing {projects?.length} out of {projects?.length} projects
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
              {projects?.length > 0 ? projects?.map((item, i) => (
                <ProjectItem project={item} key={i} length={projects?.length}/>
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

export default ProjectsPage