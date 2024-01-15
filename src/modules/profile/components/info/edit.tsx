import { CloseOutlined, DoubleRightOutlined } from '@ant-design/icons'
import React from 'react'
import useApNotification from '@/src/hooks/notification'
import { ApButton, ApSaveIcon, ApTextInput } from '@/src/components'
import Link from 'next/link'
import { Form, Formik, FormikProps } from 'formik'
import { useProfileContext } from '../../context'

interface IProps {
  onDismiss: () => void
}

export const EditProfileInfo: React.FC<IProps> = ({ onDismiss }) => {
  const { notificationContext, successMsg, errorMsg } = useApNotification()
  const { profile, updateProfile, actionLoading } = useProfileContext()

  const handleSubmit = (val: any) => {
    updateProfile(val)
    .then(() => onDismiss())
  }

  return (
    <>
      {notificationContext}
      <div>
        <h1 className="font-black text-xl">Edit Profile Settings</h1>
        <p className="mb-3">Enter new value and proceed</p>
        <div className="flex items-start">

          <Formik
            initialValues={{
              professionalHeadline: profile.professionalHeadline,
              hourlyRate: profile.hourlyRate,
              summary: profile.summary
            }}
            onSubmit={handleSubmit}
          >
            {(props: FormikProps<any>) => (
              <Form className='w-full h-full'>
                <div className='w-full h-full grid grid-cols-2'>
                  <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                      <ApTextInput label='Professional Headline' name='professionalHeadline'/>
                      <ApTextInput inputType='number' label='Hourly Rate - USD Per Hour' name='hourlyRate'/>
                    </div>

                    <ApTextInput label='Summary' textarea name="summary"/>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Link href="" className="text-skin-inverted flex justify-center items-center gap-1">
                    View More Settings
                    <DoubleRightOutlined className="text-xs" />
                  </Link>
                  <div>
                    <div className="flex gap-3">
                      <ApButton type='submit' loading={actionLoading}>
                        Save Changes
                        <ApSaveIcon className="w-4 h-4" />
                      </ApButton>

                      <ApButton onClick={onDismiss} outline={true}>
                        Cancel
                        <CloseOutlined className="text-lg" />
                      </ApButton>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}


// {isAvatarLoading ? (
//   <div className="h-80 w-96 flex justify-center items-center">
//     <LoadingOutlined style={{ fontSize: 50, color: '#22c55e' }} spin />
//   </div>
// ) : (
//   <div>
//     {isAvatarSelected ? (
//       <div>
//         {/* <Image alt='' width='384px' height='320px' src={avatar.avatar}/> */}
//         <button
//           onClick={clearPicHandler}
//           className="mt-2 py-1 px-2 flex bg-skin-accent text-white rounded items-center justify-center gap-1"
//         >
//           Clear Photo
//           <CloseOutlined className="text-md" />
//         </button>
//       </div>
//     ) : (
//       <button className="h-80 w-96 flex justify-center items-center border-dashed border-2 border-gray-200">
//         <div className="loader hidden" id="profile-pic-loader">
//           <LoadingOutlined style={{ fontSize: 50, color: '#22c55e' }} spin />
//         </div>

//         <div
//           className="relative img-preview opacity-0 ease-out duration-500 w-full h-full bg-center bg-contain hidden"
//           id="profile-pic-preview"
//         >
//           <div className="bg-overlay ease-linear duration-300 opacity-0 hover:opacity-100 absolute top-0 right-0 left-0 bottom-0">
//             <div className="absolute right-0 m-3" onClick={clearPicHandler}>
//               <CloseOutlined style={{ fontSize: 20, color: '#22c55e' }} />
//             </div>
//           </div>
//         </div>

//         <div
//           className="file-input-button relative h-full w-full flex items-center justify-center"
//           id="profile-pic-button"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="text-gray-200 w-20 h-20 text-center"
//           >
//             <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
//             <path
//               fillRule="evenodd"
//               d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
//               clipRule="evenodd"
//             />
//           </svg>
//           {/* ref={profileInputForm} */}
//           <form>
//             {/* ref={profilePic} */}
//             <input
//               type="file"
//               className="w-full h-full absolute left-0 top-0 opacity-0"
//               onInput={FileInputHandler}
//             />
//           </form>
//         </div>
//       </button>
//     )}
//   </div>
// )}