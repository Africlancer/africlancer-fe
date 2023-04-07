import { ApButton } from '@/src/components'
import { useQuery } from '@apollo/client'
import { Image, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { FIND_PROFILES } from '../../profile/gql/query'

const FreelancerItem = ({item}) => {
    const [manualLoading, setManualLoading] = useState(true)
    const {data, loading} = useQuery(FIND_PROFILES, {
        variables: {query: {_id: item.profileID }}
    })
    
    useEffect(() => {
        setTimeout(() => {
            setManualLoading(false)
        }, 2000)
    },[])

    
  return (
    <div>
        {
            !manualLoading ? (
                <div>            
                <div className='py-5 px-5 flex flex-row justify-between border-b'>
                    <div className='flex gap-4 items-start'>
                        <Image src={item?.avatar} className='rounded-md' 
                        height={150} width={150} alt='' preview={false}/>
            
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex items-center gap-2'>
                                <h1 className="text-xl font-bold">{item?.user?.firstName + ' ' + ' ' + item?.user?.lastName}</h1>
                                <p className='text-gray-400'>{item?.user?.email}</p>
                                <p className='text-gray-400'>( {item?.user?.username} )</p>
                            </div>

                            <div>
                                <p>{item?.professionalHeadline}</p>
                                <p>{item?.summary}</p>

                                <div className='flex mt-5 items-center gap-3'>
                                    <p>PHP <span className='ml-2'>|</span></p>
                                    <p>Javascript <span className='ml-2'>|</span></p>
                                    <p>React JS</p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className='flex flex-col justify-between'>          
                        <div className='flex flex-col items-end'>
                            <p className='font-bold text-xl'>${item?.hourlyRate} USD</p>
                            <p>per hour</p>
                        </div>
                        
                        <div className='flex items-end flex-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-3 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <ApButton>Request Quote</ApButton>
                        </div>
                    </div>
                    </div>
                </div>
            ) : <div className='px-5 py-5'><Skeleton active /></div>
        }
    </div>
  )
}

export default FreelancerItem
