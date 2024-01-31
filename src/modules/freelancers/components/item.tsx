import { ApButton, ApTag } from '@/src/components'
import { useQuery } from '@apollo/client'
import { Image, Rate, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { FIND_PROFILES } from '../../profile/gql/query'
import { IProfile } from '../../profile/model'
import { useRouter } from 'next/router'

interface IProps {
  freelancer: IProfile
  length: number
}

export const FreelancerItem: React.FC<IProps> = ({ freelancer, length }) => {
  const [showMore, setShowMore] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/browse/search/freelancers/${freelancer._id}`)
  }

  const handleShow = (e: any) => {
    e.cancelBubble = true;
    if(e.stopPropagation) e.stopPropagation();

    setShowMore(!showMore)
  }

  return (
    <div onClick={handleClick} className="hover:bg-gray-400/5 cursor-pointer py-5 px-5 flex border-b">
      <div className="relative w-[250px]">
        <Image
          src={freelancer?.avatar}
          className="rounded-md max-w-[150px]"
          height={150}
          width={"100%"}
          alt=""
          preview={false}
        />
      </div>

      <div className="flex flex-col justify-between w-full mx-3">
        <div className='mb-5'>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">
              {freelancer?.user?.firstName + ' ' + ' ' + freelancer?.user?.lastName}
            </h1>
            <p className="text-gray-400">{freelancer?.user?.email}</p>
            <p className="text-gray-400">( {freelancer?.user?.username} )</p>
          </div>

          <Rate disabled/>
        </div>

        <div>
          <p className='font-bold'>{freelancer?.professionalHeadline}</p>
          <p className="text-[16px]">
            {!showMore ? freelancer.summary?.substring(0, 100) : freelancer.summary}

            {(freelancer as any)?.summary?.length > 100 && (
              <button onClick={handleShow} className='z-[9999] relative text-skin-accent ml-2 font-semibold'>
                {!showMore ? "...Show More" : "Show Less"}
              </button>
            )}
          </p>
          
          {(freelancer as any)?.skills?.length > 0 && (
            <div className="flex mt-5 items-center gap-3">
              {freelancer?.skills?.map((item, i) => (
                <ApTag key={i} title={item}/>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between w-[250px]">
        <div className="flex flex-col items-end">
          <p className="font-bold text-xl">${freelancer?.hourlyRate} USD</p>
          <p>per hour</p>
        </div>

        <div className="flex items-end flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mb-3 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <ApButton>Request Quote</ApButton>
        </div>
      </div>
    </div>
  )
}