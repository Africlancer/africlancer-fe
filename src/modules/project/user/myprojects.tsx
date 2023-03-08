import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { FIND_PROJECTS } from '../gql/query';

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
    <div className="my-10 bg-white w-full min-h-[250px] shadow-md rounded-md py-3 px-5">
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm bg-skin-alt border">
            <thead className="border-b font-medium">
                <tr>
                <th scope="col" className="px-6 py-4">Project Name</th>
                <th scope="col" className="px-6 py-4">Total Bids</th>
                <th scope="col" className="px-6 py-4">Average Bids</th>
                <th scope="col" className="px-6 py-4">Budget</th>
                <th scope="col" className="px-6 py-4">Payment Type</th>
                <th scope="col" className="px-6 py-4">Bid End Date</th>
                <th scope="col" className="px-6 py-4">Status</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    projects?.map((project) => {
                        let myDate = new Date( project.endDate )
                        let dateStr = myDate.getFullYear() + " - " + (myDate.getMonth() + 1) + " - " + 
                        myDate.getDate()
                    

                        return (
                            <tr className="border-b" key={project._id}>
                            <td className="whitespace-nowrap px-6 py-4">{project.title}</td>
                            <td className="whitespace-nowrap px-6 py-4"></td>
                            <td className="whitespace-nowrap px-6 py-4"></td>
                            <td className="whitespace-nowrap px-6 py-4">${project.minBudget} - {project.maxBudget}</td>
                            <td className="whitespace-nowrap px-6 py-4">{
                                project.type === projectPaymentType.fixed ? 'Fixed' : 'Hourly'
                            }</td>
                            <td className="whitespace-nowrap px-6 py-4">{dateStr}</td>
                            <td className="whitespace-nowrap px-6 py-4">{
                                project.status === projectBidStatus.open ?
                                'Open' : project.status === projectBidStatus.close ?
                                'Closed' : 'Completed'
                            }</td>
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
  )
}
