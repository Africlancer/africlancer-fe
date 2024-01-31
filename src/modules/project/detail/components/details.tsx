import { ApButton, ApSelectInput, ApTag, ApTextInput } from '@/src/components'
import React, { useState } from 'react'
import { useProjectContext } from '../../context'
import { Clock3, Pencil } from 'lucide-react';
import { calculateDaysLeft } from '@/src/services';
import { ProjectType } from '../../model';
import { Form, Formik } from 'formik';
import { SKILLS } from '@/src/constants';

interface IProps {
  isMyProject?: boolean
}

export const MainDetail: React.FC<IProps> = ({ isMyProject }) => {
  const {project} = useProjectContext()
  const [showEdit, setShowEdit] = useState(false)

  return (
    <div className='flex gap-10'>
      <div className='px-10 py-8 w-[70%] bg-white shadow-lg rounded-lg'>
        {showEdit ? (
          <EditProject
            onCancel={() => setShowEdit(false)}
          />
        ) : (
          <div>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                  <h1 className='font-bold text-2xl'>
                    ${project?.minBudget?.toFixed(2)} - ${project?.maxBudget?.toFixed(2)}
                  </h1>
                  
                  <p>
                    ({project?.type as any == ProjectType[0] ? "Fixed Payment" : "Hourly Payment"})
                  </p>
                </div>

                <div className='flex items-center gap-2'>
                  <Clock3 size={15}/>
                  <p>
                    {
                      calculateDaysLeft(project?.endDate as any) 
                      ? `Bidding ends in ${calculateDaysLeft(project?.endDate as any)} days`
                      : "Bidding is closed for this project"
                    }
                  </p>
                </div>
              </div>
              
              {isMyProject && (
                <ApButton onClick={() => setShowEdit(true)}>
                  Edit Project
                  <Pencil strokeWidth={1.2} size={20} />
                </ApButton>
              )}
            </div>
            
            <div className='mt-5'>
              <h1 className='font-bold text-xl mb-2'>Project Summary</h1>
              <p className='leading-loose'>{project?.details}</p>
            </div>

            <div className='mt-5'>
              <h1 className='font-bold text-xl mb-5'>Skills Required</h1>
              <div className='flex items-center gap-5'>
                {project?.skills?.map((item, i) => (
                  <ApTag title={item} key={i}/>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='w-[30%] bg-white shadow-lg rounded-lg'>
        <h1 className="text-xl font-bold px-5 py-3 border-b">About The Client</h1>
      </div>
    </div>
  )
}

interface IEditProps {
  onCancel: () => void
}

const EditProject: React.FC<IEditProps> = ({ onCancel }) => {
  const {project, actionLoading, updateProject} = useProjectContext()

  const handleSubmit = (val: any) => {
    updateProject(project._id as any, {
      title: val?.title,
      skills: val?.skills?.map((item) => item?.value),
      summary: val?.summary,
      details: val?.summary,
    }).then(() => onCancel())
  }

  return (
    <div>
        <h1 className='text-2xl font-bold mb-3'>Update Project Details</h1>
        <Formik
            initialValues={{
                title: project?.title,
                skills: project?.skills?.map((item) => (
                  {label: item, value: item}
                )),
                summary: project?.summary
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

                <div className='flex items-start justify-end mt-5 gap-5'>
                  <ApButton
                    title="Cancel"
                    outline
                    onClick={onCancel}
                    disabled={actionLoading}
                  />

                  <ApButton
                    title="Update"
                    type='submit'
                    loading={actionLoading}
                  />
                </div>
            </Form>
        </Formik>
    </div>
  )
}