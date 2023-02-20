import { ApButton } from '@/src/components/button'
import { ApGradHatIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditEducation } from './edit';
import { EducationView } from './components';
import { Skeleton } from 'antd';

type education = {
    country: string,
    insitution: string,
    degree: string,
    startYear: number,
    endYear: number
}

interface IProps
{
    educations: education[],
    profileID: string
}

export const Education: React.FC<IProps> = ({educations, profileID}) =>
{
    const [modal, setModal] = useState<{ open: boolean }>();

    return (
        <>
         <div className='bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>                
            <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Education</h1>
                    <ApGradHatIcon className='w-6 h-6 text-skin-muted'/>
                </div>

                <ApButton
                    onClick={() => setModal({ open: true })}
                    className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                >
                    Add Education
                    <ArrowRightIcon/>
                </ApButton>
            </div>


            {
                educations ?
                <div className='px-5 py-5 flex flex-col gap-5'>
                    {
                        educations.length > 0 ? 
                        educations.map(education => (
                            <EducationView profileId='63e75fb890a2c8f7ebd648ce' country={ education.country } 
                            institution={ education.insitution } degree={ education.degree } 
                            startYear={ education.startYear } endYear={ education.endYear }  />
                        ))
                        : <p className='text-skin-inverted'>No education info has been added.</p> 
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
            <EditEducation profileId={ profileID } setModal={setModal}/>
        </ApModal>
        </>
    );
}
 