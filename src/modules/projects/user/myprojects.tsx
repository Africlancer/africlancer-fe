import { ApButton, EditIcon } from '@/src/components';
import { Footer } from '@/src/components/footer';
import { ApSearchInput } from '@/src/components/input/search';
import { Navbar, SubMenu } from '@/src/components/navbar';
import { useQuery } from '@apollo/client';
import {  Image, MenuProps } from 'antd';
import { useSession } from 'next-auth/react';
import NImage from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FIND_PROJECTS } from '../gql/query';
import { ProjectSubMenu } from './submenu';
const bgImg = require("../../../../public/abs.jpg")

enum projectPaymentType {
    fixed = 'FIXED_PRICE',
    hourly = 'HOURLY_RATE'
}

enum projectBidStatus {
    open = 'BIDDING_OPEN',
    close = 'BIDDING_CLOSE',
    completed = 'COMPLETED'
} 

export const MyProjectsPage = () => {
    const items: MenuProps['items'] = [
        {
          label: 'Dashboard',
          key: 'dashboard',
        },
        {
          label: 'Lists',
          key: 'lists',
        },
        {
          label: 'Tasklists',
          key: 'tasklists',
        },
        {
          label: 'My Projects',
          key: 'my-projects',
        },
        {
          label: 'Inbox',
          key: 'inbox',
        },
        {
          label: 'Feedback',
          key: 'feedback',
        },
        {
          label: 'Free Credit',
          key: 'free-credit',
        }
      ];

    const session: any = useSession()
    const { loading, error, data } = useQuery(FIND_PROJECTS, {
        variables: {query: {userId: session.data?.user._id}}
    });
    const [projects, setProjects] = useState([])
    console.log(data?.findProjects);
    
    useEffect(() => {
        setProjects(data?.findProjects)
    })
    
  return (
    <div className="h-full relative bg-skin-alt">
      <Navbar avatar=''/>
      <SubMenu items={items} currentPage='my-projects'/>
      <div className='pt-24'>
        <div className='relative h-80 w-full bg-browse-hero-pattern bg-center bg-cover'>
            <div className='absolute h-full w-full bg-black/40 text-white flex flex-col justify-between'>
                <div className='px-10 pt-8'>
                    <h1 className='text-4xl font-bold mb-8'>Projects, Contests and Quotes</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut, vel assumenda odio pariatur officia repudiandae! Est et reprehenderit, voluptatibus fuga quo ut nobis dolore aut non sit tempora expedita facilis aperiam distinctio consequatur delectus libero a, possimus quod voluptates aspernatur cum. Magnam ab nesciunt doloremque nostrum, aperiam rem voluptatem.</p>
                    <ApSearchInput />
                </div>
            </div>
        </div>               


            <div className='px-10 -translate-y-10'>
                <ProjectSubMenu/>
                <div>
                    <div className="bg-white shadow-md rounded-md py-5 px-5">
                    <h1 className='font-bold text-2xl mb-5'>Open Projects</h1>
                    <div className="overflow-x-auto w-full rounded-md">
                        <table className="min-w-full text-left text-sm bg-skin-alt rounded-md">
                        <thead className="font-medium bg-skin-accent text-white rounded-t-md w-full">
                            <tr className='rounded-t-md'>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Total Bids</th>
                            <th scope="col" className="px-6 py-3">Average Bids</th>
                            <th scope="col" className="px-6 py-3">Budget</th>
                            <th scope="col" className="px-6 py-3">Payment Type</th>
                            <th scope="col" className="px-6 py-3">Bid End Date</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                projects?.map((project) => {
                                    let myDate = new Date( (project as any)?.endDate )
                                    let dateStr = myDate.getFullYear() + " - " + (myDate.getMonth() + 1) + " - " + 
                                    myDate.getDate()
                                
                                    return (
                                        <tr className="" key={(project as any)?._id}>
                                        <td className="whitespace-nowrap px-6 py-4">{(project as any)?.title}</td>
                                        <td className="whitespace-nowrap px-6 py-4"></td>
                                        <td className="whitespace-nowrap px-6 py-4"></td>
                                        <td className="whitespace-nowrap px-6 py-4">${(project as any)?.minBudget} - {(project as any)?.maxBudget}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{
                                            (project as any)?.type === projectPaymentType.fixed ? 'Fixed' : 'Hourly'
                                        }</td>
                                        <td className="whitespace-nowrap px-6 py-4">{dateStr}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{
                                            (project as any)?.status === projectBidStatus.open ?
                                            'Open' : (project as any)?.status === projectBidStatus.close ?
                                            'Closed' : 'Completed'
                                        }</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                          <Link href={`/manage/projects/project/${(project as any)?._id}`}>
                                              <ApButton outline> 
                                                Edit
                                                <EditIcon/> 
                                              </ApButton>
                                          </Link>
                                        </td> 
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="">
      <Footer/>
    </div>
    </div>
  )
}
