import React from 'react'
import  { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps  } from 'antd';
import { ApButton, ApPopConfirm } from '@/src/components';
import { DELETE_PUBLICATION, FIND_ONE_PROFILE } from '../../../gql/query';
import useApNotification from '@/src/hooks/notification';
import { useMutation } from '@apollo/client';

interface IProps
{
    publication: any,
    setModal: any,
    length: any
}

export const PublicationView: React.FC<IProps> = ({ publication, setModal, length}) => {
    const [deletePublication, {loading}] = useMutation(DELETE_PUBLICATION, {
        refetchQueries: [
          { query: FIND_ONE_PROFILE }
        ]
    })
    const { notificationContext, successMsg, errorMsg } = useApNotification();

    const deletePublicationHandler = () =>
    {
        deletePublication({ variables : {
            publicationID: publication._id
          }})
        .then((val) => {successMsg('Success', 'Publication Has Been Deleted')})
        .catch(err =>  {errorMsg('Error', err.message)}) 
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button onClick={() => {setModal({ open: true, data: publication })}}>
                    Edit
                </button>
            ),
        },

        {
            key: '2',
            label: (
                <ApPopConfirm
                    placement='topLeft'
                    popButton='Delete'
                    title='Are you sure you want to delete this publication ?'
                >
                    <div className='mt-3'>
                        <p className='mb-3'>Delete this publication.</p>
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deletePublicationHandler}>Confirm</ApButton>
                    </div>
                </ApPopConfirm>
            ),
        },
    ];

  return (
    <>
    {notificationContext}
    <div className={`flex justify-between items-start ${length > 0 ? 'border-b pb-5' : ''}`}>
        <div>
            <h1 className='font-bold mb-2'>My Publication Title - { publication.title }</h1>
            <p className='font-bold mb-5'>Name of Publisher - { publication.publisher }</p>
            <p>{ publication.summary }</p>
        </div>
        <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <MoreOutlined className='text-2xl'/>
        </Dropdown>
    </div>
    </>
  )
}
