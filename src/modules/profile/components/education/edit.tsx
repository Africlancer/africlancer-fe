import React from 'react'
import useApNotification from "@/src/hooks/notification";
import { ADD_EDUCATION, FIND_ONE_PROFILE } from '../../gql/query';
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import * as Yup from "yup";
import { countries, years } from '../../model';
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'

export const FormikSchema = Yup.object().shape({
  country: Yup.string()
      .required("* required"),
  insitution: Yup.string()
      .min(6, "Password Should be at Least 6 Characters.")
      .required("* required"),
  degree: Yup.string()
      .min(6, "Password Should be at Least 6 Characters.")
      .required("* required."),
  startYear: Yup.string()
      .required("* required"),
  endYear: Yup.string()
      .required("* required"),
});

interface IProps
{
  profileId: string,
  setModal: any
}

export const EditEducation: React.FC<IProps> = ({ profileId, setModal }) => {
  const { notificationContext, successMsg, errorMsg } = useApNotification();
  const [addEducation] = useMutation(ADD_EDUCATION, {
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })

  const handleSubmit = async(val) => 
  {
    addEducation({ variables : {
      education: { ...val, endYear: parseInt(val.endYear), startYear: parseInt(val.startYear), profileId }
    }})
    .then((val) => { if(val) { successMsg(`Success`, `Education Info has been added.`)}} )
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
      <h1 className='font-bold text-xl'>Add Education</h1>
      <p className='mb-3'>Fill To Add New Education</p>

      <Formik
            initialValues={{
              country: "",
              insitution: "",
              degree: "",
              startYear: "",
              endYear: ""
            }}
            validationSchema={FormikSchema}
            onSubmit={handleSubmit}
        >
      <Form>
      <div className="flex w-full  gap-5">
        <div className='w-full'>
            <ApSelectInput
                  name="country"
                  label='Country'
            >
              <option selected>Select Country</option>
                {
                  countries.map(country => (
                    <option value={country}>{country}</option>
                  ))
                }
            </ApSelectInput>
          </div>

          <div className='w-full'>
          <ApTextInput placeholder="Enter Your Institution Name" name="insitution" label='Institution'/>
          </div>            
        </div>

      <div className="mt-5">
      <div className='w-full'>
        <ApTextInput placeholder="Enter Your Degree Name" name="degree" label='Degree'/>
      </div>
      </div>

      <div className="flex w-full items-center gap-5 mt-5">
          <div className='w-full'>
            <ApSelectInput
                  name="startYear"
                  label='Start Year'
                >
                <option selected>Select Year</option>
                {
                  years.map(year => (
                    <option value={year}>{year}</option>
                  ))
                }
            </ApSelectInput>
          </div>

          <div className='w-full'>
          <ApSelectInput
                  name="endYear"
                  label='End Year'
                >
                <option selected>Select Year</option>
                {
                  years.map(year => (
                    <option value={year}>{year}</option>
                  ))
                }
            </ApSelectInput>
          </div>         
          </div>


          <div className='gap-4 flex justify-end items-center mt-4'>
            <ApButton
              onClick={() => {}}
              type='submit'
              className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
              >
              Add Education
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
