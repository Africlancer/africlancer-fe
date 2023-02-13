import React from 'react'
import { Popconfirm  } from 'antd';

interface Iprops
{
    popButton: React.ReactNode,
    title: React.ReactNode,
    placement: "bottom" | "bottomLeft" | "bottomRight" | "left" | "leftBottom" | "leftTop" | "right" 
    | "rightBottom" | "rightTop" | "top" | "topLeft" | "topRight"
    children: React.ReactNode
}

export const ApPopConfirm: React.FC<Iprops> = ({ children, popButton, title, placement }) =>
{



  return (
        <Popconfirm
            placement={placement}
            title={title}
            description={children}
            okButtonProps={{hidden: true}}
            showCancel={false}
        >
            { popButton }
        </Popconfirm>
  )
}