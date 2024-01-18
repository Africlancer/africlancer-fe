import React from 'react'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from 'yup'
import { IQualification, years } from '../../model'
import { YEARS } from '@/src/constants'
import { useProfileContext } from '../../context'

const FormikSchema = Yup.object().shape({
  title: Yup.string().min(6, 'Username should be at list 6 char.').required('* required'),
  conferringOrganization: Yup.string()
    .min(6, 'Password Should be at Least 6 Characters.')
    .required('* required'),
  // startYear: Yup.object().required('* required').nullable(true),
  summary: Yup.string()
    .min(6, 'Password Should be at Least 6 Characters.')
    .required('* required.'),
})

interface IProps {
  onDismiss: () => void 
  qualification?: IQualification
}

export const EditQualification: React.FC<IProps> = ({ onDismiss, qualification }) => {
  const { addOrUpdateQualification, actionLoading } = useProfileContext()

  const handleSubmit = async (val: any) => {
    let payload: IQualification = {
      _id: qualification?._id,
      ...val,
      startYear: val?.startYear?.value
    }

    addOrUpdateQualification(qualification ? payload : {
      ...val,
      startYear: val?.startYear?.value
    }).finally(() => onDismiss())
  }

  return (
    <>
      <div>
        <h1 className="font-black text-xl">
          {qualification ? "Edit Qualification" : "Add Qualification"}
        </h1>
        <p className="mb-3">
          {qualification ? "Edit To Update Qualification" : "Fill To Add New Qualification"}
        </p>

        <Formik
          initialValues={{
            title: qualification?.title || '',
            conferringOrganization: qualification?.conferringOrganization || '',
            startYear: qualification?.startYear ? 
              {label: qualification?.startYear, value: qualification?.startYear} : '',
            summary: qualification?.summary || '',
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        > 
          <Form>
            <div className="flex w-full gap-8">
              <div className="w-full">
                <ApTextInput
                  placeholder="Enter Professional Certificate or Award"
                  name="title"
                  label="Professional Certificate or Award"
                />
              </div>

              <div className="w-full">
                <ApTextInput
                  placeholder="Enter Conferring Organization"
                  name="conferringOrganization"
                  label="Conferring Organization"
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <ApSelectInput options={YEARS} name="startYear" label="Start Year"/>
            </div>

            <div className="mt-5">
              <ApTextInput
                placeholder="Describe Your Qualification"
                name="summary"
                label="Summary"
                type="textarea"
              />
            </div>

            <div className="gap-4 flex justify-end items-center mt-4">
              <ApButton
                type="submit"
                loading={actionLoading}
              >
                {qualification ? "Edit Qualification" : "Add Qualification"}
                <PlusOutlined className="text-lg" />
              </ApButton>

              <ApButton
                onClick={onDismiss}
                outline
                disabled={actionLoading}
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
