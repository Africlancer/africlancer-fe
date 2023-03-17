import React, { useEffect, useRef, useState } from 'react'
import { BrowseLayout } from '@/src/components';
import { useProjectContext } from '../context';
import Link from 'next/link';
import {InfoCircleFilled} from '@ant-design/icons'
import { useBiddingContext } from '../../bidding/context';
import {ProjectItem} from './components/item'

const FilterComponent = ({fetchAllProjects}) =>
{
  const [filterQuery, setFilterQuery] = useState<{}>({})
  const typeFormRef = useRef<HTMLFormElement>()
  const budgetFormRef = useRef<HTMLFormElement>()

  useEffect(() => {
    console.log('filterTouched')
    fetchAllProjects({...filterQuery})
  },[filterQuery])

  const clearQuery = (field: "type" | "budget", form) =>
  {        
    let newQuery = filterQuery 
    form.current.reset()

    switch (field) {
      case "type":
        delete newQuery?.type
        setFilterQuery({...newQuery})
        break;
      case "budget":
        delete newQuery?.minBudget
        delete newQuery?.maxBudget
        setFilterQuery({...newQuery})
        break;
    }
  }


  return (
    <div>
       <h1 className='text-xl font-bold px-5 py-3 border-b'>Filters</h1>
       <div className='px-5 py-3 border-b'>
          <h1 className='font-bold mb-2'>Payment Type</h1>
          <div className='flex justify-between'>
          <form ref={typeFormRef}>
            <div className='flex items-center gap-2'>
                <input type="radio" name="type" value='FIXED_PRICE' 
                onChange={({ target }) => setFilterQuery({...filterQuery, type: target.value})}/>
                <p>Fixed Price</p>
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" value='HOURLY_RATE' name="type" id="" 
                onChange={({ target }) => setFilterQuery({...filterQuery, type: target.value})}/>
                <p>Hourly Rate</p>
            </div>
          </form>
            <p className='text-skin-accent cursor-pointer' 
            onClick={() => clearQuery("type", typeFormRef)}>Clear</p>
          </div>
       </div>

       <div className='px-5 py-3 border-b'>
          <div className='flex justify-between'>
            <h1 className='font-bold mb-2'>Budget</h1>
              <p className='text-skin-accent cursor-pointer' 
              onClick={() => clearQuery("budget", budgetFormRef)}>Clear</p>
          </div>

          {
            filterQuery.type ? <></> :
            <div className='flex items-center gap-2 mb-3'>
              <InfoCircleFilled className='text-blue-500 text-lg'/>
              <p className='mt-0.5 text-sm'>Select payment type first.</p>
            </div>
          }

          <form ref={budgetFormRef}>
            <div className='flex flex-col gap-2 mb-2'>
                <p>Min Budget</p>
                <input disabled={filterQuery.type ? false : true} className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' 
                type="number"
                onChange={({ target }) => setFilterQuery({...filterQuery, minBudget: parseInt(target.value)})}/>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Max Budget</p>
                <input disabled={filterQuery.type ? false : true} className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' 
                type="number"  
                onChange={({ target }) => setFilterQuery({...filterQuery, maxBudget: parseInt(target.value)})}/>
            </div>
          </form>
       </div>
    </div>
  )
}

export const ProjectsPage = () => {

  const {fetchAllProjects, projects} = useProjectContext()
  const {getTotalBids, projectTotalBids} = useBiddingContext()

  useEffect(() => {
    fetchAllProjects({})
  },[])

  const MainContent = () =>
  {    
    return(
      <div>
        <div className='flex justify-between py-3 border-b px-5'>
          <h1 className='text-lg font-bold'>Top Results</h1>
          <p>Sort By</p>
        </div>
        {
          projects ? projects?.map((project) => (
                <ProjectItem project={project} length={projects?.length}/>
              //   <Link href={`/browse/projects/project/${project._id}`}>
              //   <div className='p-5 hover:bg-black/5 cursor-pointer'>
              //     <h1 className='text-skin-accent text-3xl font-bold'>{project.title}</h1>
              //     <p className='mb-3'>Budget ${project.minBudget} - {project.maxBudget}</p>
              //     <p>{project.summary}</p>
              //   </div>
              // </Link>
          )) : <></>
        }
      </div>
    )
  }

  return (
    <BrowseLayout fetchAllProjects={fetchAllProjects} FilterComponent={FilterComponent} MainContent={MainContent} page="projects" />
  )
}