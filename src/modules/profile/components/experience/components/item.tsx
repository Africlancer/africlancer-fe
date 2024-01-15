import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { ApButton, ApLoader, ApPopConfirm, ApViewLoader } from '@/src/components'
import { DELETE_EXPERIENCE, FIND_ONE_PROFILE } from '../../../gql/query'
import { useMutation } from '@apollo/client'
import useApNotification from '@/src/hooks/notification'
import { IExperience } from '../../../model'
import { ProfileItemPopover } from '../../edit'
import { useProfileContext } from '../../../context'

interface IProps {
  experience: IExperience
  onEdit: (experience?: IExperience) => void
  length: number
}

const ExperienceItem: React.FC<IProps> = ({ experience, onEdit, length }) => {
  const {deleteExperience, deleteExperienceLoading} = useProfileContext()

  return (
    <div className='relative w-full h-full'>
      <div className={`flex justify-between items-start pt-5 px-5 ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">Title - {experience.title}</h1>
          <p className="font-bold">Company - {experience.company}</p>
          <p className="mb-3">
            {experience.startMonth} {experience.startYear} -{' '}
            {experience.working ? 'till date' : `${experience.endMonth} ${experience.endYear}`}
          </p>
          <p>{experience.summary}</p>
        </div>

        <ProfileItemPopover
          onDelete={() => deleteExperience(experience._id as any)}
          onEdit={() => onEdit(experience)}
        />

      </div>

      {deleteExperienceLoading && (
        <ApViewLoader/>
      )}
    </div>
  )
}

export default ExperienceItem