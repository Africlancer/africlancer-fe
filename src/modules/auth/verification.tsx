import React from 'react'
import { FaEnvelope,  FaFileInvoiceDollar, FaRegIdBadge } from "react-icons/fa";


export const VerifyEmail= () => {
    return (
    <div className="flex flex-col items-center justify-top py-2 px-4 bg-gray-100 min-h-screen">
     <main className=" flex-col items-center justify-center text-center mt-3">
        <div className="bg-white rounded shadow-sm py-2 px-10 w-fit">
           <div className=' flex items-center justify-center  mb-10'><h1 className='text-5xl  text-red-hat flex items-center text-left w-full text-black font-extrabold'>Welcome to Africlancer.com</h1></div>
           <div className="flex items-center justify-center mb-5">
            <h4 className="text-lg text-left w-full text-black font-bold">Hi User</h4></div>
           <div className="flex items-center justify-center mb-7">
            <p className="text-lg text-left w-full text-black">Welcome to africlancer.com,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatum reiciendis! Obcaecati nulla quod alias dolores veniam corporis laboriosam voluptatem assumenda repellendus debitis, dolorem officiis aspernatur numquam velit rerum! Repudiandae.</p></div>
           <div className='justify-center  flex-col'>
            <div className=' flex  justify-around item-center w-full'> 
            
            <FaEnvelope className=' text-left bg-blue-500 text-6xl text-white rounded-full py-3'/> 
            <button type="submit"
            className="text-white bg-blue-500 w-96 text-white-100 py-3 rounded-lg  transition colors  mb-3 font-bold text-2xl">
             Verify your email
          </button></div>
          <div className=' flex  justify-around item-center w-full'> 
            
            <FaRegIdBadge className=' text-left bg-green-500 text-6xl text-white rounded-full py-3'/> 
            <button type="submit"
            className="text-white bg-green-500 w-96 text-white-100 py-3 rounded-lg  transition colors  mb-3 font-bold text-2xl">
             Update your profile
          </button></div>
          <div className=' flex  justify-around item-center w-full'> 
            
            <FaFileInvoiceDollar className=' text-left bg-red-500 text-6xl text-white rounded-full py-3'/> 
            <button type="submit"
            className="text-white bg-red-500 w-96 text-white-100 py-3 rounded-lg  transition colors  mb-6 font-bold text-2xl">
             Place your 1st Bid
          </button></div>
             
           </div>
           <div className="flex items-center justify-center mb-5">
            <p className="text-lg text-left w-full text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta eaque blanditiis explicabo quia, animi unde dolore minus totam voluptatibus. Laudantium, temporibus maxime voluptatibus voluptatem aliquam incidunt enim in? Obcaecati.</p></div>
           <div className="flex-col mb-5 text-lg text-left">Regards,

            <p className="text-lg text-left w-full text-black font-bold">The Africlancer Team</p>
           </div>
         </div>
        <footer className='mt-3'>@Africlancer 2023</footer>
        </main>    
        </div>
 
);
}; 