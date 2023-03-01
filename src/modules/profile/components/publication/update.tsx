import { ApButton } from '@/src/components/button'
import { useMutation } from '@apollo/client'
import React from 'react'
import { ADD_PUBLICATION, FIND_ONE_PROFILE } from '../../gql/query'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import useApNotification from "@/src/hooks/notification";
import { Formik, Form } from 'formik'
import { ApTextInput } from '@/src/components'
import * as Yup from "yup";

const FormikSchema = Yup.object().shape({

});

interface IProps
{
  setModal: any,
  modal: any
}

export const UpdatePublication: React.FC<IProps> = ({setModal, modal}) => {

  const { notificationContext, successMsg, errorMsg } = useApNotification();
  const [addPublication, {loading}] = useMutation(ADD_PUBLICATION, {
    refetchQueries: [
      { query: FIND_ONE_PROFILE }
    ]
  })

  const handleSubmit = async(val) => 
  {
    const payload = { ...val, _id: modal.data._id}
    addPublication({ variables : {
      publication: payload
    }})
    .then((val) => { 
      if(val) { successMsg(`Success`, `Publication has been updated.`)
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
        <h1 className='font-bold text-xl'>Update Publication</h1>
        <p className='mb-3'>Fill To Update Publication</p>

        <Formik
            initialValues={{
              title: modal.data.title,
              publisher: modal.data.publisher,
              summary: modal.data.summary
            }}
            validationSchema={FormikSchema}
            onSubmit={handleSubmit}
        >
          <Form>
          <div className="flex w-full gap-8 mb-5">
            <div className='w-full'>
              <ApTextInput placeholder="Enter Publication Title" name="title" label='Publication Title'/>
            </div>

            <div className='w-full'>
              <ApTextInput placeholder="Enter Name of Publisher" name="publisher" label='Publisher'/>
            </div>
          </div>

          <div>
            <ApTextInput placeholder="Enter Summary" name="summary" type='textarea' label='Summary'/>
          </div>

            <div className='gap-4 flex justify-end items-center mt-4'>
              <ApButton
                onClick={() => {}}
                className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                type="submit"
                loading={loading}
              >
                Update Publication
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