import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import { Footer } from '../footer';
import { ApSearchInput } from '../input/search';
import { Navbar } from '../navbar';
import { ApButton } from '../button';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: (
     <Link href="/browse/projects">
        <span className='font-bold text-xl'>Projects</span>
     </Link>
    ),
    key: 'projects',
  },
  {
    label: (
      <Link href="/browse/freelancers">
         <span className='font-bold text-xl'>Freelancers</span>
      </Link>
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
    }, [items])

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
    <div>
    <div className="h-full relative bg-skin-alt">
      <Navbar avatar=''/>
      
      <div className='pt-14'>
      <div className='relative h-96 w-full bg-browse-hero-pattern bg-center bg-cover'>
            <div className='absolute h-full w-full bg-black/40 text-white flex flex-col justify-between'>
                <div className='px-10 pt-8'>
                    <h1 className='text-5xl font-bold mb-5'>Browse</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut, vel assumenda odio pariatur officia repudiandae! Est et reprehenderit, voluptatibus fuga quo ut nobis dolore aut non sit tempora expedita facilis aperiam distinctio consequatur delectus libero a, possimus quod voluptates aspernatur cum. Magnam ab nesciunt doloremque nostrum, aperiam rem voluptatem.</p>
                    <div className='flex flex-row gap-2'>
                        <ApSearchInput />
                        <ApButton>
                          Save
                        </ApButton>
                    </div>
                </div>

            </div>
        </div> 

            
        <div className='-translate-y-20 px-10'>
          <div className='flex justify-between gap-10 items-start'>
            <div className="bg-skin-base w-[400px] shadow-md rounded-md">
                <FilterComponent browseFunc={browseFunc}/>
            </div>
            <div className='w-full bg-skin-base shadow-md rounded-md'>
                <BrowseSubMenu page={page}/>
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
    </div>
  )
}
