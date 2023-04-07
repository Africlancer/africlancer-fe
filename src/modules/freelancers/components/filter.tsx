import React, { useEffect, useState } from 'react'
import { ConfigProvider, Switch, Rate } from 'antd'

export const FilterComponent = ({browseFunc: fetchFree}) =>
{
  const [checked, setChecked] = useState<boolean>(false)
  const [value, setValue] = useState(3);
  const desc = ['1', '2', '3', '4', '5'];
  const [filterQuery, setFilterQuery] = useState<{}>({})

  useEffect(() => {
    console.log('filterTouched')
    fetchFree({...filterQuery}, false)
  },[filterQuery])

    return (
        <div>
            <h1 className='font-medium text-lg px-5 py-3 border-b'>Search Filters</h1>
              <form>
                <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Hourly Rate</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='flex justify-between gap-4 mt-3'>
                    <div>
                      <p className='mb-2'>Min</p>
                      <input onChange={({ target }) => setFilterQuery({...filterQuery, type: target.value})} className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                    </div>
                      
                    <div>
                      <p className='mb-2'>Max</p>
                      <input className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                    </div>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Skills</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='mt-3'>
                    <div className='relative w-full'>
                      <input placeholder='Search Skills' className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>

                    <div className='flex flex-col gap-3 mt-5'>
                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Website Design</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Logo Design</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Mobile App Development</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Data Entry</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Article Writing</p>
                        </div>
                    </div>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Countries</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='flex justify-between gap-4 mt-3'>
                    <div className='relative w-full'>
                      <input placeholder='Search Countries' className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Online</p>
                  </div>

                  <div className='flex justify-between gap-4 mt-3'>
                  <ConfigProvider
                    theme={{ token: { colorPrimary: 'green' } }}
                  >
                    <Switch className='bg-gray-500' 
                      onChange={(checked: boolean) => setChecked(checked)} />
                  </ConfigProvider>

                    <p>Online Freelancers Only</p>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Rating</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='flex justify-between gap-4 mt-3'>
                  <span>
                    <Rate allowHalf tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Reviews</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='flex justify-between gap-4 mt-3'>
                    <div>
                      <p className='mb-2'>Min</p>
                      <input className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                    </div>
                      
                    <div>
                      <p className='mb-2'>Max</p>
                      <input className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                    </div>
                  </div>
                  </div>

                  <div className='border-b px-5 py-5'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-bold'>Exams</p>
                    <p className='text-skin-accent cursor-pointer'>Clear</p>
                  </div>

                  <div className='mt-3'>
                    <div className='relative w-full'>
                      <input placeholder='Search Exams' className='focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>

                    <div className='flex flex-col gap-3 mt-5'>
                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>US English - Level 1</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Adobe Photoshop CS5 - Level 1</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                          <input type="checkbox" />
                          <p className='text-sm'>Data Entry</p>
                        </div>
                    </div>
                  </div>
                  </div>
              </form>
        </div>
    )
}