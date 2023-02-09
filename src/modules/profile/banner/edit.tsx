import { ApButton, CustomOutlineButton } from '@/src/components/button'
import { clearPic, picInputHandler } from '@/src/custom'
import { CloseOutlined, LoadingOutlined, SyncOutlined, UploadOutlined } from '@ant-design/icons'
import { message, Image } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { ProfileContext } from '../context'

export const EditBannerPhoto = () =>
{
  const { updateBannerPhoto } = useContext(ProfileContext)
  const bannerPic = useRef<HTMLInputElement>()
  const inputForm = useRef<HTMLFormElement>()
  const [bannerPicture, setBannerPicture] = useState(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [img, setImg] = useState<string>()
  const [messageApi, contextHolder] = message.useMessage();

  // const fileInputHandler = () =>
  // {
  //   try 
  //   {
  //     let file = picInputHandler(
  //       {inputRef: bannerPic, inputButton: 'file-input-button', 
  //       loader: 'loader', imgPreview: 'img-preview', inputForm: inputForm})
  //     setBannerPicture(file)  
  //   } 
  //   catch (error) 
  //   {
  //     messageApi.open({
  //       type: 'error',
  //       content: error.message,
  //       style: {padding: '50px'}
  //     });
  //   }
  // }
  const fileInputHandler = () =>
  {
    let input = bannerPic.current
    let file = input.files[0]
    let reader = new FileReader

    if(file !== undefined)
    {
      if(file.type == 'image/jpeg' || file.type == 'image/png')
      {
        if(file.size < 600000)
        {
          setImgLoaded(true)
          reader.onload = (e) =>
          {
            setImg(`url(${e.target.result})`)
          }
        }
        else
        {
          // args.inputForm.current.reset()
          // throw new Error('Maximum Image File Size is 600KB') 
        }
      }
      else
      {
        // args.inputForm.current.reset()
        // throw new Error('Please Select Image Files of JPG or PNG Only') 
      }
    }
  }

  const clearPicHandler = () =>
  {
    clearPic('file-input-button', 'img-preview', inputForm)
  }

  const uploadBannerPhoto = () =>
  {
    if(bannerPicture !== null)
    {
      updateBannerPhoto(bannerPicture)
    }
    else
    {
      console.log('its null')
    }
  }
 

  return(
    <>
    {contextHolder}
    <div className='p'>
    <div className='relative overflow-hidden flex flex-col'>
    <h1 className='font-bold text-xl'>Upload Banner Photo</h1>
    <p className='mb-3'>Click To Select Photo</p>

    {
      imgLoaded ?
      <div>
        <Image 
          width='100%'
          src={img}
        />
      </div>

      // <div className='relative img-preview opacity-0 ease-out duration-500 w-full h-full bg-center bg-cover hidden' id='img-preview'>
      //   <div className='bg-overlay ease-linear duration-300 opacity-0 hover:opacity-100 absolute top-0 right-0 left-0 bottom-0'>
      //     <div className='absolute right-0 m-3' onClick={clearPicHandler}>
      //       <CloseOutlined style={{fontSize: 20, color: '#22c55e'}}/>
      //     </div>
      //   </div>
      // </div>
      :
      <form className='h-72 w-full flex justify-center items-center border-dashed border-2 border-gray-200' ref={inputForm}>      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 w-20 h-20 text-center">
          <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
          <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
        </svg>
        <input type="file" className='w-full h-full absolute left-0 top-0 opacity-0' onInput={fileInputHandler} ref={bannerPic}/>
      </form>
    }


    {/* <button className='h-72 w-full flex justify-center items-center border-dashed border-2 border-gray-200'>
      <div className='loader hidden' id='loader'>
        <LoadingOutlined style={{fontSize: 50, color: '#22c55e'}} spin/>
      </div>
      <div className='file-input-button' id='file-input-button'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 w-20 h-20 text-center">
        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
      </svg>

      </div>
    </button> */}
    </div>

      <div className='flex justify-end mt-4 items-center gap-3'>
        <ApButton onClick={uploadBannerPhoto}>
            Upload Photo
          <UploadOutlined style={{fontSize: 20, marginLeft: 10}}/>
        </ApButton>

        <CustomOutlineButton size='large'>
            Cancel
          <CloseOutlined style={{fontSize: 18, marginLeft: 10}}/>
        </CustomOutlineButton>
      </div>
  </div>
  </>
  )
}