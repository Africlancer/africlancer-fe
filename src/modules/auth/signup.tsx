import { ApTextInput, AuthPageLayout } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { ArrowRightSvg } from '@/src/custom';
import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import { CREATE_USER } from './gql/query';
import { LoadingOutlined } from '@ant-design/icons'
import useApNotification from "@/src/hooks/notification";
import { useRouter } from 'next/router';
import { IUser } from "./model";

const FormikSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .email("Valid Email is Required")
      .required("Email is Required"),
    username: Yup.string()
      .min(6, "Username should be at list 6 char.")
      .required("First name is required"),
    password: Yup.string()
      .min(6, "password should be as list 6 char.")
      .required("password is required"),
    confirmPassword: Yup.string().required("password is required"),
  });

export const SignUpPage = () => {
    const { notificationContext, successMsg, errorMsg } = useApNotification();
    const router = useRouter()
    const [createUser, {}] = useMutation(CREATE_USER)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingText, setIsLoadingText] = useState('Please Wait...')

    const handleSubmit = (values: IUser) => {
        setIsLoading(true)
        createUser({ variables : {
            user: { 
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                username: values.username,
                password: values.password
            }
        }})
        .then((val) => { 
        if(val) 
        {   setIsLoadingText('Redirecting...')
            successMsg(`Account Created`, 
            <div>
                <p className='mb-4'>Please Check Your Mail to Activate Your Account.</p>
                <p className='flex items-center gap-3'>Redirecting to Login Page 
                <LoadingOutlined  style={{fontSize: 14}} spin/></p>
            </div>)
            setTimeout(() => {
                router.push('/signin')
                setIsLoading(false)
            }, 8000);
        }})
        .catch(err => 
        {  
          setIsLoading(false)
          if(err) 
          {
            let msg = err.message === "Failed to fetch" ? "Check Your Internet Connection" :  err.message
            errorMsg("Error", msg) 
          }
        })
    };

    return (
        <>
        {notificationContext}
        <AuthPageLayout authPage='signup'>
        <div className='flex justify-center items-center px-10'>
        <div className='bg-skin-base px-7 pt-8 pb-5 rounded-lg shadow-lg w-cusw2'>
        <div className=''>
            <div className='pb-3 border-b border-skin-border'>
                <h1 className='text-4xl font-bold mb-1 text-skin-inverted'>SIGN UP</h1>
                <p className='text-lg'>Create a New Account</p>
            </div>
        </div>

        <Formik 
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        }}
        validationSchema={FormikSchema}
        onSubmit={handleSubmit}
        >
        <Form className='flex flex-col gap-3 mt-5'>
        <div className='grid grid-cols-2 gap-5'>
            <ApTextInput placeholder="First Name" name="firstName" />
            <ApTextInput placeholder="Last Name" name="lastName" />
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <ApTextInput placeholder="Email" name="email" />
            <ApTextInput placeholder="Username" name="username" />
        </div>
            <ApTextInput
                type="password"
                placeholder="Password"
                name="password"
            />
            <ApTextInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            />
            
            <div className='flex w-full justify-between text-skin-inverted'>
                <div className='flex gap-2'>
                    <input type="checkbox"/>
                    <p>I Agree to the Africlancer <span className='text-skin-accent'>User Agreement</span> and <span className='text-skin-accent'>Privacy Policy</span></p>
                </div>
            </div>

            <div className='my-3 flex flex-col gap-3'>
                <ApButton
                    onClick={() => {}}
                    className='disabled:cursor-not-allowed flex justify-center gap-2 items-center submitBtn py-3 bg-skin-accent text-white rounded w-full'
                    type='submit'
                    loading={ isLoading }
                    loadingText={ loadingText }
                >
                    Create New Account  <ArrowRightSvg/>
                </ApButton>
            </div>

        </Form>
        </Formik>
        </div>
        </div> 
        </AuthPageLayout>
        </>
    )
};