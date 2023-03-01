import React from 'react'
import  { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps  } from 'antd';
import { ApButton, ApPopConfirm } from '@/src/components';

interface IProps
{
    title: string,
    publisher: string,
    summary: string,
}

export const PublicationView: React.FC<IProps> = ({ title, publisher, summary }) => {
    const deletePublication = () =>
    {

    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Edit',
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
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deletePublication}>Confirm</ApButton>
                    </div>
                </ApPopConfirm>
            ),
        },
    ];

  return (
    <>
    <div className='flex justify-between items-start'>
        <div>
            <h1 className='font-bold mb-2'>My Publication Title - { title }</h1>
            <p className='font-bold mb-5'>Name of Publisher - { publisher }</p>
            <p>{ summary }</p>
        </div>
        <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <MoreOutlined className='text-2xl'/>
        </Dropdown>
    </div>
    </>
  )
}
