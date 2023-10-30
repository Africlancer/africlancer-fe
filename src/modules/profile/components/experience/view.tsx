import { ApButton } from '@/src/components/button'
import { ApSuitCaseIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditExperience } from './edit';
import ExperienceItem from './components/experience_view';
import { Skeleton } from 'antd';
import { UpdateExperience } from './update';

type experience = {
    title: string,
    company: string,
    startMonth: string,
    startYear: number
    endMonth: string,
    endYear: number,
    working: boolean,
    summary: string,
    _id: string
}

interface IProps
{
    experiences: experience[],
}


export const Experience: React.FC<IProps> = ({ experiences }) => 
{
    const [modal, setModal] = useState<{ open: boolean }>({open: false});
    const [updateModal, setUpdateModal] = useState<{ open: boolean, data?: any }>({open: false});

    return (
        <>
         <div className='bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Experience</h1>
                    <ApSuitCaseIcon className="w-6 h-6 text-skin-muted"/>
                </div>

                <ApButton
                    onClick={() => setModal({ open: true })}
                >
                    Add Experience
                    <ArrowRightIcon/>
                </ApButton>
            </div>

            {
                experiences ?
                <div className='px-5 pt-5 flex flex-col gap-5'>
                    {
                        experiences.length > 0 ? 
                        experiences.map(experience => (
                           <div key={experience._id}><ExperienceItem length={experiences.length} setModal={setUpdateModal} experience={experience}/></div>
                        ))
                        : <p className='text-skin-inverted mb-5'>No experience has been added.</p> 
                    }
                </div> 
                : <div className='px-5 py-5'><Skeleton active /></div>
            }
        </div>

        <ApModal
            open={modal?.open}
            onDismiss={() => {
            setModal({ open: false });
            }}
            width={970}
        >
            <EditExperience setModal={setModal}/>
        </ApModal>

        <ApModal
            open={updateModal?.open}
            onDismiss={() => {
            setUpdateModal({ open: false });
            }}
            width={970}
        >
            <UpdateExperience setModal={setUpdateModal} modal={updateModal}/>
        </ApModal>
        </>
    );
}
 