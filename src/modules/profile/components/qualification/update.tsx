import React from 'react'
import { ADD_QUALIFICATION, FIND_ONE_PROFILE } from '../../gql/query'
import useApNotification from '@/src/hooks/notification'
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Formik, Form } from 'formik'
import { ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from 'yup'
import { years } from '../../model'

const FormikSchema = Yup.object().shape({})

interface IProps {
  setModal: any
  modal: any
}

export const UpdateQualification: React.FC<IProps> = ({ setModal, modal }) => {
  const [addQualification, { loading }] = useMutation(ADD_QUALIFICATION, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })
  const { notificationContext, successMsg, errorMsg } = useApNotification()

  const handleSubmit = async (val) => {
    const payload = { ...val, startYear: parseInt(val.startYear), _id: modal.data._id }
    addQualification({
      variables: {
        qualification: payload,
      },
    })
      .then((val) => {
        if (val) {
          successMsg(`Success`, `Qualification has been updated.`)
          setTimeout(() => {
            setModal({ open: false })
          }, 1000)
        }
      })
      .catch((err) => {
        if (err) {
          let msg =
            err.message === 'Failed to fetch' ? 'Check Your Internet Connection' : err.message
          errorMsg('Error', msg)
        }
      })
  }

  return (
    <>
      {notificationContext}
      <div>
        <h1 className="font-bold text-xl">Update Qualification</h1>
        <p className="mb-3">Fill To Update Qualification</p>

        <Formik
          initialValues={{
            title: modal.data.title,
            conferringOrganization: modal.data.conferringOrganization,
            startYear: modal.data.startYear,
            summary: modal.data.summary,
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
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
              <div className="w-full">
                <ApSelectInput name="startYear" label="Start Year">
                  <option selected disabled>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </ApSelectInput>
              </div>
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
                onClick={() => {}}
                loading={loading}
                className="py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
              >
                Update Qualification
                <PlusOutlined className="text-lg" />
              </ApButton>

              <ApButton
                type="button"
                onClick={() => setModal({ open: false })}
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
