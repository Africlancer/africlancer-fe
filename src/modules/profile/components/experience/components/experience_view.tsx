import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { ApButton, ApPopConfirm } from '@/src/components'
import { DELETE_EXPERIENCE, FIND_ONE_PROFILE } from '../../../gql/query'
import { useMutation } from '@apollo/client'
import useApNotification from '@/src/hooks/notification'

type Experience = {
  title: string
  company: string
  startMonth: string
  startYear: number
  endMonth: string
  endYear: number
  working: boolean
  summary: string
  _id: string
}

interface IProps {
  experience: Experience
  setModal: any
  length: any
}

const ExperienceItem: React.FC<IProps> = ({ experience, setModal, length }) => {
  const [deleteExperience, { loading }] = useMutation(DELETE_EXPERIENCE, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification()

  const deleteExperienceHandler = () => {
    deleteExperience({
      variables: {
        experienceID: experience._id,
      },
    })
      .then((val) => {
        successMsg('Success', 'Experience Has Been Deleted')
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
            setModal({ open: true, data: experience })
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
          title="Are you sure you want to delete this experience ?"
        >
          <div className="mt-3">
            <p className="mb-3">Delete this experience.</p>
            <ApButton
              className="py-1 px-2 bg-skin-accent text-white rounded"
              onClick={deleteExperienceHandler}
            >
              Confirm
            </ApButton>
          </div>
        </ApPopConfirm>
      ),
    },
  ]

  console.log(experience)
  return (
    <>
      {notificationContext}
      <div className={`flex justify-between items-start ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
          <h1 className="font-bold mb-2">Title - {experience.title}</h1>
          <p className="font-bold">Company - {experience.company}</p>
          <p className="mb-3">
            {experience.startMonth} {experience.startYear} -{' '}
            {experience.working ? 'till date' : `${experience.endMonth} ${experience.endYear}`}
          </p>
          <p>{experience.summary}</p>
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

export default ExperienceItem
