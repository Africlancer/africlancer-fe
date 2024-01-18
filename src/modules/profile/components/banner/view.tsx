import { CameraIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal'
import React, { useState } from 'react'
import { EditBannerPhoto } from './edit'
import { Image, Skeleton } from 'antd'
import { useProfileContext } from '../../context'

interface IProps {
  onEdit: () => void
}

export const Banner: React.FC<IProps> = ({ onEdit }) => {
  const { profile } = useProfileContext()

  return (
    <div className="w-full relative h-96">
      {profile?.banner ? (
        <Image alt="" src={profile?.banner} width="100%" height="100%" />
      ) : (
        <div className="w-full ant-s">
          <Skeleton.Image
            className="w-full"
            style={{ height: '384px', minWidth: '100%' }}
            active
          />
        </div>
      )}
      {/* <div className="cover-bg w-full relative md:bg-center md:bg-cover bg-center bg-cover h-96"> */}
      <button
        className="bg-green-500 absolute ml-5 top-5 p-2 rounded flex items-center"
        onClick={onEdit}
      >
        <CameraIcon style={{ color: 'white', fontSize: '25px' }} />
      </button>
    </div>
  )
}
