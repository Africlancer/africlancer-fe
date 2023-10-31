import React, { useEffect } from 'react'
import { Image } from 'antd'
import { ApButton } from '@/src/components'
import { useFreelancersContext } from '../context'
import FreelancerItem from './item'
import { LoadingOutlined } from '@ant-design/icons'

export const MainContent = () => {
  const { fetchFreelancersFilter, freelancers } = useFreelancersContext()
  useEffect(() => {
    fetchFreelancersFilter({}, false)
  })

  return (
    <div>
      <div className="flex justify-between py-3 border-b px-5">
        <h1 className="text-lg font-bold">Top Results</h1>
        <p>Sort By</p>
      </div>
      {freelancers ? (
        freelancers.map((item, i) => <FreelancerItem key={i} item={item} />)
      ) : (
        <div className="flex items-center justify-center h-[200px]">
          <p className="flex items-center gap-3">
            <LoadingOutlined style={{ fontSize: 14 }} spin />
            Fetching Freelancers, Please Wait...
          </p>
        </div>
      )}
    </div>
  )
}
