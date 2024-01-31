import React, { useState } from 'react'
import { PercentCircle , Timer } from 'lucide-react';
import { ApButton, ApTextInput } from '@/src/components';
import { Form, Formik } from 'formik';

interface IProps {
    onNavigate: (index: number, data?: any) => void
    updatePayload: (val: any) => void
    payload: any
}

export const ProjectPayment: React.FC<IProps> = ({ onNavigate, updatePayload, payload }) => {
  const handleNext = () => {
    onNavigate(2)
  }

  const handlePrevious = () => {
    onNavigate(0)
  }

  const handleSubmit = (val: any) => {
    onNavigate(2, {
        ...val
    })
  }

  return (
    <div className='pt-5'>
        <Formik
            initialValues={{
                minBudget: payload?.minBudget,
                maxBudget: payload?.maxBudget
            }}
            onSubmit={handleSubmit}
        >
            <Form className='flex flex-col gap-5'>
                <button type='button' onClick={() => updatePayload({payment: 'fixed'})} className={
                    `shadow-sm flex gap-5 duration-150 ease-in-out px-5 py-2 rounded-lg border w-full items-center hover:shadow-md hover:border-skin-accent
                    ${payload?.payment == "fixed" ? "shadow-md border-skin-accent" : ""}
                    `
                }>
                    <PercentCircle strokeWidth={1} className={`h-28 w-28 text-gray-700`}/>
                    <div className='flex flex-col items-start justify-start text-start gap-2'>
                    <h1 className='font-bold text-xl'>Pay fixed price</h1>
                    <p>Agree on a price and release payment when the job is done. Best for one-off tasks.</p>
                    </div>
                </button>

                <button type='button' onClick={() => updatePayload({payment: 'hourly'})} className={
                    `shadow-sm flex gap-5 duration-150 ease-in-out px-5 py-2 rounded-lg border w-full items-center hover:shadow-md hover:border-skin-accent
                    ${payload?.payment == "hourly" ? "shadow-md border-skin-accent" : ""}
                    `
                }>
                    <Timer strokeWidth={1} className={`h-28 w-28 text-gray-700`}/>
                    <div className='flex flex-col items-start justify-start text-start gap-2'>
                    <h1 className='font-bold text-xl'>Pay by the hour</h1>
                    <p>Hire based on an hourly rate and pay for hours billed. Best for ongoing work.</p>
                    </div>
                </button>

                <ApTextInput
                    name='minBudget'
                    label='Min Budget'
                    placeholder='Enter Min Budget'
                    type='number'
                />

                <ApTextInput
                    name='maxBudget'
                    label='Max Budget'
                    placeholder='Enter Max Budget'
                    type='number'
                />

                <div className='flex justify-end mt-5 gap-5'>
                    <ApButton
                        outline
                        title="Previous"
                        onClick={handlePrevious}
                    />

                    <ApButton
                        title="Next"
                        type='submit'
                    />
                </div>
            </Form>
        </Formik> 
    </div>
  )
}