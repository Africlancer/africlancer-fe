import { ApTextInput } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { ArrowRightSvg } from '@/src/custom';
import { Form, Formik } from 'formik'
import Link from 'next/link';
import React from 'react'
import * as Yup from "yup";

const FormikSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a Valid Email Address")
        .required("Email is Required"),
    password: Yup.string()
        .min(6, "Password Should be at Least 6 Characters.")
        .required("Password is Required."),
});

export const SigninPage = () => {
    const handleSubmit = () => 
    {
       
    };

  return (
    <div className=' absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-skin-default'>
      <div className='bg-skin-alt px-7 py-10 shadow-lg w-cusw'>
        <div className='mb-8'>
            <h1 className='text-4xl font-bold mb-1'>Afric<span className='text-green-500'>lancer</span></h1>
            <p className='text-lg text-skin-base'>Welcome Back</p>
            <div className='bg-skin-muted h-0.5 w-full mt-3'></div>
        </div>

        <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        validationSchema={FormikSchema}
        onSubmit={handleSubmit}
        >
            <Form className='flex flex-col gap-3'>
                <ApTextInput placeholder="Email" name="email"/>
                <ApTextInput type="password" placeholder="Password" name="password"/>
                <div className='flex w-full justify-between text-skin-base'>
                    <div className='flex gap-2'>
                        <input type="checkbox"/>
                        <p>Remember Me</p>
                    </div>
                    <Link href='' className='text-skin-primary'>Forgot Password ?</Link>
                </div>

                <div className='flex justify-between items-center mt-5 text-skin-base'>
                    <div className='flex flex-col gap-1'>
                        <Link href='' className='text-skin-primary'>Create New Account</Link>
                        <p></p>
                        <div className='flex items-center gap-2'>
                            <p>Continue With Facebook</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='text-blue-800'>
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                            </svg>     
                        </div>                               
                    </div>

                    <div>
                        <ApButton 
                            onClick={() => {}}
                            className='py-3 flex items-center gap-2'
                            type='submit'
                        >
                            SIGN IN
                            <ArrowRightSvg/>
                        </ApButton>
                    </div>
                </div>
            </Form>
        </Formik>
      </div>
    </div>
  )
}
