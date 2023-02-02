import React from 'react'

export const EditPublication = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>Add Publication</h1>
      <p className='mb-3'>Fill To Add New Publication</p>

      <div className="flex w-full gap-5">
      <div className='w-full'>
        <p className='mb-2'>Publication Title</p>
        <input type="text" placeholder='Enter Publication Title' className='w-full border rounded p-3 h-10' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Publisher</p>
        <input type="text" placeholder='Enter Publisher' className='w-full border rounded p-3 h-10' />
      </div>
      </div>

      <div>
        <p className='mb-2 mt-5'>Summary</p>
        <textarea placeholder='Enter a Description of The Publication' className='border w-full rounded p-3 h-40 resize-none'></textarea>
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
