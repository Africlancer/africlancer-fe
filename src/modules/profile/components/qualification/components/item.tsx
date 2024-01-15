import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Popconfirm } from 'antd'
import { ApButton, ApPopConfirm } from '@/src/components'
import { DELETE_QUALIFICATION, FIND_ONE_PROFILE } from '../../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { IQualification } from '../../../model'
import { ProfileItemPopover } from '../../edit'

interface Iprops {
  qualification: IQualification
  onEdit: (qualification?: IQualification) => void
  length: number
}

export const QualificationItem: React.FC<Iprops> = ({ qualification, onEdit, length }) => {
  const [deleteQualification, { loading }] = useMutation(DELETE_QUALIFICATION, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification()

  const deleteQualificationHandler = () => {
    deleteQualification({
      variables: {
        qualificationID: qualification._id,
      },
    })
      .then((val) => {
        successMsg('Success', 'Qualification Has Been Deleted')
      })
      .catch((err) => {
        errorMsg('Error', err.message)
      })
  }

  return (
    <>
      {notificationContext}
      <div className={`flex justify-between items-start ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">{qualification.title}</h1>
          <p className="font-bold">
            {qualification.conferringOrganization}
          </p>
          <p className="mb-3">Awarded on {qualification.startYear}</p>
          <p>{qualification.summary}</p>
        </div>

        <ProfileItemPopover
          onDelete={() => {}}
          onEdit={() => onEdit(qualification)}
        />
      </div>
    </>
  )
}
