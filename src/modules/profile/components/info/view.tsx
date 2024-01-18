import { ApModal } from '@/src/components/modal'
import React, { useState } from 'react'
import { IProfile } from '../../model'
import { EditProfileInfo } from './edit'
import { Image, Skeleton } from 'antd'
import { InfoSectionOne, InfoSectionTwo } from './components'
import { useSession } from 'next-auth/react'
import { useProfileContext } from '../../context'

interface IProps {
  onEdit: () => void
}

export const ProfileInfo: React.FC<IProps> = ({ onEdit }) => {
  const sess: any = useSession()
  const { profile } = useProfileContext()

  return (
    <>
      <div className="col-span-2 p-5 bg-skin-base shadow-xl w-full rounded-xl relative">
        <div className="flex w-full">
          {profile?.avatar ? (
            <Image alt="" width="320px" height="320px" className='rounded-md' src={profile.avatar} />
          ) : (
            <Skeleton.Image style={{ height: '320px', width: '320px' }} active />
          )}

          {profile?.professionalHeadline ? (
            <InfoSectionOne
              summary={profile.summary as any}
              professionalHeadline={profile.professionalHeadline}
              recommendations={profile.recommendations as any}
              email={sess?.data?.user?.email}
              name={sess?.data?.user?.name}
            />
          ) : (
            <div className="mt-1 ml-5 w-full">
              <Skeleton active paragraph={{ rows: 9 }} />
            </div>
          )}
        </div>
        {profile ? (
          <InfoSectionTwo
            location={profile?.location as any}
            flagURL={profile?.flagURL as any}
            hourlyRate={profile?.hourlyRate as any}
            onEdit={onEdit}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
