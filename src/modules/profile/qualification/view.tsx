import { ApButton } from '@/src/components/button'
import { ArrowRightIcon } from '@/src/components/icons/customIcons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditQualifications } from './edit';

export const Qualifications = () => 
{
    const [modal, setModal] = useState<{ open: boolean }>();

    return (
        <>
         <div className='bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Qualifications</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-skin-muted">
                    <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clip-rule="evenodd" />
                </svg>
            </div>

                <ApButton
                    onClick={() => setModal({ open: true })}
                    className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                >
                    Add Publication
                    <ArrowRightIcon/>
                </ApButton>
            </div>

            <div className='flex items-center justify-center p-10 flex-col'>
                <p className='text-skin-inverted'>No qualification has been added.</p>
            </div>  
        </div>
        <ApModal
            open={modal?.open}
            onDismiss={() => {
            setModal({ open: false });
            }}
            width={970}
        >
            <EditQualifications/>
        </ApModal>
        </>
    );
}
 