import { ApButton, ApFileInput, ApSaveIcon } from '@/src/components'
import useApImageDataURI from '@/src/hooks/imageDataURI'
import useApNotification from '@/src/hooks/notification'
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { Image } from 'antd'
import React, { useRef, useState } from 'react'
import { FIND_ONE_PROFILE, UPDATE_PROFILE } from '../../gql/query'
import { useProfileContext } from '../../context'

interface IProps {
  onDismiss: () => void
}

export const EditBannerPhoto: React.FC<IProps> = ({ onDismiss }) => {
  const [image, setImage] = useState<any>(null)
  const { updateProfile, actionLoading } = useProfileContext()

  const handleSelectImage = async (res: any) => {
    setImage({
      filename: res[0].file.name,
      filetype: res[0].file.type,
      base64Str: res[0].uri,
    });
  };

  const updateBanner = () => {
    if(image){
      updateProfile({banner: image.base64Str})
      .finally(() => onDismiss())
    }
  }

  return (
    <>
      <div className="p">
        <div className="relative overflow-hidden flex flex-col">
          <h1 className="font-black text-xl">Upload Banner Photo</h1>
          <p className="mb-3">Click To Select Photo</p>


          <ApFileInput
            accept="image/*"
            onSelected={handleSelectImage}
            onRemove={() => setImage(null)}
            // defaultFileList={}
            className='!w-[500px]'
          />
        </div>

        <div className="gap-4 flex justify-end items-center mt-5">
          <ApButton
            loading={actionLoading}
            onClick={updateBanner}
          >
            Update Photo
            <ApSaveIcon className="w-4 h-4" />
          </ApButton>

          <ApButton
            onClick={onDismiss}
            outline
            disabled={actionLoading}
          >
            Cancel
            <CloseOutlined className="text-lg" />
          </ApButton>
        </div>
      </div>
    </>
  )
}