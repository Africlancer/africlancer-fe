import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import { ConfigProvider, Switch, Rate } from 'antd'

export const ProjectItem = ({ project, length }) => {
  const [manualLoading, setManualLoading] = useState(false)
  const [value, setValue] = useState(3)
  const desc = ['1', '2', '3', '4', '5']
  //console.log(project);

  useEffect(() => {
    setTimeout(() => {
      setManualLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {!manualLoading ? (
        <Link href={`/browse/projects/project/${project._id}`}>
          <div className={`p-5 hover:bg-black/5 cursor-pointer ${length > 1 ? 'border-b' : ''}`}>
            <div className="">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-skin-accent text-2xl font-bold">{project.title}</h1>
                  <p className="mb-3">
                    Budget ${project.minBudget} - {project.maxBudget}
                    <span className="ml-2 text-gray-500">
                      {project.type === 'HOURLY_RATE' ? 'per hour' : ''}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <p className=" flex gap-1">
                    <span>Total bids -</span> {project?.totalBids}{' '}
                  </p>
                  <p className="font-bold gap-1 flex">
                    {' '}
                    <span>Average Bid -</span>${project.averageBid} USD
                  </p>
                </div>
              </div>

              <p className="text-[16px]">{project.summary}</p>

              <div className="flex mt-5 items-center gap-2">
                {project?.skills.map((skill, i) => (
                  <p key={i}>
                    <span className="bg-gray-200 text-gray-900 text-sm py-1 px-3 rounded-md">
                      {skill}
                    </span>
                    {project?.skills[i + 1] ? <span className="ml-2">|</span> : <></>}
                  </p>
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
                  <p>41 minutes ago</p>
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
        </Link>
      ) : (
        <div className="px-5 py-5">
          <Skeleton active />
        </div>
      )}
    </div>
  )
}
