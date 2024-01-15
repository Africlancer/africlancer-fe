import React from 'react'
import { Dropdown, MenuProps } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { ApButton, ApPopConfirm } from '@/src/components'
import { DELETE_EDUCATION, FIND_ONE_PROFILE } from '../../../gql/query'
import { useMutation } from '@apollo/client'
import useApNotification from '@/src/hooks/notification'
import { IEducation } from '../../../model'
import { ProfileItemPopover } from '../../edit'

interface IProps {
  education: IEducation
  onEdit: (education?: IEducation) => void
  length: number
}

export const EducationItem: React.FC<IProps> = ({ education, onEdit, length }) => {
  const [deleteEducation, { loading }] = useMutation(DELETE_EDUCATION, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification()

  const deleteEducationHandler = () => {
    deleteEducation({
      variables: {
        educationID: education._id,
      },
    })
      .then((val) => {
        successMsg('Success', 'Education Info Has Been Deleted')
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
          <h1 className="font-bold mb-2">Country - {education.country}</h1>
          <p className="font-bold">Institution - {education.insitution}</p>
          <p className="">Degree - {education.degree}</p>
          <p className="">
            {education.startYear} - {education.endYear}
          </p>
        </div>

        <ProfileItemPopover
          onDelete={() => {}}
          onEdit={() => onEdit(education)}
        />
      </div>
    </>
  )
}
