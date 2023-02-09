import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_PUBLICATION } from '../gql/query'
import { PlusOutlined, CloseOutlined, CloseCircleFilled } from '@ant-design/icons'
import { notification } from 'antd';

export const EditPublication = ({setModal}) => {

  const [addPublication] = useMutation(ADD_PUBLICATION)
  const [publication, setPublication] = useState({title: null, publisher: null, summary: null})
  const [api, contextHolder] = notification.useNotification();

  const addPublicationHandler = () =>
  {
    if(publication.publisher !== null && publication.title !== null && publication.summary !== null)
    {
      addPublication({ variables : {
        publication: { title: publication.title, publisher: publication.publisher, summary: publication.summary }
      }})
    }
    else
    {
        api.info({
          icon: (<CloseCircleFilled className='text-red-500' />),
          message: `Error`,
          description:(<div className='flex gap-3'>
              <p>Please fill all fields before proceeding.</p>
          </div>),
          placement: 'topLeft',
          duration: 2
      }); 
    }
  }

  return (
      <>
        {contextHolder}
        <div>
        <h1 className='font-bold text-xl'>Add Publication</h1>
        <p className='mb-3'>Fill To Add New Publication</p>

        <div className="flex w-full gap-5">
        <div className='w-full'>
          <p className='mb-2'>Publication Title</p>
          <input type="text" onChange={({target}) =>  setPublication({ ...publication, title: target.value})} placeholder='Enter Publication Title' className='w-full border rounded p-3 h-10' />
        </div>

        <div className='w-full'>
          <p className='mb-2'>Publisher</p>
          <input type="text" placeholder='Enter Publisher'  onChange={({target}) =>  setPublication({ ...publication, publisher: target.value})} className='w-full border rounded p-3 h-10' />
        </div>
        </div>

        <div>
          <p className='mb-2 mt-5'>Summary</p>
          <textarea onChange={({target}) =>  setPublication({ ...publication, summary: target.value})}  placeholder='Enter a Description of The Publication' className='border w-full rounded p-3 h-40 resize-none'></textarea>
        </div>

        <div className='gap-4 flex justify-end items-center mt-4'>
          <ApButton
            onClick={addPublicationHandler}
            className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
          >
            Add Publication
            <PlusOutlined className='text-lg'/>
          </ApButton>

          <ApButton
            onClick={() => setModal({ open: false })}
            className='mr-3 py-2 border border-green-500 flex text-skin-accent rounded items-center p-3 justify-center gap-2'
          >
            Cancel
            <CloseOutlined className='text-lg'/>
          </ApButton>
        </div>
      </div>
      </>
  )
}
