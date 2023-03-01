import React from 'react'
import  { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Popconfirm  } from 'antd';
import { ApButton, ApPopConfirm } from '@/src/components';

interface Iprops
{
    certificate: string,
    conferringOrganization: string,
    startYear: string,
    summary: string,
}

export const QualificationView: React.FC<Iprops> = ({ certificate, conferringOrganization, startYear, summary }) => {
    const deleteQualification = () =>
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
                    title='Are you sure you want to delete this qualification ?'
                >
                    <div className='mt-3'>
                        <p className='mb-3'>Delete this qualification.</p>
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deleteQualification}>Confirm</ApButton>
                    </div>
                </ApPopConfirm>
            ),
        },
    ];

  return (
    <>
    <div className='flex justify-between items-start'>
    <div>
        <h1 className='font-bold mb-2'>Name of Certificate - { certificate }</h1>
        <p className='font-bold'>Name of Conferring Organization - { conferringOrganization }</p>
        <p className='mb-3'>Awarded on { startYear }</p>
        <p>{ summary }</p>
    </div>
    <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
        <MoreOutlined className='text-2xl'/>
    </Dropdown>
    </div>
    </>
  )
}
