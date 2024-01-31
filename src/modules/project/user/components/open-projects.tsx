import { ApTable, ApTag, ApTooltip } from '@/src/components'
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { useProjectContext } from '../../context';
import { calculateDaysLeft } from '@/src/services';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const OpenProjects = () => {
    const {openProjects, loading} = useProjectContext()

    const columns: ColumnsType<any> = [
        {
          title: <p className="lg:text-sm text-xs font-bold">Project Title</p>,
          dataIndex: "title",
          key: "title",
          render: (value) => <p className="lg:text-sm text-xs">{value}</p>,
        },
        {
          title: <p className="lg:text-sm text-xs font-bold">Total Bids</p>,
          dataIndex: "totalBids",
          key: "totalBids",
          render: (value) => <p className="lg:text-sm text-xs">{value}</p>,
        },
        {
          title: <p className="lg:text-sm text-xs font-bold">Average Bid</p>,
          dataIndex: "averageBid",
          key: "averageBid",
          render: (value) => <p className="lg:text-sm text-xs">${value?.toFixed(2)}</p>,
        },
        {
          title: <p className="lg:text-sm text-xs font-bold">Budget</p>,
          dataIndex: "budget",
          key: "budget",
          render: (value, record) => <p className="lg:text-sm text-xs">
            ${record?.minBudget?.toFixed(2)} - ${record?.maxBudget?.toFixed(2)}
          </p>,
        },
        {
          title: <p className="lg:text-sm text-xs font-bold">Bid End Date</p>,
          dataIndex: "endDate",
          key: "endDate",
          render: (value) => <p className="lg:text-sm text-xs">
            in {calculateDaysLeft(value)} days
          </p>,
        },
        {
            title: <p className="lg:text-sm text-xs font-bold">Status</p>,
            dataIndex: "value",
            key: "value",
            render: (value) => <ApTag title='Open'/>,
        },
        {
            title: <p className="lg:text-sm text-xs font-bold">Actions</p>,
            dataIndex: "value",
            key: "value",
            render: (value, record) => (
              <div className='flex items-center justify-center gap-2'>
                <ApTooltip title="Edit Project">
                  <Link href={`/my-projects/${record._id}`} className='cursor-pointer hover:text-skin-accent duration-150 ease-in-out'>
                    <Pencil strokeWidth={1} />
                  </Link>
                </ApTooltip>

                <ApTooltip title="Delete Project">
                  <Trash2 strokeWidth={1} className='cursor-pointer hover:text-skin-accent duration-150 ease-in-out'/>
                </ApTooltip>
              </div>
            ),
        },
    ];

  return (
    <div>
        <ApTable
            columns={columns}
            dataSource={openProjects}
            loading={loading}
        />
    </div>
  )
}