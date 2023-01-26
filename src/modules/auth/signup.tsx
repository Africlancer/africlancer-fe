import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { useAuthState } from "./context";

export const SignUpPage = () => {
  const { signUp } = useAuthState();

  const handleSubmit = () => {
    signUp({
      firstName: "Sabi1",
      lastName: "Ridwan1",
      email: "sabi1@gmail.com",
      username: "sabi1",
      // password: "abc1231",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 bg-gray-100 min-h-screen">
      <div>
        <span>User Signup | Africlancer</span>
      </div>
      <main className=" flex-col items-center justify-center text-center ">
        <div className="bg-white rounded shadow-sm px-14 py-36 mt-3">
          <div className="flex items-center justify-center mb-4 font-red-hat">
            <h1 className="text-5xl  flex items-center justify-center w-full text-black font-extrabold">
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

          <div className="flex flex-col items-center w-full">
            <div className=" bg-white w-full ">
              <input
                className=" border-gray-300 border text-black outline-none w-full text-sm m-2  px-10 py-3 flex items-center rounded mb-2"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className=" bg-white w-full">
              <input
                className=" border-gray-300 border text-black outline-none text-sm m-2  w-full px-10 py-3 flex items-center rounded mb-3 "
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="flex mb-5 items-center w-full">
            <label className=" flex  text-xs w-full justify-between">
              <input type="checkbox" name="agree" className="mr-1 " />I agree to
              the Africlacer{" "}
              <span className=" text-green-500 ">User agreement</span> and{" "}
              <span className="text-green-500">privacy policy</span>
            </label>
          </div>
          <button
            onClick={handleSubmit}
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
        </div>
      </main>
    </div>
  );
};
