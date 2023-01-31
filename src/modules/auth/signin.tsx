import { ApTextInput } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { ArrowRightSvg } from '@/src/custom';
import { Form, Formik } from 'formik'
import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react'
import * as Yup from "yup";
import { EyeInvisibleFilled, EyeFilled, DoubleRightOutlined } from '@ant-design/icons'
import img1 from '../../../public/test-bg.png'

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
    const [bgImg, setBgImg] = useState<string>()

    useLayoutEffect(() => 
    {
        const bgImages = [
            'https://img.freepik.com/free-photo/abstract-background-with-red-lines_1361-3531.jpg?w=740&t=st=1675121861~exp=1675122461~hmac=b722bdae7bea9b2483ed913f99738b990a30ecf7759d904867bd2c96ad0c3d0f',
            'https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?t=st=1675121854~exp=1675122454~hmac=4f896d7788f517cd1bf0225bf9e43cc9937f1d65fa82af0ddc791a7e570b665e',
            'https://img.freepik.com/premium-photo/succulent-abstract-green-tropical-forest-leaves-close-up_88135-40084.jpg?w=826',
            'https://img.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg?w=826&t=st=1675122690~exp=1675123290~hmac=3fcab7c2cb4f9935d7feb78d9271448798962c85620d225d94c06f60031e7d73',
            'https://img.freepik.com/premium-photo/abstract-painting-color-texture-modern-futuristic-pattern-loseup-painting-colorful-background_88135-37873.jpg?w=826',
            'https://img.freepik.com/free-vector/gradient-abstract-geometric-background_23-2149120339.jpg?w=740&t=st=1675122839~exp=1675123439~hmac=a8878e57a3b5a2bf6ff467d08aa820adee2b3a2f6cb6059ad7b9b0611046cb07',
            'https://img.freepik.com/free-vector/colorful-gradient-abstract-wallpaper_23-2149118073.jpg?w=740&t=st=1675122861~exp=1675123461~hmac=90a9384c70f966d3ba768358402344280d74b948af0b470574b12cb26996ae3d',
            'https://img.freepik.com/free-vector/abstract-white-shapes-background_79603-1362.jpg?w=740&t=st=1675122890~exp=1675123490~hmac=fd0ba4db8d3de7d3a05dd527f5df2b78d62de8e602f30d2fe0c8f9b1384e3b81',
            'https://img.freepik.com/free-vector/realistic-neon-lights-background_52683-59941.jpg?w=740&t=st=1675122925~exp=1675123525~hmac=21123952b18f905485627a84a8b26266702b9d3985fa8c291be41303440bc2c3',
            'https://img.freepik.com/free-photo/creative-wallpaper-with-white-shapes_23-2148811498.jpg?w=740&t=st=1675122946~exp=1675123546~hmac=fb2a870f71e4d1411e1e867c0dcfdefa00d01ea3502852f7c3727f3c43f24cb5',
            'https://img.freepik.com/free-photo/creative-background-with-white-shapes_23-2148811499.jpg?w=740&t=st=1675122960~exp=1675123560~hmac=4abbfddb0712cd6a420a596798bd45c2ad5571786c84cc06e4efa0aeeeed9aab',
            'https://img.freepik.com/free-photo/high-angle-creative-background-with-grey-shapes_23-2148811502.jpg?w=740&t=st=1675122983~exp=1675123583~hmac=421d8b1d7e35292f5d297532b2d3df8e38008ea6516bbb8e9f615a21b91e53f1',
            'https://img.freepik.com/free-vector/gradient-glassmorphism-background_23-2149447861.jpg?w=740&t=st=1675122998~exp=1675123598~hmac=4f0871d728cc5f614fa482ff562d37763bf853b566dc323ae50bcea869d5a995',
            'https://img.freepik.com/free-vector/designs-gradient-modern-green-background_343694-2029.jpg?w=826&t=st=1675123027~exp=1675123627~hmac=4fc80bb8b4785a94bb03592de5590acb859ac005f97a11428be8cad71a9912f5',
            'https://img.freepik.com/free-vector/abstract-colorful-creative-wave-background_1035-17397.jpg?w=740&t=st=1675123039~exp=1675123639~hmac=badb85fdd5c7ef56eaebae8869f2dc82188d288f7a2b5004079809cb7a5036aa',
            'https://img.freepik.com/premium-photo/colorful-abstract-background-with-waves-art-pattern_183314-10832.jpg?w=740',
            'https://img.freepik.com/free-vector/gradient-geometric-wallpaper_52683-55729.jpg?w=740&t=st=1675123176~exp=1675123776~hmac=90c353ca2cd062f82e66084e9c9c25532e9d3db319e5d3ce013efc8b550ec0db',
            'https://img.freepik.com/free-vector/realistic-polygonal-background_52683-60158.jpg?w=740&t=st=1675123194~exp=1675123794~hmac=53cdec64095276351b0f01ca74bd3283a0eec75553811fe28dd297c6a160a78d',
            'https://img.freepik.com/free-vector/3d-triangle-background-with-vivid-colors_23-2148392916.jpg?w=740&t=st=1675123209~exp=1675123809~hmac=f5887c778e42296bb5e4022fa1ede9ee0b5baf9caaf84ed843881586a89ca106',
            'https://img.freepik.com/free-vector/3d-wave-design-blue-background-blue-yellow-abstract-wave-background_331749-345.jpg?w=826&t=st=1675123255~exp=1675123855~hmac=d6acfb53fd29a75542686294626785cbf1f13da8c66a1a9459701ed3b4aa414b'
        ]

        let index = Math.floor(Math.random() * bgImages.length)
        let item = bgImages[index]
        setBgImg(item)
    },[])


  return (
    <div className='overflow-auto w-full bg-center bg-cover bg-scroll sigin-bg' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='page-bg-overlay py-10 flex justify-between w-full bg-center bg-cover text-skin-inverted bg-overlay2'>
            <div className='flex flex-col justify-center p-10'>
                <h1 className='text-7xl font-bold mb-2 text-skin-base'>Afric<span className='text-skin-accent'>lancer</span></h1>
                <div className='flex gap-2 text-xl'>
                    <p className='text-skin-base'>No Account ?</p>
                    <Link href='' className='text-skin-accent flex items-center gap-1'>Create New Account<DoubleRightOutlined className='text-base'/></Link>
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
                    email: "",
                    password: "",
                }}
                validationSchema={FormikSchema}
                onSubmit={handleSubmit}
                >
                    <Form className='flex flex-col gap-3 mt-5'>
                        <ApTextInput placeholder="Email" name="email"/>
                        <ApTextInput type="password" placeholder="Password" name="password"/>
                        <div className='flex w-full justify-between text-skin-inverted'>
                            <div className='flex gap-2'>
                                <input type="checkbox"/>
                                <p>Remember Me</p>
                            </div>
                            <Link href='' className='text-skin-accent'>Forgot Password ?</Link>
                        </div>

                        <div className='my-3 flex flex-col gap-3'>
                        <ApButton 
                            onClick={() => {}}
                            className='py-3 flex bg-skin-accent text-white rounded items-center w-full justify-center gap-2'
                            type='submit'
                        >
                            Proceed
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                        </ApButton>

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
                        </ApButton>
                        </div>

                    </Form>
                </Formik>
                </div>
            </div>
        </div>
    </div>
    // <div className='pt-8 pb-10 h-full w-full flex items-center justify-center bg-skin-alt'>
    //     <div className='bg-skin-base px-7 py-10 shadow-lg w-cusw'>
    //     <div className='mb-8'>
    //         <h1 className='text-4xl font-bold mb-1 text-skin-inverted'>Afric<span className='text-skin-accent'>lancer</span></h1>
    //         <div className='flex justify-between pb-3 items-center border-b border-skin-border'>
    //             <p className='text-lg text-skin-inverted'>Welcome Back</p>
    //             <Link href='' className='text-skin-accent'>Create New Account</Link>
    //         </div>
    //     </div>

    //     <Formik
    //     initialValues={{
    //         email: "",
    //         password: "",
    //     }}
    //     validationSchema={FormikSchema}
    //     onSubmit={handleSubmit}
    //     >
    //         <Form className='flex flex-col gap-3'>
    //             <ApTextInput placeholder="Email" name="email"/>
    //             <ApTextInput type="password" placeholder="Password" name="password"/>
    //             <div className='flex w-full justify-between text-skin-inverted'>
    //                 <div className='flex gap-2'>
    //                     <input type="checkbox"/>
    //                     <p>Remember Me</p>
    //                 </div>
    //                 <Link href='' className='text-skin-accent'>Forgot Password ?</Link>
    //             </div>

    //             <div className='my-3 flex flex-col gap-3'>
    //             <ApButton 
    //                 onClick={() => {}}
    //                 className='py-3 flex bg-skin-accent text-white rounded items-center w-full justify-center gap-2'
    //                 type='submit'
    //             >
    //                 SIGN IN
    //                 <ArrowRightSvg/>
    //             </ApButton>

    //             <ApButton 
    //                 onClick={() => {}}
    //                 className='py-3 flex bg-blue-600 text-white rounded items-center w-full justify-center gap-2'
    //                 type='submit'
    //             >
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='text-white'>
    //                         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
    //                     </svg>
    //                 Continue With Facebook
    //             </ApButton>

    //             <ApButton 
    //                 onClick={() => {}}
    //                 className='py-3 bg-white flex border rounded items-center w-full justify-center gap-2'
    //                 type='submit'
    //             >
    //                 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20" height="20"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
    //                 Continue With Google
    //             </ApButton>
    //             </div>

    //         </Form>
    //     </Formik>
    //   </div>
    // </div>
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
