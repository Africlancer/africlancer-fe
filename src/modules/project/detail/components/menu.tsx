import { ApMenu } from '@/src/components'
import { MenuProps } from 'antd';
import React, { SetStateAction } from 'react'

const items: MenuProps['items'] = [
    {
      label: 'Details',
      key: 'details',
    },
    {
      label: 'Proposals',
      key: 'proposals',
    },
    {
        label: 'Files',
        key: 'files',
    },
];

interface IProps {
    current: "details" | "proposals" | "files"
    setCurrent: React.Dispatch<SetStateAction<"details" | "proposals" | "files">>
    isMyProject?: boolean
}

export const ProjectDetailMenu: React.FC<IProps> = ({current, setCurrent, isMyProject}) => {

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key as any);
    };

  return (
    <div className='align-antd-menu'>
      <ApMenu
          mode="horizontal" 
          items={isMyProject ? items : items.filter((item) => item?.key != 'files')}
          selectedKeys={[current]}
          onClick={onClick}
          className="bg-skin-submenu text-white"
          configColorPrimary='#fff'
      />
    </div>
  )
}