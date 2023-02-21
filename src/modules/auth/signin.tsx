import { ApFacebookIcon, ApGoogleIcon, ApTextInput } from "@/src/components";
import { ApButton } from "@/src/components/button";
import { ArrowRightSvg } from "@/src/custom";
import useApNotification from "@/src/hooks/notification";
import {
  DoubleRightOutlined, LoadingOutlined
} from "@ant-design/icons";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { bgImages } from "./model";

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
  const [loading, setLoading] = useState(false);
  const [bgImg, setBgImg] = useState<string>();

  useEffect(() => {
    let index = Math.floor(Math.random() * bgImages.length);
    let item = bgImages[index];
    setBgImg(item);
  }, []);

  const handleSubmit = async (values) => {
    setLoading(true)
    const rs: any = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });

    if (rs.error) {
      errorMsg("Error", rs.error);
      setLoading(false);
      return;
    }

    successMsg(`Signed In Successfully`, `Redirecting to Your Dashboard.`);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <>
      {notificationContext}
      <div
        className="overflow-auto w-full bg-center bg-cover bg-scroll sigin-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="page-bg-overlay py-10 flex justify-between w-full bg-center bg-cover text-skin-inverted bg-overlay2">
          <div className="flex flex-col justify-center p-10">
            <h1 className="text-7xl font-bold mb-2 text-skin-base">
              Afric<span className="text-skin-accent">lancer</span>
            </h1>
            <div className="flex gap-2 text-xl">
              <p className="text-skin-base">No Account ?</p>
              <Link
                href=""
                className="text-skin-accent flex items-center gap-1"
              >
                Create New Account
                <DoubleRightOutlined className="text-base" />
              </Link>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <p className="text-skin-base text-xl">Continue With - </p>
              <div className="bg-white rounded-full p-1.5">
                  <ApGoogleIcon/>
              </div>
              <div className="bg-white rounded-full p-1.5 ml-1">
                  <ApFacebookIcon/>
              </div>
            </div>
          </div>

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
                    {loading ? (
                      <ApButton
                        onClick={() => {}}
                        disabled
                        className="cursor-not-allowed submitBtn py-3 bg-skin-accent text-white rounded w-full "
                        type="submit"
                      >
                        <LoadingOutlined
                          style={{ fontSize: 25, color: "#fff" }}
                          spin
                        />
                      </ApButton>
                    ) : (
                      <ApButton
                        onClick={() => {}}
                        className="flex justify-center gap-2 items-center submitBtn py-3 bg-skin-accent text-white rounded w-full "
                        type="submit"
                      >
                        Proceed
                        <ArrowRightSvg />
                      </ApButton>
                    )}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};