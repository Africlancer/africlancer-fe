import { ApButton, ApTextInput } from '@/src/components'
import { Form, Formik } from 'formik'
import React from 'react'
import { useProjectContext } from '../context'

interface IProps 
{
  project: any
  setShowEdit?: any
}

const EditProject: React.FC<IProps> = ({project, setShowEdit}) => {

    const {updateProject, notificationContext} = useProjectContext()

    const handleSubmit = (val) => 
    {
        updateProject({
            _id: project._id,
            titl: val.title,
            summary: val.summary,
            details: val.details
        })
    }

  return (
    <>
    {notificationContext}
    <div className='bg-skin-base shadow-md rounded-md min-w-[60%] p-5'>
      <Formik
      initialValues={{
        title: project?.title,
        summary: project?.summary,
        details: project?.details
      }}
      onSubmit={handleSubmit}
      >
        <Form className='flex flex-col gap-8'>
            <ApTextInput name='title' label='Project Name'/>
            <ApTextInput type='textarea' name='summary' label='Project Summary'/>
            <ApTextInput type='textarea' name='details' label='Project Description'/>
            <ApTextInput name='skills' label='Skills'/>

            <div className='flex justify-end gap-4'>
            <ApButton type='submit'>Save Changes</ApButton>
            <ApButton type='button' outline onClick={() => setShowEdit(false)}>Cancel</ApButton>
            </div>
        </Form>
      </Formik>
    </div>
    </>
  )
}

export default EditProject
