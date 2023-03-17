import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik'
import { ApButton, ApSelectInput, ApTextInput } from '../../../components'
import * as Yup from "yup";
import { Button, message, Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';

const FormikSchema = Yup.object().shape({
  type: Yup.string()
      .required("* Payment Type is Required"),
    minBudget: Yup.string()
      .required("* Minimum Budget is Required."),
    maxBudget: Yup.string()
      .required("* Maximum Budget is Required.")
});

export const FormTwo = ({project, setProject, setProjectState, projectState}) => {

  const handleNext = (val) => 
  {
    setProject({...project, type: val.type, minBudget: val.minBudget, maxBudget: val.maxBudget})
    setProjectState({...projectState, loading: true})
    setTimeout(() => {
      setProjectState({loading: false, loaded: true}) 
    }, 3000);
  }

  return (
    <Formik
    initialValues={{
      type: "",
      minBudget: "",
      maxBudget: ""
    }}
    onSubmit={handleNext}
    validationSchema={FormikSchema}
    >
      <Form className='w-[800px] flex-col flex gap-10 -translate-y-36 bg-skin-base px-8 pt-8 shadow-md rounded-md'>
        <div>
            <div className='flex mb-2 items-center gap-2'>
            <h1 className='font-bold text-2xl'>What skills are required ?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-skin-accent' viewBox="0 0 24 24">
                        <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z"/>
                </svg> 
            </div>
            <p className='text-sm mb-3'>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
            <ApTextInput placeholder='Enter Skill Here' name='name'/>
        </div>

        <div>
            <h1 className='font-bold text-2xl mb-2'>How do you want to pay ?</h1>
            <p className='text-sm mb-3'>Hire based on an hourly rate and pay for hours billed
            or, agree on a price and release payment when the job is done.</p>
            <ApSelectInput
                  name="type"
                  value=''
              >
                <option selected disabled>Select Payment</option>
                <option value="HOURLY_RATE">Pay by the hour</option>
                <option value="HOURLY_RATE">Pay by the hour</option>
                <option value="FIXED_PRICE">Pay fixed price</option>
            </ApSelectInput>
        </div>

        <div>
            <h1 className='font-bold text-2xl mb-2'>What is your estimated budget ?</h1>
            <p className='text-sm mb-3'>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
            <div className='flex gap-4'>
                <ApTextInput label='Min Budget' placeholder='Enter Min Budget' name='minBudget'/>
                <ApTextInput label='Max Budget' placeholder='Enter Max Budget' name='maxBudget'/>
            </div>
        </div>

        <div className='flex justify-end  pb-5'>
          <ApButton
          >
            Proceed
          </ApButton>
        </div>
      </Form>
    </Formik>
  )
}

