import React from 'react'
import { Dropdown, MenuProps  } from 'antd';
import  { MoreOutlined } from '@ant-design/icons'
import { ApButton, ApPopConfirm } from '@/src/components';
import { DELETE_EDUCATION, FIND_ONE_PROFILE } from '../../../gql/query';
import { useMutation } from '@apollo/client';
import useApNotification from '@/src/hooks/notification';

interface IProps 
{
    education: any,
    setModal: any,
    length: any
}

export const EducationView: React.FC<IProps> = ({ education, setModal, length }) => {
    const [deleteEducation, {loading}] = useMutation(DELETE_EDUCATION, {
        refetchQueries: [
          { query: FIND_ONE_PROFILE }
        ]
    })
    const { notificationContext, successMsg, errorMsg } = useApNotification();

      
    const deleteEducationHandler = () =>
    {
        deleteEducation({ variables : {
            educationID: education._id
          }})
        .then((val) => {successMsg('Success', 'Education Info Has Been Deleted')})
        .catch(err =>  {errorMsg('Error', err.message)})    
    }
  
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button onClick={() => {setModal({ open: true, data: education })}}>
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
                    title='Are you sure you want to delete this education info ?'
                >
                    <div className='mt-3'>
                        <p className='mb-3'>Delete this education info.</p>
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deleteEducationHandler}>Confirm</ApButton>
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
                <h1 className='font-bold mb-2'>Country - { education.country }</h1>
                <p className='font-bold'>Institution - { education.insitution }</p>
                <p className=''>Degree - { education.degree }</p>
                <p className=''>{ education.startYear } - { education.endYear }</p>
            </div>
            <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                <MoreOutlined className='text-2xl'/>
            </Dropdown>
        </div>
        </>
  )
}
