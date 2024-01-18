import React from 'react'
import { Dropdown, MenuProps } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { ApButton, ApPopConfirm, ApViewLoader } from '@/src/components'
import { DELETE_EDUCATION, FIND_ONE_PROFILE } from '../../../gql/query'
import { useMutation } from '@apollo/client'
import useApNotification from '@/src/hooks/notification'
import { IEducation } from '../../../model'
import { ProfileItemPopover } from '../../edit'
import { useProfileContext } from '../../../context'

interface IProps {
  education: IEducation
  onEdit: (education?: IEducation) => void
  length: number
  setEducationToBeDeleted: React.Dispatch<React.SetStateAction<string>>
  educationToBeDeleted: string
}

export const EducationItem: React.FC<IProps> = ({ 
  education, 
  onEdit, 
  length,
  educationToBeDeleted,
  setEducationToBeDeleted 
}) => {
  const {deleteEducation, deleteEducationLoading} = useProfileContext()

  return (
    <div className='relative w-ful h-full'>
      <div className={`flex justify-between items-start pt-5 px-5 ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">Country - {education.country}</h1>
          <p className="font-bold">Institution - {education.insitution}</p>
          <p className="">Degree - {education.degree}</p>
          <p className="">
            {education.startYear} - {education.endYear}
          </p>
        </div>

        <ProfileItemPopover
          onDelete={() => {
            setEducationToBeDeleted(education._id as any)
            deleteEducation(education._id as any)
          }}
          onEdit={() => onEdit(education)}
        />
      </div>

      {educationToBeDeleted == education._id && deleteEducationLoading && (
        <ApViewLoader/>
      )}
    </div>
  )
}
