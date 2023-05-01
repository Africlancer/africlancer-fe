import { Image } from 'antd'
import React from 'react'
import  { EllipsisOutlined} from '@ant-design/icons'

export const Header = () => {
  return (
    <div>
        <div className="px-5 pt-3 pb-1 border-b-2 flex justify-between items-center">
            <div className="relative flex items-center">
                <div className="relative">
                    <Image height="45px" width="45px" className='rounded-md' src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"/>
                </div>

                <div className="ml-3 -mt-2 flex flex-col justify-between">
                    <h1 className='font-bold text-lg'>Anderson Vanhron</h1>
                    <p className='text-gray-400 text-sm'>Junior Developer</p>
                </div>
            </div>

            <EllipsisOutlined className='text-4xl -mt-3'/>
        </div>
    </div>
  )
}
