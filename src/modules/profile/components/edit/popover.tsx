import { ApPopover } from '@/src/components'
import React, { FC } from 'react'
import { MoreOutlined } from '@ant-design/icons'

interface IProps {
    onEdit: () => void
    onDelete: () => void
}

export const ProfileItemPopover: FC<IProps> = ({ onDelete, onEdit }) => {
  return (
    <ApPopover
        wrapper={<MoreOutlined className="text-2xl cursor-pointer" />}
        // trigger='click'
        placement='right'
    >
        <div className='flex flex-col p-1.5'>
            <button onClick={onEdit} className='py-2 px-8 rounded-md hover:bg-black/5 ease-in-out duration-150'>
                Edit
            </button>
            <button onClick={onDelete}  className='py-2 px-8 rounded-md hover:bg-black/5 ease-in-out duration-150'>
                Delete
            </button>
        </div>
    </ApPopover>
  )
}