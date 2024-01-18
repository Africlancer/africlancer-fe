import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Popconfirm } from 'antd'
import { ApButton, ApPopConfirm, ApViewLoader } from '@/src/components'
import { DELETE_QUALIFICATION, FIND_ONE_PROFILE } from '../../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { IQualification } from '../../../model'
import { ProfileItemPopover } from '../../edit'
import { useProfileContext } from '../../../context'

interface Iprops {
  qualification: IQualification
  onEdit: (qualification?: IQualification) => void
  length: number
  setQualificationToBeDeleted: React.Dispatch<React.SetStateAction<string>>
  qualificationToBeDeleted: string
}

export const QualificationItem: React.FC<Iprops> = ({ 
  qualification, 
  onEdit, 
  length,
  qualificationToBeDeleted,
  setQualificationToBeDeleted 
}) => {
  const {deleteQualification, deleteQualificationLoading} = useProfileContext()

  return (
    <div className='relative w-ful h-full'>
      <div className={`flex justify-between items-start pt-5 px-5 ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">{qualification.title}</h1>
          <p className="font-bold">
            {qualification.conferringOrganization}
          </p>
          <p className="mb-3">Awarded on {qualification.startYear}</p>
          <p>{qualification.summary}</p>
        </div>

        <ProfileItemPopover
          onDelete={() => {
            setQualificationToBeDeleted(qualification._id as any)
            deleteQualification(qualification._id as any)
          }}
          onEdit={() => onEdit(qualification)}
        />
      </div>

      {qualificationToBeDeleted == qualification._id && deleteQualificationLoading && (
        <ApViewLoader/>
      )}
    </div>
  )
}
