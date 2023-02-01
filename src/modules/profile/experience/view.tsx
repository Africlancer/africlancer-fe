import { ApButton } from '@/src/components/button'
import { ArrowRightIcon } from '@/src/components/icons/customIcons'
import { ApModal } from '@/src/components/modal';
import React, { useState } from 'react'
import { EditExperience } from './edit';
import  { MoreOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd';

export const Experience = () => 
{
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Edit',
        },
        {
            key: '2',
            label: 'Delete',
        },
    ];

    const [modal, setModal] = useState<{ open: boolean }>();

    return (
        <>
         <div className='bg-skin-base col-span-2 shadow-xl w-full rounded-xl cs4:mb-0 mb-6'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Experience</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-skin-muted">
                        <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                </div>

                <ApButton
                    onClick={() => setModal({ open: true })}
                    className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                >
                    Add Experience
                    <ArrowRightIcon/>
                </ApButton>
            </div>

            <div className='px-5 py-5'>
                {/* <p className='text-skin-inverted'>No experience has been added.</p> */}
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='font-bold mb-2'>Software Engineer - Title</h1>
                        <p className='font-bold'>Google - Company</p>
                        <p className='mb-3'>Feb 2010 - Aug 2016 (6 years, 6 months)</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime non mollitia deserunt quam omnis ratione adipisci. Quis sint nulla a perferendis voluptatum quam quasi numquam, tenetur alias sapiente laudantium officia velit recusandae cum consequatur commodi accusantium ex necessitatibus possimus voluptate natus! Perspiciatis, rerum. Iure aperiam vitae illo nobis dolorem! Nemo?</p>
                    </div>
                    <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                        <MoreOutlined className='text-2xl'/>
                    </Dropdown>
                </div>
                <div className='flex justify-between items-start border-t border-skin-border mt-5 pt-5'>
                    <div>
                        <h1 className='font-bold mb-2'>Backend Engineer - Title</h1>
                        <p className='font-bold'>Microsoft - Company</p>
                        <p className='mb-3'>Feb 2006 - Present</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime non mollitia deserunt quam omnis ratione adipisci. Quis sint nulla a perferendis voluptatum quam quasi numquam, tenetur alias sapiente laudantium officia velit recusandae cum consequatur commodi accusantium ex necessitatibus possimus voluptate natus! Perspiciatis, rerum. Iure aperiam vitae illo nobis dolorem! Nemo?</p>
                    </div>
                    <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                        <MoreOutlined className='text-2xl'/>
                    </Dropdown>
                </div>
            </div>  
        </div>

        <ApModal
            open={modal?.open}
            onDismiss={() => {
            setModal({ open: false });
            }}
            width={970}
        >
            <EditExperience/>
        </ApModal>
        </>
    );
}
 