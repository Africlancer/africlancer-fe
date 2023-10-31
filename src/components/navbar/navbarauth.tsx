import React, { useState } from 'react'
import { Layout, Button, Drawer, ConfigProvider, theme } from 'antd'
import { NavAuthItems } from './navitems'
import { MenuOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { ApButton } from '../button'
import { ArrowRightIcon } from '../icons'

export const NavbarAuth = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(!visible)
  }

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full shadow-lg py-2 z-50 md:py-0 px-10 text-lg text-skin-inverted bg-skin-alt fixed">
        <div>
          <h1 className="text-4xl text-skin-inverted font-bold">
            Afric<span className="text-skin-accent">lancer</span>
          </h1>
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
              <Link className="md:p-4 py-2 block" href="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block" href="/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <div className="ml-5 flex items-center justify-center text-base h-full">
                <div className="border-l border-skin-border h-10 w-2 mr-5"></div>

                <ApButton
                  onClick={() => {}}
                  className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
                >
                  Post a Project
                  <ArrowRightIcon />
                </ApButton>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

{
  /* <nav className="navbar bg-white fixed top-0 z-50 w-full shadow-lg">
<ConfigProvider
  theme={
    {
      token: {
        colorPrimary: 'none',
        colorInfoHover: 'green',
        fontFamily: '',
      }
    }
  }
>
    <Layout>
    <Layout.Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: 30}}>
      <div className="logo flex items-center h-full">
      <h1 className='text-4xl text-skin-base font-bold'>Afric<span className='text-skin-primary'>lancer</span></h1>
      </div>

      <div className="navbar-menu h-full w-full">
        <div className="leftMenu h-full flex justify-end w-full">
            <NavAuthItems mode={"horizontal"}/>
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
          <NavAuthItems mode={"inline"}/>
        </Drawer>
      </div>
    </Layout.Header>
  </Layout>
</ConfigProvider>
</nav> */
}
