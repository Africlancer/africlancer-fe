import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_EXPERIENCE, FIND_ONE_PROFILE } from '../../gql/query'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from '@/src/hooks/notification'
import { Formik, Form } from 'formik'
import { ApCheckBox, ApSelectInput, ApTextInput } from '@/src/components'
import * as Yup from 'yup'
import { years, months } from '../../model'

const FormikSchema = Yup.object().shape({})

interface IProps {
  setModal: any
  modal: any
}

export const UpdateExperience: React.FC<IProps> = ({ setModal, modal }) => {
  const { notificationContext, successMsg, errorMsg } = useApNotification()
  const [addExperience, { loading }] = useMutation(ADD_EXPERIENCE, {
    refetchQueries: [{ query: FIND_ONE_PROFILE }],
  })

  const [disableEnd, setDisableEnd] = useState(false)
  const workingCheckBox = (e) => {
    setDisableEnd(e.target.checked)
  }

  const handleSubmit = (val) => {
    const endYear = !val.working ? parseInt(val.endYear) : null
    const endMonth = !val.working ? val.endMonth : null

    const payload = {
      ...val,
      endMonth,
      _id: modal.data._id,
      endYear,
      startYear: parseInt(val.startYear),
    }
    addExperience({
      variables: {
        experience: payload,
      },
    })
      .then((val) => {
        if (val) {
          successMsg(`Success`, `Experience has been updated.`)
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
        <h1 className="font-bold text-xl">Update Experience</h1>
        <p className="mb-3">Fill To Update Experience</p>

        <Formik
          initialValues={{
            title: modal.data.title,
            company: modal.data.company,
            startMonth: modal.data.startMonth,
            startYear: modal.data.startYear,
            endMonth: modal.data.endMonth,
            endYear: modal.data.endYear,
            summary: modal.data.summary,
            working: modal.data.working,
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
        >
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
                  <ApSelectInput name="startMonth" label="Start Month">
                    <option selected disabled>
                      Select Month
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </ApSelectInput>
                </div>

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

              <div className="flex w-full items-center gap-5">
                <div className="w-full">
                  <ApSelectInput name="endMonth" label="End Month" disabled={disableEnd}>
                    <option selected disabled>
                      Select Month
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </ApSelectInput>
                </div>

                <div className="w-full pt-0.5">
                  <ApSelectInput name="endYear" label="End Year" disabled={disableEnd}>
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
            </div>

            <div className="flex gap-2 my-5">
              <ApCheckBox
                name="working"
                label="I'm Currently Working Here"
                onChange={workingCheckBox}
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
                onClick={() => {}}
                type="submit"
                loading={loading}
                className="py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
              >
                Update Experience
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
