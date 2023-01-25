import React from 'react'




const Dashboard = () => {
    return (
            <div className="pt-10 h-full px-10">
                <div className='grid grid-cols-3 gap-5'>
                        <div className="col-span-2 h-80 w-full bg-white shadow p-5">
                        <div className='flex gap-3 items-center'>
                        <div className="w-14 h-14 py-2 bg gray-50 text-gray-300  border-2 rounded-sm text-x"></div>
                        <p>Carolina M.</p> 
                        <p>@CarolinaPFP </p>    
                <hr />
                        <p>Freelancer Onboarding</p>
                        <br/>
                        </div>
                        <br />
                        <div className='font-serif'>How to increase the number of our bids?? Any one guide me up would be very helpful</div>
                        </div>
                        <div>
                        <div className='bg-white shadow py-3 mb-5'>
                        <div className="font-serif text-x ">
            <p className ='flex justify-between m-4'>Set Up Your Account <span>60% done</span></p>
            <div className="w-80 h-2 py-2 bg gray-50 text-gray-300  border-2 rounded-full text-x m-4"> </div>
            <div className='m-4'>Having a complete verified account will increase the chances of getting jobs.</div>
            <div className='m-4 font-extrabold'>Complete your account setup by:</div>
            <br />
            <div className="w-96 h- py-2 bg gray-50 text-gblack  border-2 rounded-sm text-x m-4 border-pink-400 p-3 flex justify-between">Pass the Us English Exam-level 1<p>+20</p></div>      

            </div>
          </div>
          <div className="col-span-3 h-32 w-full bg-white shadow p-3 pt-32"/>

                        </div>
                        </div>
                        
                </div>
        );
};

export default Dashboard;