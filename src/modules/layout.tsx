import React, { ReactNode, FC } from 'react'
import Head from "next/head";
import { Footer } from '../components/footer';
import { Navbar } from '../components';

interface IProps {
    children: ReactNode
    pageTitle?: string
    subMenu?: ReactNode
} 

export const MainLayout: FC<IProps> = ({ children, pageTitle, subMenu }) => {
  return (
    <div className='h-full relative bg-skin-alt'>
        <Head>
            <title>{pageTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {subMenu}
        
        <div className={`${subMenu ? 'pt-[100px]' : 'pt-[60px]'}`}>
          {children}
        </div>
        <Footer />
    </div>
  )
}