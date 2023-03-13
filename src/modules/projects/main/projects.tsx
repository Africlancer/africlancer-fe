import React, { useEffect, useState } from 'react'
import { BrowseLayout } from '@/src/components';
import { useProjectContext } from '../context';
import Link from 'next/link';


const FilterComponent = () =>
{
  return (
    <div>
      kkkk
    </div>
  )
}

export const ProjectsPage = () => {

  const {fetchAllProjects, projects} = useProjectContext()
  useEffect(() => {
    fetchAllProjects({})
  },[])

  const MainContent = () =>
  {    
    return(
      <div>
        {
          projects ? projects?.map((project) => (
              <Link href={`/browse/projects/project/${project.title}`}>
                <div className='p-5 hover:bg-black/5 cursor-pointer'>
                  <h1 className='text-skin-accent text-3xl font-bold'>{project.title}</h1>
                  <p className='mb-3'>Budget ${project.minBudget} - {project.maxBudget}</p>
                  <p>{project.summary}</p>
                </div>
              </Link>
          )) : <></>
        }
      </div>
    )
  }

  return (
    <BrowseLayout FilterComponent={FilterComponent} MainContent={MainContent} page="projects" />
  )
}