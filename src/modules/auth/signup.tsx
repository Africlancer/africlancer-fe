import { Form, Formik } from "formik";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { useAuthState } from "./context";
import { IUser } from "./model";
import * as Yup from "yup";
import { ApTextInput } from "@/src/components";

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
  const { signUp } = useAuthState();

  const handleSubmit = (values: IUser) => {

    console.log(values);
    signUp({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      // password: "abc1231",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 bg-gray-100 min-h-screen">
      <div>
        <span>User Signup | Africlancer</span>
      </div>
      <main className=" flex-col items-center justify-center text-center ">
        <div className="bg-white rounded shadow-sm px-14 py-36">
          <div className="flex items-center justify-center mb-4">
            <h1 className="font-serif text-4xl  flex items-center justify-center w-full text-black font-extrabold">
              Afric<span className=" text-green-500">lancer</span>
            </h1>
          </div>
          <div className="flex items-center justify-center mb-4">
            <h3 className="font-roboto text-xl  flex items-center justify-center w-full text-black font-medium">
              Sign Up
            </h3>
          </div>
          <div className=" flex-row inline-block mb-4 text-white bg-blue-600 w-full rounded-lg font-roboto text-xl justify-items-center px-10 py-3 mr-1">
            <button type="submit">
              <a href="#" className="flex items-center">
                <FaFacebookF className=" text-xl border-2  rounded-full p-0 mx-1" />
                Continue with Facebook
              </a>
            </button>
          </div>

          <div className="flex justify-between mb-3 items-center">
            <div className=" border border-gray-300 w-full"></div>
            <p className=" text-sm">OR</p>
            <div className=" border border-gray-00  w-full"></div>
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
            <Form>
              <div className="flex flex-col items-center w-full">
                <ApTextInput placeholder="First Name" name="firstName" />
                <ApTextInput placeholder="Last Name" name="lastName" />
                <ApTextInput placeholder="Email" name="email" />
                <ApTextInput placeholder="Username" name="username" />
                <ApTextInput
                  type="password"
                  placeholder="*****"
                  name="password"
                />
                <ApTextInput
                  type="password"
                  placeholder="*****"
                  name="confirmPassword"
                />
              </div>
              <div className="flex mb-5 items-center w-full">
                <label className=" flex  text-xs w-full justify-between">
                  <input type="checkbox" name="agree" className="mr-1 " />I
                  agree to the Africlacer{" "}
                  <span className=" text-green-500 ">User agreement</span> and{" "}
                  <span className="text-green-500">privacy policy</span>
                </label>
              </div>

              <button type="submit">Test</button>
              <button
                type="submit"
                className="text-white bg-green-500 w-full text-white-100 py-2
                  rounded-lg  transition colors font-serif mb-6"
              >
                Join Africlancer
              </button>
              <div className="border-gray-200 w-full border items-center"></div>
              <div className="justify-center text-sm">
                <p>
                  Already have an account{" "}
                  <span className="text-green-500">login</span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </main>
    </div>
  );
};
