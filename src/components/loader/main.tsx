import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import PuffLoader from "react-spinners/PuffLoader";

interface IProps {
    color?: string
    size?: number
}

export const ApLoader: React.FC<IProps> = ({ color, size }) => {
  return (
    <div>
        <PuffLoader color={color || "#22c55e"} size={size || 50}/>
        {/* <LoadingOutlined className={className}/> */}
    </div>
  )
}
