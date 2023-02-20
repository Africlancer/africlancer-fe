import { ApButton } from '@/src/components/button'
import { ApSuitCaseIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditExperience } from './edit';
import ExperienceItem from './components/experience_view';
import { Skeleton } from 'antd';

type experience = {
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
    experiences: experience[],
    profileID: string
}


export const Experience: React.FC<IProps> = ({ experiences, profileID  }) => 
{
    const [modal, setModal] = useState<{ open: boolean }>();

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
                <div className='px-5 py-5 flex flex-col gap-5'>
                    {
                        experiences ? 
                        experiences.map(experience => (
                            <ExperienceItem profileId='63e75fb890a2c8f7ebd648ce' summary={ experience.summary } title={ experience.title } 
                            company={ experience.company } startMonth={ experience.startMonth } 
                            startYear={ experience.startYear } endMonth={ experience.endMonth }   
                            endYear={ experience.endYear } working={ experience.working }
                            />
                        ))
                        : <p className='text-skin-inverted'>No experience has been added.</p> 
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
            <EditExperience profileId={ profileID } setModal={setModal}/>
        </ApModal>
        </>
    );
}
 