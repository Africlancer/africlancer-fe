import React from 'react'
import { FaArrowLeft,} from "react-icons/fa";


export const EmailTemplatePage = () => {
    return (
    <div className="flex flex-col items-center justify-top py-2 px-4 bg-gray-100 min-h-screen">
     <main className=" flex-col items-center justify-center text-center ">
        <div className="bg-white rounded shadow-sm px-6 py-14 mt-3">
            <div className="flex items-center justify-center  mb-4">
            <FaArrowLeft className="text-black text-2xl text-justify "/><h1 className="text-5xl  text-red-hat flex items-center justify-center w-full text-black font-extrabold">Afric<span className=" text-green-500">lancer</span></h1>
            </div>
            <div className="flex items-center justify-center mb-5">
            <h3 className="text-2xl justify-center w-full text-black font-semibold">Password sent</h3>
            </div>
            <div className="flex items-center justify-center mb-4">
                <p className=" text-sm justify-between  text-black font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, consequuntur? Odio rem commodi officiis, sapiente repellendus itaque repudiandae magnam alias sit. Iusto nostrum odio dignissimos ipsam ut quisquam eos pariatur.</p>
                </div>
            <div className=" w-full flex-col text-green-600 mb-4 text-right">
                <p className=' text-right'>Didn't get an email?</p>
            </div> 
              <button
            
            type="submit"
            className="text-white bg-green-500 w-96 text-white-100 py-3
                  rounded-lg  transition colors  mb-3 font-bold text-2xl">


             Enter your password
          </button>
          
            
        </div>
     </main>
    </div>
  );
};

