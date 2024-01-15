import React from 'react'
import { ApButton } from '@/src/components/button'
import { ApDollarIcon, EditIcon } from '@/src/components/icons'
import { Image } from 'antd'

interface IProps {
  onEdit: () => void
  hourlyRate: number
  location: string
  flagURL: string
}

export const InfoSectionTwo: React.FC<IProps> = ({ onEdit, hourlyRate, location, flagURL }) => {
  return (
    <div className="absolute p-5 bottom-0 top-0 right-0 flex gap-3 flex-col justify-between items-end mt-0">
      <ApButton onClick={onEdit}>
        Edit Profile
        <EditIcon />
      </ApButton>

      <div className="text-right text-base">
        {/* <div className="flex justify-end gap-2 items-center mb-2">
          <Image src={flagURL} alt="flag" width={30} />
          <p className="text-skin-inverted">{location}</p>
        </div> */}

        <p className="flex">
          <ApDollarIcon className="w-6 h-6 text-green-500" />
          <span className="ml-2 text-skin-inverted">${hourlyRate} USD / Hour</span>
        </p>
      </div>
    </div>
  )
}
