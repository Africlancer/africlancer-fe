import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_EXPERIENCE, FIND_ONE_PROFILE } from '../../gql/query'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from "@/src/hooks/notification";
import { Formik, Form } from 'formik'
import { ApCheckBox, ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from "yup";
import { years, months } from '../../model';

const FormikSchema = Yup.object().shape({
  title: Yup.string()
      .required("* required"),
  company: Yup.string()
      .required("* required"),
  startMonth: Yup.string()
      .required("* required").nullable(true),
  startYear: Yup.string()
      .required("* required").nullable(true),
  endMonth: Yup.string().nullable(true).when("working", {
    is: (working) => working === false,
    then:  Yup.string().required("* required").nullable(true),
  }),
  endYear: Yup.string().nullable(true).when("working", {
    is: (working) => working === false,
    then:  Yup.string().required("* required").nullable(true),
  }),
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
  const [addExperience] = useMutation(ADD_EXPERIENCE, {
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })

  const [ disableEnd, setDisableEnd ] = useState(false)
  const workingCheckBox = (e) => 
  {
    setDisableEnd(e.target.checked)
  }

  const handleSubmit = (val) =>
  {
    const endYear = !val.working ? parseInt(val.endYear) : null
    const endMonth = !val.working ? val.endMonth : null

    addExperience({ variables : {
      experience: { ...val, endMonth, endYear, startYear: parseInt(val.startYear), profileId }
    }})
    .then((val) => { if(val) { successMsg(`Success`, `Experience has been added.`)}} )
    .catch(err => 
    { 
      if(err) 
      {
        let msg = err.message === "Failed to fetch" ? "Check Your Internet Connection" :  err.message
        errorMsg("Error", msg) 
      }
    })
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
              startMonth: null,
              startYear: null,
              endMonth: null,
              endYear: null,
              summary: "",
              working: false
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
                  <option selected disabled>Select Month</option>
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
                 <option selected disabled>Select Year</option>
                  {
                    years.map(year => (
                      <option value={year}>{year}</option>
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
                  <option selected disabled>Select Month</option>
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
                  disabled={disableEnd}
                >
                  <option selected disabled>Select Year</option>
                  {
                    years.map(year => (
                      <option value={year}>{year}</option>
                    ))
                  }
              </ApSelectInput>
          </div>            
        </div>
      </div>

      <div className='flex gap-2 my-5'>
        <ApCheckBox name='working' label="I'm Currently Working Here" onChange={workingCheckBox}/>
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

