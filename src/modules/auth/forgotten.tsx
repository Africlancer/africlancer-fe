import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export const ForgottenPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-top py-2 bg-gray-100 min-h-screen">
      <main className=" flex-col items-center justify-center text-center ">
        <div className="bg-white rounded shadow-sm px-6 py-14 mt-3">
          <div className="flex items-center justify-center  mb-4">
            <FaArrowLeft className="text-black text-2xl text-justify " />
            <h1 className="text-5xl  text-red-hat flex items-center justify-center w-full text-black font-extrabold">
              Afric<span className=" text-green-500">lancer</span>
            </h1>
          </div>
          <div className="flex items-center justify-center mb-5">
            <h3 className="text-2xl justify-center w-full text-black font-semibold">
              Reset your password
            </h3>
          </div>
          <div className="flex items-center justify-center mb-4">
            <p className=" text-sm justify-between  text-black font-medium">
              Enter your Africlancer.com email address so we can reset your password
            </p>
          </div>
          <div className=" bg-white w-full justify-center flex-col">
            <input
              className=" border-green-700 border text-black outline-none w-full text-lg mr-2  px-5 py-3 flex items-center rounded mb-10"
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-500 w-96 text-white-100 py-3
                  rounded-lg  transition colors  mb-3 font-bold text-2xl"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
