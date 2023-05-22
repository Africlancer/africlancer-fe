import React, { useEffect, useState } from 'react';
import { Form, Formik, FormikProps } from 'formik'
import { ApButton, ApTextInput, ArrowRightIcon } from '../../../components'
import * as Yup from "yup";
import { Button, message, Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { ApSelect } from '@/src/components/input/selectinput';
import { useProjectContext } from '../context';
import { NEW_PROJECT_SUBSCRIPTION } from '../gql/query';
import { useSubscription } from '@apollo/client';

const FormikSchema = Yup.object().shape({
  type: Yup.object()
    .required("* Payment Type is Required"),
  minBudget: Yup.string()
    .required("* Min Budget is Required."),
  maxBudget: Yup.string()
    .required("* Max Budget is Required."),
  skills: Yup.array().min(1, "* Project Skills is Required.")
  .required("* Project Skills is Required."),
});


const skills = [
  { value: "React JS", label: "React JS"},
  { value: "Vue JS", label: "Vue JS"},
  { value: "Angular", label: "Angular"},
  { value: "Javascript", label: "Javascript"},
  { value: "Typescript", label: "Typescript"},
  { value: "Ghost Writing", label: "Ghost Writing"},
  { value: "UI/UX Design", label: "UI/UX Design"},
]

const type = [
  { value: "HOURLY_RATE", label: "Pay by the hour" },
  { value: "FIXED_PRICE", label: "Pay fixed price" },
]

export const FormTwo = ({setShowFormTwo, project, setProject}) => {

  const { createProject, loading, loadingText } = useProjectContext()
  // const rs = useSubscription( NEW_PROJECT_SUBSCRIPTION );

  const handleNext = (val) => 
  {
    const presentDate = new Date
    const sevenDaysLater = new Date
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7) 

    const skills = []
    val.skills.forEach((skill) => {
      skills.push(skill.value)
    })
    
    console.log(project);
    
    createProject({
      ...project,
      type: val.type.value, 
      skills: skills,         
      minBudget: parseInt(val.minBudget), 
      maxBudget: parseInt(val.maxBudget),
      startDate: presentDate,
      endDate: sevenDaysLater,
    })
    //setProject({...project, type: val.type, minBudget: val.minBudget, maxBudget: val.maxBudget, skills: val.skills})
  }

  const handlePrevious = (val) =>
  {
    //console.log(val)
    setProject({...project, ...val})
    setShowFormTwo(false)
  }

  
  return (
    <Formik
    initialValues={{
      type: project?.type ? project?.type : "",
      minBudget: project?.minBudget ? project?.minBudget : "",
      maxBudget: project?.maxBudget ? project?.maxBudget : "",
      skills: project?.skills ? project?.skills : "",
    }}
    onSubmit={handleNext}
    validationSchema={FormikSchema}
    >
      {(props: FormikProps<any>) => (
        <Form className='w-[800px] flex-col flex gap-10 -translate-y-36 bg-skin-base px-8 pt-8 shadow-md rounded-md'>
        <div>
          <h1 className='font-bold text-2xl mb-1'>What skills are required for this project ?</h1>
          <ApSelect isMulti isSearchable options={skills} name="skills" label='Enter up to 5 skills that best describe your project.'/>
        </div>


        <div>
            <h1 className='font-bold text-2xl mb-1'>How do you want to pay ?</h1>
            <ApSelect options={type} name="type" label='Hire based on an hourly rate or a fixed price'/>
        </div> 

        <div>
            <h1 className='font-bold text-2xl mb-1'>What is your estimated budget ?</h1>
            <p className='mb-4'>Enter your minimum and maximum budget depending on your payment type.</p>
            <div className='flex gap-4'>
                <ApTextInput label='Min Budget' placeholder='Enter Min Budget' name='minBudget'/>
                <ApTextInput label='Max Budget' placeholder='Enter Max Budget' name='maxBudget'/>
            </div>
        </div>

        <div className='flex justify-end gap-4 pb-5'>
          <ApButton
            type='button'
            outline
            onClick={() => handlePrevious(props.values)}
          >
            Return Back
          </ApButton>

          <ApButton
            type='submit'
            loading={loading}
            loadingText={loadingText}
          >
            Post Project
            <ArrowRightIcon />
          </ApButton>
        </div>
        </Form>
      )}
    </Formik>
  )
}

