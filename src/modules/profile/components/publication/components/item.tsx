import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { ApButton, ApPopConfirm, ApViewLoader } from '@/src/components'
import { DELETE_PUBLICATION, FIND_ONE_PROFILE } from '../../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { IPublication } from '../../../model'
import { ProfileItemPopover } from '../../edit'
import { useProfileContext } from '../../../context'

interface IProps {
  publication: IPublication
  onEdit: (publication?: IPublication) => void
  length: number
  setPublicationToBeDeleted: React.Dispatch<React.SetStateAction<string>>
  publicationToBeDeleted: string
}

export const PublicationItem: React.FC<IProps> = ({ 
  publication, 
  onEdit, 
  length,
  publicationToBeDeleted,
  setPublicationToBeDeleted 
}) => {
  const {deletePublication, deletePublicationLoading} = useProfileContext()

  return (
    <div className='relative w-ful h-full'>
      <div className={`flex justify-between items-start pt-5 px-5 ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">{publication.title}</h1>
          <p className="font-bold mb-5">{publication.publisher}</p>
          <p>{publication.summary}</p>
        </div>

        <ProfileItemPopover
          onDelete={() => {
            setPublicationToBeDeleted(publication._id as any)
            deletePublication(publication._id as any)
          }}
          onEdit={() => onEdit(publication)}
        />
      </div>

      {publicationToBeDeleted == publication._id && deletePublicationLoading && (
        <ApViewLoader/>
      )}
    </div>
  )
}
