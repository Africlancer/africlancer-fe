import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_PUBLICATION, FIND_ONE_PROFILE } from '../../gql/query'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from "@/src/hooks/notification";
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from "yup";
import { years, months } from '../../model';

const FormikSchema = Yup.object().shape({
  title: Yup.string()
      .required("* required"),
  company: Yup.string()
      .required("* required"),
  startMonth: Yup.string()
      .required("* required"),
  startYear: Yup.string()
      .required("* required"),
  endMonth: Yup.string()
      .required("* required"),
  endYear: Yup.string()
      .required("* required"),
  summary: Yup.string()
      .required("* required."),
});

interface IProps
{
  profileId: string,
  setModal: any
}

export const EditExperience: React.FC<IProps> = ({ profileId, setModal }) => {  
  const { notificationContext, successMsg, errorMsg } = useApNotification()
  const [addExperience] = useMutation(ADD_PUBLICATION, {
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })
  const [experience, setExperience] = useState({title: null, summary: null, company: null,
    startMonth: null, startYear: null, endMonth: null, endYear: null, working: false
  })
  
  // const addExperienceHandler = () =>
  // {
  //   if(experience.title !== null && experience.summary !== null && experience.company !== null &&
  //     experience.startMonth !== null && experience.startYear !== null && experience.company !== null )
  //   {
  //     console.log(experience)
  //     if(experience.working === false && experience.endMonth !== null && experience.endYear !== null )
  //     {
  //       addExperience({ variables : {
  //         publication: { title: experience.title, summary: experience.summary, company: experience.company, profileId, 
  //           startMonth: experience.startMonth, startYear: experience.startYear, endMonth: experience.endMonth,
  //           endYear: experience.endYear, working: experience.working
  //         }
  //       }})
  //       .then((val) => { if(val) { successMsg(`Success`, `Experience has been added.`), console.log(val) }} )
  //       .catch((err) => { if(err) { errorMsg("Error", err.message), console.log(err.message) }})  
  //     }
  //     else if(experience.working === true) 
  //     {
  //       addExperience({ variables : {
  //         publication: { title: experience.title, summary: experience.summary, company: experience.company, profileId, 
  //           startMonth: experience.startMonth, startYear: experience.startYear, endMonth: experience.endMonth,
  //           endYear: experience.endYear, working: experience.working
  //         }
  //       }})
  //       .then((val) => { if(val) { successMsg(`Success`, `Experience has been added.`), console.log(val) }} )
  //       .catch((err) => { if(err) { errorMsg("Error", err.message), console.log(err.message) }})  
  //     }
  //     else { errorMsg("Error", "Please fill all fields before proceeding.") }
  //   }
  //   else { errorMsg("Error", "Please fill all fields before proceeding.") }
  // }

  const [ disableEnd, setDisableEnd ] = useState(false)
  const workingCheckBox = (e) => 
  {
    setExperience({ ...experience, working: e.target.checked })
    setDisableEnd(e.target.checked)
  }

  const handleSubmit = (val) =>
  {
    console.log(val)
  }

  return (
    <>
    {notificationContext}
    <div>
      <h1 className='font-bold text-xl'>Add Experience</h1>
      <p className='mb-3'>Fill To Add New Experience</p>

      <Formik
            initialValues={{
              title: "",
              company: "",
              startMonth: "",
              startYear: "",
              endMonth: "",
              endYear: "",
              summary: ""
            }}
            validationSchema={FormikSchema}
            onSubmit={handleSubmit}
        >
      <Form>
      <div className="flex w-full gap-5">
      <div className='w-full'>
        <ApTextInput placeholder="Enter Your Position or Title" name="title" label='Title'/>
      </div>

      <div className='w-full'>
        <ApTextInput placeholder="Enter Company Name" name="company" label='Company'/>
      </div>
      </div>

      <div className="flex w-full gap-5 mt-5">
        <div className="flex w-full items-center gap-5">
          <div className='w-full'>
            <ApSelectInput
                  name="startMonth"
                  label='Start Month'
                >
                  {
                    months.map(month => (
                      <option value={month}>{month}</option>
                    ))
                  }
            </ApSelectInput>
          </div>

          <div className='w-full'>
            <ApSelectInput
                  name="startYear"
                  label='Start Year'
                >
                  {
                    years.map(month => (
                      <option value={month}>{month}</option>
                    ))
                  }
              </ApSelectInput>
          </div>         
          </div>

        <div className="flex w-full items-center gap-5">
        <div className='w-full'>
            <ApSelectInput
                  name="endMonth"
                  label='End Month'
                  disabled={disableEnd}
                >
                  {
                    months.map(month => (
                      <option value={month}>{month}</option>
                    ))
                  }
            </ApSelectInput>
          </div>

          <div className='w-full pt-0.5'>
              <ApSelectInput
                  name="endYear"
                  label='End Year'
                >
                  {
                    years.map(month => (
                      <option value={month}>{month}</option>
                    ))
                  }
              </ApSelectInput>
          </div>            
        </div>
      </div>

      <div className='flex gap-2 my-5'>
        <input type="checkbox" onChange={(e) => workingCheckBox(e)} name='working'/>
        <p>I'm Currently Working Here</p>
      </div>

      <div>
        <ApTextInput placeholder="Describe Your Working Experience" name="summary" label='Summary' type='textarea'/>
      </div>

      <div className='gap-4 flex justify-end items-center mt-4'>
          <ApButton
            onClick={() => {}}
            type='submit'
            className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
          >
            Add Experience
            <PlusOutlined className='text-lg'/>
          </ApButton>

          <ApButton
            onClick={() => setModal({ open: false })}
            className='py-2 border border-green-500 flex text-skin-accent rounded items-center p-3 justify-center gap-2'
          >
            Cancel
            <CloseOutlined className='text-lg'/>
          </ApButton>
      </div>
      </Form>
      </Formik>
    </div>
    </>
  )
}

