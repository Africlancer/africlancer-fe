import { ApTextInput } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { ArrowRightSvg } from '@/src/custom';
import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik'
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react'
import * as Yup from "yup";
import { CREATE_USER } from './gql/query';
import { LoadingOutlined, DoubleRightOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { bgImages } from './model';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useAuthState } from "./context";
import { IUser } from "./model";

const FormikSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("First name is required"),
    email: Yup.string()
      .email("valid email is required")
      .required("First name is required"),
    username: Yup.string()
      .min(6, "Username should be at list 6 char.")
      .required("First name is required"),
    password: Yup.string()
      .min(6, "password should be as list 6 char.")
      .required("password is required"),
    confirmPassword: Yup.string().required("password is required"),
  });

export const SignUpPage = () => {
    const [api, contextHolder] = notification.useNotification();
    const router = useRouter()
    const [createUser, {}] = useMutation(CREATE_USER)
    //const [loading, setLoading] = useState(false)
    const [bgImg, setBgImg] = useState<string>()

    useLayoutEffect(() => 
    {
        let index = Math.floor(Math.random() * bgImages.length)
        let item = bgImages[index]
        setBgImg(item)
    },[])

    const { signUp, loading } = useAuthState();

    const handleSubmit = (values: IUser) => {
      console.log(loading);
      signUp({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        password: "abc1231",
      }).then((val) => {
        console.log(val);
      })
    };

    // const handleSubmit = ({ firstName, lastName, email, username, password, confirmPassword }) => 
    // {   
    //     setLoading(true)
    //     createUser({ variables: {
    //         user: { firstName, lastName, email, username, password }   
    //     }})
    //     .then((value) => {
    //         api.info({
    //             icon: (<CheckCircleFilled className='text-green-500' />),
    //             message: `Account Created`,
    //             description:(<div className='flex gap-3'>
    //                 <p>Redirecting to Sign in Page, Sign In to Proceed.</p>
    //             </div>),
    //             placement: 'topLeft',
    //         });
    //         setTimeout(() => {
    //             router.push('/signin')
    //         }, 2000)
    //     })
    //     .catch((err) =>
    //     {
    //         setLoading(false)
    //         api.info({
    //             icon: (<CloseCircleFilled className='text-red-500' />),
    //             message: `Error`,
    //             description:(<div className='flex gap-3'>
    //                 <p>{err.message}, Please Change Username or Email</p>
    //             </div>),
    //             placement: 'topLeft',
    //         });
    //     })
    // };

    return (
        <>
        {contextHolder}
        <div className='overflow-auto w-full bg-center bg-cover bg-scroll sigin-bg' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='page-bg-overlay py-10 flex justify-between w-full bg-center bg-cover text-skin-inverted bg-overlay2'>
            <div className='flex flex-col justify-center p-10'>
                <h1 className='text-7xl font-bold mb-2 text-skin-base'>Afric<span className='text-skin-accent'>lancer</span></h1>
                <div className='flex gap-2 text-xl'>
                    <p className='text-skin-base'>Already Have an Account ?</p>
                    <Link href='' className='text-skin-accent flex items-center gap-1'>Sign In<DoubleRightOutlined className='text-base'/></Link>
                </div>
                <div className='flex mt-2 items-center gap-2'>
                    <p className='text-skin-base text-xl'>Continue With - </p>
                    <div className='bg-white rounded-full p-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25" height="25"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    </div>
                    <div className='bg-white rounded-full p-1.5 ml-1'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill='blue' width="24" height="22" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>                    
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center px-10'>
                <div className='bg-skin-base px-7 py-10 rounded-lg shadow-lg w-cusw2'>
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
                    {
                        loading ? 
                        <ApButton 
                            onClick={() => {}}
                            disabled
                            className='cursor-not-allowed submitBtn py-3 bg-skin-accent text-white rounded w-full '
                            type='submit'
                        >
                                <LoadingOutlined  style={{fontSize: 25, color: '#fff'}} spin/>
                        </ApButton>

                        : 
                        <ApButton 
                            onClick={() => {}}
                            className='flex justify-center gap-2 items-center submitBtn py-3 bg-skin-accent text-white rounded w-full '
                            type='submit'
                        >
                                Create New Account
                                <ArrowRightSvg/>
                        </ApButton>
                    }
                    </div>
    
                </Form>
            </Formik>

                </div>
            </div>
        </div>
    </div>
    </>
    )
};