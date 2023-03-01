import { ApButton } from '@/src/components/button'
import { ApGlobeIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditPublication } from './edit';
import { PublicationView } from './components';
import { Skeleton } from 'antd';

type publication = {
    title: string,
    publisher: string,
    summary: string
}

interface IProps
{
    publications: publication[],
}

export const Publication: React.FC<IProps> = ({publications}) => 
{
    const [modal, setModal] = useState<{ open: boolean }>();
    
    return (
        <>
         <div className='bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Publications</h1>
                <ApGlobeIcon className="w-6 h-6 text-skin-muted"/>
            </div>

                <ApButton
                    onClick={() => setModal({ open: true })}
                >
                    Add Publication
                    <ArrowRightIcon/>
                </ApButton>
            </div>

            {
                publications ?
                    <div className='px-5 py-5 flex flex-col gap-5'>
                    {
                        publications.length > 0 ? 
                        publications.map(publication => (
                            <PublicationView summary={ publication.summary } title={ publication.title } publisher={ publication.publisher } />
                        ))
                        : <p className='text-skin-inverted'>No publication has been added.</p> 
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
            <EditPublication setModal={setModal}/>
        </ApModal>
        </>
    );
}
 