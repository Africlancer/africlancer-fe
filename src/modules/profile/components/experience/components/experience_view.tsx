import React from 'react'
import  { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps  } from 'antd';
import { ApButton, ApPopConfirm } from '@/src/components';

type Experience = 
{
    title: string,
    company: string,
    startMonth: string,
    startYear: number
    endMonth: string,
    endYear: number,
    working: boolean,
    summary: string,
}

interface IProps
{
    experience: Experience
}

const ExperienceItem: React.FC<IProps> = ({ experience }) => {

    const deleteExperience = () =>
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
                    title='Are you sure you want to delete this experience ?'
                >
                    <div className='mt-3'>
                        <p className='mb-3'>Delete this experience.</p>
                        <ApButton className='py-1 px-2 bg-skin-accent text-white rounded' onClick={deleteExperience}>Confirm</ApButton>
                    </div>
                </ApPopConfirm>
            ),
        },
    ];
    
    console.log(experience)
  return (
    <>
    <div className='flex justify-between items-start'>
        <div>
            <h1 className='font-bold mb-2'>Title - { experience.title }</h1>
            <p className='font-bold'>Company - { experience.company }</p>
            <p className='mb-3'>{ experience.startMonth } { experience.startYear } - { experience.working ? 'till date' 
            : `${experience.endMonth} ${experience.endYear}` }</p>
            <p>{ experience.summary }</p>
        </div>
        <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <MoreOutlined className='text-2xl'/>
        </Dropdown>
    </div>
    </>
  )
}

export default ExperienceItem
