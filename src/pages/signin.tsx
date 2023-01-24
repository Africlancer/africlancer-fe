import React from "react";
import { AiFillFacebook } from "react-icons/ai";
//./assets/images/faceboook.png"

const Signin = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form>
        <div className="Flex flex-col items-center justify-center-py-2 bg-gray-100 min"></div>
        <div className="bg-white w-96 p-6 rounded shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-black font-extrabold fonts-serif text-4xl font-serif">
              Afric<span className="text-green-500 ">lancer</span>
            </h1>
          </div>
          <br></br>
          <div className="font-serif text-xl tracking-wider flex items-center justify-center w-full font-extrabold">
            Welcome Back
          </div>
          <br></br>
          <button
            type="submit"
            className="text-white bg-blue-500 w-full text-white-100 py-2
                    rounded hover:bg-blue- transition colors rounded-lg font-serif text-x"
          >
            Login with Facebook
          </button>
          {/* <img src={AiFillFacebook as any}/> */}
          <div className="mt-10 grid grid-cols-3 items-center color-black">
            <hr className="border gray-100" />
            <p className="text-center">OR</p>
            <hr className="border gray-100" />
          </div>
          <br></br>
          <label className="text-gray-700"></label>
          <input
            className="w-full py-2 bg gray-50 text-gray-500 px-1 outline-none mb-4 font-serif border-2 rounded-lg"
            type="text"
            placeholder={"Email or Username"}
            required
          ></input>
          <label className="text-gray-700 bg-transparent focus:outline-none"></label>
          <input
            className="w-full py-2 bg gray-50 text-gray-500 px-1 outline-none mb-4 font-serif border-2 rounded-lg"
            type="text"
            placeholder={"Password"}
            required
          ></input>
          <div className="flex justify-between">
            <div>
              <input id="remember" className="mb-4" type={"checkbox"}></input>

              <label
                for="remember"
                className="text-gray-700 font-serif text-3x"
              >
                <span className="ml-3">Remember Me</span>
              </label>
            </div>
            <p className="text-green-500 font-serif">Forgot Password?</p>
          </div>
          <br></br>
          <button
            type="submit"
            className="text-white bg-green-500 w-full text-white-100 py-2
                    rounded hover:bg-green-600 transition colors rounded-lg font-serif"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Signin;
 