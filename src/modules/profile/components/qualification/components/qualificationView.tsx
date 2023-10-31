import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Popconfirm } from 'antd'
import { ApButton, ApPopConfirm } from '@/src/components'
import { DELETE_QUALIFICATION, FIND_ONE_PROFILE } from '../../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'

interface Iprops {
  qualification: any
  setModal: any
  length: any
}

export const QualificationView: React.FC<Iprops> = ({ qualification, setModal, length }) => {
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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button
          onClick={() => {
            setModal({ open: true, data: qualification })
          }}
        >
          Edit
        </button>
      ),
    },

    {
      key: '2',
      label: (
        <ApPopConfirm
          placement="topLeft"
          popButton="Delete"
          title="Are you sure you want to delete this qualification ?"
        >
          <div className="mt-3">
            <p className="mb-3">Delete this qualification.</p>
            <ApButton
              className="py-1 px-2 bg-skin-accent text-white rounded"
              onClick={deleteQualificationHandler}
            >
              Confirm
            </ApButton>
          </div>
        </ApPopConfirm>
      ),
    },
  ]

  return (
    <>
      {notificationContext}
      <div className={`flex justify-between items-start ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">Name of Certificate - {qualification.title}</h1>
          <p className="font-bold">
            Name of Conferring Organization - {qualification.conferringOrganization}
          </p>
          <p className="mb-3">Awarded on {qualification.startYear}</p>
          <p>{qualification.summary}</p>
        </div>
        <Dropdown
          trigger={['click']}
          menu={{ items }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <MoreOutlined className="text-2xl" />
        </Dropdown>
      </div>
    </>
  )
}
