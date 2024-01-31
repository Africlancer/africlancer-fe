import { ApButton } from '@/src/components/button'
import { ApSuitCaseIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal'
import React, { useState } from 'react'
import { EditExperience } from './edit'
import ExperienceItem from './components/item'
import { Skeleton } from 'antd'
import { useProfileContext } from '../../context'
import { IExperience } from '../../model'


interface IProps {
  onEdit: (experience?: IExperience) => void
  freelancerId?: string
}

export const Experience: React.FC<IProps> = ({ onEdit, freelancerId }) => {
  const { profile } = useProfileContext()
  const [experienceToBeDeleted, setExperienceToBeDeleted] = useState<string>('')

  return (
    <>
      <div className="bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6">
        <div className="border-skin-border border-b px-6 py-2 flex justify-between">
          <div className="flex items-center">
            <h1 className="font-bold text-xl mr-3 text-skin-inverted">Experience</h1>
            <ApSuitCaseIcon className="w-6 h-6 text-skin-muted" />
          </div>

          {!freelancerId && (
            <ApButton onClick={() => onEdit()}>
              Add Experience
              <ArrowRightIcon />
            </ApButton>
          )}
        </div>

        {profile?.experience ? (
          <div className="flex flex-col">
            {profile?.experience?.length > 0 ? (
              profile?.experience?.map((experience) => (
                <div key={experience._id}>
                  <ExperienceItem
                    length={profile?.experience?.length as any}
                    onEdit={onEdit}
                    experience={experience}
                    setExperienceToBeDeleted={setExperienceToBeDeleted}
                    experienceToBeDeleted={experienceToBeDeleted}
                  />
                </div>
              ))
            ) : (
              <p className="text-skin-inverted p-5">No experience has been added.</p>
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
        <EditExperience setModal={setModal} />
      </ApModal>

      <ApModal
        open={updateModal?.open}
        onDismiss={() => {
          setUpdateModal({ open: false })
        }}
        width={970}
      >
        <UpdateExperience setModal={setUpdateModal} modal={updateModal} />
      </ApModal> */}
    </>
  )
}
