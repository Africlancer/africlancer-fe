import { ApTextInput, AuthPageLayout } from "@/src/components";
import { ApButton } from "@/src/components/button";
import { ArrowRightSvg } from "@/src/custom";
import useApNotification from "@/src/hooks/notification";
import { LoadingOutlined } from "@ant-design/icons";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

const FormikSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username should be at list 6 char.")
    .required("Username is Required"),
  password: Yup.string()
    .min(6, "Password Should be at Least 6 Characters.")
    .required("Password is Required."),
});

export const SigninPage = () => {
  const { notificationContext, successMsg, errorMsg } = useApNotification();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setIsLoadingText] = useState('Please Wait...')

  const handleSubmit = async (values) => {
    setIsLoading(true)
    const rs: any = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });

    if (rs.error) {
      let msg = rs.error === "fetch failed" ? "Check Your Internet Connection" :  rs.error
      errorMsg("Error", msg);
      setIsLoading(false);
      return;
    }

    setIsLoadingText('Redirecting...')
    successMsg(`Signed In Successfully`, 
    <div>
        <p className='flex items-center gap-3'>Redirecting to Your Dashboard. 
        <LoadingOutlined  style={{fontSize: 14}} spin/></p>
    </div>)
    setTimeout(() => {
      router.push("/dashboard");
      setIsLoading(false)
    }, 5000);
  };

  return (
    <>
      {notificationContext}
      <AuthPageLayout authPage="signin">
      <div className="flex justify-center items-center px-10">
      <div className="bg-skin-base px-7 py-10 rounded-lg shadow-lg w-cusw">
        <div className="">
          <div className="pb-3 border-b border-skin-border">
            <h1 className="text-4xl font-bold mb-1 text-skin-inverted">
              SIGN IN
            </h1>
            <p className="text-lg">Welcome Back</p>
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
          <Form className="flex flex-col gap-3 mt-8">
            <ApTextInput placeholder="Username" name="username" />
            <ApTextInput
              type="password"
              placeholder="Password"
              name="password"
            />
            <div className="flex w-full justify-between text-skin-inverted mt-5">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <Link href="" className="text-skin-accent">
                Forgot Password ?
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <ApButton
                    onClick={() => {}}
                    className='disabled:cursor-not-allowed flex justify-center gap-2 items-center submitBtn py-3 bg-skin-accent text-white rounded w-full'
                    type='submit'
                    loading={ isLoading }
                    loadingText={ loadingText }
                >
                    Proceed  <ArrowRightSvg/>
                </ApButton>
            </div>
          </Form>
        </Formik>
      </div>
      </div> 
      </AuthPageLayout>
    </>
  );
};


