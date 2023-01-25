import React from 'react'

export const Header = () => {
  return (
    <div>
      <div className=''>
      <div className="home-test-bg w-full relative bg-center bg-cover">
        <div className='bg-overlay2 px-16 absolute top-0 bottom-0 left-0 right-0 flex gap-4 flex-col justify-center'>
            <h1 className='text-white text-cusf font-bold leading-normal'>
                Need to Get a Job Done?<br/> Hire the Best Freelancers<br/>in <span className='text-green-500'>Africa</span>.
            </h1>
            <ul className='text-white my-2 gap-10 flex'>
                <div className='flex flex-col gap-4'>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                </div>
                <div className='flex flex-col gap-4'>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                  <li className='border-l-2 pl-3 border-green-500'>Lorem ipsum dolor sit amet.</li>
                </div >            
            </ul>
            <div className='flex gap-5'>
                <button className='px-8 py-4 text-xl bg-green-500 text-white font-medium rounded-xl'>
                    Hire a Freelancer
                </button>
                <button className='px-8 py-4 border text-xl text-white font-medium rounded-xl'>
                    Earn Money Freelancing
                </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
