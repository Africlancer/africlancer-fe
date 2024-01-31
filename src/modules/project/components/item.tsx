import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import { ConfigProvider, Switch, Rate } from 'antd'
import { ApTag } from '@/src/components'
import { useRouter } from 'next/router'
import ReactTimeAgo from 'react-time-ago'
import { IProject, ProjectType } from '../model'

interface IProps {
  project: IProject
  length: number
}

export const ProjectItem: React.FC<IProps> = ({ project, length }) => {
  const [value, setValue] = useState(0)
  const desc = ['1', '2', '3', '4', '5']
  const [showMore, setShowMore] = useState(false)
  const router = useRouter()

  const handleShow = (e: any) => {
    e.cancelBubble = true;
    if(e.stopPropagation) e.stopPropagation();

    setShowMore(!showMore)
  }

  const handleClick = () => {
    router.push(`/browse/search/projects/${project._id}`)
  }

  return (
    // <Link href={`/browse/search/projects/${project._id}`} className='relative -z-5'>
      <div onClick={handleClick} className={`p-5 hover:bg-gray-400/5 cursor-pointer ${length > 1 ? 'border-b' : ''}`}>
        <div className="">
          <div className="flex justify-between">
            <div>
              <h1 className="text-skin-accent text-2xl font-bold">{project?.title}</h1>
              <p className="mb-3">
                Budget ${project?.minBudget} - {project?.maxBudget}
                <span className="ml-2 text-gray-500">
                ({project?.type as any == ProjectType[0] ? "Fixed Payment" : "Hourly Payment"})
                </span>
              </p>
            </div>

            <div className="flex flex-col items-end">
              <p className=" flex gap-1">
                <span>Total bids -</span> {project?.totalBids}{' '}
              </p>
              <p className="font-bold gap-1 flex">
                {' '}
                <span>Average Bid -</span>${project?.averageBid} USD
              </p>
            </div>
          </div>

          <div className=''>                
            <p className="text-[16px]">
              {!showMore ? project.summary?.substring(0, 200) : project.summary}

              <button onClick={handleShow} className='z-[9999] relative text-skin-accent ml-2 font-semibold'>
                {!showMore ? "...Show More" : "Show Less"}
              </button>
            </p>
          </div>

          <div className="flex mt-5 items-center gap-2">
            {project?.skills?.map((skill, i) => (
              <ApTag title={skill} key={i}/>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span>
                <Rate disabled onChange={setValue} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
              </span>

              <div className="flex items-center mt-1.5 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>0</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ReactTimeAgo date={project?.startDate as any} locale="en-US"/>
              <button className="z-50 border border-skin-accent p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-skin-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    // </Link>
  )
}
