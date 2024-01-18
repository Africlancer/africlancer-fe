import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React from 'react'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from '@/src/hooks/notification'
import { Formik, Form } from 'formik'
import { FormikSchema } from './constants'
import { ApTextInput } from '@/src/components'
import { IPublication } from '../../model'
import { useProfileContext } from '../../context'

interface IProps {
  onDismiss: () => void 
  publication?: IPublication
}

export const EditPublication: React.FC<IProps> = ({ onDismiss, publication }) => {
  const { addOrUpdatePublication, actionLoading } = useProfileContext()

  const handleSubmit = async (val: any) => {
    let payload: IPublication = {
      _id: publication?._id,
      ...val
    }

    addOrUpdatePublication(publication ? payload : val)
    .finally(() => onDismiss())
  } 

  return (
    <>
      <div>
        <h1 className="font-black text-xl">
          {publication ? "Edit Publication" : "Add Publication"}
        </h1>
        <p className="mb-3">
          {publication ? "Edit To Update Publication" : "Fill To Add New Publication"}
        </p>

        <Formik
          initialValues={{
            title: publication?.title || '',
            publisher: publication?.publisher || '',
            summary: publication?.summary || '',
          }}
          validationSchema={FormikSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form>
            <div className="flex w-full gap-8 mb-5">
              <div className="w-full">
                <ApTextInput
                  placeholder="Enter Publication Title"
                  name="title"
                  label="Publication Title"
                />
              </div>

              <div className="w-full">
                <ApTextInput
                  placeholder="Enter Name of Publisher"
                  name="publisher"
                  label="Publisher"
                />
              </div>
            </div>

            <div>
              <ApTextInput
                placeholder="Enter Summary"
                name="summary"
                type="textarea"
                label="Summary"
              />
            </div>

            <div className="gap-4 flex justify-end items-center mt-4">
              <ApButton
                type="submit"
                loading={actionLoading}
              >
                {publication ? "Edit Publication" : "Add Publication"}
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