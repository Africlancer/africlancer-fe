import React, { useEffect, useRef, useState } from 'react'
import { BrowseLayout } from '@/src/components';
import { useProjectContext } from '../context';
import Link from 'next/link';
import {InfoCircleFilled} from '@ant-design/icons'
import { useBiddingContext } from '../../bidding/context';
import {ProjectItem} from './components/item'
import { LoadingOutlined } from "@ant-design/icons";

const FilterComponent = ({browseFunc: fetchAllProjects}) =>
{
  const [filterQuery, setFilterQuery] = useState<any>({})
  const typeFormRef = useRef<HTMLFormElement>()
  const budgetFormRef = useRef<HTMLFormElement>()

  useEffect(() => {
   // console.log('filterTouched', filterQuery)
    fetchAllProjects({...filterQuery}, false)
  },[filterQuery])

  const clearQuery = (field: "type" | "budget", form) =>
  {        
    let newQuery:any = filterQuery 
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
       <h1 className='text-lg font-bold px-5 py-3 border-b'>Filter Projects</h1>
       <div className='px-5 py-3 border-b'>
          <h1 className='font-bold mb-2'>Payment Type</h1>
          <div className='flex justify-between'>
          <form ref={typeFormRef}>
            <div className='flex items-center gap-2'>
                <input type="radio" name="type" value='FIXED_PRICE' 
                onClick={() => setFilterQuery({...filterQuery, type: 'FIXED_PRICE'})}/>
                <p>Fixed Price</p>
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" value='HOURLY_RATE' name="type" id="" 
                onClick={() => setFilterQuery({...filterQuery, type: 'HOURLY_RATE'})}/>
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
                onChange={({ target }) => {
                  if(target.value === '')
                  {
                    let temp = filterQuery
                    delete temp?.minBudget
                    setFilterQuery({...temp})
                  }
                  else{setFilterQuery({...filterQuery, minBudget: parseInt(target.value)})}
                }}/>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Max Budget</p>
                <input disabled={filterQuery.type ? false : true} className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' 
                type="number"  
                onChange={({ target }) => {
                  if(target.value === '')
                  {
                    let temp = filterQuery
                    delete temp?.maxBudget
                    setFilterQuery({...temp})
                  }
                  else{setFilterQuery({...filterQuery, maxBudget: parseInt(target.value)})}
                }}/>
            </div>
          </form>
       </div>

       <div className='px-5 py-3 border-b'>
          <div className='flex justify-between'>
            <h1 className='font-bold mb-2'>Skills</h1>
              <p className='text-skin-accent cursor-pointer' 
              onClick={() => clearQuery("budget", budgetFormRef)}>Clear</p>
          </div>

          <div className='mt-'>
            <div className='relative w-full'>
              <input placeholder='Search Skills' className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <div className='flex flex-col gap-3 mt-5'>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <p className='text-sm'>Website Design</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <p className='text-sm'>Logo Design</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <p className='text-sm'>Mobile App Development</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <p className='text-sm'>Data Entry</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <p className='text-sm'>Article Writing</p>
                </div>
            </div>
          </div>
       </div>

       <div className='border-b px-5 py-5'>
        <div className='flex items-center justify-between w-full'>
          <p className='font-bold'>Countries</p>
          <p className='text-skin-accent cursor-pointer'>Clear</p>
        </div>

        <div className='flex justify-between gap-4 mt-3'>
          <div className='relative w-full'>
            <input placeholder='Search Countries' className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        </div>
    </div>
  )
}

export const ProjectsPage = () => {

  const {fetchAllProjects, projects} = useProjectContext()
  const {getTotalBids, projectTotalBids} = useBiddingContext()

  useEffect(() => {
    fetchAllProjects({}, false)
  },[])

  const MainContent = () =>
  {    
    return(
      <div className=''>
        <div className='flex justify-between py-3 border-b px-5'>
          <div >
            <h1 className='text-lg font-bold'>Top Results</h1>
            <p className='text-sm'>Showing {projects?.length} out of {projects?.length} projects</p>
          </div>

          <div className='flex items-center gap-3 text-sm'>
            <p>Sort By</p>
            <p>:</p>
            <select className='border px-1 rounded py-1 text-sm'>
              <option>Latest</option>
              <option>Oldest</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Fewest Bids</option>
              <option>Most Bids</option>
            </select>
          </div>
        </div>
        {
          projects ? (
            <div>
              {
                projects?.length > 0 ? (
                    projects?.map((project) => (
                        <ProjectItem project={project} length={projects?.length}/>
                  ))
                ) : (
                  <div className='flex items-center justify-center h-[200px]'>
                    <p className='flex items-center gap-3'>
                        No Projects Found
                    </p>
                  </div>
                )
              }
            </div>
          ) : (
            <div className='flex items-center justify-center h-[200px]'>
                <p className='flex items-center gap-3'>
                    <LoadingOutlined  style={{fontSize: 14}} spin/>
                    Fetching Projects, Please Wait...
                </p>
            </div>
          )
        }
      </div>
    )
  }

  return (
    <BrowseLayout browseFunc={fetchAllProjects} FilterComponent={FilterComponent} MainContent={MainContent} page="projects" />
  )
}