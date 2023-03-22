import { ApButton } from '@/src/components';
import { Image } from 'antd';
import * as React from 'react';

const FreelancersPage = () =>
{
    return(
        <div className='p-20 bg-skin-alt'>
            <div className='py-5 px-5 flex flex-row justify-between  w-[700px] shadow-lg  rounded-md'>
                <div className='flex gap-2'>
                        <Image src='https://img.freepik.com/free-photo/man-black-t-shirt-smiles-sweetly-orange-wall_197531-23228.jpg?w=740&t=st=1679492455~exp=1679493055~hmac=3f88a93f0591d9fb0d5a94f83c97c5536b2ddabb747ed46dfbbcd88e0ca9ba48' 
                        height={100} width={100} alt='' preview={false}/>

                        <div>
                                <h1 className='text-blue-500 text-lg font-bold'>BrightDock LLC</h1>
                                <p>Bio for more - #1 ranked in Africlancer.com search</p>
                        </div>
                </div>

                 <div className=''>          
                        <div className='flex flex-col items-end'>
                            <p className='font-bold text-xl'>$85</p>
                            <p>per hour</p>
                        </div>

                        <ApButton>Request Quote</ApButton>
                </div>

            </div>
        </div>
    )
}

export default FreelancersPage