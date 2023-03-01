import React from 'react'
import { ADD_QUALIFICATION, FIND_ONE_PROFILE } from '../../gql/query'
import useApNotification from "@/src/hooks/notification";
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from "yup";
import { years } from '../../model';

const FormikSchema = Yup.object().shape({
  title: Yup.string()
      .min(6, "Username should be at list 6 char.")
      .required("* required"),
  conferringOrganization: Yup.string()
      .min(6, "Password Should be at Least 6 Characters.")
      .required("* required"),
  startYear: Yup.string()
      .required("* required").nullable(true),
  summary: Yup.string()
      .min(6, "Password Should be at Least 6 Characters.")
      .required("* required."),
});

interface IProps
{
  setModal: any
}

export const EditQualifications:React.FC<IProps>  = ({setModal}) => {
  const [addQualification, {loading}] = useMutation(ADD_QUALIFICATION, {
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification();

  const handleSubmit = async(val) => 
  {
    addQualification({ variables : {
      qualification: { ...val, startYear: parseInt(val.startYear) }
    }})
    .then((val) => { 
      if(val) { successMsg(`Success`, `Qualification has been added.`)
        setTimeout(() => {
          setModal({ open: false })
        }, 1000);
      }
    })
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
      <h1 className='font-bold text-xl'>Add Qualification</h1>
      <p className='mb-3'>Fill To Add New Qualification</p>

      <Formik
            initialValues={{
              title: "",
              conferringOrganization: "",
              startYear: null,
              summary: ""
            }}
            validationSchema={FormikSchema}
            onSubmit={handleSubmit}
        >
      <Form>
        <div className="flex w-full gap-8">
          <div className='w-full'>
            <ApTextInput placeholder="Enter Professional Certificate or Award" name="title" label='Professional Certificate or Award'/>
          </div>

          <div className='w-full'>
            <ApTextInput placeholder="Enter Conferring Organization" name="conferringOrganization" label='Conferring Organization'/>
          </div>
        </div>

          <div className="w-full mt-5">
          <div className='w-full'>
                <ApSelectInput
                  name="startYear"
                  label='Start Year'
                >
                   <option selected disabled>Select Year</option>
                  {
                    years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))
                  }
                </ApSelectInput>
              </div>
          </div>

        <div className='mt-5'>
          <ApTextInput placeholder="Describe Your Qualification" name="summary" label='Summary' type='textarea'/>
        </div>

        <div className='gap-4 flex justify-end items-center mt-4'>
          <ApButton
            type="submit"
            onClick={() => {}}
            loading={loading}
            className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
          >
            Add Qualification
            <PlusOutlined className='text-lg'/>
          </ApButton>

          <ApButton
            type='button'
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
