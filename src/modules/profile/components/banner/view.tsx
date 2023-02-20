import { CameraIcon } from '@/src/components/icons';
import { ApModal } from '@/src/components/modal';
import { Image } from 'antd';
import React, { useState} from 'react'
import { EditBannerPhoto } from './edit';

export const Banner = ({banner}) =>
{
  const [modal, setModal] = useState<{open: boolean}>()

    return(
      <div className="w-full relative h-96">
        {
          banner ? 
          <Image src={banner} width='100%' height='100%' />
          :
          <Image src='https://img.freepik.com/free-vector/abstract-white-shapes-background_79603-1362.jpg?w=740&t=st=1676368367~exp=1676368967~hmac=ae35d3ad03e9a3f6f8de7f5cacbe80ae44372338b5bc9c80a9050aa2270be42c' width='100%' height='100%'/>
        }
        {/* <div className="cover-bg w-full relative md:bg-center md:bg-cover bg-center bg-cover h-96"> */}
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