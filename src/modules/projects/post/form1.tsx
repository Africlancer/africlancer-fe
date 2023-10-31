import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { ApButton, ApTextInput, ArrowRightIcon } from '../../../components'
import * as Yup from 'yup'
import { Button, message, Upload } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'
import { ApSelect } from '@/src/components/input/selectinput'

const FormikSchema = Yup.object().shape({
  title: Yup.string().required('* Project Title is Required'),
  details: Yup.string().required('* Project Description is Required.'),
  summary: Yup.string().required('* Project Summary is Required.'),
})

export const FormOne = ({ setShowFormTwo, project, setProject }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [uploading, setUploading] = useState(false)

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file])

      return false
    },
    fileList,
  }

  const handleNext = (val) => {
    setProject({ ...project, title: val.title, details: val.details, summary: val.summary })
    setShowFormTwo(true)
  }

  return (
    <Formik
      initialValues={{
        title: project?.title ? project?.title : '',
        details: project?.details ? project?.details : '',
        summary: project?.summary ? project?.summary : '',
      }}
      onSubmit={handleNext}
      validationSchema={FormikSchema}
    >
      <Form className="w-[800px] flex-col flex gap-8 -translate-y-36 bg-skin-base px-8 pt-8 shadow-md rounded-md">
        <div>
          <h1 className="font-bold text-2xl">What is your project name ?</h1>
          <ApTextInput
            placeholder="e.g, Build me a website..."
            name="title"
            label="Choose a name for your project"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl">Enter your project description ?</h1>
          <ApTextInput
            placeholder="Describe your project here..."
            type="textarea"
            name="details"
            label="Tell us more about your project"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl">Enter your project summary ?</h1>
          <ApTextInput
            placeholder="Describe your project summary here..."
            type="textarea"
            name="summary"
            label="Give a short and detailed summary for your project"
          />
        </div>

        {/* <div className='border p-4'>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        </div> */}
        <div className="flex justify-end  pb-5">
          <ApButton type="submit">
            Proceed
            <ArrowRightIcon />
          </ApButton>
        </div>
      </Form>
    </Formik>
  )
}
