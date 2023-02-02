import { CameraIcon } from '@/src/components/icons/customIcons';
import { ApModal } from '@/src/components/modal';
import React, { useState} from 'react'
import { EditBannerPhoto } from './edit';

export const BannerPhotoView = () =>
{
  const [modal, setModal] = useState<{open: boolean}>()

    return(
      <div className="cover-bg w-full relative md:bg-center md:bg-cover bg-center bg-cover h-96">
      <button className="bg-green-500 absolute ml-5 top-5 p-2 rounded flex items-center"
        onClick={() => setModal({open: true})}
      >
        <CameraIcon style={{color: 'white', fontSize: '25px'}}/>
      </button>

      
      <ApModal
        open={modal?.open}
        onDismiss={() => setModal({
          open: false
        })}
      >
          <EditBannerPhoto/>
      </ApModal>
    </div>    
    )
}