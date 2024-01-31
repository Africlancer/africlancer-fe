import { Form, Formik } from 'formik'
import React from 'react'
import { InfoCircleFilled } from '@ant-design/icons'
import { ApButton, ApTextInput } from '@/src/components'
import { useBiddingContext } from './context'
import { useProjectContext } from '../project/context'

interface IProps {
  projectID: string
}

export const CreateBid = ({ projectID }) => {
  const { createBid, actionLoading } = useBiddingContext()
  const { findProject } = useProjectContext()

  const handleSubmit = (val) => {    
    createBid({
      projectID,
      ...val
    }, )
  }

  return (
    <div className='pr-10'>
      <div className="bg-white shadow-lg rounded-lg w-[70%]">
        <h1 className="text-xl font-bold px-5 py-3 border-b">Place a Bid on this Project</h1>
        <div className="p-5">
          <Formik
            initialValues={{
              budget: '',
              deliveredIn: '',
              proposal: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex items-center gap-2">
                <InfoCircleFilled className="text-blue-500 text-lg" />
                <p className="mt-0.5">
                  You will be able to edit your bid until the project is awarded to someone.
                </p>
              </div>
              <div className="flex justify-between gap-8 mt-5">
                <ApTextInput inputType="number" name="budget" label="Your Bid Amount" />
                <ApTextInput
                  inputType="number"
                  name="deliveredIn"
                  label="This project will be delivered in"
                />
              </div>

              <div className="mt-5">
                <ApTextInput name="proposal" label="Describe your proposal" type="textarea" />
              </div>

              <div className="flex justify-end mt-5">
                <ApButton type='submit' loading={actionLoading}>Place Your Bid</ApButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
