import React from 'react'
import { ApButton } from "@/src/components/button";
import { ApDollarIcon, EditIcon } from "@/src/components/icons";

interface IProps 
{
    setModal: any,
    hourlyRate: number
}

export const SectionThree: React.FC<IProps> = ({ setModal, hourlyRate }) => {
  return (
    <div className="absolute p-5 bottom-0 top-0 right-0 flex gap-3 flex-col justify-between items-end mt-0">
        <ApButton onClick={() => setModal({ open: true })}>
            Edit Profile
            <EditIcon/>
        </ApButton>
        
        <div className="text-right text-base">
            <p className="mb-1 text-skin-inverted">Abuja, Nigeria</p>
            <p className="flex">
            <ApDollarIcon className='w-6 h-6 text-green-500'/>
            <span className="ml-2 text-skin-inverted">${ hourlyRate } USD / Hour</span>
            </p>
        </div>
    </div>
  )
}
