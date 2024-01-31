import { ApButton } from '@/src/components/button'
import { ApGradHatIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal'
import React, { useState } from 'react'
import { EditEducation } from './edit'
import { EducationItem } from './components'
import { Skeleton } from 'antd'
import { useProfileContext } from '../../context'
import { IEducation } from '../../model'

interface IProps {
  onEdit: (education?: IEducation) => void
  freelancerId?: string
}

export const Education: React.FC<IProps> = ({ onEdit,freelancerId }) => {
  const { profile } = useProfileContext()
  const [educationToBeDeleted, setEducationToBeDeleted] = useState<string>('')

  return (
    <>
      <div className="bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6">
        <div className="border-skin-border border-b px-6 py-2 flex justify-between">
          <div className="flex items-center">
            <h1 className="font-bold text-xl mr-3 text-skin-inverted">Education</h1>
            <ApGradHatIcon className="w-6 h-6 text-skin-muted" />
          </div>

          {!freelancerId && (
            <ApButton
              onClick={() => onEdit()}
              className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
            >
              Add Education
              <ArrowRightIcon />
            </ApButton>
          )}
        </div>

        {profile?.education ? (
          <div className="flex flex-col">
            {profile?.education?.length > 0 ? (
              profile?.education?.map((education) => (
                <div key={education._id}>
                  <EducationItem
                    length={profile?.education?.length as any}
                    education={education}
                    onEdit={onEdit}
                    educationToBeDeleted={educationToBeDeleted}
                    setEducationToBeDeleted={setEducationToBeDeleted}
                  />
                </div>
              ))
            ) : (
              <p className="text-skin-inverted p-5">No education info has been added.</p>
            )}
          </div>
        ) : (
          <div className="px-5 py-5">
            <Skeleton active />
          </div>
        )}
      </div>

      {/* <ApModal
        open={modal?.open}
        onDismiss={() => {
          setModal({ open: false })
        }}
        width={970}
      >
        <EditEducation setModal={setModal} />
      </ApModal>

      <ApModal
        open={updateModal?.open}
        onDismiss={() => {
          setUpdateModal({ open: false })
        }}
        width={970}
      >
        <UpdateEducation setModal={setUpdateModal} modal={updateModal} />
      </ApModal> */}
    </>
  )
}
