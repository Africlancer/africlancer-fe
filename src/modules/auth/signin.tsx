import { ApTextInput } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { ArrowRightSvg } from '@/src/custom';
import { Form, Formik } from 'formik'
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react'
import * as Yup from "yup";
import { LoadingOutlined, CheckCircleFilled, CloseCircleFilled, EyeInvisibleFilled, EyeFilled, DoubleRightOutlined } from '@ant-design/icons'
import { bgImages } from './model';
import { useMutation } from '@apollo/client';
import { USER_SIGNIN } from './gql/query';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react"

const FormikSchema = Yup.object().shape({
    username: Yup.string()
    .min(6, "Username should be at list 6 char.")
    .required("Username is Required"),
    password: Yup.string()
        .min(6, "Password Should be at Least 6 Characters.")
        .required("Password is Required."),
});

export const SigninPage = () => {
    const [api, contextHolder] = notification.useNotification();
    const router = useRouter()
    const [userSignIn, {}] = useMutation(USER_SIGNIN)
    const [loading, setLoading] = useState(false)
    const [bgImg, setBgImg] = useState<string>()

    useLayoutEffect(() => 
    {
        let index = Math.floor(Math.random() * bgImages.length)
        let item = bgImages[index]
        setBgImg(item)
    },[])

    const handleSubmit = async({username, password}) => 
    {
        setLoading(true)
        userSignIn({ variables : {
            user: { username, password }
        }})
        .then((value) => 
        {
            api.info({
                icon: (<CheckCircleFilled className='text-green-500' />),
                message: `Signed In Successfully`,
                description:(<div className='flex gap-3'>
                    <p>Redirecting to Your Dashboard.</p>
                </div>),
                placement: 'topLeft',
            });
            // setTimeout(() => {
            //     router.push('/signin')
            // }, 2000)
        })
        .catch((err) => 
        {
            setLoading(false)
            api.info({
                icon: (<CloseCircleFilled className='text-red-500' />),
                message: `Error`,
                description:(<div className='flex gap-3'>
                    <p>{err.message}</p>
                </div>),
                placement: 'topLeft',
            });
        })
    };

  return (
    <>
    {contextHolder}
    <div className='overflow-auto w-full bg-center bg-cover bg-scroll sigin-bg' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='page-bg-overlay py-10 flex justify-between w-full bg-center bg-cover text-skin-inverted bg-overlay2'>
            <div className='flex flex-col justify-center p-10'>
                <h1 className='text-7xl font-bold mb-2 text-skin-base'>Afric<span className='text-skin-accent'>lancer</span></h1>
                <div className='flex gap-2 text-xl'>
                    <p className='text-skin-base'>No Account ?</p>
                    <Link href='' className='text-skin-accent flex items-center gap-1'>Create New Account<DoubleRightOutlined className='text-base'/></Link>
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
                <div className='bg-skin-base px-7 py-10 rounded-lg shadow-lg w-cusw'>
                <div className=''>
                    <div className='pb-3 border-b border-skin-border'>
                        <h1 className='text-4xl font-bold mb-1 text-skin-inverted'>SIGN IN</h1>
                        <p className='text-lg'>Welcome Back</p>
                    </div>
                </div>

                <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={FormikSchema}
                onSubmit={handleSubmit}
                >
                    <Form className='flex flex-col gap-3 mt-8'>
                        <ApTextInput placeholder="Username" name="username"/>
                        <ApTextInput type="password" placeholder="Password" name="password"/>
                        <div className='flex w-full justify-between text-skin-inverted mt-5'>
                            <div className='flex gap-2'>
                                <input type="checkbox"/>
                                <p>Remember Me</p>
                            </div>
                            <Link href='' className='text-skin-accent'>Forgot Password ?</Link>
                        </div>

                        <div className='mt-5 flex flex-col gap-3'>
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
                                Proceed
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
}


{/*
    const showPasswordBtn = useRef<HTMLElement>()
    const hidePasswordBtn = useRef<HTMLElement>()
    const passwordRef = useRef<HTMLInputElement>()

    const togglePassword = () =>
    {
        if(passwordRef.current.type === 'password')
        {
            passwordRef.type = 'text'
            hidePasswordBtn.current.classList.add('hidden')
            showPasswordBtn.current.classList.remove('hidden')
        }
        else
        {
            passwordRef.current.type = 'password'
            showPasswordBtn.current.classList.add('hidden')
            hidePasswordBtn.current.classList.remove('hidden')
        }
    } <EyeInvisibleFilled ref={hidePasswordBtn} className='text-skin-muted text-xl mt-0.5'/>
<EyeFilled ref={showPasswordBtn} className='text-skin-muted text-xl mt-0.5 hidden'/>                     
                <div className="relative w-full">
                <div className="absolute pt-1 right-0 flex items-center px-2">
                    <EyeInvisibleFilled className='text-skin-muted text-xl mt-0.5'/>
                    <EyeFilled className='text-skin-muted text-xl mt-0.5 hidden'/>                    
                </div>
                    <ApTextInput type="password" placeholder="Password" name="password"/>
                </div>
*/}

{/* 
                        <ApButton 
                            onClick={() => {}}
                            className='py-3 flex bg-blue-600 text-white rounded items-center w-full justify-center gap-2'
                            type='submit'
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='text-white'>
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                                </svg>
                            Continue With Facebook
                        </ApButton>

                        <ApButton 
                            onClick={() => {}}
                            className='py-3 bg-white flex border rounded items-center w-full justify-center gap-2'
                            type='submit'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20" height="20"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                            Continue With Google
                        </ApButton> */}