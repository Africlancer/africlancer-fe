import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { ApButton, ApPopConfirm } from '@/src/components'
import { DELETE_PUBLICATION, FIND_ONE_PROFILE } from '../../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { IPublication } from '../../../model'
import { ProfileItemPopover } from '../../edit'

interface IProps {
  publication: IPublication
  onEdit: (publication?: IPublication) => void
  length: number
}

export const PublicationItem: React.FC<IProps> = ({ publication, onEdit, length }) => {
  const [deletePublication, { loading }] = useMutation(DELETE_PUBLICATION, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification()

  const deletePublicationHandler = () => {
    deletePublication({
      variables: {
        publicationID: publication._id,
      },
    })
      .then((val) => {
        successMsg('Success', 'Publication Has Been Deleted')
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
          <h1 className="font-bold mb-2">{publication.title}</h1>
          <p className="font-bold mb-5">{publication.publisher}</p>
          <p>{publication.summary}</p>
        </div>

        <ProfileItemPopover
          onDelete={() => {}}
          onEdit={() => onEdit(publication)}
        />
      </div>
    </>
  )
}
