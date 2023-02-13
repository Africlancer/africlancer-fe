import React, { useState } from "react";
import { Layout, Button, Drawer, ConfigProvider, theme, MenuProps, Dropdown } from "antd";
import {NavItems} from "./navitems";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ApButton } from "../button";
import { ArrowRightIcon } from "../icons";
import Image from "next/image";

export const Navbar = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Account',
      children: [
        {
          label: (
            <Link href='/account/profile'>View Profile</Link>
          ),
          key: '1'
        },
        {
          label: (
            <Link href=''>Membership</Link>
          ),
          key: '2'
        },
        {
          label: (
            <Link href=''>Account Analytics</Link>
          ),
          key: '3'
        },
        {
          label: (
            <Link href=''>Bid Insights</Link>
          ),
          key: '4'
        },
        {
          label: (
            <Link href='/account/settings'>Settings</Link>
          ),
          key: '5'
        }
      ]
    },
    {
      key: '2',
      label: 'Finances',
      children: [
        {
          label: 'ddd',
          key: 2
        }
      ]
    },
  ];

  return (
      <header>
          <nav className="flex flex-wrap items-center justify-between w-full  py-2 z-50 md:py-0 px-10 text-lg text-skin-inverted bg-skin-nav fixed">
          <div>
            <Image alt="logo" src='/africlancer.png' width={140} height={30} />
          </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          
          <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
            <ul className="pt-4 md:flex md:justify-between md:pt-0">
              <li>
                <Link className="md:p-4 py-2 block" href='/signin'>Browse</Link>
              </li>

              <li>
                <Link className="md:p-4 py-2 block" href="/signup">Manage</Link>
              </li>

              <li>
                <Link className="md:p-4 py-2 block" href="/signup">Groups</Link>
              </li>
              
              <li className="flex items-center">
              <div className="border-l border-skin-border h-10 w-2 mx-5"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </li>

              <li className="flex items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </li>

              <li>
                <div className="ml-5 flex items-center justify-center text-base h-full">
                    
                    <ApButton
                      onClick={() => {}}
                      className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                      >
                      Post a Project
                      <ArrowRightIcon/>
                    </ApButton>
                  </div>
              </li>

              <li className="flex items-center ml-5">
              <div className="flex items-center text-lg">
                  <p className="font-bold text-lg">Paul.A</p>
                  <Dropdown trigger={["click", "hover"]} menu={{ items }} placement="bottomLeft" arrow>
                    <div className="cursor-pointer test-user-pic h-10 w-10 bg-center bg-cover rounded ml-5"></div>
                  </Dropdown>
              </div>    
              </li>

            </ul>
          </div>
          </nav>
      </header>
  );
};

{/* <nav className="navbar bg-white fixed top-0 z-50 w-full shadow-lg">
<ConfigProvider
  theme={
    {
      token: {
        colorPrimary: 'white',
        fontFamily: ''
      }
    }
  }
>
    <Layout>
    <Layout.Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', paddingLeft: 30, paddingRight: 10}}>
      <div className="logo flex items-center h-full">
      <h1 className='text-4xl font-bold'>Afric<span className='text-green-500'>lancer</span></h1>
      </div>

      <div className="navbar-menu h-full w-full">
        <div className="leftMenu h-full flex justify-end w-full">
            <NavItems mode={"horizontal"}/>
        </div>
        <Button className="menuButton" type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>


        <Drawer
          title={"Brand Here"}
          placement="right"
          closable={true}
          onClose={showDrawer}
          visible={visible}
          style={{ zIndex: 99999 }}
        >
          <NavItems mode={"inline"}/>
        </Drawer>
      </div>
    </Layout.Header>
  </Layout>
</ConfigProvider>
</nav> */}
