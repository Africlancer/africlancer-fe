import React from 'react'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import * as Yup from 'yup'
import { IEducation, countries, years } from '../../model'
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'
import { useProfileContext } from '../../context'
import { COUNTRIES, YEARS } from '@/src/constants'

const FormikSchema = Yup.object().shape({
  // country: Yup.string().required('* required').nullable(true),
  insitution: Yup.string()
    .min(6, 'Password Should be at Least 6 Characters.')
    .required('* required'),
  degree: Yup.string().min(6, 'Password Should be at Least 6 Characters.').required('* required.'),
  // startYear: Yup.string().required('* required').nullable(true),
  // endYear: Yup.string().required('* required').nullable(true),
})

interface IProps {
  onDismiss: () => void 
  education?: IEducation
}

export const EditEducation: React.FC<IProps> = ({ onDismiss, education }) => {
  const { addOrUpdateEducation } = useProfileContext()

  const handleSubmit = async (val: any) => {
    let payload: IEducation = {
      ...val,
      _id: education?._id,
      startYear: val?.startYear?.value,
      endYear: val?.endYear?.value,
      country: val?.country?.value,
    }

    addOrUpdateEducation(education ? payload : {
      ...val,
      startYear: val?.startYear?.value,
      endYear: val?.endYear?.value,
      country: val?.country?.value,
    })
  }

  return (
    <>
      <div>
        <h1 className="font-black text-xl">Add Education</h1>
        <p className="mb-3">Fill To Add New Education</p>

        <Formik
          initialValues={{
            country: education?.country ? 
            {label: education?.country, value: education?.country} : '',
            insitution: education?.insitution || '',
            degree: education?.degree || '',
            startYear: education?.startYear ? 
            {label: education?.startYear, value: education?.startYear} : '',
            endYear: education?.endYear ? 
            {label: education?.endYear, value: education?.endYear} : '',
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex w-full  gap-5">
              <div className="w-full">
                <ApSelectInput options={COUNTRIES} name="country" label="Country"/>
              </div>

              <div className="w-full">
                <ApTextInput
                  placeholder="Enter Your Institution Name"
                  name="insitution"
                  label="Institution"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="w-full">
                <ApTextInput placeholder="Enter Your Degree Name" name="degree" label="Degree" />
              </div>
            </div>

            <div className="flex w-full items-center gap-5 mt-5">
              <div className="w-full">
                <ApSelectInput options={YEARS} name="startYear" label="Start Year"/>
              </div>

              <div className="w-full">
                <ApSelectInput options={YEARS} name="endYear" label="End Year"/>
              </div>
            </div>

            <div className="gap-4 flex justify-end items-center mt-4">
              <ApButton
                type="submit"
                // loading={loading}
                className="py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
              >
                Add Education
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
        </Formik>
      </div>
    </>
  )
}
