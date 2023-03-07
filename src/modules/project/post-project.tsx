import { Form, Formik } from 'formik'
import { ApButton, ApTextInput } from '../../components'
import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import * as Yup from "yup";
import { useProjectState } from './context';
import { bgImages } from './model';
import { Navbar } from '@/src/components/navbar';
const FormikSchema = Yup.object().shape({
  name: Yup.string()
    .required("* Project Name is Required"),
  description: Yup.string()
    .required("* Project Description is Required."),
});

export const PostProjectPage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const { createProject, loading } = useProjectState();
  const [bgImg, setBgImg] = useState<string>();

  useEffect(() => {
      let index = Math.floor(Math.random() * bgImages.length);
      let item = bgImages[index];
      setBgImg(item);
  }, []);

  const handleUpload = (values) => {
    console.log(fileList)
    
    console.log(loading);
    createProject({

    }).then((val) => {
      console.log(val);
    })
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <div className='h-full bg-skin-alt'>
        <Navbar avatar=''/>
        <div className='pt-[62px]'>
        <div className='w-full bg-center bg-cover h-[450px]'
        style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className='text-white h-full w-full bg-overlay2 flex flex-col items-center pt-32'>
            <div className='w-[800px]'>
              <h1 className='font-bold text-5xl mb-3'>Tell us what you need done.</h1>
              <p className='text-lg'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
            </div>
          </div>
        </div>

        <div className='bg-skin-alt w-[full] flex-col flex justify-center items-center'>
            <Formik
            initialValues={{
              name: "",
              description: ""
            }}
            onSubmit={handleUpload}
            validationSchema={FormikSchema}
            >
              <Form className='w-[800px] flex-col flex gap-5 -translate-y-36 bg-skin-base px-8 pt-8 shadow-md rounded-md'>
                <ApTextInput placeholder='e.g, Build me a website' name='name' label='Choose a name for your project'/>
                <ApTextInput placeholder='Describe your project here...' type='textarea' name='description' label='Tell us more about your project'/>
                <div className='border p-4'>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                </div>

                <div className='flex justify-end  pb-5'>
                  <ApButton
                  >
                    Post Project
                  </ApButton>
                </div>
              </Form>
            </Formik>
        </div>
        </div>
    </div>
  )
}

