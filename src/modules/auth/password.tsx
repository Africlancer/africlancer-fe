import React from 'react'
import { FaEyeSlash } from 'react-icons/fa'

export const ResetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-top py-2 bg-gray-100 min-h-screen">
      <main className="flex items-center justify-center text-center">
        <div className="Flex flex-col items-center justify-center-py-2 bg-gray-100 min"></div>
        <div className="bg-white w-96 p-6 rounded shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-black font-extrabold fonts-red-hat text-4xl">
              Afric<span className="text-green-500 ">lancer</span>
            </h1>
          </div>
          <div className="flex justify-center mb-4">
            <h3 className="text-2xl justify-between w-full text-black font-semibold">
              Reset your password
            </h3>
          </div>
          <div className="flex items-center justify-center mb-4">
            <p className=" text-sm justify-between  text-black font-medium">
              Choose your new password{' '}
            </p>
          </div>
          <div className=" bg-white w-full justify-center flex-col">
            <div className="w-full items-center flex">
              <input
                className=" border-green-700 border text-black outline-none w-full text-lg mr-2  px-5 py-3 flex items-center rounded mb-3"
                type="email"
                placeholder="Enter new password"
                name="email"
                required
              />
            </div>
            <div>
              <input
                className=" border-green-700 border text-black outline-none w-full text-lg mr-2  px-5 py-3 flex items-center rounded mb-10"
                type="email"
                placeholder="confirm new password"
                name="email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-green-500 w-full text-white-100 py-2
                    rounded hover:bg-green-600 transition colors rounded-lg font-serif"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  )
}
