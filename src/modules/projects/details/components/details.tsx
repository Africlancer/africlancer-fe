import { ApButton } from '@/src/components'
import React from 'react'

interface IProps 
{
    summary: any
    details: any
    isEdit?: any
    skills: any
    setShowEdit?: any
}

export const Details: React.FC<IProps> = ({skills, summary, details, isEdit, setShowEdit}) => {

  return (
    <div>
        <div className='px-5 pt-5 pb-8'>     
            <div>
                <p className='font-bold mb-2'>Description</p>
                <p>{details}</p>
            </div>

            <div className='mt-8'>
                <p className='font-bold mb-2'>Summary</p>
                <p>{summary}</p>
            </div>


            <div className='mt-8'>
                <p className='font-bold mb-2'>Skills Required</p>
                <p>Below is the required skillset / skill required for this project.</p>
                <div className='flex mt-5 items-center gap-2'>
                    {
                        skills?.map((skill, i) => (
                        <p>
                        <span className='bg-skin-accent text-white py-1 px-3 rounded-md'>{skill}</span>
                        {
                            skills[i+1] ? <span className='ml-2'>|</span> : <></>
                        } 
                        </p>
                    ))
                    }
                </div>
            </div>

            <div className='flex justify-end'>
                { isEdit && <ApButton onClick={() => setShowEdit(true)}>Edit Project</ApButton>}
            </div>
        </div>
    </div>
  )
}
