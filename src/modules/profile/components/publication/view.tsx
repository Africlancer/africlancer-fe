import { ApButton } from '@/src/components/button'
import { ApGlobeIcon, ArrowRightIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditPublication } from './edit';
import { PublicationView } from './components';
import { Skeleton } from 'antd';
import { UpdatePublication } from './update';

type publication = {
    title: string,
    publisher: string,
    summary: string
    _id: string
}

interface IProps
{
    publications: publication[],
}

export const Publication: React.FC<IProps> = ({publications}) => 
{
    const [modal, setModal] = useState<{ open: boolean }>({open: false});
    const [updateModal, setUpdateModal] = useState<{ open: boolean, data?: any }>({open: false});

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
                    <div className='px-5 pt-5 flex flex-col gap-5'>
                    {
                        publications.length > 0 ? 
                        publications.map(publication => (
                            <div key={publication._id}><PublicationView publication={publication} length={publications.length} setModal={setUpdateModal}/></div>     
                        ))
                        : <p className='text-skin-inverted mb-5'>No publication has been added.</p> 
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

        
        <ApModal
            open={updateModal?.open}
            onDismiss={() => {
            setUpdateModal({ open: false });
            }}
            width={970}
        >
            <UpdatePublication setModal={setUpdateModal} modal={updateModal}/>
        </ApModal>
        </>
    );
}
 