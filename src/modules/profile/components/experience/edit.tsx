import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
// import { ADD_EXPERIENCE, FIND_ONE_PROFILE } from '../../gql/query'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from '@/src/hooks/notification'
import { Formik, Form, FormikProps } from 'formik'
import { ApCheckBoxInput, ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from 'yup'
import { years, months, IExperience } from '../../model'
import { useProfileContext } from '../../context'
import { MONTHS, YEARS } from '@/src/constants'

const FormikSchema = Yup.object().shape({
  title: Yup.string().required('* required'),
  company: Yup.string().required('* required'),
  // startMonth: Yup.string().required('* required').nullable(true),
  // startYear: Yup.string().required('* required').nullable(true),
  // endMonth: Yup.string()
  //   .nullable(true)
  //   .when('working', {
  //     is: (working) => working === false,
  //     then: Yup.string().required('* required').nullable(true),
  //   }),
  // endYear: Yup.string()
  //   .nullable(true)
  //   .when('working', {
  //     is: (working) => working === false,
  //     then: Yup.string().required('* required').nullable(true),
  //   }),
  summary: Yup.string().required('* required.'),
})

interface IProps {
  onDismiss: () => void 
  experience?: IExperience
}

export const EditExperience: React.FC<IProps> = ({ onDismiss, experience }) => {
  const { addOrUpdateExperience } = useProfileContext()


  const handleSubmit = (val: any) => {
    let payload: IExperience = val?.working == true ? {
      _id: experience?._id,
      company: val?.company,
      summary: val?.summary,
      title: val?.title,
      working: val?.working,
      startMonth: val?.startMonth?.value,
      startYear: val?.startYear?.value,
    } : {
      ...val,
      _id: experience?._id,
      endMonth: val?.endMonth?.value,
      endYear: val?.endYear?.value,
      startMonth: val?.startMonth?.value,
      startYear: val?.startYear?.value,
    }

    let payload2: IExperience = val?.working == true ? {
      company: val?.company,
      summary: val?.summary,
      title: val?.title,
      working: val?.working,
      startMonth: val?.startMonth?.value,
      startYear: val?.startYear?.value,
    } : {
      ...val,
      endMonth: val?.endMonth?.value,
      endYear: val?.endYear?.value,
      startMonth: val?.startMonth?.value,
      startYear: val?.startYear?.value,
    }

    addOrUpdateExperience(experience ? payload : payload2)
  }

  return (
    <>
      <div>
        <h1 className="font-black text-xl">Add Experience</h1>
        <p className="mb-3">Fill To Add New Experience</p>

        <Formik
          initialValues={{
            title: experience?.title || '',
            company: experience?.company || '',
            startMonth: experience?.startMonth ? 
            {label: experience?.startMonth, value: experience?.startMonth} : '',
            startYear: experience?.startYear ? 
            {label: experience?.startYear, value: experience?.startYear} : '',
            endMonth: experience?.endMonth ? 
            {label: experience?.endMonth, value: experience?.endMonth} : '',
            endYear: experience?.endYear ? 
            {label: experience?.endYear, value: experience?.endYear} : '',
            summary: experience?.summary || '',
            working: experience?.working || false,
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <div className="flex w-full gap-5">
                <div className="w-full">
                  <ApTextInput
                    placeholder="Enter Your Position or Title"
                    name="title"
                    label="Title"
                  />
                </div>

                <div className="w-full">
                  <ApTextInput placeholder="Enter Company Name" name="company" label="Company" />
                </div>
              </div>

              <div className="flex w-full gap-5 mt-5">
                <div className="flex w-full items-center gap-5">
                  <div className="w-full">
                    <ApSelectInput options={MONTHS} name="startMonth" label="Start Month"/>
                  </div>

                  <div className="w-full">
                    <ApSelectInput options={YEARS} name="startYear" label="Start Year"/>
                  </div>
                </div>

                <div className="flex w-full items-center gap-5">
                  <div className="w-full">
                    <ApSelectInput isDisabled={props?.values?.working} options={MONTHS} name="endMonth" label="End Month"/>
                  </div>

                  <div className="w-full pt-0.5">
                    <ApSelectInput isDisabled={props?.values?.working} options={YEARS} name="endYear" label="End Year" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 my-5">
                <ApCheckBoxInput
                  name="working"
                  label="I'm Currently Working Here"
                />
              </div>

              <div>
                <ApTextInput
                  placeholder="Describe Your Working Experience"
                  name="summary"
                  label="Summary"
                  type="textarea"
                />
              </div>

              <div className="gap-4 flex justify-end items-center mt-4">
                <ApButton
                  type="submit"
                  // loading={loading}
                  className="py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
                >
                  Add Experience
                  <PlusOutlined className="text-lg" />
                </ApButton>

                <ApButton
                  // onClick={() => setModal({ open: false })}
                  className="py-2 border border-green-500 flex text-skin-accent rounded items-center p-3 justify-center gap-2"
                >
                  Cancel
                  <CloseOutlined className="text-lg" />
                </ApButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
