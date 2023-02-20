import React from 'react'
import { Dropdown, MenuProps  } from 'antd';
import  { MoreOutlined } from '@ant-design/icons'
import { ApButton, ApPopConfirm } from '@/src/components';

interface IProps 
{
    country: string,
    institution: string,
    degree: string,
    startYear: number,
    endYear: number,
    profileId: string
}

export const EducationView: React.FC<IProps> = ({ country, institution, degree, startYear, endYear, profileId }) => {
    const deleteEducation = () =>
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
                    title='Are you sure you want to delete this education info ?'
                >
                    <div className='mt-3'>
                        <p className='mb-3'>Delete this education info.</p>
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deleteEducation}>Confirm</ApButton>
                    </div>
                </ApPopConfirm>
            ),
        },
    ];

    return (
        <>
        <div className='flex justify-between items-start'>
            <div>
                <h1 className='font-bold mb-2'>Country - { country }</h1>
                <p className='font-bold'>Institution - { institution }</p>
                <p className=''>Degree - { degree }</p>
                <p className=''>{ startYear } - { endYear }</p>
            </div>
            <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                <MoreOutlined className='text-2xl'/>
            </Dropdown>
        </div>
        </>
  )
}
