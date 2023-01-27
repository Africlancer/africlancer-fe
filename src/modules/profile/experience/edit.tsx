import React from 'react'

export const EditExperience = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>Add Experience</h1>
      <p className='mb-3'>Fill To Add New Experience</p>

      <div className="flex w-full gap-5">
      <div className='w-full'>
        <p className='mb-2'>Title</p>
        <input type="text" placeholder='Enter Your Position or Title' className='w-full border rounded p-3 h-10' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Company</p>
        <input type="text" placeholder='Enter Company Name' className='w-full border rounded p-3 h-10' />
      </div>
      </div>

      <div className="flex w-full gap-5 mt-5">
        <div className="flex w-full items-center gap-5">
          <div className='w-full'>
            <p className='mb-2'>Start</p>
            <input type="text" className='w-full border rounded p-3 h-10' />
          </div>

          <div className='w-full pt-0.5'>
            <input type="text" className='w-full border rounded p-3 h-10 mt-7' />
          </div>         
          </div>

        <div className="flex w-full items-center gap-5">
          <div className='w-full'>
            <p className='mb-2'>Title</p>
            <input type="text" className='w-full border rounded p-3 h-10' />
          </div>

          <div className='w-full pt-0.5'>
            <input type="text" className='w-full border rounded p-3 h-10 mt-7' />
          </div>          
        </div>
      </div>

      <div className='flex gap-2 mt-5'>
        <input type="checkbox"/>
        <p>I'm Currently Working Here</p>
      </div>

      <div>
        <p className='mb-2 mt-5'>Summary</p>
        <textarea placeholder='Describe Your Working Experience' className='border w-full rounded p-3 h-40 resize-none'></textarea>
      </div>

      <div className='flex justify-end items-center mt-4'>
      <div>
      <button className="text-white px-5 py-2 rounded bg-green-500 mr-3">
        Upload Photo
      </button>
      <button className="text-green-500 px-4 py-2 rounded border-green-500 border-2">
        Cancel
      </button>
      </div>
      </div>
    </div>
  )
}
