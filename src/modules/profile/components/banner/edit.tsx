import { ApButton, ApSaveIcon } from '@/src/components'
import useApImageDataURI from '@/src/hooks/imageDataURI'
import useApNotification from '@/src/hooks/notification'
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { Image } from 'antd'
import React, { useRef, useState } from 'react'
import { FIND_ONE_PROFILE, UPDATE_PROFILE } from '../../gql/query'


interface IProps
{
  setModal: any
}

export const EditBannerPhoto: React.FC<IProps> = ({ setModal }) =>
{
  const bannerPic = useRef<HTMLInputElement>()
  const inputForm = useRef<HTMLFormElement>()
  const [banner, setBanner] = useState(null)
  const [isBannerSelected, setIsBannerSelected] = useState(false)
  const [isBannerLoading, setIsBannerLoading] = useState(false)
  const { notificationContext, successMsg, errorMsg } = useApNotification();
  const [updateProfile, {loading}] = useMutation(UPDATE_PROFILE,{
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })


  const clearPicHandler = () =>
  {
    setIsBannerLoading(false)
    setIsBannerSelected(false)
    setBanner(null)
  }

  const FileInputHandler = async () =>
  {
    const result: any = await useApImageDataURI(bannerPic.current.files[0], 600000);
    if(result?.data)
    {
      setBanner({ banner: result?.data})
      setIsBannerLoading(true)
      setTimeout(() => { setIsBannerLoading(false); setIsBannerSelected(true) }, 3000)
    }
    else
    {
      errorMsg("Error", result?.error)
      inputForm.current.reset()
    }
  }

  const updateBanner = () =>
  {
    if(banner === null)
    {
      errorMsg("Error", "Please Select Banner Picture.")
    }
    else
    {
      updateProfile({ variables : {
        profile: { banner: banner.banner }
      }})
      .then((val) => 
      {
        successMsg('Success', "Picture Uploaded Sucessfully")
        setModal({ open: false }); clearPicHandler()
      })
      .catch((err) => errorMsg("Error", err.message))  
    }
  }

  return(
    <>
    {notificationContext}
    <div className='p'>
    <div className='relative overflow-hidden flex flex-col'>
    <h1 className='font-bold text-xl'>Upload Banner Photo</h1>
    <p className='mb-3'>Click To Select Photo</p>

    {
          isBannerLoading ? 
          <div className='h-[380px] w-[600px] flex justify-center items-center'>
            <LoadingOutlined style={{fontSize: 50, color: '#22c55e'}} spin/>
          </div>          
          : 
          <div>
            {
              isBannerSelected ? 
              <div>
                <Image width='600px' height='380px' src={banner.banner} alt='banner'/>
              </div>
              : 
                <button className='h-[380px] w-[600px] c'>
                <div className='border-dashed border-2 border-gray-200 file-input-button relative h-full w-full flex items-center justify-center' id='profile-pic-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 w-20 h-20 text-center">
                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                    <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                  </svg>
                  <form ref={inputForm}>
                    <input type="file" className='w-full h-full absolute left-0 top-0 opacity-0' onInput={FileInputHandler} ref={bannerPic}/>
                  </form>
                </div>
              </button>
            }
          </div>
      }
    </div>

      <div className='flex justify-between w-full mt-4'>
        <div className='flex w-full'>
          {
            isBannerSelected ? 
            <ApButton onClick={clearPicHandler}>
              Clear Photo
              <CloseOutlined className='text-md'/>
            </ApButton>
          : <></>
          }
        </div>

      <div className='flex gap-3 justify-end w-full'>
        <ApButton onClick={updateBanner} loading={loading} loadingText='Saving Changes'>
          Save Changes
          <ApSaveIcon className='w-4 h-4'/>
        </ApButton>

        <ApButton onClick={() => { setModal({ open: false }); clearPicHandler() }} outline={true}>
          Cancel 
          <CloseOutlined className='text-lg'/>
        </ApButton>
      </div>
      </div>
  </div>
  </>
  )
}