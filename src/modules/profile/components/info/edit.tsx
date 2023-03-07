import { useMutation } from '@apollo/client'
import useApImageDataURI from '@/src/hooks/imageDataURI';
import { CloseOutlined, LoadingOutlined, DoubleRightOutlined  } from '@ant-design/icons';
import React, { useRef, useState } from 'react'
import { IProfile } from '../../model'
import useApNotification from "@/src/hooks/notification";
import { FIND_ONE_PROFILE, UPDATE_PROFILE } from '../../gql/query';
import { Image } from 'antd';
import { ApButton, ApSaveIcon } from '@/src/components';
import Link from 'next/link';


interface IProps{
  profile: IProfile;
  setModal: any
}

export const EditProfileInfo: React.FC<IProps> = ({profile, setModal}) => {

  const genForm = useRef<HTMLFormElement>()
  const profilePic = useRef<HTMLInputElement>()
  const profileInputForm = useRef<HTMLFormElement>()
  const [avatar, setAvatar] = useState(null)
  const [professionalHeadline, setProfessionalHeadline]  = useState(null)
  const [isAvatarSelected, setIsAvatarSelected] = useState(false)
  const [isAvatarLoading, setIsAvatarLoading] = useState(false)
  const [hourlyRate, setHourlyRate] = useState(null)
  const [summary, setSummary] = useState(null)
  const { notificationContext, successMsg, errorMsg } = useApNotification();
  const [updateProfile, {loading}] = useMutation(UPDATE_PROFILE,{
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })

  const FileInputHandler = async () =>
  {
    const result: any = await useApImageDataURI(profilePic.current.files[0], 600000);
    if(result?.data)
    {
      setAvatar({ avatar: result?.data})
      setIsAvatarLoading(true)
      setTimeout(() => { setIsAvatarLoading(false) }, 3000)
      setIsAvatarSelected(true)
    }
    else
    {
      errorMsg("Error", result?.error)
      profileInputForm.current.reset()
    }
  }

  const clearPicHandler = () =>
  {
    setIsAvatarLoading(false)
    setIsAvatarSelected(false)
    setAvatar(null)
    //profileInputForm.current.reset()
  }

  const uploadDetails = () =>
  {
    const fields = [ avatar, professionalHeadline, hourlyRate, summary ]
    const filterFields = fields.filter(field => field !== null)
    console.log(filterFields);
    
    if (filterFields.length === 0)
    {
      errorMsg("Error", "Enter at least one field to save changes.")
    }
    else
    {
      let variables
      filterFields.forEach(item => {
        variables = { ...variables, ...item }
      })
      updateProfile({ variables : {
        profile: variables
      }})
      .then((val) => 
      {
        successMsg('Success', 'Changes Saved')
        setTimeout(() => {
          closeModal()
        }, 1000);
      })
      .catch((err) => errorMsg('Error', err.message))
    }
  }

  const closeModal = () => 
  {
    setModal({ open: false })
    genForm.current.reset()
    setProfessionalHeadline(null)
    setHourlyRate(null)
    setSummary(null)
    setAvatar(null)
    setIsAvatarSelected(false)
    setIsAvatarLoading(false)
  }


  return (
    <>
    {notificationContext}
    <div>
    <h1 className='font-bold text-xl'>Edit Profile Settings</h1>
    <p className='mb-3'>Enter new value and proceed</p>
      <div className="flex items-start">
        {
          isAvatarLoading ? 
          <div className='h-80 w-96 flex justify-center items-center'>
            <LoadingOutlined style={{fontSize: 50, color: '#22c55e'}} spin/>
          </div>          
          : 
          <div>
            {
              isAvatarSelected ? 
              <div>
                <Image alt='' width='384px' height='320px' src={avatar.avatar}/>
                <button onClick={clearPicHandler} className='mt-2 py-1 px-2 flex bg-skin-accent text-white rounded items-center justify-center gap-1'>
                  Clear Photo
                  <CloseOutlined className='text-md'/>
                </button>
              </div>
              : 
                <button className='h-80 w-96 flex justify-center items-center border-dashed border-2 border-gray-200'>
                <div className='loader hidden' id='profile-pic-loader'>
                  <LoadingOutlined style={{fontSize: 50, color: '#22c55e'}} spin/>
                </div>
          
                <div className='relative img-preview opacity-0 ease-out duration-500 w-full h-full bg-center bg-contain hidden' id='profile-pic-preview'>
                  <div className='bg-overlay ease-linear duration-300 opacity-0 hover:opacity-100 absolute top-0 right-0 left-0 bottom-0'>
                    <div className='absolute right-0 m-3' onClick={clearPicHandler}>
                      <CloseOutlined style={{fontSize: 20, color: '#22c55e'}}/>
                    </div>
                  </div>
                </div>
          
                <div className='file-input-button relative h-full w-full flex items-center justify-center' id='profile-pic-button'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 w-20 h-20 text-center">
                  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                </svg>
                <form ref={profileInputForm}>
                  <input type="file" className='w-full h-full absolute left-0 top-0 opacity-0' onInput={FileInputHandler} ref={profilePic}/>
                </form>
                </div>
              </button>
            }
          </div>
        }

        <form ref={genForm}>
        <div className='ml-5 flex flex-col justify-between'>
          <div className='flex mb-3'>
            <div className='mr-3'>
              <p className='mb-1'>Professional Headline</p>
              <input type="text" onChange={(e) => setProfessionalHeadline({professionalHeadline: e.target.value})}  className='w-64 border rounded p-3 h-10' />
            </div>
            <div>
              <p className='mb-1'>Hourly Rate - USD Per Hour</p>
              <input type="number" onChange={(e) => setHourlyRate({hourlyRate: parseInt(e.target.value)})} className='w-64 border p-3 h-10' />
            </div>
          </div>

          <div className='mt-1'>
            <p className='mb-2'>Summary</p>
            <textarea onChange={(e) => setSummary({summary: e.target.value})} className='border w-full rounded p-3 h-52 resize-none'></textarea>
          </div>
        </div>
        </form>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <Link href='' className='text-skin-inverted flex justify-center items-center gap-1'>
          View More Settings
          <DoubleRightOutlined className="text-xs" />
        </Link>
      <div>
      
      <div className='flex gap-3'>
        <ApButton onClick={uploadDetails} loading={loading} loadingText='Saving Changes...'>
          Save Changes
          <ApSaveIcon className='w-4 h-4'/>
        </ApButton>

        <ApButton onClick={() => closeModal()} outline={true}>
          Cancel 
          <CloseOutlined className='text-lg'/>
        </ApButton>
      </div>

      </div>
      </div>
    </div>
    </>
  )
}
