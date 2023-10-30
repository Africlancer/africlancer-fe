import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import { Footer } from '../footer';
import { ApSearchInput } from '../input/search';
import { Navbar, SubMenu } from '../navbar';
import { ApButton } from '../button';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: (
      <div className='py-[2.8px]'>
        <Link href="/browse/projects">
          <span className='text-base'>Projects</span>
        </Link>
      </div>
    ),
    key: 'projects',
  },
  {
    label: (
        <div className='py-[2.8px]'>
        <Link href="/browse/freelancers">
          <span className='text-base'>Freelancers</span>
        </Link>
        </div>
    ),
    key: 'freelancers',
  },
];

interface IProps 
{
    FilterComponent: React.FC<{browseFunc}>,
    MainContent: React.FC,
    page: "projects" | "freelancers"
    browseFunc? :any
}

const BrowseSubMenu = ({page}) => 
{
    const [current, setCurrent] = useState(page);
    const [subMenuItems, setSubMenuItems] = useState<MenuProps['items']>()

    useEffect(() => 
    {
      setSubMenuItems(items)
    }, [])

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <ConfigProvider
        theme={
          {
            token: {
              colorPrimary: '#22c55e',
              fontFamily: ''
            }
          }
        }
      >
        <Menu className='bg-white text-inverted shadow rounded-t-md' onClick={onClick} 
        style={{ paddingLeft:10, paddingRight:10, width: '100%'}} 
        selectedKeys={[current]} mode="horizontal" items={items} />
      </ConfigProvider>
    )
}

export const BrowseLayout: React.FC<IProps> = ({FilterComponent, MainContent, page, browseFunc}) => {

  return (
    <div className="h-full relative bg-skin-alt">
      <Navbar/>
      <SubMenu items={items} currentPage={page}/>
      <div className='pt-[100px]'>
      <div className='relative h-80 w-full bg-browse-hero-pattern bg-center bg-cover'>
        <div className='absolute p-10 pb-16 h-full w-full bg-black/40 text-white flex flex-col justify-between'>
            <div>
                <h1 className='font-bold text-4xl mb-2'>
                  {
                    page === "projects" ? "Browse Projects" : "Browse Freelancers"
                  }
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam placeat dolore aut culpa iste sint inventore est assumenda iusto voluptas praesentium quod minima perferendis quidem ut quia harum, repellat ratione quaerat. Eligendi obcaecati, dolorem repellat assumenda minima impedit expedita, voluptatem tempore eveniet unde ut minus exercitationem atque eum perferendis sint.</p>
            </div>

            <div>
                <ApSearchInput/>
            </div>
        </div>
      </div> 

            
        <div className='-translate-y-8 px-10'>
          <div className='flex justify-between gap-10 items-start'>
            <div className="bg-skin-base w-[450px] shadow-md rounded-md">
                <FilterComponent browseFunc={browseFunc}/>
            </div>
            <div className='w-full bg-skin-base shadow-md rounded-md'>
                <div>
                  <MainContent/>
                </div>
            </div>
          </div>
        </div>  
      </div>

      <div className="">
        <Footer/>
      </div>
    </div>
  )
}
