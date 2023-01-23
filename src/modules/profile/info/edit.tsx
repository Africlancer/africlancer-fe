import { picInputHandler } from '@/src/custom';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react'
import { IProfile } from '../model'

interface IProps{
  profile: IProfile;
}

export const EditProfileInfo: React.FC<IProps> = ({profile}) => {

  const profilePic = useRef()
  const [profilePicture, setProfilePicture] = useState(null)

  const fileInputHandler = () =>
  {
    let file = picInputHandler(profilePic, 'profile-pic-button', 'profile-pic-loader', 'profile-pic-preview')
    setProfilePicture(file)
  }

  return (
    <div>
    <h1 className='font-bold text-xl'>Edit Profile Settings</h1>
    <p className='mb-3'>Enter new value and proceed</p>
      <div className="flex">
      <button className='mr-5 h-80 w-80 flex justify-center items-center border-dashed border-2 border-gray-200'>
      <div className='loader hidden' id='profile-pic-loader'>
        <LoadingOutlined style={{fontSize: 50, color: '#22c55e'}} spin/>
      </div>

      <div className='relative img-preview opacity-0 ease-out duration-500 w-full h-full bg-center bg-cover hidden' id='profile-pic-preview'>
        <div className='bg-overlay ease-linear duration-300 opacity-0 hover:opacity-100 absolute top-0 right-0 left-0 bottom-0'>
          <div className='absolute right-0 m-3'>
            <CloseOutlined style={{fontSize: 20, color: '#22c55e'}}/>
          </div>
        </div>
      </div>

      <div className='file-input-button relative h-full w-full flex items-center justify-center' id='profile-pic-button'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 w-20 h-20 text-center">
        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
        <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"/>
      </svg>
      <input type="file" className='w-full h-full absolute left-0 top-0 opacity-0' onInput={fileInputHandler} ref={profilePic}/>
      </div>
    </button>

        <div className='flex flex-col justify-between'>
          <div className='flex mb-3'>
            <div className='mr-3'>
              <p>Professional Headline</p>
              <input type="text" className='w-72 border-2 h-8 mt-2' />
            </div>
            <div>
              <p>Professional Headline</p>
              <input type="text" className='w-72 border-2 h-8 mt-2' />
            </div>
          </div>

          <div className='mt-2'>
            <p className='mb-2'>Summary</p>
            <textarea className='border-2 w-full h-52 resize-none'></textarea>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
      <p className='text-green-500'>View More Settings</p>
      <div>
      <button className="text-white px-5 py-2 rounded bg-green-500 mr-3">
        Upload Photo
      </button>
      <button className="text-green-500 px-4 py-2 rounded border-green-500 border-2">
        Cancel
      </button>
      </div>
      </div>
    </div>
  )
}
