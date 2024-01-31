import { ApButton, ApSelectInput, ApTextInput } from '@/src/components'
import { SKILLS } from '@/src/constants'
import { Form, Formik } from 'formik'
import React from 'react'

interface IProps {
    onNavigate: (index: number, data?: any) => void
    updatePayload: (val: any) => void    
    payload: any
}

export const ProjectBasicDetails: React.FC<IProps> = ({ onNavigate, payload }) => {

    const handleSubmit = (val: any) => {
        onNavigate(1, {
            ...val
        })
    }

  return (
    <div className='pt-10'>
        <Formik
            initialValues={{
                title: payload?.title,
                skills: payload?.skills,
                summary: payload?.summary
            }}
            onSubmit={handleSubmit}
        >
            <Form className='flex flex-col gap-5'>
                <ApTextInput
                    name='title'
                    label='Project Title'
                    placeholder='Enter project title'
                />

                <ApSelectInput
                    name='skills'
                    label='Required Skills'
                    placeholder="Select required skiils"
                    options={SKILLS}
                    isMulti
                    isClearable
                    isSearchable
                />

                <ApTextInput
                    name='summary'
                    label='Project Description'
                    placeholder='Enter project description'
                    textarea
                />

                <div className='flex justify-end mt-5'>
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